import React from 'react';
import Image from 'next/image';
import Logo from '../assets/dgital_logo.webp';

export default function Header() {
    return (
        <header className="flex flex-col items-center">
            <Image 
                src={Logo}
                alt="logo" 
                width={200} 
                height={200} 
                className='m-4'
            />
            <div className="mt-4">
                <button className="btn btn-primary">Primary</button>
            </div>
        </header>
    );
}
