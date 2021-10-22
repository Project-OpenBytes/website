import React, { FC } from 'react';
import styles from './index.module.scss';
import FundImage from '~/src/components/image';

export type standardDetail = {
  webImageSrc: string;
  mobileImageSrc: string;
  title: string;
  description: string;
};

interface StandardDetailProps {
  standardDetailOption: standardDetail;
}

const StandardDetail: FC<StandardDetailProps> = ({ standardDetailOption }) => {
  const { webImageSrc, mobileImageSrc, title, description } = standardDetailOption;
  return (
    <div className={styles.standardDetailContainer}>
      <FundImage
        webImageSrc={webImageSrc}
        mobileImageSrc={mobileImageSrc}
        imageAlt="standard logo"
        className={styles.standardImg}
      />
      <div className={styles.standardTitle}>{title}</div>
      <div className={styles.standardDescription}>{description}</div>
    </div>
  );
};

export default StandardDetail;
