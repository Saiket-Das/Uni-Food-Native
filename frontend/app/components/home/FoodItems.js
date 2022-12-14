import { View, FlatList } from "react-native";
import React, { useEffect } from "react";

import useApi from "../../hooks/useApi";
import foodApi from "../../api/food";

import FoodItem from "../lists/ListItem";
import Text from "../common/AppText";

import colors from "../../config/colors";
import routes from "../../navigation/routes";

export default function AllItems({ navigation }) {
  const foodData = useApi(foodApi.getFoods);

  useEffect(() => {
    foodData.request();
  }, []);

  return (
    <View style={{ marginHorizontal: 15 }}>
      <Text style={{ fontWeight: "700", marginVertical: 10 }}>All items</Text>
      <FlatList
        data={foodData.data.data}
        keyExtractor={(food) => food._id}
        renderItem={({ item }) => (
          <FoodItem
            title={item.name}
            subTitle={item.description}
            price={item.price}
            imageUri={item.imageURL}
            icon="plus"
            backgroundColor={colors.white}
            onPress={() => navigation.navigate(routes.FOOD_DETAILS, item)}
          />
        )}
        // ItemSeparatorComponent={ListItemSperator}
      />
    </View>
  );
}
