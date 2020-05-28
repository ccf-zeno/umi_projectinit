import React from 'react';
import { Icon, Tooltip } from 'antd';
import styles from "./index.less";

const HoverTips = (props) => {
  const { tips , style } = props;

  return (
    <div className={styles["hz-form-hoverTips"]} style={style}>
      <Tooltip title={tips}>
        <Icon type="question-circle" />
      </Tooltip>
    </div>
  )
}

export default HoverTips;