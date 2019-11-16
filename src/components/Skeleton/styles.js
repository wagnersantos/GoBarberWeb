import styled, { css } from 'styled-components';

export const SSkeletonPulse = styled.div`
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${({ translucent }) =>
    translucent
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  border-radius: 5px;

  &::before {
    content: '\00a0';
  }
`;
