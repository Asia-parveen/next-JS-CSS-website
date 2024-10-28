import React from 'react'
import Image from 'next/image';
import Styles from '../footer/footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={Styles.footer}>
        <div className={Styles.first}>
        <div className={Styles.img}>
            <Image src="/images/Log.png" alt="logo" width={150} height={80}/>
            <p className={Styles.para}>In the new era of technology we look a<br></br> in the future with certainty and pride to<br></br> for our company and.</p>
           <div className={Styles.socialIcon}>
           <Image  src="/images/twtr.png" alt="logo" width={25} height={25}/>
            <Image  src="/images/fb.png" alt="logo" width={25} height={25}/>
            <Image  src="/images/insta.png" alt="logo" width={30} height={30}/>
            <Image  src="/images/gitt.png" alt="logo" width={30} height={30}/>
           </div>
           </div>
      
        </div>
        <div className={Styles.links}>
            <p className={Styles.linkonee}><Link href="#">Pages</Link></p>
            <p className={Styles.linkone}><Link href="#">About</Link></p>
            <p className={Styles.linkone}><Link href="#">Menu</Link></p>
            <p className={Styles.linkone}><Link href="#">Pricing</Link></p>
            <p className={Styles.linkone}><Link href="#">Blog</Link></p>
            <p className={Styles.linkone}><Link href="#">Contact</Link></p>
            <p className={Styles.linkone}><Link href="#">Delivery</Link></p>
        </div>
        <div className={Styles.linkss}>
            <p className={Styles.linkstwoo}><Link href="#">Utility Pages</Link></p>
            <p className={Styles.linkstwo}><Link href="#">Start Here</Link></p>
            <p className={Styles.linkstwo}><Link href="#">Password Protected</Link></p>
            <p className={Styles.linkstwo}><Link href="#">404 Not Found</Link></p>
            <p className={Styles.linkstwo}><Link href="#">Licenses</Link></p>
            <p className={Styles.linkstwo}><Link href="#">Changelog</Link></p>
            <p className={Styles.linkstwo}><Link href="#">View More</Link></p>
        </div>

       
     
            <div className={Styles.dishes}>
                {/* <p className={Styles.lastPara}>Follow Us On Instagram</p> */}
          
         
            <div className={Styles.one}>
            <p className={Styles.lastPara}>Follow Us On Instagram</p>
          
            <Image src="/images/dishone.png" alt="logo" width={120} height={120}/>
            <Image src="/images/dishtwo.png" alt="logo" width={120} height={120}/>
            </div>
            <div className={Styles.two}>
            <Image src="/images/dishthree.png" alt="logo" width={120} height={120}/>
            <Image src="/images/dishfour.png" alt="logo" width={120} height={120}/>
            </div>
        
        </div>
           
    </div>
        )
      }
      
      export default Footer;
          
        
       
      

            
      
     
    
    
    
  


          

      