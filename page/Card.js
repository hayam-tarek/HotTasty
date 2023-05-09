import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import the icon library

const Card = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const items = [
    {id: 1, title: "Hot Tea", image: require('../assets/teab.png'), screen:'HotDrinkScreen'},

    {id: 2, title: "Pizza", image: require('../assets/piizza.png'), screen: 'Pizza'},
    {id: 3, title: "baked cookies", image: require('../assets/bakedcookie.png'), screen: 'cookies'},
    {id: 6, title: "burger", image: require('../assets/burger.png'), screen: 'burger'},
    {id: 7, title: "Donuts", image: require('../assets/Donuts .png'), screen: 'Donuts'},
    {id: 9, title: "cold drink", image: require('../assets/cold.png'), screen: 'colddrink'},
    {id: 4, title: "Fruit salat  ", image: require('../assets/fruit salad.png'), screen: 'cookies'},
    {id: 5, title: "juice", image: require('../assets/juice.png'), screen: 'colddrink'},
    
   
    {id: 8, title: "healthy food ", image: require('../assets/helthy.png')},
   
    {id: 10, title: "Salat", image: require('../assets/salat.png')}
 
  ];

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {items.map(item => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => handlePress(item.screen)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome name="user-circle-o" size={30} color="white" /> {/* Use the icon */}
      </TouchableOpacity>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  cardContainer: {
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
    borderColor: '#436f72',
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
    color: '#70b9be',
  },
  profileButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#70b9be',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Card;
