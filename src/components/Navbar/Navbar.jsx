import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles['nav-bar-container']}>
        <div className={`container ${styles['nav-bar']}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                    <img src="https://cdn3.iconfinder.com/data/icons/owl-8/500/yul347_36_stylized_owl_silhouette_bird_logo_creative_animal-512.png" alt="" />
                <li>Contact</li>
                <li>Services</li>                
            </ul>
        </div>
    </div>
  )
}

export default Navbar