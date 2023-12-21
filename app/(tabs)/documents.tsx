import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Text as GlueText, HStack } from "@gluestack-ui/themed";

export default function Documents() {
  return (
    <View style={styles.container}>
      <HStack>
        <GlueText bold size="2xl">
          Capsyl Documents Screen
        </GlueText>
      </HStack>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <GlueText pb={"$4"}>
        Example below to use default React Native stylesheets and components
      </GlueText>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
