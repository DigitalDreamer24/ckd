import styles from '../../style/page.module.css'
import Header from './components/header'
import HeadingC from './components/headingC'
import HeadingL from './components/headingL'
import GlobalButton from './components/button'
import VenturesCard from './components/venturesCard'

import HeadingDescription from './components/HeadingDescription'
import Image from 'next/image';

export default function Home() {

    const heading = {
      color: 'red',
      fontSize: '24px',
    };
  
  return (
    <main className={styles.main}>   
      <section className='heroSection'>
        <Header/>
      </section> 

        <section className='aboutSection'> 
          <div className='container'>
            <div className='aboutUsOtrBox'> 
              <HeadingC style={heading} lrgHeading={"Who We Are"} heading={"Cheif Khalsa Diwan Charitable Society"}/>     
              <div className='aboutUs'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='aboutUsText'>
                      <HeadingDescription HeadingDescription={"The establishment of Chief Khalsa Diwan on 30 October 1902 bears testimony to the dreams of some committed stalwarts of the Guru Khalsa Panth. Opening session of the new organization designated as Chief Khalsa Diwan was held in the Malwai Bunga, Sri Darbar Sahib on Diwali, 30 October 1902.The inaugural Ardaas was performed by S. Teja Singh of Bhasur. Bhai Arjan Singh Bagrian was elected as President, S. Sunder Singh Majithia Secretary and S. Sujan Singh Sodhi Addl. Secretary. In addition to these office bearers, 18 ot her members were inducted in the executive committee.On 9 July 1904 Chief Khalsa Diwan was registered under Act XXI, 1860."}/>
                      <GlobalButton buttonValue="View More >>"/>
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
                          <div className='serviceMainBox'>
                            <div className='serviceCard'>                                  
                                <div className='serviceTitle'>                                
                                    <p> Donation </p>
                                    <Image src="/donation.png" alt="My Image" width={28} height={29} /> 
                                </div>
                                <div className='serviceCardDescription'>
                                    <p> There are many variations of passages of Lorem Ipsum available. </p>
                                </div>
                            </div>

                            <div className='serviceCard'>                                  
                                <div className='serviceTitle'>                                
                                    <p> Donation </p>
                                    <Image src="/donation.png" alt="My Image" width={28} height={29} /> 
                                </div>
                                <div className='serviceCardDescription'>
                                    <p> There are many variations of passages of Lorem Ipsum available. </p>
                                </div>
                            </div>

                            <div className='serviceCard'>                                  
                                <div className='serviceTitle'>                                
                                    <p> Donation </p>
                                    <Image src="/donation.png" alt="My Image" width={28} height={29} /> 
                                </div>
                                <div className='serviceCardDescription'>
                                    <p> There are many variations of passages of Lorem Ipsum available. </p>
                                </div>
                            </div>

                            <div className='serviceCard'>                                  
                                <div className='serviceTitle'>                                
                                    <p> Donation </p>
                                    <Image src="/donation.png" alt="My Image" width={28} height={29} /> 
                                </div>
                                <div className='serviceCardDescription'>
                                    <p> There are many variations of passages of Lorem Ipsum available. </p>
                                </div>
                            </div>

                            <div className='serviceCard'>                                  
                                <div className='serviceTitle'>                                
                                    <p> Donation </p>
                                    <Image src="/donation.png" alt="My Image" width={28} height={29} /> 
                                </div>
                                <div className='serviceCardDescription'>
                                    <p> There are many variations of passages of Lorem Ipsum available. </p>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

  )
}
