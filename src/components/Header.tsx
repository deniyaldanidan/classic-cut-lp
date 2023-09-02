import { useMediaQuery } from 'react-responsive';
import logo from '../assets/header-logo.svg';
import styles from '../styles/header.module.scss';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

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

    const isTablet = useMediaQuery({ query: '(max-width: 800px)' });
    const [mblActive, setMblActive] = useState<boolean>(false);
    const mblRef = useRef<HTMLDivElement>(null);

    useClickOutside(mblRef, () => {
        setMblActive(false);
    })

    return (
        <div className={styles.header}>
            <motion.img className={styles.logo} src={logo} alt="The Classic Cut" variants={logoVars} initial="hidden" animate="visible" />
            <motion.div className={styles.menus} variants={menusParentVars} initial="hidden" animate="visible">
                {
                    isTablet ? (
                        <div className={styles.mobile_header} ref={mblRef}>
                            <div className={styles.mbl_hdr_label} onClick={() => setMblActive(prev => !prev)}>Menu</div>
                            <AnimatePresence>
                                {
                                    mblActive ? (
                                        <motion.div className={styles.mbl_hdr_drp} style={{ x: "-50%" }} onClick={() => setMblActive(false)} initial={{ y: "-15px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-15px", opacity: 0 }} >
                                            <a href="#services-section" className={styles.mbl_hdr_opt} >Services</a>
                                            <a href="#whyus-section" className={styles.mbl_hdr_opt} >Why Us</a>
                                            <a href="#about-section" className={styles.mbl_hdr_opt} >About us</a>
                                            <a href="#gallery-section" className={styles.mbl_hdr_opt} >Gallery</a>
                                        </motion.div>
                                    ) : ""
                                }
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
                            <motion.a className={styles.menu} href="#services-section" variants={menuChildVars} >Services</motion.a>
                            <motion.a className={styles.menu} href="#whyus-section" variants={menuChildVars} >Why US</motion.a>
                            <motion.a className={styles.menu} href='#about-section' variants={menuChildVars} >About us</motion.a>
                            <motion.a className={styles.menu} href="#gallery-section" variants={menuChildVars} >Gallery</motion.a>
                        </>
                    )
                }
                <motion.a className={styles.cta_btn} variants={menuChildVars} href="#booking-section" >Book now</motion.a>
            </motion.div>
        </div>
    )
}