import React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>
export default ({...props}: ImageProps) => {
  return <img {...props} />;
};
