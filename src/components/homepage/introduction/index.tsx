import React, { FC } from 'react';
import classNames from 'classnames';
import FundImage from '~/src/components/image';
import styles from './index.module.scss';

interface IntroductionProps {
  classNameForImg?: string;
  title: string;
  description: string;
  operation?: React.ReactNode;
  webImageSrc: string;
  mobileImageSrc: string;
}

const Introduction: FC<IntroductionProps> = ({
  classNameForImg,
  title,
  description,
  operation,
  webImageSrc,
  mobileImageSrc,
}) => {
  return (
    <div className={styles.introductionOuterContainer}>
      <div className={styles.introductionContainer}>
        <div className={styles.introduction}>
          <div className={styles.introTitle}>{title}</div>
          <div className={styles.introDescription}>{description}</div>
          {operation}
        </div>
        <FundImage
          className={classNames(styles.introductionLogo, classNameForImg)}
          webImageSrc={webImageSrc}
          mobileImageSrc={mobileImageSrc}
          imageAlt="introduction logo"
        />
      </div>
    </div>
  );
};

export default Introduction;
