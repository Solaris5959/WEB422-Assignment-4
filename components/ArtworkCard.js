import useSWR from 'swr';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import Error from 'next/error';

export default function ArtworkCard({objectID}) {
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);

    console.log(data)
    console.log(error)

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!data) {
        return null;
    }

    console.log(data)
    return (
        <Card>
            <Card.Img src={data.primaryImageSmall || 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]'} />
            <Card.Title className="text-center">{data.title || 'N/A'}</Card.Title>
            <Card.Text>
                <strong>Object Date: </strong>{data.objectDate || 'N/A'}
                <br />
                <strong>Classification: </strong>{data.classification || 'N/A'}
                <br />
                <strong>Medium: </strong>{data.medium || 'N/A'}
                <Link href={`/artwork/${objectID}`} passHref>
                    <Button className="btn btn-outline-primary">{objectID}</Button>
                </Link>
            </Card.Text>
        </Card>
    )
}