import React from 'react';
import clsx from 'clsx';
import styles from './logo.module.scss';
// import './logo.scss';
export default function Logo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.textEffect}>
        <h1 className={clsx(styles.neon, styles.neonDesktop)} data-text="Neon&nbsp;Rain">Neon&nbsp;Rain</h1>
        <h1 className={clsx(styles.neon, styles.neonMobile)} data-text="NR">NR</h1>
        <div className={styles.gradient}></div>
        <div className={styles.spotlight}></div>
      </div>
    </div>
  )
}