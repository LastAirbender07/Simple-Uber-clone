import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            style={{flex: 1}} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            keyboardVerticalOffset={
              Platform.OS === "ios" ? 
              -64 : 0
            }>
          <Stack.Navigator>
            <Stack.Screen
              name='HomeScreen' 
              component={HomeScreen} 
              options={{
                headerShown: false,
              }}/>
            <Stack.Screen
              name='MapScreen' 
              component={MapScreen} 
              options={{
                headerShown: false,
              }}/>
          </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}