import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import {
  FlatList,
  Image,
  Pressable,
  VStack,
  Text as GlueText,
  ScrollView,
} from "@gluestack-ui/themed";
import { modalData } from "@/constants/data";

type CardProps = {
  url: string;
};

const Card = ({ url }: CardProps) => {
  return (
    <VStack pl={"$4"} pt={"$4"}>
      <Pressable
        onPress={() => {
          console.log("Image selector used");
        }}
      >
        <Image source={{ uri: url }} h={150} w={150} alt={`image`} />
      </Pressable>
    </VStack>
  );
};

export default function ModalScreen() {
  return (
    <ScrollView>
      <GlueText pl={"$4"} pt={"$4"}>
        Dec 2023
      </GlueText>
      <FlatList
        data={modalData.slice(0, 4)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <Card url={item.url} />;
        }}
      />
      <GlueText pl={"$4"} pt={"$4"}>
        Unknown
      </GlueText>
      <FlatList
        data={modalData.slice(4)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <Card url={item.url} />;
        }}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
}
