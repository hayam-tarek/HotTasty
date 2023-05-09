import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const Pizza = ({ navigation }) => {

  navigation.setOptions({
    headerTitle: 'Pizza',
    headerTintColor: '#436f72',
    headerTitleAlign: 'center',
    headerBackTitleVisible: true,
    headerTransparent: true,
    
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#70b9be', '#fff']}
        style={styles.backgroundGradient}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/pitza.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}> PIzza </Text>
        <View style={styles.timeContainer}>
          <Icon name="clock-outline" size={20} color="#fff" />
          <Text style={styles.time}>30 'm</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
          
    for 16 servings {"\n"}
      2 ½ cups warm water(600 mL) {"\n"}
      1 teaspoon sugar {"\n"}
      2 teaspoons active dry yeast {"\n"}
      7 cups all-purpose flour(875 g), plus more for dusting {"\n"}
      6 tablespoons extra virgin olive oil, plus more for greasing {"\n"}
      1 ½ teaspoons kosher salt {"\n"}
      ¼ cup semolina flour(30 g) {"\n"}

             Enjoy 
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 130,
    overflow: 'hidden',
    marginBottom: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#436f72',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    marginLeft: 5,
    color: '#436f72',
  },
  descriptionContainer: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    opacity: 0.9,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default Pizza;
