import React from 'react'
import { Container, LogoutBtn, Logo } from '../index';
import { Form, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import authService from '../../appwrite/auth';


function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
   
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500 fixed w-full h-[9dvh] z-500'>
      <Container>
        <nav className='flex'>

          <div className="mr-4">

            <Link to='/'>
              <Logo className='w-32 relative bottom-10 p-2 m-2' />
            </Link>

          </div>
          <ul className='flex ml-auto px-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>

                </li>

              ):null 
     )}



         
          {authStatus && (
             <li>
               <LogoutBtn />
             </li>
          )}
          </ul>
        </nav>

      </Container>

    </header>
  )
}

export default Header;
