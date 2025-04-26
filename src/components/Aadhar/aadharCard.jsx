'use client'

import { motion } from "motion/react"
import FrontFace from "./front"
import BackFace from "./back"
import { useState } from "react";

/**
 * @typedef {Object} Name
 * @property {string} hindi - Name in Hindi script.
 * @property {string} english - Name in English.

 * @typedef {Object} ID
 * @property {string} aadhar_no - 12-digit Aadhaar number (formatted).
 * @property {string} vid - 16-digit VID number (formatted). 
 * 
 * * @typedef {Object} Address
 * @property {string} hindi - address in Hindi script.
 * @property {string} english - address in English.
 *

 * @typedef {Object} Info
 * @property {Name} name - The person's name in multiple languages.
 * @property {Date} dob - The person's date of birth.
 * @property {string} gender - The person's gender
 * @property {string} mobile - 10-digit mobile phone number.
 * @property {{ aadhar: ID }} id - Aadhaar ID details.
 * @property {{ aadhar: ID }} id - Aadhaar ID details.
 * @property {Address} address - The person's address in multiple languages.
 */


/**
 * Aadhaar Card UI Component
 * @param {{ info: Info }} props
 */

export default function AadharCard({ info }) {
    const [isFlipped, setIsFlipped] = useState(false);


    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (

        <div className="flex justify-center items-center w-full h-full">
            <div className="perspective-[1000px] h-[430] w-[700]">
                <motion.div
                    className={`relative w-full h-full transition-transform duration-700 ease-in-out cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={handleFlip}
                    onMouseLeave={handleFlip}
                >
                    <div
                        className="absolute w-full h-full "
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <FrontFace data={info} />
                    </div>
                    <div
                        className="absolute w-full h-full"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        }}
                    >
                        <BackFace data={info} />
                    </div>
                </motion.div>
            </div>
        </div >

    )
}
