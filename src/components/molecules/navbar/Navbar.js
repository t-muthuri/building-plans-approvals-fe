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
        <div className='div-slide home-link'>
          <li>
            <NavLink
              to='/'
              // className={({ isActive, isPending, isTransitioning }) =>
              //   [
              //     isPending ? 'pending' : '',
              //     isActive ? 'active' : '',
              //     isTransitioning ? 'transitioning' : '',
              //   ].join(' ')
              // }
              className='nav-links'
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     textDecoration: isActive ? 'none' : 'bold',
              //     color: isPending ? 'white' : 'white',
              //     viewTransitionName: isTransitioning ? 'slide' : '',
              //   };
              // }}
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
        </div>
        <div className='div-slide calculator-link'>
          <li>
            <NavLink
              to='/calculator'
              // className={({ isActive, isPending, isTransitioning }) =>
              //   [
              //     isPending ? 'pending' : '',
              //     isActive ? 'active' : '',
              //     isTransitioning ? 'transitioning' : '',
              //   ].join(' ')
              // }
              className='nav-links'
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     textDecoration: isActive ? 'none' : 'bold',
              //     color: isPending ? 'white' : 'white',
              //     viewTransitionName: isTransitioning ? 'slide' : '',
              //   };
              // }}
              onClick={handleClick}
            >
              Calculator
            </NavLink>
          </li>
        </div>
        <div className='div-slide news-link'>
          <li>
            <NavLink
              to='/news'
              // className={({ isActive, isPending, isTransitioning }) =>
              //   [
              //     isPending ? 'pending' : '',
              //     isActive ? 'active' : '',
              //     isTransitioning ? 'transitioning' : '',
              //   ].join(' ')
              // }
              className='nav-links'
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     textDecoration: isActive ? 'none' : 'bold',
              //     color: isPending ? 'white' : 'white',
              //     viewTransitionName: isTransitioning ? 'slide' : '',
              //   };
              // }}
              onClick={handleClick}
            >
              News
            </NavLink>
          </li>
        </div>
        <div className='div-slide about-link'>
          <li>
            <NavLink
              to='/about'
              // className={({ isActive, isPending, isTransitioning }) =>
              //   [
              //     isPending ? 'pending' : '',
              //     isActive ? 'active' : '',
              //     isTransitioning ? 'transitioning' : '',
              //   ].join(' ')
              // }
              className='nav-links'
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     textDecoration: isActive ? 'none' : 'bold',
              //     color: isPending ? 'white' : 'white',
              //     viewTransitionName: isTransitioning ? 'slide' : '',
              //   };
              // }}
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
        </div>
        <div className='div-slide login-link'>
          <li>
            <NavLink
              to='/login'
              // className={({ isActive, isPending, isTransitioning }) =>
              //   [
              //     isPending ? 'pending' : '',
              //     isActive ? 'active' : '',
              //     isTransitioning ? 'transitioning' : '',
              //   ].join(' ')
              // }
              className='nav-links'
              // style={({ isActive, isPending, isTransitioning }) => {
              //   return {
              //     textDecoration: isActive ? 'none' : 'bold',
              //     color: isPending ? 'white' : 'white',
              //     viewTransitionName: isTransitioning ? 'slide' : '',
              //   };
              // }}
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
              className='nav-links'
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
