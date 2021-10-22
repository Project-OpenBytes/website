import React, { FC } from 'react';
import classNames from 'classnames';
import FundImage from '~/src/components/image';
import styles from './index.module.scss';

const Supporters: FC = () => {
  const title = 'Our Supporters';
  return (
    <div className={styles.supportersContainer}>
      <div className={styles.title}>{title}</div>
      <div className={classNames(styles.supporters, styles.supportersMargin)}>
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/graviti+logo.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/graviti+logo.png`}
          imageAlt="graviti logo"
        />
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/electrifyAI-logo+.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/electrifyAI-logo+.png`}
          imageAlt="electrifyAI logo"
        />
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/motional+logo.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/motional+logo.png`}
          imageAlt="motional logo"
        />
      </div>
      <div className={styles.supporters}>
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/predibase+logo.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/predibase+logo.png`}
          imageAlt="predibase logo"
        />
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/zilliz+logo.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/zilliz+logo.png`}
          imageAlt="zilliz logo"
        />
        <FundImage
          className={styles.supporterLogo}
          webImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/Jina+logo.png`}
          mobileImageSrc={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/Jina+logo.png`}
          imageAlt="Jina logo"
        />
      </div>
    </div>
  );
};

export default Supporters;
