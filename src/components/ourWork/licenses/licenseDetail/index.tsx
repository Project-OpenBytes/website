import React, { FC } from 'react';
import styles from './index.module.scss';

export type LicenseDescription = {
  author: string;
  description: string;
};

export type licenseDetail = {
  title: string;
  licenseDescription: LicenseDescription[];
};

interface licensesProps {
  licenseDetailOptions: licenseDetail[];
}

const LicenseDetail: FC<licensesProps> = ({ licenseDetailOptions }) => {
  return (
    <div className={styles.licenseDetailContainer}>
      {licenseDetailOptions.map((option) => (
        <div className={styles.licenseDetail} key={option.title}>
          <div className={styles.detailTitle}>
            <span className={styles.icon} />
            <span>{option.title}</span>
          </div>
          {option.licenseDescription.map((item) => (
            <div className={styles.detailDescriptionContainer} key={item.description}>
              <span className={styles.detailAuthor}>{item.author}</span>
              <span className={styles.detailDescription}>{item.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LicenseDetail;
