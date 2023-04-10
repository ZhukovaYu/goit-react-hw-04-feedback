import PropTypes from 'prop-types';
import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <p className={s.title}>{title} </p>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;