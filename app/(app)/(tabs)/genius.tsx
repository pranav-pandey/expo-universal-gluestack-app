import {
  Image,
  VStack,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  Box,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import GlueModal from "@/components/GlueModal";
import { editors } from "@/constants/data";

type CardProps = {
  url: string;
  desc: string;
};

const Card = ({ url, desc }: CardProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <VStack pl={"$4"} pt={"$4"}>
      <Pressable
        onPress={() => {
          // router.push("/modal");
          setShowModal(true);
        }}
      >
        <Image source={{ uri: url }} h={150} w={150} alt={`image`} />
        <Text mt={"$2"} mb={"$2"}>
          {desc}
        </Text>
      </Pressable>
      <GlueModal showModal={showModal} setShowModal={setShowModal} />
    </VStack>
  );
};

export default function Genius() {
  return (
    <ScrollView>
      <Box flex={1} justifyContent={"center"} pt={"$8"}>
        <Text pl={"$4"} pt={"$2"} bold>
          Smart Editors
        </Text>
        <FlatList
          data={editors.slice(0, 4)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <Card url={item.url} desc={item.subHeading} />;
          }}
        />
        {/* <Divider /> */}
        <Text pl={"$4"} pt={"$2"} bold>
          Styles
        </Text>
        <FlatList
          data={editors.slice(4)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <Card url={item.url} desc={item.subHeading} />;
          }}
        />
      </Box>
    </ScrollView>
  );
}
