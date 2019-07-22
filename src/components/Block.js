import React from 'react';

const Block = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Block;