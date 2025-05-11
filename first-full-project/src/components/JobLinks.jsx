import React from 'react'
import Cola from '../assets/svg/Cola.svg'
import Facebook from '../assets/svg/Facebook.svg'
import Microsoft from '../assets/svg/Microsoft.svg'
import Disney from '../assets/svg/Disney.svg'
import Sony from '../assets/svg/Sony.svg'
import styles from '../styles/JobLinks.module.css'

const jobLinks = () => {
  return (
    <div className={styles.linksWrapper}>
    <div className={styles.title}><p>Помогаем найти работу</p></div>
    <div className={styles.links}>
        <a href =" "><img src={Disney} alt=" " /> </a>
        <a href =" "><img src={Facebook} alt=" " /> </a>
        <a href =" "><img src={Microsoft} alt=" " /> </a>
        <a href =" "><img src={Sony} alt=" " /> </a>
        <a href =" "><img src={Cola} alt=" " /> </a>
        
   


    </div>

      
    </div>
  )
}

export default jobLinks
