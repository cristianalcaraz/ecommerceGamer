import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CardWidget from './CardWidget/CardWidget';
import { NavLink, Link } from 'react-router-dom';

export default function ButtonAppBar({quantity}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inicio
          </Typography>
          <NavLink 
            to="category/ps4" 
            className={({match}) => match ? 'ActiveOption' : 'Option'}
          >
            PS4
          </NavLink>
          <NavLink 
            to="category/ps5" 
            className={({match}) => match ? 'ActiveOption' : 'Option'} 
          >
            PS5
          </NavLink>
        </Toolbar>
        <CardWidget quantity={quantity} />
      </AppBar>
    </Box>
  );
}
