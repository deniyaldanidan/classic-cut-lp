import styles from '../styles/about.module.scss';
import about2 from '../assets/about1.jpg';
import about1 from '../assets/about2.jpg';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const descrParVar: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } }
}

const descrChildVar: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
}

const img1DeskVar: Variants = {
    initial: { x: -20 },
    inView: { x: 0, transition: { duration: 1.5 } }
}

const img2DeskVar: Variants = {
    initial: { x: -105, y: 37.5 },
    inView: { x: -125, y: 37.5, transition: { duration: 1.5 } }
}

const imgMobVar: Variants = {
    initial: {x: -30, opacity:0},
    inView: {x: 0, opacity:1, transition: {duration: 1.5}}
}

export default function About() {

    const isMobile = useMediaQuery({ query: "(max-width: 485px)" });

    return (
        <div className={styles.about} id='about-section'>
            <motion.div className={styles.title} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} viewport={{ once: true }} >Our Story</motion.div>
            <div className={styles.main}>
                <div className={styles.imgs}>
                    <motion.img src={about1}
                        alt="The Classic Cut - About Us"
                        className={styles.img1}
                        variants={isMobile ? imgMobVar : img1DeskVar}
                        initial="initial"
                        whileInView="inView"
                        viewport={{once: isMobile}}
                    />
                    <motion.img src={about2}
                        alt="The Classic Cut - About Us"
                        className={styles.img2}
                        variants={isMobile ? imgMobVar : img2DeskVar}
                        initial="initial"
                        whileInView="inView"
                        viewport={{once: isMobile}}
                    />
                </div>
                <div className={styles.content}>
                    <motion.div className={styles.descr} variants={descrParVar} initial="hidden" whileInView="visible" viewport={{ amount: 0.1, once: true }}>
                        <motion.span variants={descrChildVar} >
                            Established in 2002, The Classic Cut is Chennai's premier destination for impeccable grooming. With over 20 years of expertise, our talented barbers master timeless styles that exude confidence and embrace classic elegance. Nestled in the heart of Chennai, our welcoming shop offers a sanctuary for gentlemen seeking the ultimate self-care experience.
                        </motion.span>
                        <motion.span variants={descrChildVar}>
                            At The Classic Cut, we blend modern trends with age-old traditions to deliver exceptional results. Our skilled barbers use top-quality grooming products and provide personalized consultations to understand your unique style goals. From precise haircuts to meticulous beard trims and luxurious shaves, we prioritize attention to detail, ensuring you leave looking and feeling your best. Step into The Classic Cut and experience a world where classic meets contemporary, as our passionate team elevates your style to new heights.
                        </motion.span>
                    </motion.div>
                    <a href="#booking-section" className={styles.cta_btn}>Book Now</a>
                </div>
            </div>
        </div>
    )
}