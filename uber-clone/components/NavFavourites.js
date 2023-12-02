import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Thandalam, Chennai, India",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Grand Station, Banglore, India",
    },
    // {
    //     id: "700",
    //     icon: "laptop",
    //     location: "College",
    //     destination: "Poti Kadu, Pseudo Chennai, India",
    // },
];

const NavFavourites = () => {

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        itemSeparatorComponent={() => (
            <View className="bg-gray-200" style={{height: 0.5}}/>
        )}
        renderItem={({item : {location, destination, icon} }) => (
            <TouchableOpacity className="flex-row items-center p-5">
                <Icon
                    style={{backgroundColor: "#D1D5DB", padding: 10, borderRadius:25, marginRight: 10,}}
                    name={icon}
                    type="ionicon"
                    color="black"
                    size={18}
                />
                <View className="flex-1">
                    <Text className="font-semibold text-lg">{location}</Text>
                    <Text className="text-gray-500">{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavourites;