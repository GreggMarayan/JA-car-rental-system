import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MobileAppBar = ({ title = 'Dashboard', onMenuClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MobileAppBar;
