import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const HotDrinkScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true ,
       
            headerTitle: 'HOME',
            headerTintColor: '#436f72',
            headerTitleAlign: 'center',
            headerBackTitleVisible: true,
            headerTransparent: true,
            
    }
        );
}, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#70b9be', '#fff']}
        style={styles.backgroundGradient}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/teab.png')}
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

export default HotDrinkScreen;
