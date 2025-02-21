import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.infoWrapper}>
        <img src={image} alt="User avatar" className={css.personImg} />
        <p className={css.personName}>{name}</p>
        <p className={css.personTag}>@{tag}</p>
        <p className={css.personTag}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsNum}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsNum}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsNum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
