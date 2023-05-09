import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import the icon library

const burgers = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: true ,
           
                headerTitle: 'Burgers',
                headerTintColor: '#436f72',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerTransparent: true,
                
        }
            );
    }, []);
  const items = [
    {id: 1, title: "Turkey burger", image: require('../assets/burger1.png'), screen:'burger'},
    {id: 2, title: "mushroom burger", image: require('../assets/burger2.png'), screen: 'burger'},
   
    {id: 3, title: "Veggie burger", image: require('../assets/burger3.png'), screen: 'burger'},
    {id: 4, title: "Wild salmon burger", image: require('../assets/burger4.png'), screen: 'burger'},
    {id: 5, title: "Bean burger", image: require('../assets/burger5.png'), screen: 'burger'},
    {id: 6, title: "Cheeseburger", image: require('../assets/burger6.png'), screen: 'burger'},
    {id: 7, title: "Chicken Burger", image: require('../assets/burger7.png'), screen: 'burger'},
    {id: 8, title: "bacon cheeseburger", image: require('../assets/burger8.png'), screen: 'burger'},
 
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


export default burgers;
