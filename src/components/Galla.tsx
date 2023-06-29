import styles from '../styles/galla.module.scss';

import galla2 from '../assets/galla/galla-2.jpg';
import galla7 from '../assets/galla/galla-7.jpg';
import galla8 from '../assets/galla/galla-8.jpg';
import galla from '../assets/galla/galla.jpg';
import galla9 from '../assets/galla/galla-9.jpg';
import galla5 from '../assets/galla/galla-5.jpg';
import galla6 from '../assets/galla/galla-6.jpg';
import galla3 from '../assets/galla/galla-3.jpg';

export default function Galla(){
    
    return (
        <div className={styles.galla} id='gallery-section'>
            <img src={galla2} alt="Gallery" className={styles.img2} />
            <img src={galla7} alt="Gallery" className={styles.img7} />
            <img src={galla8} alt="Gallery" className={styles.img8} />
            <img src={galla} alt="Gallery" className={styles.img} />
            <img src={galla9} alt="Gallery" className={styles.img9} />
            <img src={galla5} alt="Gallery" className={styles.img5} />
            <img src={galla6} alt="Gallery" className={styles.img6} />
            <img src={galla3} alt="Gallery" className={styles.img3} />
        </div>
    )
}