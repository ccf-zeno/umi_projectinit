import React from 'react';
import styles from './index.less';
import './test.css';

const Demo = () => {
  return (
    <body class="hz-base-style">
      <div className={styles.box}>
        xxx
      <>
          我就是随便试试
      </>
        <div className="hz-card-cover">
          <div className="hz-card-cover-header">
            头部区域
        </div>

          <div className="hz-card-cover-img">
            <div className="hz-card-cover-operate">
              <div className="hz-card-cover-operate-btns">
                <div>操作1</div>
              </div>
            </div>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <div className="hz-card-cover-img-info">
              标记区域
          </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Demo;
