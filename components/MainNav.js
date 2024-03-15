import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MainNav() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchField = e.target.search.value;
        router.push(`/artwork?title=true&q=${searchField}`);
    };

    return (
        <>
            <Navbar className="fixed-top navbar-dark bg-primary">
                <Navbar.Brand>Connor McDonald</Navbar.Brand>
                <Nav className="me-auto">
                    <Link href="/" legacyBehavior passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href="/search" legacyBehavior passHref>
                        <Nav.Link>Advanced Search</Nav.Link>
                    </Link>
                </Nav>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl type="text" name="search" placeholder="Search" className="mr-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Navbar>
            <br /><br />
        </>
    );
};