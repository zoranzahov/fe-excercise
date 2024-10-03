import React, { FC } from 'react';

import BaseLayout from '../base-layout';
import styles from './ContactLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const ContactLayout: FC<Props> = ({ children }) => {
  return (
    <BaseLayout>
      <div className={styles.title}>Contact Information</div>
      <div className="contact-content">{children}</div>
    </BaseLayout>
  );
};

export default ContactLayout;
