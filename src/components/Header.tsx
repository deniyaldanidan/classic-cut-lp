import logo from '../assets/header-logo.svg';
import styles from '../styles/header.module.scss';
import { Variants, motion } from 'framer-motion';

const logoVars: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const menusParentVars: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, duration: 0 } }
}

const menuChildVars: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
}

export default function Header() {
    return (
        <div className={styles.header}>
            <motion.img className={styles.logo} src={logo} alt="The Classic Cut" variants={logoVars} initial="hidden" animate="visible" />
            <motion.div className={styles.menus} variants={menusParentVars} initial="hidden" animate="visible">
                <motion.a className={styles.menu} href='#about-section' variants={menuChildVars} >About us</motion.a>
                <motion.a className={styles.menu} href="#services-section" variants={menuChildVars} >Services</motion.a>
                <motion.a className={styles.menu} href="#whyus-section" variants={menuChildVars} >Why US</motion.a>
                <motion.a className={styles.menu} href="#gallery-section" variants={menuChildVars} >Gallery</motion.a>
                <motion.a className={styles.cta_btn} variants={menuChildVars} href="#booking-section" >Book now</motion.a>
            </motion.div>
        </div>
    )
}