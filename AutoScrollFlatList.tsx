import React, { useEffect, useRef } from "react";
import { FlatList, Dimensions, Animated } from "react-native";

interface Props {
  data: any[];
  interval?: number;
  numPerScreen: number;
}

export default ({ data, interval, numPerScreen, ...restProps }: Props) => {
  const item_width = Dimensions.get("window").width / numPerScreen;

  const ref = useRef(null);

  let current_position = 0;

  let activeInterval: any;

  useEffect(() => {
    start_scroll();
    //@ts-ignore
    return () => clearInterval(activeInterval);
  }, []);

  const scrollInterval = interval ? interval : 2;

  const start_scroll = () => {
    //@ts-ignore
    activeInterval = setInterval(scrolling, scrollInterval);
  };

  const scrolling = () => {
    if (current_position < 0) {
      current_position = 0;
    }

    if (data.length > numPerScreen) {
      const position = current_position + 0.1;

      //@ts-ignore
      ref.current.scrollToOffset({ offset: position, animated: false });

      const maxOffset = data.length * item_width;

      if (current_position > maxOffset) {
        const offset = current_position - maxOffset;

        //@ts-ignore
        ref.current.scrollToOffset({
          offset,
          animated: false,
        });

        current_position = offset;
      } else {
        current_position = position;
      }
    }
  };

  return (
    //@ts-ignore
    <Animated.FlatList
      {...restProps}
      ref={ref}
      data={data}
      getItemLayout={(_, index) => ({
        length: data.length,
        offset: item_width * index,
        index,
      })}
    />
  );
};
