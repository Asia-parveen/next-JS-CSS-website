import React from 'react';
import Image from 'next/image';
import Styles from  '../navbar.module.css';
import Link from 'next/link';


const NavBar = () => {
  return (
   <>
   <nav className={Styles.main} >
    <div >
        <Image src="/images/cupp.png" alt="logopic" width={200} height={80}/>
        </div>
        
       
       
        <ul className={Styles.navul}>
            <li className={Styles.navli}><Link href="/" className={Styles.active}>Home</Link></li>
            <li className={Styles.navli}><Link href="/about">About</Link></li>
            <li className={Styles.navli}><Link href="/menu">Menu</Link></li>
            <li className={Styles.navli}><Link href="/pagess">Pages</Link></li>
            <li className={Styles.navli}><Link href="/contact">Contact</Link></li>
        </ul>
        <button className={Styles.navBtn}>Book A Table</button>

   </nav>
   
   
   
   
   </>
  )
}

export default NavBar