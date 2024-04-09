import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import darkMapStyle from "./darkMapStyle.json";

const scaleOptions = {
  edgePadding: {
    top: 150,
    right: 40,
    bottom: 250,
    left: 40,
  },
  animated: true,
};

export default function BarHop() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [noPermission, setNoPermission] = useState(false);
  const [initialRegion, setInitialRegion] = useState();
  const mapRef = useRef();

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return setNoPermission(true);
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    const { longitude, latitude } = location.coords;
    // mapRef.current.fitToCoordinates([latitude, longitude], scaleOptions);
    setInitialRegion({
      latitude,
      longitude,
      latitudeDelta: 0.03, // Rough starting point for 2-mile radius
      longitudeDelta: 0.03, // Adjust based on aspect ratio
    });
  };

  return (
    <View style={styles.ctr}>
      {noPermission ? (
        <View>
          <Text>
            We need permission to start your barhop (we don't really, but no
            time to create the layer to not have to).
          </Text>
          <Text>Also need to handle restarts</Text>
        </View>
      ) : (
        <>
          {!initialRegion ? (
            <Text>Loading...</Text>
          ) : (
            <MapView
              style={styles.map}
              provider="google"
              customMapStyle={darkMapStyle}
              showsUserLocation
              showsPointsOfInterest={false}
              showsIndoorLevelPicker={false}
              ref={mapRef}
              initialRegion={initialRegion}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
