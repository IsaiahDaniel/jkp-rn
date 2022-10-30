import React from "react";
import tw from "twrnc";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { COLORS, images, SIZES } from "../constants";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={tw`bg-[#1F2537] flex-1`}
      showsVerticalScrollIndicator={false}
    >
      <Image source={images.WelcomeImage} style={{ width: SIZES.width }} />
      <View style={tw`pl-5 pr-5`}>
        <Text style={tw`text-white text-4xl mt-5 mb-3`}>Welcome to JPK</Text>
        <Text style={tw`text-white font-extrabold`}>Get started Today</Text>

        <View style={tw`mt-10`}>
          <Button
            text={`Sign Up`}
            onPress={() => navigation.navigate("Login")}
          />
        </View>

        <View style={tw`mt-10`}>
          <Input
            placeholder="example@email.com"
            placeholderTextColor="#ccc"
            label="Email Address"
            style={tw`text-white flex-1`}
          />

          <View style={tw`mt-5`} />

          <Input
            icon={"lock"}
            placeholder="*****"
            label="Password"
            style={tw`text-white flex-1`}
            secureTextEntry
            placeholderTextColor="#ccc"
          />

          <View style={tw`mt-5`} />

          <Input
             icon={"lock"}
             placeholder="*****"
             label="Confirm Password"
             style={tw`text-white flex-1`}
             secureTextEntry
             placeholderTextColor="#ccc"
          />

          <View style={tw`mt-10`}>
            <Button
              text={`Sign In`}
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>

          <View style={tw`mt-20`} />
        </View>
      </View>
    </ScrollView>
  );
}
