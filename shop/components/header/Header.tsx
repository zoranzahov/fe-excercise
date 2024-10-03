import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <AppBar role={'banner'} position="static">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          High Gear Car Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
