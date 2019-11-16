import React from 'react';
import PropTypes from 'prop-types';

import { Skeleton } from './styles';

const SkeletonLine = ({ translucent, width, height, rounded }) => (
  <Skeleton
    translucent={translucent}
    width={width}
    height={height}
    rounded={rounded}
  />
);

SkeletonLine.defaultProps = {
  translucent: false,
  width: '7.5rem',
  height: '1.4rem',
  rounded: false
};

SkeletonLine.propTypes = {
  translucent: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.bool
};

export default SkeletonLine;
