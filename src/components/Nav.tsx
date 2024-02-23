// components/Nav.tsx

import Link from 'next/link';
import React from "react";
import Logo from "@/components/Logo";
const Nav: React.FC = () => {
    return (
        <nav className="bg-white p-4 fixed top-0 left-0 w-full z-10">
            <div className="flex justify-between items-center container mx-auto">
                <div className="text-gray-900 flex items-center">
                    <Logo />

                </div>
                <div className="flex space-x-4">
                    <Link href="/" passHref>
                        <span className="hover:text-gray-700 cursor-pointer">Home</span>
                    </Link>
                    <Link href="/works" passHref>
                        <span className="hover:text-gray-700 cursor-pointer">works</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="hover:text-gray-700 cursor-pointer">Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
