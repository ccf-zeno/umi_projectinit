/**
 * @description: websocket封装 用于多个topic的情况
 * @param {object} options {
 *      @param {string} wsUrl websocket连接地址
 *      @param {object} socketHeader stomp连接请求头
 *      @param {function} onConnectSuccess stomp连接成功时调用
 *      @param {function} onConnectError stomp连接发生错误时调用
 *      @param {Array} servers {topic onMessage}
 * }
 * @return: socket实例化对象，提供sendMessage及close两个方法与后台交互
 */
export default class HzSocket {
  constructor(options) {
    this.options = options;
    this.connected = false;
    this.onInit();
  }

  onInit = () => {
    this.checkDependencies();
    this.initSocket();
  };

  initSocket = () => {
    this.connected = false;

    const { SockJS, Stomp } = window;
    const { wsUrl, socketHeader } = this.options;
    const sockClient = new SockJS(wsUrl);
    const stompClient = Stomp.over(sockClient);

    stompClient.connect(
      socketHeader,
      () => {
        this.connected = true;
        this.handleConnectSuccess();
      },
      this.handleConnectError
    );
    this.sockClient = sockClient;
    this.stompClient = stompClient;
  };

  checkDependencies = () => {
    const { SockJS, Stomp } = window;
    if (!SockJS || !Stomp) {
      throw new Error("HzSocket require sock.js and stomp.js!");
    }
  };

  handleConnectSuccess = () => {
    const { onConnectSuccess } = this.options;
    this.initSocketSubscribe();
    if (onConnectSuccess) onConnectSuccess();
  };

  handleConnectError = () => {
    const { onConnectError } = this.options;
    this.reconnectOnclose();
    if (onConnectError) onConnectError();
  };

  reconnectOnclose = () => {
    if (this.connected) {
      this.initSocket();
    }
  };

  initSocketSubscribe = () => {
    const { stompClient } = this;
    const { servers } = this.options;
    if (stompClient) {
      for(const i of servers){
        const {topic,onMessage}=i;
        stompClient.subscribe(topic, response => {
          let res;
          try {
            res = JSON.parse(response && response.body);
          } catch (error) {
            res = response && response.body;
          }
          if (onMessage) onMessage(res);
        });
      }
    }
  };

  /**
   * 调用方法服务器发送数据，参数与stomp.send相同
   */
  sendMessage = (messageUrl, header, message) => {
    const { stompClient: tompClient } = this;
    if (tompClient && tompClient.send) {
      tompClient.send(messageUrl, header, message);
    }
  };

  /**
   * 关闭socket连接方法
   */
  close = () => {
    const { sockClient } = this;
    this.connected = false;
    if (sockClient && sockClient.close) {
      sockClient.close();
    }
  };
}
