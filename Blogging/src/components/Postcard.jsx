import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from "../appwrite/confing";

function Postcard({ post }) {
  if (!post) return null;
  const { $id, title, featuredlmage } = post;
  const imageSrc = featuredlmage 
    ? appwriteService.getFileUrl(featuredlmage) 
    : "/default-placeholder.png";

  return (
    <Link to={`/post/${$id}`}>
      {/* 
        - w-full: fill 100% of viewport width on mobile 
        - px-0: remove all horizontal padding 
        - sm:px-2: add a little padding on ≥640px 
        - sm:max-w-sm lg:max-w-md sm:mx-auto: center & constrain on larger 
      */}
      <div className="w-full px-0 sm:px-2 sm:max-w-sm lg:max-w-md sm:mx-auto my-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
          
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={imageSrc}
              alt={title ? `Cover for ${title}` : "Default cover image"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-3">
            <h2
              className="text-base sm:text-lg md:text-xl font-semibold text-center truncate"
              title={title}
            >
              {title || "Untitled"}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Postcard;
