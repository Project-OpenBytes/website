import React, { FC } from 'react';
import styles from './index.module.scss';
import StandardDetail, { standardDetail } from '~/src/components/ourWork/standard/standardDetail';

const Standard: FC = () => {
  const standardDetailOptions: standardDetail[] = [
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-Sustainability.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-Sustainability.png`,
      title: 'Sustainability',
      description: 'A sustainable framework for establishing and maintaining standards',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-Agility+%26+Specialization.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-Agility+%26+Specialization.png`,
      title: 'Agility & Specialization',
      description:
        'Illuminating insights to satisfy changing needs of users on open datasets with agility and expertise',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-Diversity.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-Diversity.png`,
      title: 'Diversity',
      description:
        'Experts from industry, academia, and community will work on dataset standards together to guarantee the credibility',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-Simple+Machanism.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-Simple+Machanism.png`,
      title: 'Simple Machanism',
      description: 'Users can promptly find standards and licenses on the Foundation website',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-Neutrality.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-Neutrality.png`,
      title: 'Neutrality',
      description: 'The Foundation is neutral on promoting the use of open dataset standards',
    },
  ];
  return (
    <div className={styles.standard}>
      {standardDetailOptions.map((standardDetailOption) => (
        <StandardDetail
          key={standardDetailOption.title}
          standardDetailOption={standardDetailOption}
        />
      ))}
    </div>
  );
};

export default Standard;
