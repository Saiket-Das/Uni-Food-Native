import { Text } from "react-native";
import React from "react";
import defaultStyles from "../../confiq/styles";

export default function AppText({ style, children, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
