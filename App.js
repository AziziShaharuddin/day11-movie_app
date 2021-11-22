import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/home';
import About from './src/containers/about';
import Contact from './src/containers/contact';
import Detail from './src/containers/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/configureStore';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); //tab name can be changed according to you

function TabNav() {
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        //color by default is blue, whereas size by default is 24
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? 'md-home' : 'md-home-outline';
        }
        else if (route.name === "Contact") {
          iconName = focused ? 'md-people-sharp' : 'md-people-outline';
        }
        else if (route.name === "About") {
          iconName = focused ? 'md-folder-sharp' : 'md-folder-outline';
        }
        // return <Ionicons name={iconName} size={size} color={color}/>
        return <Ionicons name={iconName} size={24} color={color}/>
      },
      tabBarActiveTintColor: '#142F43',
      tabBarInactiveTintColor: 'grey',
    })}>
      <Tab.Screen name="Home" component={Home} options={{
        title: "Homepage",
        headerStyle: {
          backgroundColor: '#142F43',
        },
        headerTintColor: "white",
        headerTitleAlign: 'center',
        // tabBarIcon: () => <Ionicons name="md-home" size={24} color="black"/>
      }} />
      <Tab.Screen name="Contact" component={Contact} options={{
        headerStyle: {
          backgroundColor: '#142F43',
        },
        headerTintColor: "white",
        headerTitleAlign: 'center',
      }} />
      <Tab.Screen name="About" component={About} options={{
        headerStyle: {
          backgroundColor: '#142F43',
        },
        headerTintColor: "white",
        headerTitleAlign: 'center',
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" component={Register} options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: '#142F43',
              },
              headerTintColor: "white",
              headerTitleAlign: 'center',
            }} />
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: true,
              title: "Login Page",
              headerStyle: {
                backgroundColor: '#142F43',
              },
              headerTintColor: "white",
              headerTitleAlign: 'center',
            }} />
            <Stack.Screen name="TabNav" component={TabNav} options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: '#142F43',
              },
              headerTintColor: "white",
              headerTitleAlign: 'center',
              headerShown: false,
            }} />
            <Stack.Screen name="Detail" component={Detail} options={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: '#142F43',
              },
              headerTintColor: "white",
              headerTitleAlign: 'center',
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
