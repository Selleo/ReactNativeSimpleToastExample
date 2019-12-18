import React from 'react';
import AppNavigation from './AppNavigation';
import {ToastProvider} from './ToastContext';
import Toast from './Toast';

export default class App extends React.Component {
  render() {
    return (
      <ToastProvider>
        <Toast />
        <AppNavigation />
      </ToastProvider>
    );
  }
}
