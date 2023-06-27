import logo from '../assets/header-logo.svg';
import styles from '../styles/header.module.scss';

export default function Header (){
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="The Classic Cut" />
            <div className={styles.menus}>
                <a className={styles.menu} href='#about'>About us</a>
                <a className={styles.menu} href="#services">Services</a>
                <a className={styles.menu} href="#whyus">Why US</a>
                <a className={styles.menu} href="#gallery">Gallery</a>
                <button className={styles.cta_btn}>Book now</button>
            </div>
        </div>
    )
}