import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddAlbum from "./pages/add-album";
import AddArtist from "./pages/add-artist";
import Home from "./pages/home";
import ShowAlbum from "./pages/show-album";
import ShowArtist from "./pages/show-artist";

function App() {
  return (
    <BrowserRouter>
      <Navbar logo="Music" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/new" element={<AddAlbum />} />
        <Route path="/album/:albumId" element={<ShowAlbum />} />
        <Route path="/artist/new" element={<AddArtist />} />
        <Route path="/artist/:artistId" element={<ShowArtist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
