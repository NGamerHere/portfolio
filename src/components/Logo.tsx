
import Image from 'next/image';

const Logo = ({ width, height }) => {
    return (
        <Image
            src="/logo.png"
            alt="Your company logo"
            width={width || 120}
            height={height || 45}
            priority
        />
    );
};

export default Logo;
