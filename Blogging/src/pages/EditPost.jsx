import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/confing'; 

import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    if (!slug) {
      console.error("No slug provided in URL");
      navigate('/');
      return;
    }
    
    
    appwriteService.getPost(slug)
      .then((data) => {
        if (data) {
          setPost(data);
          
        } else {
          console.error("No post data found for slug:", slug);
          navigate('/');
        }
      })
      .catch((err) => {
        console.error("Error fetching post data:", err);
        navigate('/');
      });
  }, [slug, navigate]);

  if (!post) {
    return <div className="py-8 text-center">Loading post...</div>;
  }


  return (
    <div className="py-8 mt-10">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
