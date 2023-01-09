import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector } from "react-redux";

import HomeNavigator from "./HomeNavigator";
import CartScreen from "./CheckoutNavigator";
import AccountScreen from "../screens/AccountScreen";

import HomeScreen from "../screens/HomeScreen";
import AddFoodScreen from "../screens/AddFoodScreen";

import AddFoodButton from "./AddFoodButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="addFood"
        component={AddFoodScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AddFoodButton
              onPress={() => navigation.navigate(routes.ADDFOOD)}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
          title: "Add Food",
        })}
      />
      {/* {cart > 0 && ( */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: cart.length ? cart.length : undefined,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
        }}
      />
      {/* )} */}

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
