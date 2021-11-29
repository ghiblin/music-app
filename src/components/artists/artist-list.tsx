import { useMemo, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import { FaPlusCircle } from "react-icons/fa";

import faker from "faker";

type Artist = {
  id: number;
  name: string;
  nationality: string;
  startingYear: number;
};

const ArtistList = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [currentArtist, setCurrentArtist] = useState<Artist | undefined>();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (id: number) => {
    const artist = artists.find((a) => a.id === id);
    setCurrentArtist(artist);
    setShowModal(true);
  };

  const lastId = useMemo(() => {
    return artists.reduce((acc, el) => Math.max(acc, el.id), 0);
  }, [artists]);

  const addArtist = () => {
    const artist: Artist = {
      id: lastId + 1,
      name: faker.name.findName(),
      nationality: faker.address.country(),
      startingYear: 2021 - Math.floor(Math.random() * 30),
    };

    setArtists([...artists, artist]);
  };

  return (
    <>
      <Stack direction="horizontal" className="mb-4">
        <Button variant="primary" className="ms-auto" onClick={addArtist}>
          <FaPlusCircle />
          Add Artist
        </Button>
      </Stack>
      <Table striped bordered hover>
        <caption>#{artists.length} artists found.</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Begin Year</th>
          </tr>
        </thead>
        <tbody>
          {!artists.length && (
            <tr>
              <td colSpan={4}>
                <Alert variant="danger">
                  <Alert.Heading>No artist found.</Alert.Heading>
                  <p>Click on "Add Artist" button to create a new artist.</p>
                </Alert>
              </td>
            </tr>
          )}
          {artists.length > 0 &&
            artists.map(({ id, name, nationality, startingYear }, idx) => (
              <tr key={id.toString()} onClick={() => handleShowModal(id)}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{nationality}</td>
                <td>{startingYear}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentArtist?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6}>
                <strong>ID:</strong>
              </Col>
              <Col md={6}>{currentArtist?.id}</Col>
            </Row>
            <Row>
              <Col md={6}>
                <strong>Name:</strong>
              </Col>
              <Col md={6}>{currentArtist?.name}</Col>
            </Row>
            <Row>
              <Col md={6}>
                <strong>Nation:</strong>
              </Col>
              <Col md={6}>{currentArtist?.nationality}</Col>
            </Row>
            <Row>
              <Col md={6}>
                <strong>Starting Year:</strong>
              </Col>
              <Col md={6}>{currentArtist?.startingYear}</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArtistList;
