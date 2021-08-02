import React from 'react';

import './with-spinner.css';

interface WithLoadingProps {
  isLoading: boolean;
  [x:string]: any;
}

const wrapperStyle = {
  height: '60vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const spinnerStyle = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  border: '3px solid rgba(195, 195, 195, 0.6)',
  borderRadius: '50%',
  borderTopColor: '#636767',
  animation: 'spin 1s ease-in-out infinite',
};

const WithSpinner = <P extends object>(Component: React.ComponentType<P>) => {
  const Spinner = ({ isLoading, ...otherProps }: WithLoadingProps) => {
    return isLoading ? (
      <div style={wrapperStyle}>
        <div style={spinnerStyle} />
      </div>
    ) : (
      <Component {...otherProps as P} />
    );
  };
  return Spinner;
};


export default WithSpinner;
