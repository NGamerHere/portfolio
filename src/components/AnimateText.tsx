"use client"
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef} from 'react';
interface AnimateProps{
   text:string;
   className?:string
}
const AnimateText = ({text,className}:AnimateProps) => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div ref={ref}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : undefined} // Animate if in view
                transition={{ duration: 2 }}
            >
               <p className={className}>{text}</p>

            </motion.div>
        </div>
    );
};

export default AnimateText;
