import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import {
  Box,
  Button,
  Text as GlueText,
  HStack,
  Image,
  ScrollView,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function Explore() {
  const [pickedImage, setPickedImage] = useState([]);
  const pickImage = async () => {
    const images = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });
    console.log(images, "images");

    if (!images.canceled) {
      setPickedImage(images.assets);
    }
  };
  return (
    <View style={styles.container}>
      <HStack>
        <GlueText bold size="2xl">
          Capsyl Explore Screen
        </GlueText>
      </HStack>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button onPress={() => pickImage()}>
        <GlueText color="white">Pick an Image from System</GlueText>
      </Button>

      <ScrollView
        p={"$4"}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {pickedImage.map((item, index) => {
          return (
            <Image
              key={index}
              m={"$2"}
              w={200}
              h={200}
              source={{ uri: item.uri }}
              alt="Selected img from File system"
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    paddingRight: 6,
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
