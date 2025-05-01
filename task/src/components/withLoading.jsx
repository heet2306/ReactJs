import React, { useEffect, useState } from 'react';

export default function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div>Loading..........</div>;
    }

    return <WrappedComponent {...props} />;
  };
}
