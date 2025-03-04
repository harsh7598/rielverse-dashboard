'use client';

import { Header } from '@/components';
import { blogPosts } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  image?: string;
}

const Blog = () => {
  const [posts] = useState(blogPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  };

  return (
    <div className='w-full bg-gradient-to-b from-[#98bae3] to-transparent h-60 bg-white'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full flex justify-center pt-20 md:pt-30 lg:pt-40 px-4 md:px-8 lg:px-16 min-h-screen'>
        <div className='container mx-auto px-6'>
          {!selectedPost ? (
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className='bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-[300px] flex flex-col justify-between'
                  onClick={() => setSelectedPost(post)}>
                  <div>
                    <h2 className='text-2xl font-semibold mb-2 text-gray-900'>
                      {post.title}
                    </h2>
                    <p className='text-gray-600 mb-4'>
                      {truncateText(post.description, 150)}{' '}
                      {post.description.length > 150 && (
                        <span className='text-blue-500 hover:underline mt-2 inline-block'>
                          Read more
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='bg-white p-6 rounded-2xl shadow-xl'>
              <button
                onClick={() => setSelectedPost(null)}
                className='mb-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors'>
                <span className='mr-2'>←</span> Back to Blogs
              </button>
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className='w-full h-60 object-cover rounded-xl mb-6'
                />
              )}
              <h3 className='text-4xl font-bold mb-4 text-gray-900'>
                {selectedPost.title}
              </h3>
              <div
                className='prose prose-lg max-w-none text-gray-700'
                dangerouslySetInnerHTML={{
                  __html: selectedPost.fullDescription,
                }}></div>
              <p className='text-gray-400 text-sm mt-6'>{selectedPost.date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
