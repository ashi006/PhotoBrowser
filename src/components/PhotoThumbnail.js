import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PhotoThumbnail = ({photo}) => {
  return (
    <div className="photo-wrapper">
        {/* <img src={photo.thumbnailUrl} alt="" /> */}
        <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" />
        <div className="overlay">
            <div className="text">
                <div className="quote"><Link to={`/photo/${photo.id}`}><FaEye /></Link></div>
            </div>
        </div>
    </div>
  )
}

export default PhotoThumbnail;