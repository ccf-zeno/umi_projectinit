/*
 * @Author: 钟振涛
 * @Date: 2020-04-23 11:19:30
 * @LastEditors: 钟振涛
 * @LastEditTime: 2020-04-28 16:38:40
 * @Description: 封装的ANTD的多文本输入框，带计数功能
 */
import React, { Component } from 'react';
import { Input, Form } from "antd";
import styles from './index.less';

export default class TextAreaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      validateStatus: null, // 表单状态
    };
  }

  static defaultProps = {
    maxLength: 200,
    label: "备注",
    defaultValue:"",
  }

  componentDidMount(){
    const { defaultValue }=this.props;
    this.setState({
      value:defaultValue,
    });
  }

  componentDidUpdate(prevProps){
    const { defaultValue:oldvalue }=prevProps;
    const {defaultValue}=this.props;
    if(defaultValue!==oldvalue&&defaultValue){
      this.setState({
        value:defaultValue,
      });
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    const { maxLength } = this.props;
    if (value.length >= maxLength) {
      this.setState({
        validateStatus: "error",
      });
    } else {
      this.setState({
        validateStatus: null,
      });
    }
    this.setState({
      value,
    });
  }

  render() {
    const { value, validateStatus } = this.state;
    const { label, maxLength, form,name="describ" } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form.Item label={label} validateStatus={validateStatus}>
        {getFieldDecorator(name, {})(
          <div className={styles.textBox}>
            <Input.TextArea autosize onChange={this.onChange} maxLength={maxLength} value={value} />
            <div className={`${styles.numbox} ${validateStatus && (styles.warn)}`}>
              {value.length}/{maxLength}
            </div>
          </div>
        )}
      </Form.Item>
    )
  }
}