import React from "react";
import tw from "twrnc";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { COLORS, images, SIZES } from "../constants";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";

export default function LoginScreen() {
  const navigation = useNavigation();

  let loginSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  });

  return (
    <ScrollView
      style={tw`bg-[#1F2537] flex-1`}
      showsVerticalScrollIndicator={false}
    >
      <Image source={images.WelcomeImage} style={{ width: SIZES.width }} />
      <View style={tw`pl-5 pr-5`}>
        <Text style={tw`text-white text-4xl mt-5 mb-3`}>Welcome to JPK</Text>
        <Text style={tw`text-white font-extrabold`}>
          See Your Growth And Get Consulting Growth
        </Text>

        <View style={tw`mt-10`}>
          <Button
            text={`Sign Up`}
            onPress={() => navigation.navigate("Register")}
          />
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => navigation.navigate("Dashboard")}
          validationSchema={loginSchema}
        >
          {(args) => (
            <View style={tw`mt-10`}>
              <Input
                icon={"mail"}
                placeholder="example@email.com"
                autoComplete="off"
                autoCorrect={false}
                onBlur={() => args.setFieldTouched("email")}
                placeholderTextColor="#ccc"
                label="Email Address"
                style={tw`text-white flex-1`}
                onChangeText={args.handleChange("email")}
              />

              {args.touched.email && args.errors.email && (
                <Text style={tw`text-red-300 pl-2 pt-2 pb-2`}>
                  A Valid Email is required
                </Text>
              )}

              <View style={tw`mt-5`} />

              <Input
                icon={"lock"}
                placeholder="*****"
                autoComplete="off"
                autoCorrect={false}
                onBlur={() => args.setFieldTouched("password")}
                label="Password"
                style={tw`text-white flex-1`}
                secureTextEntry
                placeholderTextColor="#ccc"
                onChangeText={args.handleChange("password")}
              />

              {args.touched.password && args.errors.password && (
                <Text style={tw`text-red-300 pl-2 pt-2 pb-2`}>
                  Password must be atleast six characters
                </Text>
              )}

              <View style={tw`mt-10`}>
                <Button text={`Sign In`} onPress={args.handleSubmit} />
              </View>

              {/* {console.log("isValid", args.isValid)} */}
              {/* {console.log("isValid", args.isValid)}
              {console.log("isDirty", args.dirty)} */}

              {/* {!args.isValid && args.dirty ? (
                <View style={tw`mt-10`}>
                  <Button text={`Sign In`} onPress={args.handleSubmit} />
                </View>
              ) : (
                <View style={tw`mt-10`}>
                  <Button text={`Sign In`} secondary />
                </View>
              )} */}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
