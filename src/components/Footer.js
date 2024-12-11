import React from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'

export const Footer = () => {
  return (
    
    <div>
          <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass='footer-link'/>
          <ul className="footer-icons">

             {socialLinks.map((sl)=>{

                return(
                   <li key={sl.id}>
                    <a href={sl.href} target="_blank" rel="noreferrer" className="footer-icon">
                        <i className={sl.icon}></i>
                        
                    </a>
                   </li>

                )
             })}
          </ul>
          <p className="copyright">
            copyright Backroads travel tours company
            <span id="date"></span> all rights reserved
          </p>
         
          
        </footer>
    </div>
  )
}
