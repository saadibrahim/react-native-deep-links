import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if(navigationRef && navigationRef.current && navigationRef.current.navigate){
        navigationRef.current?.navigate(name, params);
    }
}
