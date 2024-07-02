import "../Profile/Profile.css";
export default function Profile({ image = '', name = 'Unknown', tag = '', location = '', stats = {} }) {
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className="profile-border">
      <div className="image-border">
        <img src={image} alt={name} />
      </div>
      <p className="user-name">{name}</p>
      <p className="user-tag">@{tag}</p>
      <p className="user-tag">{location}</p>
      <ul className="stats-container">
        <li className="stats-item">
          <span className="stats-title">Followers</span>
          <span className="stats-info">{followers}</span>
        </li>
        <li className="stats-item middle">
          <span className="stats-title">Views</span>
          <span className="stats-info">{views}</span>
        </li>
        <li className="stats-item">
          <span className="stats-title">Likes</span>
          <span className="stats-info">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
