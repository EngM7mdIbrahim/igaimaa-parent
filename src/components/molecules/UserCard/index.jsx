import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import BackgroundImage from "../BackgroundImage/index.jsx";
import AvatarIcon from "../AvatarIcon/index.jsx";
import { IMAGES_SIZES } from "_components/atoms/AimaaImage/index.jsx";
import TitleSubtitle, { TITLES_TYPES } from "../TitleSubtitle/index.jsx";
import { SECONDARY } from "_styles/colors.js";
import { margin } from "_styles/mixins.js";
import images from "_images/images.js";

export default function UserCard({
  style = {},
  userName = "No name for the user passed - UserCard",
  userLevel = "No level for the user passed - UserCard",
  userCourses = "No number of courses for the user passed - UserCard",
}) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.topContainer}>
        <BackgroundImage noBottomLeft noBottomRight />
        <AvatarIcon style={styles.profile} size={IMAGES_SIZES.X_MEDIUM} imageName={images.user_card_avatars} />
      </View>
      <TitleSubtitle style={{...margin(5,0,5,0)}} title={userName} subtitle={userLevel} boldTitle />
      <View style={{ width: "100%", height: 1, backgroundColor: SECONDARY, ...margin(5,0,5,0) }} />
      <TitleSubtitle
        title={userCourses}
        subtitle="Courses"
        boldTitle
        type={TITLES_TYPES.SMALL}
      />
    </View>
  );
}
