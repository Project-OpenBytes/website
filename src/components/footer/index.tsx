import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Icon } from 'graviti-design';
import { useRouter } from 'next/router';
import UserService from '~/src/services/user/api';
import styles from './index.module.scss';

const Footer: FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const [email, setEmail] = useState({ type: 'email', value: '' });

  const [invalidEmail, setInvalidEmail] = useState(false);

  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const { asPath } = useRouter();

  const validateEmail = (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccessfulSubmit(false);
    setEmail({ type: 'email', value: event.target.value });
    if (validateEmail(email.value)) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const handleSubmit = (): void => {
    setClicked(true);
    if (!invalidEmail && email.value.length) {
      UserService.saveData(email).catch((err) => console.error(err));
      setEmail({ type: 'email', value: '' });
      setSuccessfulSubmit(true);
    } else {
      setInvalidEmail(true);
    }
  };

  const helperText = (): React.ReactNode => {
    if (successfulSubmit) {
      return (
        <div className={styles.subscribeHelperTextWrapper}>
          <Icon type="icon-ok" style={{ marginRight: '16px' }} />
          Thank you for subscribing!
        </div>
      );
    }
    if (!invalidEmail) {
      return '';
    }
    return (
      <div className={styles.subscribeHelperTextWrapper}>
        <Icon type="icon-warning" style={{ marginRight: '16px' }} />
        Please enter a valid email address
      </div>
    );
  };

  useEffect(() => {
    setClicked(false);
  }, [asPath]);

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.subscribeBgWrapper}>
        <div className={styles.subscribeContentWrapper}>
          <div className={styles.subscribeWrapper}>
            <input
              className={`${styles.subscribeInput} ${
                clicked && invalidEmail && styles.subscribeInputError
              }`}
              type="text"
              placeholder="Your Email Address"
              value={email.value}
              onChange={handleChange}
            />
            <Button className="filledButton" onClick={handleSubmit}>
              Subscribe
            </Button>
          </div>
          {clicked && helperText()}
        </div>
      </div>

      <div className={styles.bottomBgWrapper}>
        <div className={styles.bottomContentWrapper}>
          <div className={styles.projectAuthorWrapper}>
            <img
              src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/openbytes+logo+small.png`}
              alt="openbytes-logo"
              width="32px"
              height="36px"
            />
            2021 © OpenBytes Project Authors
          </div>
          <div className={styles.contactWrapper}>
            <Link href="https://join.slack.com/t/openbytes/shared_invite/zt-xmlybz36-kc7SnQnmrIyz1m79oOu6pg">
              <a>
                <div className={styles.slackWrapper}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/slack+logo.png`}
                    alt="slack_logo"
                  />
                  <div className={styles.socialText}>Slack Community</div>
                </div>
              </a>
            </Link>
            <Link href="mailto:contact@openbytes.io">
              <a>
                <div className={styles.emailWrapper}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/contact+icon.png`}
                    alt="contact_icon"
                  />
                  <div className={styles.socialText}>contact@openbytes.io</div>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.mobileProjectAuthor}>2021 © OpenBytes Project Authors</div>
        </div>
      </div>
      <div className={styles.copyRightBgWrapper}>
        <div className={styles.copyRightWrapper}>
          <div className={styles.copyRightText}>
            Copyright © 2021 OpenBytes a Series of LF Projects, LLC
            <br/>
            For web site terms of use, trademark policy, privacy policy and other project policies please see {' '}
            <a
              href="https://lfprojects.org/policies"
              target="_blank"
              rel="noreferrer"
            >
              https://lfprojects.org/policies
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
