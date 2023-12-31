import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/logo.jpg'
const Footer = () => {
    return (
        <footer>
            <div className='footer-bg  p-20  max-lg:p-10 max-sm:p-4'  >
                <div className="grid grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-10 justify-evenly items-center  ">
                    <div>
                        <div><img src={logo} alt="ProtechIndia" className='h-38 w-48' /></div>
                        <div className='mt-4 '>
                            <p className='text-white text-lg'>PhoTech India Private Limited is an Engineering and Construction Company, specialized to provide services in the field of Construction, Operation & Maintenance of Refineries, Petrochemicals, Fertilizers and other core industrial sectors.</p>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <h1 className='text-3xl font-bold mb-4 text-white max-lg:text-2xl'>Quick Links</h1>
                            <ul>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/h'>Home</NavLink></li>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/about'>About</NavLink></li>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/services'>Services</NavLink></li>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/work'>Our Work</NavLink></li>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/'>Careers</NavLink></li>
                                <li className='text-2xl link max-lg:text-lg cursor-pointer'><NavLink to='/contact'>Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='text-white'>
                            <h1 className='text-3xl font-bold mb-4 text-white max-lg:text-2xl '>Get In Touch</h1>
                            <p className='text-2xl max-lg:text-lg'>info@photechindia.com</p>
                            <p className='text-2xl max-lg:text-lg'>+91 9512220404</p>
                            <p className='text-2xl max-lg:text-lg'>+91 9512220405</p>
                            <p className='text-2xl max-lg:text-lg'>T-24, Golden Square Near Abc Chokdi Old <br />College Road, Bharuch(392001) Gujarat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-xl text-center text-white footerText p-2'>© Photech IT Technology and Construction. All rights reserved. Designed & Developed By PhoTech Technology.</p>
        </footer>
    )

}

export default Footer
