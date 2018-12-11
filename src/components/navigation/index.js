import React from 'react'
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router'

const Navigation = ({categories, activeCategoryId}) => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link to='/'className="navbar-brand">InternetShop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link to='/' className="nav-link">Link</Link>
            </li>
            <li className="nav-item dropdown">
            <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='/' className="dropdown-item">Action</Link>
                <Link to='/' className="dropdown-item">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link to='/' className="dropdown-item">Something else here</Link>
            </div>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input type="search" className="form-control mr-sm-2" placeholder="email" aria-label="search" />
                <input type="search" className="form-control mr-sm-2" placeholder="password" aria-label="search" />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
            </form>
            </div>
        </nav>
    </div>
)

export default compose(
    withRouter,
    connect((state: AppState, ownProps) => {
        return ({

        });
    }, {

    }),
)(Navigation)
