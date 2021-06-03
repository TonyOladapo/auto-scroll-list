import React, { useState } from "react";
import { View } from "react-native";
// import AutoScrollFlatList from "./AutoScrollFlatList";
import { dummy_data } from "./dummy_data";
import { Button, Overlay, Text } from "react-native-elements";
import AnimatedListScroll from "./AnimatedListScroll";

export default () => {
  const [overlayState, toggleOverlay] = useState(true);

  return <AnimatedListScroll />;

  // return (
  //   <View style={{ flex: 1 }}>
  //   <AutoScrollFlatList
  //     data={dummy_data}
  //     numPerScreen={5}
  //     interval={0.01}
  //     keyExtractor={(item, index) => `${index}`}
  //     renderItem={() => (
  //       <View
  //         style={{ height: 70, flex: 1, backgroundColor: "red", margin: 4 }}
  //       ></View>
  //     )}
  //   />

  //     <Overlay
  //       isVisible={overlayState}
  //       fullScreen
  //       overlayStyle={{
  //         backgroundColor: "rgba(52, 52, 52, 0.8)",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //       children={
  //         <Text style={{ color: "#fff" }}>jjswnjndjksndkjbsjdkbak</Text>
  //       }
  //     />
  //   </View>
  // );
};
