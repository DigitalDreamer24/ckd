import styles from '../../../style/page.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
       
<header>       
    <div className='container'> 
        <div className='row alignCenter'> 
            <div className='logoBox col-md-3'>
                <Image src="/logo.png" alt="My Image" width={360} height={80} /> 
            </div>
            <div className='navBar col-md-9'>
                <div className='navContactBar'>
                    <ul> 
                        <li> <a href="#"> <FontAwesomeIcon icon={faMobileScreen} width={12}/> +91-6283282075 <span> (Head Office)  </span></a></li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faMobileScreen} width={12}/> +91-6283282077 <span> (Director Office) </span> </a></li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faMobileScreen} width={12}/> +91-183-2228771 </a></li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faEnvelope} width={15}/> info@cheikhalsadiwan.com </a></li>
                    </ul>
                </div>
                <div className='navLinkBar'>
                    <ul> 
                        <li> <a  href="#"> Home </a> </li>
                        <li> <a  href="#"> About CKD </a> </li>                    
                        <li> <a  href="#"> Our Ventures </a> </li>
                        <li> <a  href="#"> Gallery Media </a> </li>
                        <li> <a  href="#"> Publications </a> </li>
                        <li> <a  href="#"> Contact Us </a> </li>
                        <li className='navButton'> <a  href="#"> Carrer </a> </li>
                        <li className='navButton'> <a  href="#"> Donation </a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
</header>

        )
    }
    