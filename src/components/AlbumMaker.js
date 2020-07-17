import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from '../data/photo-entries';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AlbumMaker extends React.Component {

  render() {
    //console.log(entries);
    return (
      <Container>
        <Row xs="1" sm="2" md="3">
          {
            entries.itemlist.map((photo) => {
              return <Col><PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} /></Col>
            })
          }
        </Row>
      </Container>
    )
  }
}

export default AlbumMaker;
