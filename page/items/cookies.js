import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const cookies = ({ navigation }) => {

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
            source={require('../../assets/pcoookies.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}> cookies </Text>
        <View style={styles.timeContainer}>
          <Icon name="clock-outline" size={20} color="#fff" />
          <Text style={styles.time}>7 'm</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
             
2 C flour {"\n"}
2 tsp baking powder{"\n"}
1/2 tsp salt{"\n"}
Cinnamon, to taste{"\n"}
Dark chocolate chips{"\n"}
1 C raw sugar{"\n"}
1/2 C canola oil{"\n"}
1 tsp vanilla{"\n"}
1/4 C water{"\n"}
1-2 Tbsp peanut butter{"\n"}
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

export default cookies;