import styles from '../../style/page.module.css'
import Header from './components/header'
import HeadingC from './components/headingC'
import HeadingL from './components/headingL'
import GlobalButton from './components/button'
import VenturesCard from './components/venturesCard'
import ServiceCard from './components/serviceCard'
import CounterNumberBox from './components/CounterNumberBox'
import HeadingDescription from './components/HeadingDescription'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/footer'

export default function Home() {

    const orange = {
      backgroundColor: '#ff623e',
      color: '#fff',
    };

    const blue = {
      backgroundColor: '#280b7d',
      color: 'white',
    };
    
  
  return (
    <main className={styles.main}>   
      <section className='heroSection'>
        <Header/>
      </section> 

        <section className='aboutSection'> 
          <div className='container'>
            <div className='aboutUsOtrBox'> 
              <HeadingC lrgHeading={"Who We Are"} heading={"Cheif Khalsa Diwan Charitable Society"}/>     
              <div className='aboutUs'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='aboutUsText'>
                      <HeadingDescription HeadingDescription={"The establishment of Chief Khalsa Diwan on 30 October 1902 bears testimony to the dreams of some committed stalwarts of the Guru Khalsa Panth. Opening session of the new organization designated as Chief Khalsa Diwan was held in the Malwai Bunga, Sri Darbar Sahib on Diwali, 30 October 1902.The inaugural Ardaas was performed by S. Teja Singh of Bhasur. Bhai Arjan Singh Bagrian was elected as President, S. Sunder Singh Majithia Secretary and S. Sujan Singh Sodhi Addl. Secretary. In addition to these office bearers, 18 ot her members were inducted in the executive committee.On 9 July 1904 Chief Khalsa Diwan was registered under Act XXI, 1860."}/>
                      <GlobalButton buttonValue="View More >>" color={orange}/>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='aboutUsTextImg'>
                      <Image src="/logoIcon.png" alt="My Image" width={255} height={280} /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    

        <section className='venturesSection'>
          <div className='container'>
              <div className='venturesOtrBx'>
                <div className='row'>
                    <div className='col-md-12'>
                      <div className='venturesinrBx mb40'>
                        <VenturesCard ventureTitle="School" ventureImage="/school.png"/>
                        <VenturesCard ventureTitle="College" ventureImage="/college.png"/>
                        <VenturesCard ventureTitle="Hospital" ventureImage="/hospital.png"/>

                        <div className='ventureCardsBox'>
                          <HeadingL subSmallHeading={"Dolor Ipsum"} heading={"Our Ventures"}/>   
                          <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'."}/>  
                        </div>
                      </div>

                      <div className='venturesinrBx rowReverse'>
                          <VenturesCard ventureTitle="Orphange" ventureImage="/orphange.png"/>
                          <VenturesCard ventureTitle="Biradhghar" ventureImage="/biradhghar.png"/>
                          <VenturesCard ventureTitle="Gurudwara Sahib" ventureImage="/gurudwarasahib.png"/>

                          <div className='ventureCardsBox'>
                            <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32"}/>  
                            <HeadingDescription HeadingDescription={"Lorem Ipsum passage, and going .Lorem Ipsum comes from sections 1.10.32"}/>
                            <GlobalButton buttonValue="View More >>" color={blue}/>
                          </div>

                      </div>

                    </div>                    
                </div>
              </div>
          </div>
        </section>

        <section className='serviceSection'> 
            <div className='container'>
                <div className='serviceOtrBox'>
                    <div className='row'>
                        <div className='col-md-12'>        
                        <HeadingC subSmallHeading={"Lorem Ipsum"} heading={"Cheif Khalsa Diwan Charitable Society"}/>                  
                          <div className='serviceMainBox'>
                            <ServiceCard title="Donation" imgName='/donation.png' Description="There are many variations of passages of Lorem Ipsum available."/>
                            <ServiceCard title="Log In" imgName='/password.png' Description="There are many variations of passages of Lorem Ipsum available."/>
                            <ServiceCard title="Carrer" imgName='/career.png' Description="There are many variations of passages of Lorem Ipsum available."/>
                            <ServiceCard title="Fee Payment" imgName='/invoice.png' Description="There are many variations of passages of Lorem Ipsum available."/>
                            <ServiceCard title="Contact Us" imgName='/email.png' Description="There are many variations of passages of Lorem Ipsum available."/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='PresidentMessageSection'> 
            <div className='container'>
                <div className='PresidentMessageOtrBox'>
                    <div className='row'>
                        <div className='col-md-7'>        
                          <HeadingL subSmallHeading={"Lorem Ipsum"} heading={"Cheif Khalsa Diwan Charitable Society"}/>                  
                          <HeadingDescription HeadingDescription={'The motto for my service to Chief Khalsa Diwan Charitable Society for the years to come shall be to promote "Sikhi-te-Sikhya" (Spread of Sikhism and Education).I feel that the educational system in the country has been facing hardships from the past several years due to lack of better facilities and opportunities for the youth to excel in their fields of interests. As a matter of fact, overall economic growth has remained disconnected from employment generation noting that young people continue to suffer from persistent unemployment and lack of quality job opportunities even after attaining best education. It is my personal belief that it is high time that such established organizations like Chief Khalsa Diwan Charitable Society must invest heavily into skill-oriented education that help achieve the goals of utmost employment in the country.lack of quality job opportunities even after attaining best education. It is my personal belief that it is high time that such established organizations like Chief Khalsa Diwan Charitable Society'}/>
                          <GlobalButton buttonValue="View More >>" color={blue}/>
                        </div>
                        <div className='col-md-5'>   
                          <div className='PresidentMessageImgBox'>
                            <img src='/president_image.png' alt="president_image"/>

                            <div className='PrcdntMsagTextBox'> 
                              <p className='presidentName'> DR. INDERBIR SINGH NIJJAR </p>
                              <p className='presidentDesignation'> President </p>
                              <Image src="/headingUnderlineImage.png" alt="My Image" width={70} height={6} /> 
                            </div>
                           
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='counterSection'> 
            <div className='container'>
                <div className='counterOtrBox'>
                    <div className='row'>
                      <div className='col-md-6'>   
                          <div className='counterInrBox'>
                            <div className='counterMainBox'> 
                              <CounterNumberBox  Number={"500"} title={"Members"}/>
                              <CounterNumberBox  Number={"50"} title={"InstituTes"}/> 
                            </div> 
                            <div className='counterMainBox mt-40'> 
                              <CounterNumberBox  Number={"38000"} title={"Students"}/>    
                              <CounterNumberBox  Number={"456"} title={"DolorSit Amet"}/>    
                            </div>  
                          </div>
                      </div>
                        <div className='col-md-6'> 
                          <div className='counterInrTextBox'>   
                            <HeadingL subSmallHeading={"Lorem Ipsum"} heading={"Cheif Khalsa Diwan Charitable Society"}/>                  
                            <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'}/>
                            <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'}/>
                            <HeadingDescription HeadingDescription={'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".'}/>
                          </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>

<Footer/>      

    </main>

  )
}
