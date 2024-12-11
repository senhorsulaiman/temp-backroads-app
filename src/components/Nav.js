import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
const Nav = () => {
  return (
    <div>


        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
                </button>
            </div>
            <PageLinks parentClass="nav-links" itemClass='nav-link'/>
            {/* <ul className="nav-links" id="nav-links">
                {pageLinks.map((pageLink)=>{

                    return <li key={pageLink.id} href={pageLink.href} className='nav-link'><a hr>{pageLink.text}</a></li>
                })}
                </ul> */}
                

                <ul className="nav-icons">
                     {socialLinks.map((link)=>{
                        const {id,href,icon} =link;
                        return( <li  key={id} target="_blank" className="nav-icon">
                                <a href={href} target="_blank" rel="noreferrer"> <i className={icon}></i></a>
                        </li>)
                })}
                    
                </ul>
        </div>
        </nav>
    </div>
  )
}

export default Nav