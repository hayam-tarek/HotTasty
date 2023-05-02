
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Card = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
}, []);

  const items = [
    {id: 1, title: "Hot drink", image: require('../assets/hotd.png')},
    {id: 2, title: "Pizza", image: require('../assets/piizza.png')},
    {id: 3, title: "baked cookies", image: require('../assets/bakedcookie.png')},
    {id: 4, title: "Fruit salat  ", image: require('../assets/fruit salad.png')},
    {id: 5, title: "juice", image: require('../assets/juice.png')},
    {id: 6, title: "burger", image: require('../assets/burger.png')},
    {id: 7, title: "Donuts", image: require('../assets/Donuts .png')},
    {id: 8, title: "healthy food ", image: require('../assets/helthy.png')},
    {id: 9, title: "cold drink", image: require('../assets/cold.png')},
    {id: 10, title: "Salat", image: require('../assets/salat.png')}
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  image: {
    height: undefined,
    aspectRatio: 1,
    width: '100%',
   
    resizeMode: 'cover',

    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#c16419',
  },
  button: {
    width: "45%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#c16419',
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 120,
    // marginTop: -60,
    marginBottom: 15,
    backgroundColor: 'rgba(193, 100, 25, 0.3)',
  },
  buttonText: {
    color: '#c16419',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default Card;