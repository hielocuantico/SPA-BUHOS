import React from 'react'
import styles from './BannerTournament.module.css'

const BannerTournament = () => {
  return (
    <div>
        <div className={`container container-margin  ${styles['banner-tournament-container']}`}>
            <h2> TOURNAMENT BANNER </h2>
        </div>
    </div>
  )
}

export default BannerTournament