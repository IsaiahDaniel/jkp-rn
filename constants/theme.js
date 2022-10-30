import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#246BFD",

  white: "#fff",
  dark: "#000",
  lightGrey: "#E5E4E6",
};

export const SIZES = {
  base: 10,
  radius: 20,

  ten: 10,
  twenty: 20,
  thrity: 20,
  fourthy: 40,

  largeTitle: 50,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
