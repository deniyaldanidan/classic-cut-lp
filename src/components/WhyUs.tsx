import whyus from '../assets/whyus.jpg';
import star from '../assets/star.svg';
import styles from '../styles/why-us.module.scss';
import {Variants, motion} from 'framer-motion';

const slideDownVars:Variants = {
    hidden: {opacity: 0, y:-20},
    visible: {opacity: 1, y:0, transition: {duration:1}}
}

const fadeIn:Variants = {
    hidden: {opacity:0},
    visible: {opacity: 1, transition: {duration:0.45}}
}

export default function WhyUs() {
    return (
        <div className={styles.whyus} id="whyus-section">
            <motion.div className={styles.title} variants={slideDownVars} initial="hidden" whileInView="visible" viewport={{once: true}}>Why Choose Us?</motion.div>
            <div className={styles.main}>
                <motion.img src={whyus} alt="Why Choose Us?" className={styles.main_img} initial={{opacity:0, x:30}} whileInView={{opacity: 1, x:0, transition: {duration:1}}} viewport={{once:true, amount:0.25}}/>
                <div className={styles.contents}>
                    <motion.div className={styles.descr} variants={slideDownVars} initial="hidden" whileInView="visible" viewport={{once: true}}>Choose us for exceptional grooming services, personalized attention, and a welcoming atmosphere that will leave you looking and feeling your best.</motion.div>
                    <motion.div className={styles.qualities} transition={{staggerChildren:0.5}} initial="hidden" whileInView="visible" viewport={{once:true}} >
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Expert Barbers</span></motion.div>
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Impeccable Quality</span></motion.div>
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Personalized Service</span></motion.div>
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Welcoming Atmosphere</span></motion.div>
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Attention to Detail</span></motion.div>
                        <motion.div className={styles.quality} variants={fadeIn} viewport={{once:true}} ><img src={star} alt="star" /><span>Customer Satisfaction</span></motion.div>
                    </motion.div>
                    <a href='#booking-section' className={styles.cta_btn}>Book Now</a>
                </div>
            </div>
        </div>
    )
}