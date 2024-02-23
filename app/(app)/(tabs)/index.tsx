import EditScreenInfo from "@/components/EditScreenInfo";
import { Box, Text, VStack } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <VStack justifyContent="center" alignItems="center">
        <Text bold size="2xl">
          Expo V3 Home Screen
        </Text>
        <Box
          marginVertical={30}
          height={1}
          width={"80%"}
          backgroundColor="#eee"
        />
        <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
      </VStack>
    </Box>
  );
}
