import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.bgColorClass}`}>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>{props.title}</a>
                {/* <Link className='navbar-brand' to="/">{props.title}</Link> */}
                <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNavDropdown'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link to="/" className="nav-link">Home</Link> */}
                            <a to="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/about" className="nav-link">About</Link> */}
                            <a href="#" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button onClick={()=>{props.setBGColorClass('success')}} className='btn btn-success'>GREEN</button>
                    <button onClick={()=>{props.setBGColorClass('danger')}} className='btn btn-danger'>RED</button>
                    <button onClick={()=>{props.setBGColorClass('primary')}} className='btn btn-primary'>BLUE</button>
                </div>
                <div className={`form-check form-switch d-flex text-${props.mode==='dark'?'light':'dark'}`}>
                    <label className="form-check-label" style={{marginRight:2.775+'rem'}}  htmlFor="flexSwitchCheckDefault">Light</label>
                    <input className="form-check-input" onChange={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" style={{marginLeft:0.025+'rem'}} htmlFor="flexSwitchCheckDefault">Dark</label>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Site-title',
}