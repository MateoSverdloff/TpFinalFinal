import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { getEventsByCategory } from '../services/EventServiceSearch.js';

const EventCategoryDetail = ({ route }) => {
    const { categoryId } = route.params; 
    console.log('id: ', categoryId)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEventsByCategory(categoryId);
                console.log('data', data)
                console.log('Fetched Events: ', data);
                if (Array.isArray(data)) {
                    setEvents(data); // Actualiza el estado con los eventos obtenidos
                } else {
                    console.error('Data is not an array:', data);
                    Alert.alert('Error', 'Received data is not in expected format.');
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                Alert.alert('Error', 'Failed to load events for this category');
            }
        };
        
        fetchEvents();
    }, [categoryId]);

    const renderEventCard = ({ item }) => {
        // Verifica si la propiedad response existe antes de acceder a event_id
        if (item.response && item.response.event_id) {
            console.log('Rendering item: ', item.response);
            return (
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{item.response.name}</Text>
                    <Text>{item.response.description}</Text>
                    <Text>Fecha: {item.response.start_date}</Text>
                    <Text>Precio: ${item.response.price}</Text>
                </View>
            );
        } else {
            return null; // O manejar el caso en que no hay datos válidos
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EventCategoryDetail;
