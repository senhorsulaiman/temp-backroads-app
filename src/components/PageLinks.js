import React from 'react'
import { pageLinks } from '../data';

function PageLinks({parentClass,itemClass}) {
  return (
    <ul className={parentClass}>
    {pageLinks.map((pageLink)=>{
      const {id,href,text}=pageLink;

      return <li key={id} ><a href={href} className={itemClass} target="_blank" rel="noreferrer">{text}</a></li>
      })}
      
    </ul>
  )
}

export default PageLinks