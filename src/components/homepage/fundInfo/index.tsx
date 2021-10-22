import React, { FC } from 'react';
import styles from './index.module.scss';
import FundInfoDetail, {
  fundInfoDetailOption,
} from '~/src/components/homepage/fundInfo/fundInfoDetail';

interface FundInfoProps {
  fundInfoLists: fundInfoDetailOption[];
}

const FundInfo: FC<FundInfoProps> = ({ fundInfoLists }) => (
  <div className={styles.fundInfoDetailContainer}>
    {fundInfoLists.map((fundInfo) => (
      <FundInfoDetail fundInfoDetailOption={fundInfo} key={fundInfo.description} />
    ))}
  </div>
);

export default FundInfo;
