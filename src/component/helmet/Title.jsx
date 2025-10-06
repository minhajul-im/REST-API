import React from 'react';
import { Helmet } from 'react-helmet-async';

const Title = ({ title, content }) => {
  return (
    <div>
      <Helmet>
        <title>{title} - Ummahsign</title>

        <meta name="description" content={content} />
      </Helmet>
    </div>
  );
};

export default Title;
