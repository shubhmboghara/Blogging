📝 TechBlogging
A modern tech blogging platform built with React, Appwrite, and Tailwind CSS. It allows users to read, write, and manage blog posts seamlessly. The application is deployed on Netlify and accessible at techblogging.netlify.app.

🚀 Live Demo
👉 https://techblogging.netlify.app

📸 Screenshots


🧰 Tech Stack
Frontend: React, Tailwind CSS, Vite

Backend: Appwrite (Authentication, Database, Storage)

Deployment: Netlify
vm-webdev-tech-blog.netlify.app

📂 Features
Home Page: Displays all blog posts with featured images.

Authentication: User registration and login functionality.

Add Post: Authenticated users can create new posts with a title, content, slug, status, and featured image.

Edit/Delete Post: Users can edit or delete their own posts.

Rich Text Editor: Integrated RTE for composing content.

Responsive Design: Optimized for various devices.

🛠️ Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/techblogging.git
cd techblogging
Install dependencies:

bash
Copy
Edit
npm install
Configure Appwrite:

Ensure you have an Appwrite project set up. Create a .env file in the root directory and add your Appwrite credentials:

env
Copy
Edit
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
Run the development server:

bash
Copy
Edit
npm run dev
📁 Folder Structure
plaintext
Copy
Edit
techblogging/
├── public/
├── src/
│   ├── appwrite/
│   │   └── config.js
│   ├── components/
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   ├── Button.jsx
│   │   └── RTE.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   └── EditPost.jsx
│   ├── redux/
│   │   └── store.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
✅ Environment Variables
Ensure the following environment variables are set in your .env file:

VITE_APPWRITE_ENDPOINT

VITE_APPWRITE_PROJECT_ID

VITE_APPWRITE_DATABASE_ID

VITE_APPWRITE_COLLECTION_ID

VITE_APPWRITE_BUCKET_ID

