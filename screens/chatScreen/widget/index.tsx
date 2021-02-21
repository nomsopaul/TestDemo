import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface chatWidgetProp {
  title: string;
  description: string;
  urlToImage?: string;
  timeStamp: string;
}

export default function ChatWidget(props: chatWidgetProp) {
  const { title, description, urlToImage, timeStamp } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: urlToImage }}
        resizeMode="cover"
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: urlToImage ? 0 : 2,
          borderColor: urlToImage ? "transparent" : "red",
        }}
      />
      <View style={styles.textCover}>
        <Text style={{ fontSize: 15, fontWeight: "bold", width: "100%" }}>
          {title}
        </Text>
        <Text style={{ color: "#adadad" }}>{description}</Text>
      </View>
      <View style={styles.rightCover}>
        <Text style={{ color: "#8a8787" }}>{timeStamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
  },
  textCover: {
    paddingLeft: 15,
    width: "80%",
  },
  rightCover: {
    alignSelf: "flex-start",
    marginLeft: "auto",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
