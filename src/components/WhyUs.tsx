import whyus from '../assets/whyus.jpg';
import star from '../assets/star.svg';
import styles from '../styles/why-us.module.scss';

export default function WhyUs() {
    return (
        <div className={styles.whyus}>
            <div className={styles.title}>Why Choose Us?</div>
            <div className={styles.main}>
                <img src={whyus} alt="Why Choose Us?" className={styles.main_img} />
                <div className={styles.contents}>
                    <div className={styles.descr}>Choose us for exceptional grooming services, personalized attention, and a welcoming atmosphere that will leave you looking and feeling your best.</div>
                    <div className={styles.qualities}>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Expert Barbers</span></div>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Impeccable Quality</span></div>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Personalized Service</span></div>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Welcoming Atmosphere</span></div>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Attention to Detail</span></div>
                        <div className={styles.quality}><img src={star} alt="star" /><span>Customer Satisfaction</span></div>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}