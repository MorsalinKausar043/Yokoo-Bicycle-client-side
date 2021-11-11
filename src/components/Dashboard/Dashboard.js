import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useHistory } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import Addservice from "../addProducts/Addservice";
import DashboardHome from '../dashboardHome/DashboardHome';
import PrivateRoute from '../../privateRoute/PrivateRoute';
import "./dashboard.css";
import MakeAdmin from '../makeAdmin/MakeAdmin';
import ManageAllOrder from '../manageAllOrder/ManageAllOrder';
import ManageOrder from '../manageOrder/ManageOrder';
import Pay from '../pay/Pay';
import Myorder from '../myorder/Myorder';
import Reviews from "../reviews/Reviews";
import useAuth from '../../Hooks/useAuth';

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const { user , logOut , admin } = useAuth();
  const LogOut = () => {
    logOut()
    .then(() => history.push("/"))  
}

  const drawer = (
    <div>
        <Toolbar />
          <Divider />
          <div className="text-center py-3 d-flex flex-column">
            <NavLink className="dashboard_btn" to="/">
                  Home
            </NavLink>
            <NavLink className="dashboard_btn" to="/explore">
                Explore
            </NavLink>
        {
          admin ?
            <div>
              <NavLink className="dashboard_btn mt-3" to={`${url}/makeadmin`}>
              Make Admin
            </NavLink>
            <NavLink className="dashboard_btn mt-3" to={`${url}/addservice`}>
                Add Product
            </NavLink>
            <NavLink className="dashboard_btn mt-3" to={`${url}/manageorder`}>
                Manage Order
            </NavLink>
            <NavLink className="dashboard_btn mt-3" to={`${url}/manageallorder`}>
                Manage All Product
            </NavLink>
          </div>
            :
          <div>
              <NavLink className="dashboard_btn mt-3" to={`${url}/pay`}>
                Pay
            </NavLink>
            <NavLink className="dashboard_btn mt-3" to={`${url}/myorder`}>
                My Order
            </NavLink>
            <NavLink className="dashboard_btn mt-3" to={`${url}/review`}>
                Review
            </NavLink>
          </div>
        }
        {
          user.email || user.displayName ?
          <NavLink onClick={LogOut} className="dashboard_btn" to={`${url}/review`}>
          Logout
        </NavLink>:""
          }
      </div>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Yokoo-Bycycle-Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
                    <Route exact path={path}>
                      <DashboardHome/>
                    </Route>
                    <PrivateRoute path={`${path}/addservice`}>
                        <Addservice/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/makeadmin`}>
                        <MakeAdmin/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/manageallorder`}>
                        <ManageAllOrder/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/manageorder`}>
                        <ManageOrder/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myorder`}>
                        <Myorder/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Reviews/>
                    </PrivateRoute>
                </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
