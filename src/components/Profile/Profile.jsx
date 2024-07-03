import styles from './Profile.module.css';

const {
  profile,
  profileBorder,
  imageBorder,
  userName,
  userTag,
  statsContainer,
  statsItem,
  statsTitle,
  statsInfo,
  middle,
} = styles;

const Profile = ({
  image = "",
  name = "Unknown",
  tag = "",
  location = "",
  stats = {},
}) => {
  const { followers = 0, views = 0, likes = 0 } = stats;

  return (
    <div className={profile}>
      <div className={profileBorder}>
        <div className={imageBorder}>
          <img src={image} alt={name} />
        </div>
        <p className={userName}>{name}</p>
        <p className={userTag}>@{tag}</p>
        <p className={userTag}>{location}</p>
        <ul className={statsContainer}>
          <li className={statsItem}>
            <span className={statsTitle}>Followers</span>
            <span className={statsInfo}>{followers}</span>
          </li>
          <li className={`${statsItem} ${middle}`}>
            <span className={statsTitle}>Views</span>
            <span className={statsInfo}>{views}</span>
          </li>
          <li className={statsItem}>
            <span className={statsTitle}>Likes</span>
            <span className={statsInfo}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
