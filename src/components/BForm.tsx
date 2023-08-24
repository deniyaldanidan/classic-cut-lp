import styles from '../styles/bform.module.scss';
import React, { FormEvent, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '../hooks/useClickOutside';
import { AiFillCloseCircle } from 'react-icons/ai';

const services = [
    {
        label: "Classic Haircut",
        value: "haircut"
    },
    {
        label: "Beard Trim",
        value: "beard-trim"
    },
    {
        label: "Mustache Trim",
        value: "mustache-trim"
    },
    {
        label: "Hot Towel Shave",
        value: "shave"
    },
    {
        label: "Skin Care & Facials",
        value: "facials-n-skincare"
    },
    {
        label: "Head & Scalp Masssage",
        value: "massage"
    }
];

export default function BForm() {
    const [mulSelActive, setMulSelActive] = useState<boolean>(false);
    const [mulSelVals, setMulSelVals] = useState<string[]>([]);

    const mulselRef = useRef<HTMLDivElement>(null);
    const custSelRef = useRef<HTMLDivElement>(null);

    useClickOutside(custSelRef, () => {
        setMulSelActive(false)
    })

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log("The Form is submitted")
    }

    function handleMulSelClick(e: React.MouseEvent<HTMLDivElement>): void {
        if (e.target === mulselRef.current) {
            setMulSelActive(prev => !prev)
        }
    }

    function handleSelect(val: string) {
        setMulSelVals(prev => {
            const isSelected = prev.find(srv => srv === val);
            if (!isSelected?.length) {
                const isValidService = services.find(serv => serv.value === val)?.value?.length;
                if (isValidService) {
                    return [...prev, val]
                }
            }
            return prev;
        });
    }

    function removeServ(serv: string) {
        setMulSelVals(prev => prev.filter(val => val !== serv))
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
                    <label htmlFor="phone">Mobile</label>
                    <input type="tel" maxLength={20} id='phone' placeholder='+91-987654321' required />
                </div>
                <div className={styles.inp_grp}>
                    <label htmlFor="timing">Timings</label>
                    <input type="datetime-local" id="timing" min={new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(":"))} required />
                </div>
                <div className={styles.inp_grp}>
                    <label>Services</label>
                    <div className={styles.cust_select} ref={custSelRef}>
                        <div className={styles.cst_sel_display} onClick={handleMulSelClick} ref={mulselRef}>
                            {mulSelVals.length ? (mulSelVals.map(serv => (
                                <div key={serv} className={styles.cust_sel_val}>
                                    <span>{services.find(srv => srv.value === serv)?.label}</span>
                                    <AiFillCloseCircle onClick={() => removeServ(serv)} />
                                </div>
                            ))) : "Choose required services"}
                        </div>
                        <AnimatePresence>
                            {mulSelActive ? (
                                <motion.div className={styles.cst_sel_drp} style={{ x: "-50%", opacity: 0 }} initial={{ y: "-10px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-10px", opacity: 0 }}>
                                    {
                                        services.map(serv => <span key={serv.value} onClick={() => handleSelect(serv.value)}>{serv.label}</span>)
                                    }
                                </motion.div>
                            ) : ""}
                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.inp_grp}>
                    <label htmlFor="note">Note</label>
                    <textarea id="note" placeholder='Request any custom service in here'></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}