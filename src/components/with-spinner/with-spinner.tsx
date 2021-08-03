import React from 'react';

import Spinner from '../spinner/spinner';

interface WithLoadingProps {
  isLoading: boolean;
  [x:string]: any;
}


const WithSpinner = <P extends object>(Component: React.ComponentType<P>) => ({ isLoading, ...otherProps }: WithLoadingProps) => {
  return isLoading ? <Spinner /> : <Component {...otherProps as P} />;
};

export default WithSpinner;
