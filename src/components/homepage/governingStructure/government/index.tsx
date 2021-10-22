import React, { FC } from 'react';
import styles from './index.module.scss';
import GovernmentDetail, {
  detailOption,
} from '~/src/components/homepage/governingStructure/governmentDetail';

interface TitleAndDescriptionProps {
  title: string;
  detailOptions: detailOption[];
}

const Government: FC<TitleAndDescriptionProps> = ({ title, detailOptions }) => (
  <div className={styles.governmentContainer}>
    <div className={styles.title}>{title}</div>
    <div className={styles.govermentDetailWrapper}>
      {detailOptions.map((option) => (
        <GovernmentDetail detailOption={option} key={option.description} />
      ))}
    </div>
  </div>
);

export default Government;
