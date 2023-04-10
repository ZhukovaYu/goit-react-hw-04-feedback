import PropTypes from 'prop-types';
import React from 'react';

import s from './Notification.module.css';

const Notification = ({ noFeedback }) => (
  <p className={s.alert}>{noFeedback}</p>
);

Notification.propTypes = {
  noFeedback: PropTypes.string,
};

export default Notification;