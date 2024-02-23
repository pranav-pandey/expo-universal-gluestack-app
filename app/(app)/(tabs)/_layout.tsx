import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, router } from "expo-router";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { CustomDrawer } from "@/components/CustomDrawer";
import { Button, Text } from "@gluestack-ui/themed";
import { useUser } from "@/helpers/useUser";
import { useSession } from "@/helpers/ctx";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { state, dispatch } = useUser();
  const { signOut } = useSession();

  if (Platform.OS === "web") {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerType: "permanent",
            drawerStyle: {
              backgroundColor: "#1e293b",
              width: 250,
            },
            headerShown: false,
            headerLeft: false,
            drawerActiveBackgroundColor: "#F6F6F7",
            drawerActiveTintColor: "#F6F6F7",
          }}
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="index" options={{ title: "Home" }} />
          <Drawer.Screen name="explore" options={{ title: "Explore" }} />
          <Drawer.Screen name="documents" options={{ title: "Documents" }} />
          <Drawer.Screen name="genius" options={{ title: "Genius" }} />
          <Drawer.Screen name="trash" options={{ title: "Trash" }} />
        </Drawer>
      </GestureHandlerRootView>
    );
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => {
          return (
            <Button
              m={"$1"}
              size="xs"
              action="outline"
              onPress={() => {
                signOut();
                dispatch({ type: "LOGOUT" });
                // Navigate after logging out
                // router.replace("/");
              }}
            >
              <Text size="sm" color="$white">
                Logout
              </Text>
            </Button>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Expo V3",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: "Documents",
          tabBarIcon: ({ color }) => <TabBarIcon name="file" color={color} />,
        }}
      />

      <Tabs.Screen
        name="genius"
        options={{
          title: "Genius",
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />

      <Tabs.Screen
        name="trash"
        options={{
          title: "Trash",
          tabBarIcon: ({ color }) => <TabBarIcon name="trash" color={color} />,
        }}
      />
    </Tabs>
  );
}
