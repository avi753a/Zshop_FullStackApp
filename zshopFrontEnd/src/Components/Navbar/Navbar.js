import './Navbar.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';


export function NavBar() {

    const [isAuthenticated, authenticate] = useState(false);
    var baseLinks=["Home","Deals","New Arrivals","Shop"]
    var userLinks=[]
    if (isAuthenticated) {

    }
    return (
        <>
            <div className="navbar-container w-100 d-flex flex-row justify-content-between align-items-center">
                <h1 className="font-heading heading-4 text-dark">ZSHOP</h1>
                <div className={`nav-content d-flex flex-column flex-md-row justify-content-between align-items-center h-100 d-none d-md-flex ${isAuthenticated ? 'w-40' : 'w-70'}`}>
                    <p className="t-shadow m-0 fs-5">Home</p>
                    <p className="t-shadow m-0 fs-5">Deals</p>
                    <p className="t-shadow m-0 fs-5">New Arrivals</p>
                    {!isAuthenticated && (
                        <>
                            <p className="t-shadow m-0 fs-5">Sign In</p>
                            <button className="btn btn-dark w-25 fs-6 b-shadow h-100" onClick={()=>{authenticate(true)}}>Sign Up</button>
                        </>
                    )}
                </div>
                {isAuthenticated && (
                    <div className="options-container d-flex flex-container justify-content-between align-items-center w-10 d-none d-md-flex">
                        <span className="icon-search fs-5"></span>
                        <span className="icon-user fs-5"></span>
                        <span className="icon-star-full fs-5"></span>
                        <span className="icon-bag fs-5"></span>
                    </div>
                )}
                <div className='d-flex d-md-none'>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <i className="icon-menu"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Deals</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">New Arrivals</Dropdown.Item>
                            {!isAuthenticated && (<>
                                <Dropdown.Item href="#/action-4">Sign In</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Sign Up</Dropdown.Item>
                            </>)}
                            {isAuthenticated && (<>
                                <Dropdown.Item href="#/action-4">Search</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Favourites</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Cart</Dropdown.Item>

                            </>)}
                          
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        </>
    )


}