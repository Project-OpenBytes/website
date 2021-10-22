import React, { FC } from 'react';
import classNames from 'classnames';
import FundImage from '~/src/components/image';
import styles from './index.module.scss';

export type ListOption = {
  title: string;
  description: string;
  webImageSrc: string;
  mobileImageSrc: string;
};

interface WhatWedoListContentProps {
  ListOption: ListOption;
  index: number;
}

const WhatWeDoListContent: FC<WhatWedoListContentProps> = ({ ListOption, index }) => {
  const { title, description, webImageSrc, mobileImageSrc } = ListOption;
  return index % 2 === 0 ? (
    <div className={styles.listContent}>
      <div className={styles.titleAndDescription}>
        <div className={styles.title}>
          <span className={styles.titleContent}>{title}</span>
          <div className={styles.bottomLine} />
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <FundImage
        webImageSrc={webImageSrc}
        mobileImageSrc={mobileImageSrc}
        imageAlt={`${title} log`}
        className={classNames(styles.img)}
      />
    </div>
  ) : (
    <div className={classNames(styles.listContent, styles.even)}>
      <FundImage
        webImageSrc={webImageSrc}
        mobileImageSrc={mobileImageSrc}
        imageAlt={`${title} log`}
        className={classNames(styles.img)}
      />
      <div className={styles.titleAndDescription}>
        <div className={styles.title}>
          <span className={styles.titleContent}>{title}</span>
          <div className={styles.bottomLine} />
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default WhatWeDoListContent;
