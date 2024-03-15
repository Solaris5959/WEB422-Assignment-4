import React from 'react';
import { Card } from 'react-bootstrap';

function ArtworkCardDetail({ data }) {
    const {
        primaryImage,
        primaryImageSmallo,
        medium,
        artistDisplayName,
        creditLine,
        dimensions,
        artistWikidata_URL
    } = data;

    return (
        <Card>
            {primaryImage && <Card.Img src={primaryImage} />}
            <Card.Body>
                <Card.Text>
                    {medium}
                    <br />
                    <br />
                    {artistDisplayName ? (
                        <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
                            wiki
                        </a>
                    ) : (
                        'N/A'
                    )}
                    <br />
                    {creditLine ? creditLine : 'N/A'}
                    <br />
                    {dimensions ? dimensions : 'N/A'}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ArtworkCardDetail;