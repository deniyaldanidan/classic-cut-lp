import { FormEvent } from 'react';
import styles from '../styles/bform.module.scss';


export default function BForm(){


    const submitHandler = (e:FormEvent)=>{
        e.preventDefault();
        console.log("The Form is submitted")
    }

    return (
        <div className={styles.bform} id="booking-section">
            <div className={styles.title}>Book An Appointment</div>
            <form className={styles.main} onSubmit={submitHandler}>
                <div className={styles.inp_grp}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Enter your name here' required />
                </div>
                <div className={styles.inp_grp}>
                    <label htmlFor="timing">Timings</label>
                    <input type="datetime-local" id="timing" min={new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))} required />
                </div>
                <div className={styles.inp_grp}>
                    <label>Services</label>
                    <input type="text" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}