import React, {useEffect} from 'react';
import {View, Text, Button, Linking, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as RootNavigation from './RootNavigation';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const linking = {
    prefixes: ['https://test.saadibrah.im', 'saadibrahim://'],
  };

  useEffect(() => {
    // Get the deep link used to open the app
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        return;
      }

      if (initialUrl.includes('Details')) {
        Alert.alert(initialUrl);
        RootNavigation.navigate('Details');
      }
    };

    getUrl();
  });

  return (
    <NavigationContainer linking={linking} ref={RootNavigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
