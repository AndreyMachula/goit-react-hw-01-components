import { PropTypes } from "prop-types";
import styles from "./styles.module.css";
import ActivityInfoItem from "../ActivityInfoItem";

const ActivityInfoList = ({ stats }) => {
  const statsName = Object.keys(stats);

  return (
    <ul className={styles.stats}>
      {statsName.map((name) => (
        <ActivityInfoItem
          key={statsName.indexOf(name)}
          name={name}
          count={stats[name]}
        />
      ))}
    </ul>
  );
};

ActivityInfoList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default ActivityInfoList;
