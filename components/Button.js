import React from "react";
import { COLORS } from "../constants";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export default function Button({ text, secondary, onPress }) {

  if(secondary){
    return (
      <TouchableOpacity style={tw`border border-[#6E6E78] rounded-[50] p-4`}>
        <Text style={tw`text-[#6E6E78] text-center`}>{text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={onPress} style={tw`border border-[#F9FD6D] rounded-[50] p-4`}>
      <Text style={tw`text-[#F9FD6D] text-center`}>{text}</Text>
    </TouchableOpacity>
  );
}
