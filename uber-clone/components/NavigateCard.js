import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/base'
import RideOptionsCard from './RideOptionsCard'
import GOOGLE_MAPS_APIKEY from ".env";

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-col">
        <Text className="text-center py-6 text-xl pt-0">Good Morning, Jayaraj</Text>
        <View className="border-t border-gray-200 flex-shrink">
            <View>
                <GooglePlacesAutocomplete
                    styles={toInputBoxStyles}
                    placeholder='where to?'
                    fetchDetails={true}
                    returnKeyType={'search'}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }))
                        navigation.navigate('RideOptionsCard')
                    }}
                />
            </View>
            <NavFavourites/>
        </View>
        <View className="flex-row justify-evenly py-2 mt-auto border-t border-gray-100">
            <TouchableOpacity 
            className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
            onPress={() => navigation.navigate("RideOptionsCard")}>
                <Icon
                    name='car'
                    type='font-awesome'
                    color="white"
                    size={16}
                />
                <Text className="text-white text-center">Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between w-24 px-4 py-3 rounded-full border border-gray-200">
                <Icon
                    name='fast-food-outline'
                    type='ionicon'
                    color="black"
                    size={18}
                />
                <Text className="text-center">Eats</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
