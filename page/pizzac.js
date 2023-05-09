import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import the icon library

const pizzac = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: true ,
           
                headerTitle: 'Pizza',
                headerTintColor: '#436f72',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerTransparent: true,
                
        }
            );
    }, []);
  const items = [
    {id: 1, title: "barbeque pizza", image: require('../assets/pizza7.png'), screen:'Pizza'},
    {id: 2, title: "mushroom pizza", image: require('../assets/pizza3.png'), screen: 'Pizza'},
   
    {id: 3, title: "pepperoni pizza", image: require('../assets/pizza1.png'), screen: 'Pizza'},
    {id: 4, title: "cheese pizza", image: require('../assets/pizza2.png'), screen: 'Pizza'},
    {id: 5, title: "pizza crust", image: require('../assets/pizza4.png'), screen: 'Pizza'},
  
    {id: 7, title: "pizza sauce", image: require('../assets/pizza6.png'), screen: 'Pizza'},
    {id: 8, title: "pizza Buffalo", image: require('../assets/pizza5.png'), screen: 'Pizza'},
 
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
    marginTop:50,
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


export default pizzac;
