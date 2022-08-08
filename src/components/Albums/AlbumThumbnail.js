import { Link } from 'react-router-dom';
import AlbumIcon from '../../images/album-icon.png';

const AlbumThumbnail = ({album}) => {
  return (
    <div className="album-wrapper">
      <Link to={`/album/${album.id}`} target="_blank">
          <img src={AlbumIcon} alt="" />
          <p className="text">{album.title}</p>
        </Link>
    </div>
  )
}

export default AlbumThumbnail;