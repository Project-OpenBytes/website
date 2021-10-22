import React, { FC } from 'react';
import styles from './index.module.scss';
import LicenseDetail, { licenseDetail } from '~/src/components/ourWork/licenses/licenseDetail';

interface licensesProps {
  title: string;
  licenseDetailOptions: licenseDetail[];
}

const Licenses: FC<licensesProps> = ({ title, licenseDetailOptions }) => {
  return (
    <div className={styles.licenseContainer}>
      <div className={styles.licenseTitle}>{title}</div>
      <LicenseDetail licenseDetailOptions={licenseDetailOptions} />
    </div>
  );
};

export default Licenses;
