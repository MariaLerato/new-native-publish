import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/home';
import Menu from './components/menu';

export default function App() {
  return (
    <SafeAreaProvider>
        <Menu/>
    </SafeAreaProvider>
  );
};


