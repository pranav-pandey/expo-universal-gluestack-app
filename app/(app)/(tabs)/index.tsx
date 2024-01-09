import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Text as GlueText, VStack } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <View style={styles.container}>
      <VStack justifyContent="center" alignItems="center">
        <GlueText bold size="2xl">
          Expo V3 Home Screen
        </GlueText>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <GlueText p={"$4"}>
          Example below to use default React Native stylesheets and components.
          This text is using GlueStack UI Text component
        </GlueText>
        <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
      </VStack>
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
