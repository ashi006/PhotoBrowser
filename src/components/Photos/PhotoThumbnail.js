import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PhotoThumbnail = ({photo}) => {
  return (
    <Link to={`/photo/${photo.id}`}>
      <div className="photo-wrapper">
          <img src={photo.thumbnailUrl} alt="" />
          {/* <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" /> */}
          {/* <div className="overlay">
              <div className="text">
                  <div className="quote"><Link to={`/photo/${photo.id}`} target="_blank"><FaEye /></Link></div>
              </div>
          </div> */}
      </div>
      <h4 className="photo-wrapper-heading">{photo.title}</h4>
    </Link>
  )
}

export default PhotoThumbnail;