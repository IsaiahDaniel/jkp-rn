import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function DashboardScreen({ route }) {
  console.log("route", route);

  return (
    <View style={tw`flex-1 items-center justify-center bg-[#1F2537]`}>
      <Text style={tw`text-white`}>DashboardScreen</Text>
    </View>
  );
}
