import Link from 'next/link';
import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <div className='flex justify-between my-5'>
                <Link href={'/'} className='text-xl'>Zefani</Link>
                <div className='cursor-pointer'>
                    <HiMenuAlt3 size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Header