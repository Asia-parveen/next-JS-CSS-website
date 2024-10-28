import React from 'react'
import Styles from '../information/information.module.css';
import Image from 'next/image';

const Information = () => {
  return (
    <div className={Styles.main}>
      <div>
       <div className={Styles.text}>
          <h1 className={Styles.heading}>A little information<br></br> for our valuable guest</h1>
          <p className={Styles.para1}> At place, we believe that dining is not just about food, but also about the overall<br></br> experience. Our staff, renowned for their warmth and dedication,strives to make every visit an unforgettable event.</p>
          </div>
       

        <div className={Styles.firstBox}>
        <div className={Styles.itemOne}>
        <p className={Styles.para2}>3</p>
       <p className={Styles.para}>Locations</p>
        </div>
        <div className={Styles.itemTwo}>
       <p className={Styles.para2}> 1995</p>
        <p className={Styles.para}>Founded</p>
        </div>
        </div>


        <div className={Styles.secBox}>
        <div className={Styles.itemThree}>
        <p className={Styles.para2}>65+</p>
        <p className={Styles.para}>Staff Members</p>
        </div>
        <div className={Styles.itemFour}>
        <p className={Styles.para2}>100%</p>
       <p className={Styles.para}>Satisfied Customers</p>
        </div>

        </div>
        

      </div>



      <div className={Styles.img}>
        <Image src="/images/information.png" alt="foodpic" width={350} height={430}/>
      </div>
    </div>
  )
}

export default Information;










