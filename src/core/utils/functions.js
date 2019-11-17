import React from 'react';

import SkeletonLine from 'components/Skeleton';

export const conditionalRender = (loading, value, options = {}) => {
  const { rounded, height, width } = options;
  return loading ? (
    <SkeletonLine width={width} height={height} rounded={rounded} />
  ) : (
    value
  );
};
