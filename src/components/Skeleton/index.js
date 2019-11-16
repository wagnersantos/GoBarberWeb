import React from 'react';
import PropTypes from 'prop-types';

import { SSkeletonLine } from './styles';

const SkeletonLine = ({ translucent, width, height }) => (
  <SSkeletonLine translucent={translucent} width={width} height={height} />
);

SkeletonLine.defaultProps = {
  translucent: false,
  width: '7.5rem',
  height: '1.5rem'
};

SkeletonLine.propTypes = {
  translucent: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default SkeletonLine;
