import { useEffect, useState } from "react";
import { Button, AppBar, Box, CssBaseline, IconButton, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from "../Navbar/NavbarCss";
import InputBase from '@mui/material/InputBase';
export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setAnchorEl(null)
    //setUserClose(null)
  }



  const container = window !== undefined ? () => window().document.body : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    // alert(event.currentTarget.value)
    //fetchAllSubCategories(event.currentTarget.value)
    // alert(event.currentTarget.value)
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="/assets/logo.png" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <div style={{ display: 'flex', }}>
              <Button id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                sx={{ color: '#fff' }}>
                Home
              </Button>
              <Menu

                onMouseLeave={handleClose}
                id="demo-positioned-menu"

                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}

                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Vivek</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Phone</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Sharma</span></MenuItem>
              </Menu>
              <Button onMouseOver={handleClick} sx={{ color: '#fff' }}>
                Courses
              </Button>
               <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onMouseLeave={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Vivek</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Phone</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Sharma</span></MenuItem>
              </Menu>
              <Button onMouseOver={handleClick} sx={{ color: '#fff' }}>
                Blog
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onMouseLeave={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Vivek</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Phone</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Sharma</span></MenuItem>
              </Menu>
              <Button onMouseOver={handleClick} sx={{ color: '#fff' }}>
                Contact
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onMouseLeave={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Vivek</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Phone</span></MenuItem>
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>Sharma</span></MenuItem>
              </Menu> 

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search></div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}



