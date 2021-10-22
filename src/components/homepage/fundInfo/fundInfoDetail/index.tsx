import React, { FC } from 'react';
import styles from './index.module.scss';
import FundImage from '~/src/components/image';

export type fundInfoDetailOption = {
  webImageSrc: string;
  mobileImageSrc: string;
  description: string;
};

interface FundInfoDetailProps {
  fundInfoDetailOption: fundInfoDetailOption;
}

const FundInfoDetail: FC<FundInfoDetailProps> = ({ fundInfoDetailOption }) => (
  <div className={styles.fundInfoDetailContainer}>
    <FundImage
      webImageSrc={fundInfoDetailOption.webImageSrc}
      mobileImageSrc={fundInfoDetailOption.mobileImageSrc}
      imageAlt="fund_detail_info logo"
      className={styles.fundInfoDetailImg}
    />
    <div className={styles.fundInfoDetailDescription}>
      <div>{fundInfoDetailOption.description}</div>
    </div>
  </div>
);

export default FundInfoDetail;
