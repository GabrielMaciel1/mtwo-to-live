import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "screens/home";
import Messages from "screens/messages";
import Profile from "screens/profile";
import Saved from "screens/saved";
import Search from "screens/search";

const iconNames: Record<string, keyof typeof Ionicons['glyphMap']> = {
  index: 'home',
  Saved: 'heart',
  Messages: 'chatbox',
  Search: 'search',
  Profile: 'person',
};

const WrappedScreen = (Component: React.ComponentType) => (props: any) => {
  return (
    <View style={styles.container}>
      <Component {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default function TabLayout() {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
      initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            return(
              <Ionicons name={iconNames[route.name]} size={18} color={color} />
            )
          },
          tabBarLabel: () => null,
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            borderRadius: 30,
            position: 'absolute',
            left: 10,
            right: 10,
            bottom: 20,
            height: 50,
            paddingBottom: 5,
          },
        })}>
        <Tab.Screen name="index" component={WrappedScreen(Home)} options={{ headerShown: false }} />
        <Tab.Screen
          name="Saved"
          component={WrappedScreen(Saved)}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Messages"
          component={WrappedScreen(Messages)}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={WrappedScreen(Search)}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={WrappedScreen(Profile)}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>

  );
}