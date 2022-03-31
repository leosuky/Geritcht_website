import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title, col='white', extra }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant" style={{ color: `${col}` }}>{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
    <p className="p__cormorant">{extra}</p>
  </div>
);

export default SubHeading;
