

import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { Row, Col, Pagination } from 'react-bootstrap';
import ArtworkCard from '@/components/ArtworkCard';
import Error from 'next/error';
import Head from 'next/head';

const PER_PAGE = 12;

export default function Artwork() {

    return (
        <div>
            <p> Card: </p>
            <ArtworkCard objectID='484972' />
        </div>
    );
}