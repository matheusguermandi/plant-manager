import React from 'react';
import { StatusBar } from 'react-native';
import { Welcome } from './src/screens/welcome';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <Welcome />
    </>
  );
}
