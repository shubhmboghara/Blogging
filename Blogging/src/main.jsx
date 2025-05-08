import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Addpost from './pages/Addpost'
import Allpost from './pages/Allpost'
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import AuthLayout from './components/AuthLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Allpost />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Addpost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
