import React, { FC } from 'react';
import classNames from 'classnames';
import { Button } from 'graviti-design';
import Link from 'next/link';
import styles from './index.module.scss';

export type buttonOption = {
  value: string;
  href: string;
  target?: string;
};

interface TitleAndDescriptionProps {
  titleContent: string;
  descriptionContent: string;
  descriptionStyle?: React.CSSProperties;
  buttonOptions: buttonOption[];
}

const TitleAndDescription: FC<TitleAndDescriptionProps> = ({
  titleContent,
  descriptionContent,
  descriptionStyle,
  buttonOptions,
}) => (
  <div className={styles.titleAndDescription}>
    <div className={classNames(styles.title)}>{titleContent}</div>
    <div className={classNames(styles.description)} style={descriptionStyle}>
      <span>{descriptionContent}</span>
    </div>
    <div className={styles.buttonGroup}>
      {buttonOptions.map((item) => (
        <Link href={item.href} passHref key={item.value}>
          <a target={item.target}>
            <Button className="buttonOutline" variant="outlined">
              <span>{item.value}</span>
            </Button>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default TitleAndDescription;
