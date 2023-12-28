import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  return (
    <div className={`container-margin ${styles['services-container']}`}>
        <h2> SERVICES </h2>
        <div className={`container container-margin ${styles['services']}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Services