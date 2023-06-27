import styles from '../styles/services.module.scss';
import services from '../assets/data/services.json';

export default function Services(){
    return (
        <div className={styles.services}>
            <div className={styles.title}>Our Services</div>
            <div className={styles.options}>
                {
                    services.map(serv=>(
                        <div key={serv.id} className={styles.opt}>
                            <div className={styles.upper}>
                                <div className={styles.name}>{serv.name}</div>
                                <div className={styles.price}>{typeof serv.price === "number" ? `₹ ${serv.price}` : serv.price}</div>
                            </div>
                            <div className={styles.lower}>{serv.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}