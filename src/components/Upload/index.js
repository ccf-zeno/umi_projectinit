/*
 * @Author: 钟振涛
 * @Date: 2020-04-28 16:35:55
 * @LastEditors: 钟振涛
 * @LastEditTime: 2020-04-28 16:38:06
 * @Description: 封装的ANTD的上传组件 最多上传5个图片 上传完则消失
 */
import React, { Component } from 'react';
import { Upload, Icon, message } from "antd";
import styles from './index.less';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
    this.length=0;
  }

  componentDidMount(){
    const {defaultFileList}=this.props;
    this.setState({
      fileList:defaultFileList,
    });
    this.length=defaultFileList.length;
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // 上传前检测
  beforeUpload = (file) => {
    if(this.length>=5){
      return false;
    }
    this.length++;
    if (file.size / (1024 * 1024) > 2) {
      message.warning(`上传图片不能大于2MB`);
      return false;
    }
    const reg = new RegExp(`.+\.(jpg|jpeg|png|bmp)$`);
    if (!reg.test(file.name)) {
      message.error('请上传图片格式的文件!');
      return false;
    }
  };

  // 触发change
  handleChange = async ({ file }) => {
    if (!file.url && !file.preview && file.originFileObj) {
      const {fileList}=this.state;
      file = await this.getBase64(file.originFileObj);
      fileList.push({
        index: fileList.length+1,
        image: file,
        is_check: fileList.length===0?1:0,
      });
      this.setState({
        fileList,
      });
      const {onChange}=this.props;
      onChange(fileList);
    }
  }

  // 选中图片
  checkImg = (index) => {
    const { fileList } = this.state;
    fileList.forEach((v, i) => {
      if (index === i) {
        v.is_check = 1;
      } else {
        v.is_check = 0;
      }
    });
    this.setState({
      fileList,
    });
    const {onChange}=this.props;
    onChange(fileList);
  }

  // 删除照片
  deleteImg = (index) => {
    const { fileList } = this.state;
    let mark=false;
    if(fileList[index].is_check===1&&fileList.length>1){
      mark=true;
    }
    fileList.splice(index, 1);
    if(mark){
      fileList[0].is_check=1;
    }
    this.setState({ fileList });
    this.length--;
    const {onChange}=this.props;
    onChange(fileList);
  }

  render() {
    const {showTips,hideTips}=this.props;
    const { fileList } = this.state;
    return (
      <div className={styles.content}>
        <Upload
          listType="picture-card"
          onChange={this.handleChange}
          multiple
          fileList={[]}
          beforeUpload={this.beforeUpload}
        >
          {fileList.length < 5 && (
            <div>
              <Icon type="plus" style={{ fontSize: "24px", color: "#999999" }} />
              <div className="ant-upload-text">上传图片</div>
            </div>
          )}
        </Upload>
        {fileList.map((v, i) => (
          <div className={styles.imgList} key={v.index} onClick={() => this.checkImg(i)} onMouseEnter={showTips} onMouseLeave={hideTips}>
            <div className={styles.imgbox}>
              <img src={v.image} alt="" />
            </div>
            <Icon
              type="hz-close"
              theme="filled"
              className={styles.close}
              style={{ fontSize: "14px", color: "#5584FF" }}
              onClick={e => { e.stopPropagation(); this.deleteImg(i) }}
            />
            {v.is_check === 1 && (
              <Icon type="hz-selection" theme="filled" className={styles.check} style={{ fontSize: "16px", color: "#52C41A" }} />
            )}
          </div>
        ))}
      </div>
    )
  }
}