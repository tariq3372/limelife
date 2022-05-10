import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';

const pages = [
  { name: 'HOME', path: '/home' },
  { name: 'PORTFOLIO', path: '/protfolio' },
  { name: 'SERVICES', path: '/service' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'CONTACT US', path: '/contact-us' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = (page) => pathname === page.path;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const goToPage = (page) => {
    navigate(page.path);
  }

  return (
    <>
      <Container disableGutters maxWidth="xxl" sx={{ mb: '30px' }}>
        <Toolbar disableGutters>
          <img
            src={require('../../assets/images/LimeLife-Logo-Light.png')}
            alt="logo"
            className="header-logo"
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={() => { goToPage(page); handleCloseNavMenu() }} key={page.path}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => goToPage(page)}
                sx={{ fontFamily: isActive(page) ? 'muli-bolditalic' : 'muli-bold', my: 0, color: isActive(page) ? '#afeb34' : 'black', display: 'block', minWidth: '98px', minHeight: '36px' }}
              >
                {isActive(page) && <div className='menu-active-top' />}
                {page.name}
                {isActive(page) && <div className='menu-active-bottom' />}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      {pathname === '/home' && <HomeHeader />}
    </>
  );
};
export default Header;