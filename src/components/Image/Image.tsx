import { useState } from 'react'
import {
    azura0,
    azura1,
    azura2,
    azura3,
    azura4,
    azura5,
    azura6,
    azura7,
    azura8,
    azura9,
} from '../../assets/azura/index'
import { motion } from 'framer-motion'
const Image = () => {
    const [azura, setAzura] = useState([
        azura0,
        azura1,
        azura2,
        azura3,
        azura4,
        azura5,
        azura6,
        azura7,
        azura8,
        azura9,
    ])
    const [azNo, setAzNo] = useState(0)
    const clickHandler = () => {
        if (azNo >= azura.length - 1) {
            setAzNo(0)
            return
        }
        setAzNo((pre) => pre + 1)
    }
    return (
        <>
            <motion.img
                initial={{ opacity: 1, scale: 1 }} // Change initial values to skip animation on first
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 1.3, opacity: 0.8 }} // Add tap animation
                transition={{ duration: 0.1, stiffness: 300 }}
                src={azura[azNo]}
                alt={`azura + ${azNo}`}
                onClick={clickHandler}
                loading='lazy'
            />
        </>
    )
}

export default Image
