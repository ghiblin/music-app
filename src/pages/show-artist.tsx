import { useParams } from "react-router";

function ShowArtist() {
  const { artistId } = useParams();

  return (
    <section>
      <h1>{artistId}</h1>
    </section>
  );
}

export default ShowArtist;
