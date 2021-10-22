import React, { FC } from 'react';
import styles from './index.module.scss';
import FundImage from '~/src/components/image';

const ImageContainer: FC = () => {
  return (
    <div className={styles.imageBgWrapper}>
      <div className={styles.textWrapper}>Join Us Now</div>
      <FundImage
        className={styles.img}
        webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/join+us+now-banner.png`}
        mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/join+us+now-banner.png`}
        imageAlt="join_us_now-banner"
      />
    </div>
  );
};

export default ImageContainer;
