import styles from '../styles/copyright.module.scss'


export default function Copyright(){
    return (
        <div className={styles.copyright_section}>
            <span>&copy; Copyright 2023. <a href="https://danithedev.tech">Dani's Products.</a></span>
            <span>All rights reserved.</span>
        </div>
    )
}