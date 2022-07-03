import React from "react";
import { PropTypes } from "prop-types";
import styles from "./styles.module.css";

function ActivityInfoItem({ name, count }) {
  return (
    <li>
      <span className={styles.label}>{name}</span>
      <span className={styles.quantity}>{count}</span>
    </li>
  );
}

ActivityInfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ActivityInfoItem;
