import styles from '../styles/services.module.scss';
import services from '../assets/data/services.json';
import {Variants, motion} from 'framer-motion';


const myVars:Variants = {
    hidden: {opacity:0, y:-20},
    visible: {opacity: 1, y:0, transition: {duration:1}}
}

export default function Services(){
    return (
        <div className={styles.services} id="services-section">
            <motion.div className={styles.title} variants={myVars} initial="hidden" whileInView="visible" viewport={{once:true}} >Our Services</motion.div>
            <div className={styles.options}>
                {
                    services.map(serv=>(
                        <motion.div key={serv.id} className={styles.opt} variants={myVars} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.25}}>
                            <div className={styles.upper}>
                                <div className={styles.name}>{serv.name}</div>
                                <div className={styles.price}>{typeof serv.price === "number" ? `₹${serv.price}` : serv.price}</div>
                            </div>
                            <div className={styles.lower}>{serv.description}</div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}