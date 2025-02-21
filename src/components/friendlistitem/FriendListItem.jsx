import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  const statusClsx = [css.friendStatus];
  if (isOnline) {
    statusClsx.push(css.online);
  } else {
    statusClsx.push(css.offline);
  }

  console.log(statusClsx.join(" "));

  return (
    <div className={css.friendContainer}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={statusClsx.join(" ")}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
