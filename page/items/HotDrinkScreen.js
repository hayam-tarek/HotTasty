import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const HotDrinkScreen = ({ navigation }) => {

  navigation.setOptions({
    headerTitle: 'Hot Drink',
   
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
            source={require('../../assets/coffee.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}> TEa </Text>
        <View style={styles.timeContainer}>
          <Icon name="clock-outline" size={20} color="#fff" />
          <Text style={styles.time}>7 'm</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            1. Fill up the kettle with water {"\n"}
            2. Boil the kettle {"\n"}
            3. Place a teabag in your favourite mug {"\n"}
            4. Pour boiling water into your favourite mug {"\n"}
            5. Brew the tea for a few moments {"\n"}
            6. Remove and dispose of the teabag {"\n"}
            7. Add milk {"\n"}
            8. Add sugar {"\n"}
            9. Stir the tea {"\n"}
            10. Enjoy the hot beverage
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
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    marginLeft: 5,
    color: '#fff',
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

export default HotDrinkScreen;
