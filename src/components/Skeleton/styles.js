import styled from 'styled-components';

export const SkeletonPulse = styled.div`
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
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

export const Skeleton = styled(SkeletonPulse)`
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};

  &::before {
    content: '\00a0';
  }
`;
