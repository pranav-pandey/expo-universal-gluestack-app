import EditScreenInfo from "@/components/EditScreenInfo";
import {
  Text,
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
  Box,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function Documents() {
  const [selectValue, setSelectValue] = useState("");
  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <HStack>
        <Text bold size="2xl">
          Expo V3 Documents Screen
        </Text>
      </HStack>
      <Box
        marginVertical={30}
        height={1}
        width={"80%"}
        backgroundColor="#eee"
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
      <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
    </Box>
  );
}
