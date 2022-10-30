import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FormPicker from "../components/forms/AppFormPicker";
import AppForm from "../components/forms/AppForm";

import colors from "../confiq/colors";
import defaultStyles from "../confiq/styles";

import NumberPickerItem from "../components/common/NumberPickerItem";
import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";

const tablenumbers = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "6",
    value: 6,
  },

  {
    label: "7",
    value: 7,
  },
  {
    label: "8",
    value: 8,
  },
  {
    label: "9",
    value: 9,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "11",
    value: 11,
  },
  {
    label: "12",
    value: 12,
  },
];

export default function OrderDone() {
  return (
    <Screen>
      <View style={{ margin: 10 }}>
        <View style={styles.totalContainer}>
          <Text style={{ fontWeight: "700", fontSize: "15" }}>TABLE NO</Text>

          <AppForm>
            <FormPicker
              items={tablenumbers}
              name="tableno"
              numberOfColumns={3}
              PickerItemComponent={NumberPickerItem}
              placeholder="Table No"
            />
          </AppForm>

          <Text style={{ fontWeight: "700", fontSize: "15", marginTop: 15 }}>
            PAYMENT METHOD
          </Text>

          <View style={styles.cashContainer}>
            <MaterialCommunityIcons name="cash-multiple" size={21} />
            <Text style={{ marginHorizontal: 10 }}>Cash</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  totalContainer: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },

  cashContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 14,
    borderRadius: 10,
    marginTop: 8,
  },
});
