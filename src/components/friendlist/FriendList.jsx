import css from "./FriendList.module.css";
import FriendListItem from "../friendlistitem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((element) => {
        return (
          <li className={css.friendListItem} key={element.id}>
            <FriendListItem friend={element} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
