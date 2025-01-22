import { useEffect, useState } from 'react';
import './Navbar.css';


import {Book } from 'phosphor-react'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 100) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   })
  // }, [])


  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Book className='logo' size={52} />

      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}


export default Navbar;