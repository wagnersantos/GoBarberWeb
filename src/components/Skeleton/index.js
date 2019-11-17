import React from 'react';
import PropTypes from 'prop-types';

import { Skeleton } from './styles';

const SkeletonLine = ({ width, height, rounded }) => (
  <Skeleton width={width} height={height} rounded={rounded} />
);

SkeletonLine.defaultProps = {
  width: '7.5rem',
  height: '1.4rem',
  rounded: false
};

SkeletonLine.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.bool
};

export default SkeletonLine;
