import mandalaRound from '../../assets/mandala_clean2.png'
import './AppFooterBar.css'

export default function AppFooterBar() {
  return (
    <div className='footer'>
        <a href="/" target="_blank">
          <img src={mandalaRound} className="spin-logo" alt="Studio Love mandala logo" />
        </a>
    </div>
  );
}