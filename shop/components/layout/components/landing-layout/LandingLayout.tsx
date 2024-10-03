import React, { FC } from 'react';

import BaseLayout from '../base-layout';
import CustomButton from '@/components/custom-button';

import styles from './LandingLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

const LandingLayout: FC<Props> = ({ children }) => {
  const handleClick = () => {
    window.open('http://localhost:3001/', '_blank', 'noopener');
  };

  return (
    <BaseLayout>
      <div className={styles.title}>Our latest car posts</div>
      <div className="landing-content">{children}</div>
      <div className={styles.button}>
        <CustomButton onClick={handleClick} color="#e55702" size="large">
          Check our full catalog
        </CustomButton>
      </div>
    </BaseLayout>
  );
};

export default LandingLayout;
