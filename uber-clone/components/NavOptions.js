import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
    // Add disabled={!origin} in TouchableOpacity
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            className="p-2 pl-6 pb-8 bg-gray-200 rounded-lg m-2 w-40 transform hover:-translate-y-5 transition duration-500 ease-in-out">
                <View>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                    <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                    <View className="p-2 rounded-full w-10">
                        <Icon
                            type='antdesign'
                            name='rightcircle'
                            color='black'
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions