import styles from '../styles/about.module.scss';
import about2 from '../assets/about1.jpg';
import about1 from '../assets/about2.jpg';


export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.title}>Our Story</div>
            <div className={styles.main}>
                <div className={styles.imgs}>
                    <img src={about1} alt="The Classic Cut - About Us" className={styles.img1} />
                    <img src={about2} alt="The Classic Cut - About Us" className={styles.img2} />
                </div>
                <div className={styles.content}>
                    <div className={styles.descr}>
                        <span>
                            Established in 2002, The Classic Cut is Chennai's premier destination for impeccable grooming. With over 20 years of expertise, our talented barbers master timeless styles that exude confidence and embrace classic elegance. Nestled in the heart of Chennai, our welcoming shop offers a sanctuary for gentlemen seeking the ultimate self-care experience.
                        </span>
                        <span>
                            At The Classic Cut, we blend modern trends with age-old traditions to deliver exceptional results. Our skilled barbers use top-quality grooming products and provide personalized consultations to understand your unique style goals. From precise haircuts to meticulous beard trims and luxurious shaves, we prioritize attention to detail, ensuring you leave looking and feeling your best. Step into The Classic Cut and experience a world where classic meets contemporary, as our passionate team elevates your style to new heights.
                        </span>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}