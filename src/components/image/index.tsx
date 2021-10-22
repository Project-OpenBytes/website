import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface fundImageProps {
  className: string;
  webImageSrc: string;
  mobileImageSrc: string;
  imageAlt: string;
}

const FundImage: FC<fundImageProps> = ({ className, webImageSrc, mobileImageSrc, imageAlt }) => (
  <div className={styles.titleAndDescription}>
    <img className={classNames(className, styles.webImage)} src={webImageSrc} alt={imageAlt} />
    <img
      className={classNames(className, styles.mobileImage)}
      src={mobileImageSrc}
      alt={imageAlt}
    />
  </div>
);

export default FundImage;
