import React, { FC, useState } from 'react';
import { Button, Input, Select } from 'graviti-design';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss';
import UserService from '~/src/services/user/api';

interface FormInputsType {
  name: string;
  email: string;
  company: string;
  title: string;
  howToSupport: string;
}

const FormContainer: FC = () => {
  const [formInputs, setFormInputs] = useState<FormInputsType>({
    name: '',
    email: '',
    company: '',
    title: '',
    howToSupport: 'supporter',
  });

  const [formInputsError, setFormInputsError] = useState({
    name: false,
    email: false,
    company: false,
    title: false,
  });

  const [invalidEmail, setInvalidEmail] = useState(false);

  const [edited, setEdited] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkInputEmpty = (inputName: string, value: string) => {
    if (value === '') {
      setFormInputsError((prev) => ({
        ...prev,
        [inputName]: true,
      }));
    } else {
      setFormInputsError((prev) => ({
        ...prev,
        [inputName]: false,
      }));
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        [inputName]: event.target.value,
      };
    });
    setEdited(true);
    checkInputEmpty(inputName, event.target.value);
  };

  const handleSubmit = () => {
    Object.keys(formInputs).forEach((key) => {
      checkInputEmpty(key, formInputs[key]);
    });
    if (edited && Object.keys(formInputs).every((k) => formInputs[k] !== '')) {
      if (Object.keys(formInputsError).every((k) => !formInputsError[k]) && !invalidEmail) {
        UserService.saveData(formInputs).catch((err) => console.error(err));
        handleShow();
        setFormInputs({
          name: '',
          email: '',
          company: '',
          title: '',
          howToSupport: 'supporter',
        });
      }
    }
  };

  const validateEmail = (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value);
  };

  const errorMessage = () => {
    if (Object.keys(formInputsError).some((k) => formInputsError[k])) {
      return 'Please fill the forms';
    }

    return invalidEmail ? 'Please enter a valid email address' : '';
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className={styles.modalHeader} />
        <Modal.Body className={styles.modalBody}>
          <img
            src={`${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/popout+icon.png`}
            alt="pop_up_icon"
          />
          <div className={styles.thankYou}>Thank your for supporting us!</div>
          <div className={styles.contactYou}>We will contact you shortly.</div>
          <Button className="filledButton" style={{ width: '100%' }} onClick={handleClose}>
            Got it
          </Button>
        </Modal.Body>
      </Modal>
      <div className={styles.formBorder}>
        <div className={styles.formContentWrapper}>
          <div className={styles.errorMessage}>{errorMessage()}</div>
          <div className={styles.formInputWrapper}>
            <div className={styles.label}>Name</div>
            <Input
              placeholder="name"
              error={formInputsError.name}
              value={formInputs.name}
              onChange={(e) => onChange(e, 'name')}
            />
            <div className={styles.label}>Email Address</div>
            <Input
              placeholder="email address"
              error={formInputsError.email || invalidEmail}
              value={formInputs.email}
              onChange={(e) => {
                onChange(e, 'email');
                if (validateEmail(e.target.value)) {
                  setInvalidEmail(false);
                } else {
                  setInvalidEmail(true);
                }
              }}
            />
            <div className={styles.label}>Company Name</div>
            <Input
              placeholder="company name"
              error={formInputsError.company}
              value={formInputs.company}
              onChange={(e) => onChange(e, 'company')}
            />
            <div className={styles.label}>Title</div>
            <Input
              placeholder="title"
              error={formInputsError.title}
              value={formInputs.title}
              onChange={(e) => onChange(e, 'title')}
            />
            <div className={styles.label}>How to Participate</div>
            <Select
              placeholder="Please select"
              value={formInputs.howToSupport}
              onChange={(e) => setFormInputs((prevState) => ({ ...prevState, howToSupport: e }))}
            >
              <Select.Option value="supporter">Supporter</Select.Option>
              <Select.Option value="technicalSteeringCommittee">
                Technical Steering Committee
              </Select.Option>
            </Select>
            <Button
              className="filledButton text-16-24 font-semibold"
              style={{ width: '100%', marginTop: '40px', height: '48px' }}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
