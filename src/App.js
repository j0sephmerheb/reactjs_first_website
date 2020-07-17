import React from 'react';
import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="py-4">
        <BannerImage />
        <h1>Welcome to my first react website</h1>
      </Container>        

      <AlbumMaker />
    </div>
  );
}

export default App;
