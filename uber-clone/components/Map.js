import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAPS_APIKEY from ".env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) 
            return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) 
            return;
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            });
        };
        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    // <MapView
    // className="flex-1"
    // mapType='mutedStandard'
    // initialRegion={{
    //     latitude: origin.location.lat,
    //     longitude: origin.location.lng,
    //     latitudeDelta: 0.005,
    //     longitudeDelta: 0.005,
    // }}
    // >
    // {origin && destination && (
    //     <MapViewDirections
    //         origin={origin.description}
    //         destination={destination.description}
    //         apikey={GOOGLE_MAPS_APIKEY}
    //         strokeWidth={3}
    //         strokeColor="black"
    //     />
    // )
    // }
    //     {origin?.location && (
    //         <Marker
    //             coordinate={{
    //                 latitude: origin.location.lat,
    //                 longitude: origin.location.lng,
    //             }}
    //             title="Origin"
    //             description={origin.description}
    //             identifier="origin"
    //         />
    //     )}
    // </MapView>

    <MapView
    ref={mapRef}
    className="flex-1"
    mapType='mutedStandard'
    initialRegion={{
        latitude: 13.0827,
        longitude: 80.2707,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }}
    >
        {origin && destination && (
            <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
        )}

        {(
            <Marker
                coordinate={{
                    latitude: 13.0827,
                    longitude: 80.2707,
                }}
                title="Origin"
                description="Chennai"
                identifier="origin"
            />
        )}

        {(
            <Marker
                coordinate={{
                    latitude: 27.3516,
                    longitude: -88.3239,
                }}
                title="Destination"
                description="Sikkim"
                identifier="destination"
            />
        )}
    </MapView>
  )
}

export default Map
