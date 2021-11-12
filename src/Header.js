import React, {useContext} from 'react'
import { Navbar } from 'react-bootstrap'

import { Link } from 'react-navi'

const Header = ({text}) => {     
    return <Link href="/"><Navbar.Brand style={{color: "blue"}}><h2>{text}</h2></Navbar.Brand></Link>
}

export default Header 
