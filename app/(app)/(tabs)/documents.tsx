import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import {
  Text as GlueText,
  HStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function Documents() {
  const [selectValue, setSelectValue] = useState("");
  return (
    <View style={styles.container}>
      <HStack>
        <GlueText bold size="2xl">
          Expo V3 Documents Screen
        </GlueText>
      </HStack>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Select
        selectedValue={selectValue}
        onValueChange={(value) => {
          setSelectValue(value);
        }}
      >
        <SelectTrigger variant="outline" size="md" m={8} w={220}>
          <SelectInput placeholder="Select option" />
          <SelectIcon>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
      <GlueText pb={"$4"}>
        Example below to use default React Native stylesheets and components
      </GlueText>
      <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
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
