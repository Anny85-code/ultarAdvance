import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import styles from './NavbarMain.module.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem('NavbarMain') != null) {
      let temp = JSON.parse(sessionStorage.getItem('NavbarMain'));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem('NavbarMain', JSON.stringify(temp));
  };

  const windowSize = window.innerWidth;

  return (
    <>
      <Navbar
        style={{
          backgroundColor: 'white',
          boxShadow: '1px 1px 10px rgb(0 0 0 / 0.4)',
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            {windowSize > 450
              ? 'Hendrex Resources Limited'
              : 'Hendrex Resources'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${
                  activeNav[0] ? styles.active : ''
                }`}
                style={{ marginTop: '8px' }}
                onClick={() => {
                  handleActiveNav(0);
                  closeNav();
                }}
              >
                Home{' '}
              </NavLink>
              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${
                  activeNav[1] ? styles.active : ''
                }`}
                style={{ marginTop: '8px' }}
                onClick={() => {
                  handleActiveNav(1);
                  closeNav();
                }}
              >
                About us{' '}
              </NavLink>
              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link
                    to="/services"
                    style={{ textDecoration: 'none' }}
                    className={styles.dropicon}
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                  >
                    <span
                      className={`${styles.nav_text} my-auto ${
                        activeNav[2] ? styles.active : ''
                      }`}
                    >
                      Services{' '}
                    </span>{' '}
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/sMediaService"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Transportation and storage solutions
                  </NavLink>{' '}
                </NavDropdown.Item>{' '}
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/qualityAssurance"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Recycling Services
                  </NavLink>{' '}
                </NavDropdown.Item>{' '}
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/cloud"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Supply chain management{' '}
                  </NavLink>{' '}
                </NavDropdown.Item>{' '}
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/it"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Maintenance and repair services
                  </NavLink>{' '}
                </NavDropdown.Item>{' '}
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink
                    to="/ai"
                    onClick={() => {
                      handleActiveNav(2);
                      closeNav();
                    }}
                    className={styles.dropdownText}
                  >
                    Heavy duty equipment lease
                  </NavLink>{' '}
                </NavDropdown.Item>{' '}
              </NavDropdown>
              <NavLink
                to="/contactUs"
                className={` ${styles.nav_text} nav-link ${
                  activeNav[3] ? styles.active : ''
                }`}
                style={{ marginTop: '8px' }}
                onClick={() => {
                  handleActiveNav(3);
                  closeNav();
                }}
              >
                Contact Us{' '}
              </NavLink>{' '}
            </Nav>{' '}
          </Navbar.Collapse>{' '}
        </Container>{' '}
      </Navbar>{' '}
    </>
  );
};

export default NavbarMain;
