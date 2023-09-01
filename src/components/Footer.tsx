import styles from '../styles/footer.module.scss';
import footerlogo from '../assets/footer-logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src={footerlogo} alt="Logo of The Classic Cut" className={styles.footer_logo} />
            <div className={styles.hrs}>
                <div className={styles.head}>Working Hours</div>
                <div className={styles.hrs_contents}>
                    <span className={styles.hr_label}>Mon-Fri: </span> <span>7.00 AM - 10.00 PM</span>
                    <span className={styles.hr_label}>Saturday: </span> <span>9.00 AM - 8.00 PM</span>
                    <span className={styles.hr_label}>Sunday: </span> <span>Closed</span>
                </div>
            </div>
            <div className={styles.addr}>
                <div className={styles.head}>Location</div>
                <div className={styles.addr_content}>
                    <span>123, Main Street, Park Avenue</span>
                    <span>Chennai, Tamil Nadu, India.</span>
                    <span>+91 98765 43210</span>
                </div>
            </div>
            <div className={styles.socials}>
                <div className={styles.head}>Socials</div>
                <div className={styles.socials_content}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}