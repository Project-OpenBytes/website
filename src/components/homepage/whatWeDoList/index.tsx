import React, { FC } from 'react';
import styles from './index.module.scss';
import WhatWeDoListContent, { ListOption } from './whatWeDoListContent';

interface WhatWedoListProps {
  ListOptions: ListOption[];
}

const WhatWeDoList: FC<WhatWedoListProps> = ({ ListOptions }) => (
  <div className={styles.whatWeDoContainer}>
    {ListOptions.map((option, index) => (
      <WhatWeDoListContent ListOption={option} index={index} key={option.title} />
    ))}
  </div>
);

export default WhatWeDoList;
