import React from "react";
import { View, Text, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";

export default function Input({ icon, label, ...otherProps }) {
  return (
    <View>
      <Text style={tw`text-white mb-2 pl-2`}>{label}</Text>
      <View style={tw`border border-[#F9FD6D] p-5 rounded-lg text-white`}>
        <View style={tw`flex-row items-center`}>
          <TextInput 
            { ...otherProps }
          />
          <AntDesign name={icon} size={20} color={"#ccc"} />
        </View>
      </View>
    </View>
  );
}
