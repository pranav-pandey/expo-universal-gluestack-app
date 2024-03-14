import React from "react";
import {
  Text,
  Modal,
  ModalBackdrop,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  Heading,
  Icon,
  CloseIcon,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  VStack,
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

const GlueModal = ({ showModal, setShowModal }) => {
  const ref = React.useRef(null);
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent maxWidth={"80%"} maxHeight={"80%"}>
        <ModalHeader>
          <Heading fontSize={"lg"}>List of uploaded images</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ScrollView>
            <Text pl={"$4"} pt={"$4"}>
              Dec 2023
            </Text>
            <FlatList
              data={modalData.slice(0, 4)}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return <Card url={item.url} />;
              }}
            />
            <Text pl={"$4"} pt={"$4"}>
              Unknown
            </Text>
            <FlatList
              data={modalData.slice(4)}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return <Card url={item.url} />;
              }}
            />
          </ScrollView>
        </ModalBody>
        {/* <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default GlueModal;
