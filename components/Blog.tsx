import React from 'react'
import BlogCard from './BlogCard'
import { Tposts } from '@/types/types'

const Blog = () => {
    const posts = [
        {
            id: 1,
            cat: 'Ethics',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled`
        },
        {
            id: 2,
            cat: 'Design',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled`
        }
    ]
    return (
        <div className='w-1/3 mx-auto mt-20'>
            <h1 className='text-xl font-semibold'>Stories</h1>
            <div className='flex gap-6 text-sm text-[#9E8500] my-2'>
                <h5>21 January, 2024</h5>
                <h5>3 stories</h5>
            </div>

            <div className='grid gap-4 mt-20'>
                {posts.map((post: Tposts) => (
                    <BlogCard
                        id={post.id}
                        title={post.title}
                        desc={post.desc}
                        cat={post.cat}
                    />
                ))}
            </div>
        </div>
    )
}

export default Blog