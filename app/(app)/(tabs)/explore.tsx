import {
  Box,
  Button,
  Text,
  HStack,
  Image,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export declare type ImagePickerResult =
  | {
      cancelled: true;
    }
  | ({
      cancelled: false;
    } & ImageInfo);

export declare type ImageInfo = {
  uri: string;
  width: number;
  height: number;
  type?: "image" | "video";
  exif?: {
    [key: string]: any;
  };
  base64?: string;
};

export default function Explore() {
  const [pickedImage, setPickedImage] = useState([]);
  const pickImage = async () => {
    const images:
      | ImagePicker.ImagePickerSuccessResult
      | ImagePicker.ImagePickerCanceledResult =
      await ImagePicker.launchImageLibraryAsync({
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
    <ScrollView
      p={"$4"}
      contentContainerStyle={{
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <VStack justifyContent="center" alignItems="center" p={24}>
        <Text bold size="2xl">
          Expo V3 Explore Screen
        </Text>
        <Box
          marginVertical={30}
          height={1}
          width={"80%"}
          backgroundColor="#eee"
        />
        <Button onPress={() => pickImage()} width={400}>
          <Text color="white">Pick an Image from System</Text>
        </Button>
      </VStack>
      <HStack height={200} flexWrap="wrap">
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
      </HStack>
    </ScrollView>
  );
}
