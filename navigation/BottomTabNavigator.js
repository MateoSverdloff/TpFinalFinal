import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import UserGetById from '../screens/UserGetById.js'; 
import LoginScreen from '../screens/LoginScreen.js'; 
import { useAuth } from '../AuthContext.js';
import EventScreen from '../screens/EventScreen';
import UserProfileScreen from '../screens/UserProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'UserGetById') {
            iconName = 'search';
          } else if (route.name === 'UserProfile') {
            iconName = 'person';
          } else if (route.name === 'Events') { // Agregamos esta línea
            iconName = 'calendar'; // Puedes cambiar el ícono
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="UserGetById" component={UserGetById} options={{ title: 'Buscar Usuario' }} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Perfil' }} />
      <Tab.Screen name="Events" component={EventScreen} options={{ title: 'Eventos' }} />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;