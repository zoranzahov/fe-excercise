import React, { FC } from 'react';
import { Typography, Button } from '@mui/material';
import styles from './footer.module.scss';

const Footer: FC = () => {
  const handleClick = () => {
    window.open('http://localhost:3000/contact', '_blank', 'noopener');
  };

  return (
    <footer className={styles.footer} role='contentinfo'>
      <Typography variant="body2" color="textSecondary">
        &copy; High Gear Car Shop 2024
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Contact Us
      </Button>
    </footer>
  );
};

export default Footer;
