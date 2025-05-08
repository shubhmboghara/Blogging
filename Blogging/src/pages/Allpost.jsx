import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/confing'
import { Container, Postcard } from '../components';


function Allpost() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }


        )
    }, [])

    return (
        <div className='w-full py-8 mt-20'>
        <Container className="px-0 sm:px-4">
  <div className="flex flex-wrap gap-4">
    {posts.map(post => (
      <div
        key={post.$id}
        className="
          p-2
          w-full
          sm:w-1/2
          md:w-1/3
          lg:w-1/4
        "
      >
        <Postcard post={post} />
      </div>
    ))}
  </div>
</Container>


        </div>
    )
}

export default Allpost