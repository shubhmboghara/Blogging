# 📝 TechBlogging

**TechBlogging** is a modern and responsive blogging platform built with **React**, **Tailwind CSS**, and **Appwrite**. It allows users to sign up, log in, create rich blog posts with images, and manage their content with ease.

### 🌐 Live Demo  
🚀 [Visit Now → techblogging.netlify.app](https://techblogging.netlify.app)

---

## 🧰 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS  
- **Backend**: Appwrite (Authentication, Database, File Storage)  
- **Deployment**: Netlify  

---

## 🔥 Features

- ✅ **Home Page** – Displays all published blog posts  
- 🔐 **Authentication** – Sign up and log in securely with Appwrite  
- 📝 **Create Post** – Add a post with title, content (RTE), slug, status, and image  
- ✏️ **Edit/Delete Post** – Users can edit or remove their own posts  
- 🖼️ **Image Upload** – Upload a featured image using Appwrite Bucket  
- 📱 **Responsive Design** – Works perfectly on all screen sizes  

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/techblogging.git
cd techblogging
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Appwrite

Ensure your Appwrite instance includes:

* ✅ Project with authentication enabled
* ✅ Database with a `posts` collection (fields: title, slug, content, status, featuredImage, userId)
* ✅ Bucket for image uploads

### 4. Configure `.env` File

Create a `.env` file in the root with:

```env
VITE_APPWRITE_ENDPOINT=https://<your-appwrite-endpoint>
VITE_APPWRITE_PROJECT_ID=<your-project-id>
VITE_APPWRITE_DATABASE_ID=<your-database-id>
VITE_APPWRITE_COLLECTION_ID=<your-collection-id>
VITE_APPWRITE_BUCKET_ID=<your-bucket-id>
```

### 5. Run the App

```bash
npm run dev
```

App will run locally at: `http://localhost:5173`

---

## 📁 Project Structure

```
techblogging/
├── public/
├── src/
│   ├── appwrite/           # Appwrite service config
│   ├── components/         # Reusable UI components (Input, Select, Button, RTE)
│   ├── pages/              # Route components (Home, Login, Signup, AddPost, etc.)
│   ├── redux/              # Redux store and slices
│   ├── App.jsx             # Main app layout
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json
└── vite.config.js
```

---

## ✅ Environment Variables

These are required in your `.env` file:

* `VITE_APPWRITE_ENDPOINT`
* `VITE_APPWRITE_PROJECT_ID`
* `VITE_APPWRITE_DATABASE_ID`
* `VITE_APPWRITE_COLLECTION_ID`
* `VITE_APPWRITE_BUCKET_ID`

---

## 📦 Deployment

1. Push your repo to GitHub
2. Connect to **Netlify**
3. Add environment variables via Netlify dashboard
4. Deploy 🚀

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 💻 Author

Made by [Shubham Boghara](https://github.com/shubhmboghara)
