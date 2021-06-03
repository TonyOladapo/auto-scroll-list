import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, FlatList } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { dummy_data } from "./dummy_data";

export default () => {
  const listRef = useRef(null);
  const item_width = Dimensions.get("window").width / 5;

  useEffect(() => {
    // listRef.current.scrollToIndex({ index: 5 });
  }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      console.log(e);
    },
  });

  return (
    <FlatList
      ref={listRef}
      data={dummy_data}
      getItemLayout={(_, index) => ({
        length: dummy_data.length,
        offset: item_width * index,
        index,
      })}
      onScroll={scrollHandler}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item }) => (
        <View
          style={{ flex: 1, height: 70, backgroundColor: "tomato", margin: 4 }}
        ></View>
      )}
    />
  );
};
