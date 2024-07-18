import React, { Fragment, useState } from 'react';
import '../navbar/navbar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../modules/actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ logout, isAuthenticated }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const guestLinks = () => (
    <Fragment>
      <div className='link-container'>
        <div className='home-link'>
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              // className='nav-links'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
        </div>
        <div className='calculator-link'>
          <li>
            <NavLink
              to='/calculator'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              // className='nav-links'
              onClick={handleClick}
            >
              Calculator
            </NavLink>
          </li>
        </div>
        <div className='news-link'>
          <li>
            <NavLink
              to='/news'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              onClick={handleClick}
            >
              News
            </NavLink>
          </li>
        </div>
        <div className='about-link'>
          <li>
            <NavLink
              to='/about'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              // className='nav-links'
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
        </div>
        <div className='login-link'>
          <li>
            <NavLink
              to='/login'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
        </div>
        {/* <div>
          <li>
            <NavLink
              to='/signup'
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
              onClick={handleClick}
            >
              Signup
            </NavLink>
          </li>
        </div> */}
      </div>
    </Fragment>
  );

  const authLinks = () => (
    <li>
      <a href='#!' onClick={logout}>
        Logout
      </a>
    </li>
  );

  return (
    <div>
      <ul className={click ? 'navbar active' : 'navbar'}>
        {/* <li>
          <NavLink
            to='/upload'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
            onClick={handleClick}
          >
            Upload
          </NavLink>
        </li> */}

        {guestLinks()}
        {isAuthenticated && authLinks()}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
