import { motion } from 'framer-motion'
import { cardAnimation } from './animation'
import { Object } from '../../types/type'
const Frontend: React.FC<Object> = (props) => {
    return (
        <>
            <motion.div
                className='skills_card'
                variants={cardAnimation}
                initial={'initialValue'}
                whileInView={'inView'}
                viewport={{ once: false, amount: 0.8 }}
            >
                <span className='skills_icon'>{props.icon}</span>
                <h5>{props.name}</h5>
            </motion.div>
        </>
    )
}

export default Frontend
