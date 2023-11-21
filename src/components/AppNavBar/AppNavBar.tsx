import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MandalaRound from '../../assets/mandala_clean2.png'
import './AppNavBar.css'

export default function AppNavBar() {
  return (
    <div className='header'>
      <AppBar position="static" sx={{ backgroundColor: "#2b192e" }}>
        <Toolbar>
          <div className='header-left'>
            <a href='/'>
              <img src={MandalaRound} alt='studio love mandala logo' className='spin-logo'></img>
            </a>
            <div className='wordmark'>
              Studio Love
            </div>
          </div>
          <div className='header-right' >
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}