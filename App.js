import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './pages/HomeScreen';
import DinosaursScreen from './pages/DinosaursScreen';
import CardDinoScreen from './components/CardDinoScreen';
import QuizScreen from './pages/QuizScreen';
import NewsScreen from './pages/NewsScreen';
import CardNews from './components/CardNews';
import MemesScreen from './pages/MemesScreen';
import Nav from './components/Nav';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dinos" component={DinosaursScreen} />
          <Stack.Screen name="CardDino" component={CardDinoScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
          <Stack.Screen name="CardNews" component={CardNews} />
          <Stack.Screen name="Memes" component={MemesScreen} />
        </Stack.Navigator>
      <Nav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
