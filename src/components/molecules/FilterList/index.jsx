import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles.js";
import AimaaLabel, {
  LABEL_TYPES,
} from "_components/atoms/AimaaLabel/index.jsx";
import AimaaFilterTag from "_components/atoms/AimaaFilterTag/index.jsx";
import { useState } from "react";
import { border } from "_styles/mixins.js";

const INIT_STATE = ["All", "Submitted", "Pending", "Absent"];

export default function FilterList({
  filters = INIT_STATE,
  onTagSelection = (tag) => {
    console.error("No onTagSelection handler passed - FilterList", tag);
  },
}) {
  const [selected, setSelected] = useState(filters[0]);
  console.log('SHow',filters)
  return (
    <View style={styles.container}>
      {/* <AimaaLabel type={LABEL_TYPES.PAR}>Status: </AimaaLabel> */}
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.innerFlatList}
        data={filters}
        renderItem={({ item }) => {
          return <AimaaFilterTag
            isSelected={item === selected}
            onClick={(name) => {
              onTagSelection(name);
              setSelected(name);
            }}
          >
            {item}
          </AimaaFilterTag>;
        }}
        keyExtractor={item=>item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
