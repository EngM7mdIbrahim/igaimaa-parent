import { Dimensions, PixelRatio } from "react-native";
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function borderRadius(
  value,
  topLeft = true,
  topRight = true,
  bottomRight = true,
  bottomLeft = true
) {
  let styles = {};

  styles[`borderBottomEndRadius`] = bottomRight ? value : 0;
  styles[`borderBottomStartRadius`] = bottomLeft ? value : 0;
  styles[`borderTopStartRadius`] = topLeft ? value : 0;
  styles[`borderTopEndRadius`] = topRight ? value : 0;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, "margin");
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, "padding");
}

export function boxShadow(
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

export function border(color = "#000") {
  return {
    borderWidth: 2,
    borderColor: color,
  };
}
