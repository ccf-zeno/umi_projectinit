import React, { Component } from 'react';
export default class index extends Component {
  changeState = (obj, callback=()=>{}) => {
    this.setState(obj,callback);
  };
  render() {
    const a=1;
    return <div>xxc</div>;
  }
}
