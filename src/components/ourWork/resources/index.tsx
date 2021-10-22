import React, { FC } from 'react';
import styles from './index.module.scss';
import FundImage from '~/src/components/image';

export type resourceDetail = {
  webImageSrc: string;
  mobileImageSrc: string;
  description: string;
};

const Resources: FC = () => {
  const resourceOptions: resourceDetail[] = [
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon1.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon1.png`,
      description: 'Technical contributions',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon2.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon2.png`,
      description: 'Aimed at specific activities, projects or programs',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon3.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon3.png`,
      description: 'Donating open datasets',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon4.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon4.png`,
      description: 'Contributing documentation resource and more',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon5.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon5.png`,
      description: 'Underwriting conference attendees’ expenses',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon6.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon6.png`,
      description: 'Providing legal services',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-resources+icon7.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-resources+icon7.png`,
      description: 'Funding project hackathons or competitions',
    },
  ];
  return (
    <div className={styles.resourceDetailContainer}>
      {resourceOptions.map((option) => (
        <div key={option.description} className={styles.resource}>
          <FundImage
            webImageSrc={option.webImageSrc}
            mobileImageSrc={option.mobileImageSrc}
            imageAlt="resource logo"
            className={styles.resourceImg}
          />
          <div className={styles.resourceDescription}>{option.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
