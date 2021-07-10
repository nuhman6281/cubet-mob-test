
import * as React from 'react';
import { StackActions, CommonActions, NavigationContainerRef } from '@react-navigation/native';

// export const navigationRef = React.useRef<NavigationContainerRef>(null);
export const navigationRef = React.createRef();

function navigate(name, params?: any) {
  //@ts-ignore
  navigationRef.current?.navigate(name, params);
}

function replace(name, params = {}) {
  //@ts-ignore
  navigationRef.current?.dispatch(
    StackActions.replace(name, params)
  );
}

function navigateWithStackReset(name, params = {}) {
  //@ts-ignore
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{
        name,
        params,
      }]
    })
  );
}

function goBack() {
  //@ts-ignore
  navigationRef.current?.goBack();
}

export default {
  navigate,
  replace,
  navigateWithStackReset,
  goBack
};