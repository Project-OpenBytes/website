import React, { FC } from 'react';
import { Button } from 'graviti-design';
import styles from './index.module.scss';

const Welcome: FC = () => (
  <div className={styles.homeWrapper}>
    <img src="/static/images/comet.png" alt="comet" width={500} />
    <h1 className={styles.title}>Welcome to Gas App !</h1>
    <div className={styles.links}>
      <Button variant="link" href="http://ui-demo.graviti.cn:3330/" target="_blank">
        Graviti Design
      </Button>
      <div className={styles.divider}>|</div>
      <Button
        variant="link"
        href="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=2197273"
        target="_blank"
      >
        Iconfont
      </Button>
    </div>
  </div>
);

export default Welcome;
