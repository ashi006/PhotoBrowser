import { Link } from 'react-router-dom';
import UserIcon from '../../images/user-icon.jpg';

const UserThumbnail = ({user}) => {
  return (
    <div className="user-wrapper">
      <Link to={`/user/${user.id}`} target="_blank">
          <img src={UserIcon} alt="" />          
        </Link>
        <ul>
          <li>{user.name}</li>
          <li><a href={`mailto:${user.email}`} target="_blank" rel="noreferrer" >{user.email}</a></li>
          <li>{user.phone}</li>
        </ul>
    </div>
  )
}

export default UserThumbnail;