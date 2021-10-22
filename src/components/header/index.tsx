import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Icon } from 'graviti-design';
import styles from './index.module.scss';

const Header: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const headerCl = showModal ? 'modal-opened' : '';

  return (
    <>
      <div className={`${headerCl} ${styles.headerWrapper}`}>
        <div className={styles.headerTopBgWrapper}>
          <div className={styles.imgContainer}>
            <Link href="https://www.linuxfoundation.org/projects" passHref>
              <a>
                <img
                  src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/linux+logo.png`}
                  alt="linux_foundation_logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.headerBottomBgWrapper}>
          <div className={styles.headerContentWrapper}>
            <div className={styles.imagePC}>
              <img
                src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/logo.png`}
                alt="logo"
              />
            </div>
            <div className={styles.imageMobile}>
              <img
                src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/logo.png`}
                alt="logo"
              />
            </div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/what-we-do">Our Work</Link>
              <Link href="https://join.slack.com/t/openbytes/shared_invite/zt-xmlybz36-kc7SnQnmrIyz1m79oOu6pg">
                Community
              </Link>
            </nav>

            <Icon.Button
              variant="link"
              style={{ color: 'black' }}
              onClick={() => setShowModal(!showModal)}
            >
              {showModal ? <Icon type="icon-close" /> : <Icon type="icon-nav" />}
            </Icon.Button>
          </div>
        </div>
        {showModal && (
          <div className={styles.headerMenuWrapper} onClickCapture={() => setShowModal(false)}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/what-we-do">Our Work</Link>
            <Link href="https://join.slack.com/t/openbytes/shared_invite/zt-xmlybz36-kc7SnQnmrIyz1m79oOu6pg">
              Community
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
