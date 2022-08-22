import { View, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import InfoIcon from "../InfoIcon/index.jsx";
import AimaaLabel, {
  LABEL_TYPES,
} from "_components/atoms/AimaaLabel/index.jsx";
import { border, margin } from "_styles/mixins.js";
import AimaaStatusTag from "_components/atoms/AimaaStatusTag/index.jsx";
import { ALERT, INFO, PRIMARY, SUCCESS, WARNING } from "_styles/colors.js";
import { getFormattedDate } from "_utils/helpers.js";
export const STATUS_TAGS = {
  absent: {
    name: "Absent",
    color: PRIMARY,
  },
  notSubmitted: {
    name: "Not Submitted",
    color: PRIMARY,
  },
  late: {
    name: "Late",
    color: WARNING,
  },
  attended: {
    name: "Attended",
    color: SUCCESS,
  },
  graded: {
    name: 'Graded',
    color: SUCCESS
  },
  grading: {
    name: "Grading",
    color: INFO,
  },
};

export default function ThreeInfoIcon({
  style = {},
  status = STATUS_TAGS.absent,
  score = undefined,
  outOf = 10,
  date = Date.now()
}) {
  let newStatus = status;
  if(score){
    newStatus = STATUS_TAGS.graded;
  }
  return (
    <View style={{ ...styles.container, ...style }}>
      <InfoIcon text="Physical" />
      <View style={{ flex: 3 }}>
        <AimaaLabel isBold type={LABEL_TYPES.PAR} style={{ textAlign: "center" }}>
          {getFormattedDate(date)}
        </AimaaLabel>
      </View>
      <View style={{ flexDirection: "column", ...margin(5), flex: 2,}}>
        <AimaaStatusTag color={newStatus.color} style={{ ...margin(5) }}>
          {newStatus.name}
        </AimaaStatusTag>
        {score && <AimaaLabel
          type={LABEL_TYPES.SUB_PAR}
          style={{ textAlign: "center", ...margin(10, 0, 0, 0) }}
        >
          Score: {score}
        </AimaaLabel>}
        {score && <AimaaLabel type={LABEL_TYPES.SUB_PAR} style={{ textAlign: "center" }}>
          Out of: 10
        </AimaaLabel>}
      </View>
    </View>
  );
}
