import styles from '../../../style/page.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GlobalButton from '../components/button'

export default function footer() {

    const orange = {
        backgroundColor: '#ff623e',
        color: '#fff',
      };
  
      const blue = {
        backgroundColor: '#280b7d',
        color: 'white',
      };

    return (
       
        <footer className='footer'>
        <div className='inrFooterBox'>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-4'>
                      <div className='footerColumnBox'>
                          <div className='footerLogo'>
                              <span> <img src='/footerLogo.png' alt="Footer_logo"/></span>
                                <p className='footerSubtitle'>
                                  The establishment of Chief Khalsa Diwan on 30 October 1902 bears testimony to the dreams of some committed stalwarts of the Guru Khalsa Panth. 
                                </p>
                                <p className='footerAddress'>
                                    <p className='charityName'> Chief Khalsa Diwan Charitable Society, </p>
                                    <p className='charityLocation'> G.T.Road, Amritsar - 143001 </p>
                                    <p className='charitCity'> Punjab - India </p>
                                </p>

                                <div className='FooterSocialLink'>
                                  <FontAwesomeIcon icon={faMobileScreen} width={14}/>
                                  <FontAwesomeIcon icon={faMobileScreen} width={14}/>
                                  <FontAwesomeIcon icon={faMobileScreen} width={14}/>
                                </div>

                                <GlobalButton buttonValue="Donation" color={orange}/>
                          </div>

                      </div>
                  </div>

                  <div className='col-md-2'>
                      <div className='footerColumnBox'>
                          <p className='ftrHeading'>Our <span>  Ventures </span></p>
                          <ul> 
                             <li> <a href=''> Gurudwara Sahib </a> </li> 
                             <li> <a href=''> Schools </a> </li> 
                             <li> <a href=''> Colleges </a> </li> 
                             <li> <a href=''> Hospitals </a> </li> 
                             <li> <a href=''> Orphange </a> </li> 
                             <li> <a href=''> Biradh Ghar </a> </li> 
                             <li> <a href=''> Parcharak Vidalya </a> </li> 
                          </ul>
                      </div>
                  </div>

                  <div className='col-md-3'>
                    <div className='footerColumnBox'>
                          <p className='ftrHeading'>Important<span> Links</span></p>
                          <ul> 
                            <li> <a href=''> Recruitment </a> </li> 
                            <li> <a href=''> Gratuity Claim form </a> </li> 
                            <li> <a href=''> Govt. Minority Scholarship </a> </li> 
                            <li> <a href=''> Gratuity Claim form </a> </li> 
                            <li> <a href=''> Govt. Minority Scholarship </a> </li> 
                          </ul>
                      </div>
                  </div>

                  <div className='col-md-3'>
                      <div className='footerColumnBox'>
                        <div className='footerColumnBox'>
                            <p className='ftrHeading'>Contacat<span> Us</span></p>
                              <div className='callusBox'>
                                  <div className='callusBox_title'> <FontAwesomeIcon icon={faMobileScreen} width={14}/> Call Us:- </div>
                                  <div>
                                      <p> +91-183-2228771 </p>
                                      <p> +91-6283282075 (Head Office) </p>
                                      <p> +91-6283282077 (Director Office) </p>
                                  </div>
                              </div>

                              <div className='callusBox'>
                                <div className='callusBox_title'> <FontAwesomeIcon icon={faMobileScreen} width={14}/> Mail Us:- </div>
                                  <div>
                                      <p> info@chiefkhalsadiwan.com </p>
                                  </div>
                              </div>
                        </div>
                      </div>
                  </div>

               </div>
          </div>
        </div>
    </footer>

        )
    }
    