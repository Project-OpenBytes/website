import React, { FC } from 'react';
import { Button } from 'graviti-design';
import Link from 'next/link';
import styles from './index.module.scss';
import Government from '~/src/components/homepage/governingStructure/government';

const GoverningStructure: FC = () => {
  const title = 'Governing Structure';
  const description = 'Maximize equality among voices and representations with open governance';

  const title1 = 'Linux Foundation';
  const detail1 = [
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-+governing+icon1.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-+governing+icon1.png`,
      description:
        'Helps to provide management and oversight of the business operations and affairs',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-+governing+icon2.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-+governing+icon2.png`,
      description:
        'Provides access to governing, technical and marketing support, collaboration with upstream projects',
    },
  ];

  const title2 = 'OpenBytes Technical Steering Committee';
  const detail2 = [
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-+governing+icon3.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-+governing+icon3.png`,
      description:
        'Constituted by reprentatives from academia, project contributors and developer community',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-+governing+icon4.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-+governing+icon4.png`,
      description:
        'Determines the technical direction of all projects and provide technical guidance',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.GoverningStructureContainer}>
        <Government title={title1} detailOptions={detail1} />
        <Government title={title2} detailOptions={detail2} />
      </div>
      <Link href="/join-us" passHref>
        <Button className="textButton" variant="text">
          Become Our TSC
        </Button>
      </Link>
    </div>
  );
};

export default GoverningStructure;
