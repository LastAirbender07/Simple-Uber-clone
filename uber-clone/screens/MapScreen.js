import { Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('HomeScreen')}
        className={`bg-gray-100 absolute left-5 top-10 z-50 p-3 rounded-full shadow-lg`}>
          <Icon name='menu' type='fontawesome' size={25}/>
      </TouchableOpacity>
      <View className="h-1/2">
        <Map/>
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
            <Stack.Screen
                name='NavigateCard' 
                component={NavigateCard} 
                options={{
                headerShown: false,
                }}/>
            <Stack.Screen
                name='RideOptionsCard' 
                component={RideOptionsCard} 
                options={{
                headerShown: false,
                }}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
