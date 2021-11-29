import { useParams } from "react-router";

function ShowAlbum() {
  const { albumId } = useParams();
  return <section>Show Album: {albumId}</section>;
}

export default ShowAlbum;
