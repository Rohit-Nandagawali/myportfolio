import { Link } from 'react-router-dom';
import './FooterLink.css'
const FooterLink = ({text,link,toAddress}) => {
    return ( 
        <div className="footer-link">
            {text}
            <Link to={toAddress} className="footer-link-element">
                {link}
            </Link>
        </div>
     );
}
 
export default FooterLink;