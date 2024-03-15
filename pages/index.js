/*********************************************************************************
*  WEB422 – Assignment 4
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Connor McDonald Student ID: 136123221 Date: Feb 23, 2024
*
********************************************************************************/

import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { Row, Col, Pagination } from 'react-bootstrap';
import ArtworkCard from '../components/ArtworkCard';
import Error from 'next/error';
import Head from 'next/head';

const PER_PAGE = 12;

export default function Artwork() {
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/484972`);

    // if (error) {
    //     return <Error statusCode={404} />;
    // }

    // if (!data) {
    //     return null;
    // }

    console.log(data)

    return (
        <div>
            <p> Card: </p>
            <p>{data}</p>
            <ArtworkCard objectID='484972' />
        </div>
    );
}