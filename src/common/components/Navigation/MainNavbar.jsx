"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { appMetaData } from '@/common/data/appMetaData';
import { Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function MainNavbar() {
    const [activeBackground, setActiveBackground] = useState(false)

    const handleScroll = () => {
        window.requestAnimationFrame(() => {
            setActiveBackground(window.scrollY >= 66);
        });
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" fixed="top"
            bg={activeBackground ? "light" : ""}
            data-bs-theme={activeBackground ? "light" : ""}>
            <Container>
                <Navbar.Brand href="#" className={`fw-bold text-uppercase fs-3 ${activeBackground ? "text-dark" : "text-white"}`}>{appMetaData.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            {appMetaData.title}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end align-items-md-center flex-grow-1 pe-3">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link href="#">Pricing</Nav.Link>
                            <Link href="#" className='primary-btn py-2 rounded-5 ms-5'>Login</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;