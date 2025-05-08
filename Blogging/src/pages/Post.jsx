import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/confing";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);



  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((postData) => {
            if (postData) {
            setPost(postData);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const isAuthor = post && userData ? post.userid === userData.$id : false;

  return post ? ( 
    <div className="max-w-screen-xl mx-auto my-10 p-4 bg-gray-600 rounded-xl shadow-md mt-20">
      <Container>
        <div className="relative">
          {post.featuredlmage && (
            <img
              src={appwriteService.getFileUrl(post.featuredlmage)}
              alt={post.title}
              className="w-100 h-auto rounded-xl object-cover"
            />
          )}
          <div className="absolute top-4 right-4 flex gap-2">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500"  >Edit</Button>
            </Link>
            <Button
              bgColor="bg-red-500"
              onClick={() =>
                appwriteService
                  .deletePost(post.$id)
                  .then(() => navigate("/"))
                  .catch((err) => console.error("Delete error:", err))
              }
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="p-4 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-base md:text-lg">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="text-center py-10 text-gray-300">Loading post...</div>
  );
}
