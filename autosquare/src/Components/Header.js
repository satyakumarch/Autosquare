import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';  
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
 import './header.css';
const header=()=>{
    return(
        <div  className="header">
            <div className='header1' >
            <h1 className='h1'>AutoSquare</h1>
            <h2 className='h2'>(888)748-0882|Mon-Fri:8AM-7PM EST
            </h2>
            <ul className='search'>
                    <li className='gap'><FontAwesomeIcon icon={faSearch} /></li>
                    <li className='gap'><FontAwesomeIcon icon={faCartShopping} /></li>
                    <li className='gap'><FontAwesomeIcon icon={faHouse} /></li>
                    <li className='gap'><FontAwesomeIcon icon={faUserAlt} /></li>
                    
            </ul>

            </div>
            

        </div>
    )
};
export default header;