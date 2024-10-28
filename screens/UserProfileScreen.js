import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../AuthContext';

const UserProfileScreen = () => {
  const { user } = useAuth(); 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {user?.first_name}</Text>
      <Text style={styles.text}>Apellido: {user?.last_name}</Text>
      <Text style={styles.text}>Correo: {user?.username}</Text>
      {/* Agregar más info */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});

export default UserProfileScreen;
