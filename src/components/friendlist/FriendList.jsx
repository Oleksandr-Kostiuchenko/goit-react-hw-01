import css from "./FriendList.module.css";
import friendsJSON from "../../friends.json";
import FriendListItem from "../friendlistitem/FriendListItem";

const FriendList = (friends) => {
  return (
    <ul className={css.friendList}>
      {friendsJSON.map((element) => {
        return (
          <li className={css.friendListItem}>
            <FriendListItem friend={element} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
