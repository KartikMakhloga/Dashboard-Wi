import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Sidebar({ mobileOpen, handleDrawerToggle }) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}  // Better performance on mobile.
        sx={{
          display: { xs: 'block', sm: 'block' },  // Ensure it's set to block on all sizes for testing
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {['Dashboard', 'Notifications', 'Settings'].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <ListItemIcon>
                {index === 0 ? <DashboardIcon /> : <NotificationsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
  

export default Sidebar;
