import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from '../TpFinalFront/navigation/MainStackNavigator.js';
import { AuthProvider } from './AuthContext'; // Ajusta la ruta según tu estructura

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;