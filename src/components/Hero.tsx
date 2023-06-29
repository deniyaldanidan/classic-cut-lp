import heroLG from '../assets/hero-lg.jpg';
// import heroMD from '../assets/hero-md.jpg';
// import heroSM from '../assets/hero-sm.jpg';
import styles from '../styles/hero.module.scss';
import { motion, Variants } from 'framer-motion';

const contentVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const titleVariants = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.5, duration: 0, delay: 0.25}}
}

const titleElVars:Variants = {
    hidden: {y:-30, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {duration: 0.5 }}
}

const descVaraint:Variants = {
    hidden: {y:-10, opacity: 0},
    visible: {y:0, opacity: 1, transition: {duration: 0.5, delay: 1.25}}
}

const btnVariant: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.35, delay: 1.75}}
}

export default function Hero() {

    return (
        <div className={styles.hero}>
            <img src={heroLG} alt="The Classic Cut" />
            <motion.div className={styles.content} animate="visible" initial="hidden" variants={contentVariants}>
                <motion.div className={styles.title} variants = {titleVariants}>
                    <motion.span variants={titleElVars}>Elevate Style,</motion.span>
                    <motion.span variants={titleElVars}>Embrace Elegance</motion.span>
                </motion.div>
                <motion.div className={styles.desc} variants={descVaraint}>
                    Timeless elegance and impeccable grooming at The Classic Cut, where style soars to new heights.
                </motion.div>
                <motion.a variants={btnVariant} href="#booking-section" className={styles.cta_btn}>Book an appointment</motion.a>
            </motion.div>
        </div>
    )
}