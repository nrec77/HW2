import React, {useContext} from 'react'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi'
import { Navbar, Nav, Container } from 'react-bootstrap'
import UserBar from '../User/UserBar'
import Header from '../Header'

export default function HeaderBar () {

    const {state} = useContext(StateContext)
    const {user} = state

    return (
        <>
        <Navbar bg="clear" expand="lg">
        <Container>
          <Navbar.Brand href="/"><br /><Header text="Home" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link href="/users"><h3> Users </h3></Link></Nav.Link>
              {user.username && <Nav.Link><Link href="/todo/create"><h3> Create New Todo </h3></Link></Nav.Link>}
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        <hr />
        </>


    )
}