import heroLG from '../assets/hero-lg.jpg';
import heroMD from '../assets/hero-md.jpg';
import heroSM from '../assets/hero-sm.jpg';
import styles from '../styles/hero.module.scss';


export default function Hero() {



    return (
        <div className={styles.hero}>
            <img src={heroLG} alt="The Classic Cut" />
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Elevate Style,</span>
                    <span>Embrace Elegance</span>
                </div>
                <div className={styles.desc}>
                    Timeless elegance and impeccable grooming at The Classic Cut, where style soars to new heights.
                </div>
                <button>Book an appointment</button>
            </div>
        </div>
    )
}