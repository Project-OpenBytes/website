import React, { FC } from 'react';
import FundImage from '~/src/components/image';
import styles from './index.module.scss';

export type detailOption = {
  webImageSrc: string;
  mobileImageSrc: string;
  description: string;
};

interface GovernmentDetailProps {
  detailOption: detailOption;
}

const GovernmentDetail: FC<GovernmentDetailProps> = ({ detailOption }) => (
  <div className={styles.govDetailContainer}>
    <FundImage
      webImageSrc={detailOption.webImageSrc}
      mobileImageSrc={detailOption.mobileImageSrc}
      imageAlt="governing logo"
      className={styles.govDetailImg}
    />
    <div className={styles.govDetailDescription}>{detailOption.description}</div>
  </div>
);

export default GovernmentDetail;
