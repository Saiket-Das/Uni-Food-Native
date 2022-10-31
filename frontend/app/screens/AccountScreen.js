import { FlatList, Image, StyleSheet, Switch, View } from "react-native";
import React, { useState } from "react";

import colors from "../confiq/colors";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/common/Icon";
import ListItemSeprator from "../components/lists/ListItemSperator";
// import useAuth from "../auth/useAuth";

export default function AccountScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const { user, logOut } = useAuth();
  // console.log(user);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Text
          style={{ fontWeight: "700", fontSize: "30", color: colors.white }}
        >
          Order
        </Text>
        <Text
          style={{ fontWeight: "700", fontSize: "30", color: colors.white }}
        >
          Order
        </Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../assets/images/avatar.jpg")}
          />

          <View style={styles.detailsContainer}>
            <Text style={{ fontWeight: "600" }} numberOfLines={1}>
              Ahan Bryan
            </Text>

            <Text style={{ color: colors.darkGray }}>ahanbryan@gmail.com</Text>
          </View>
        </View>
        <View>
          <ListItemSeprator style={{ marginVertical: 10 }} />
          <View style={styles.notificationContainer}>
            <Text style={{ fontWeight: "600", color: colors.darkGray }}>
              Notification
            </Text>
            <Switch
              // style={{ width: 20, height: 10 }}
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
              trackColor={{ false: colors.black, true: colors.primary }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: colors.light,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: colors.primary,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 10,
    backgroundColor: colors.white,
  },

  profileContainer: {
    backgroundColor: colors.white,
    margin: 20,
    marginBottom: 50,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },

  detailsContainer: {
    marginLeft: 20,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  itemContainer: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 10,
  },

  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },

  item: {
    marginHorizontal: 10,
  },
});
