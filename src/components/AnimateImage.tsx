"use client"
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react'; // Import useEffect

const AnimateImage = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div ref={ref}> {/* Attach the ref */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : undefined} // Animate if in view
                transition={{ duration: 2 }}
            >
                <Image src="/application.png" alt="it was an icon" width={50} height={50} />

            </motion.div>
        </div>
    );
};

export default AnimateImage;
