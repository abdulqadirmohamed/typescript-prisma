import Link from 'next/link'
import React from 'react'

const BlogCard = ({ title, desc, cat, id }) => {
    return (
        <Link href={`post/${id}`} className='flex flex-col group'>
            <span className='text-sm text-[#9E8500]'>{cat}</span>
            <h1 className='text-lg font-semibold group-hover:underline'>{title}</h1>
            <p className='text-sm my-2'>{desc}</p>
            <div className='flex gap-6 text-sm text-[#9E8500] my-2'>
                <h5>21 January, 2024</h5>
                <h5>3 min</h5>
            </div>
        </Link>
    )
}

export default BlogCard