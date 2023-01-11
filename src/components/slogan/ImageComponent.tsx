import styled from 'styled-components';
import React from 'react';

export interface ImageProps {
  src: string,
  heightImage: string,
  y: string,
  width?: number | null,
}

const Image = styled.div`
  --y: ${(props : ImageProps) => props.y};

  z-index: 1;
  width: ${(props : ImageProps) => (props.width || 100)}%;
  height: auto;
  min-height: ${(props : ImageProps) => props.heightImage};
  background: url(${(props : ImageProps) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  transform: scale(var(--scale));
  margin-bottom: var(--y);
  margin-top: 2rem;
`;

const ImageComponent = (props: ImageProps): JSX.Element => {

  const {
    src,
    heightImage,
    y,
    width
  } = props;
  return <Image src={src} heightImage={heightImage} y={y} width={width} />;

};

export default ImageComponent;
