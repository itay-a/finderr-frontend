import facebook from '../assets/img/trusted/facebook.png';
import google from '../assets/img/trusted/google.png';
import netflix from '../assets/img/trusted/netflix.png';
import pg from '../assets/img/trusted/pg.png';
import paypal from '../assets/img/trusted/paypal.png';

export function TrustedBar() {

    return (

        <div className="trusted-bar">
            <span>Trusted By:</span>
            <ul>
                <li><img src={facebook} alt="facebook" /></li>
                <li><img src={google} alt="google" /></li>
                <li><img src={netflix} alt="netflix" /></li>
                <li><img src={pg} alt="pg" /></li>
                <li><img src={paypal} alt="paypal" /></li>
            </ul>
        </div>
    )
}