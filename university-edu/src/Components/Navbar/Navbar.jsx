import './Navbar.css';


import {Book } from 'phosphor-react'


const Navbar = () => {
  return (
    <nav className='container'>
      {/* <img  src={<Book />} /> */}
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