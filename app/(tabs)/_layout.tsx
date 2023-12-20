import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  if (Platform.OS === "web") {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            // drawerType: "permanent",
            drawerStyle: {
              backgroundColor: "#1e293b",
            },
            drawerActiveBackgroundColor: "#F6F6F7",
            drawerActiveTintColor: "#F6F6F7",
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerActiveTintColor: "#111827",
              drawerInactiveTintColor: "#a8a29e",
              drawerLabelStyle: { marginTop: 3 },
              drawerIcon: ({ color }) => (
                <TabBarIcon name="home" color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="genius"
            options={{
              drawerLabel: "Genius",
              title: "Genius",
              drawerActiveTintColor: "#111827",
              drawerInactiveTintColor: "#a8a29e",
              drawerLabelStyle: { marginTop: 3 },
              drawerIcon: ({ color }) => (
                <TabBarIcon name="list" color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="explore"
            options={{
              drawerLabel: "Explore",
              title: "Explore",
              drawerActiveTintColor: "#111827",
              drawerInactiveTintColor: "#a8a29e",
              drawerLabelStyle: { marginTop: 3 },
              drawerIcon: ({ color }) => (
                <TabBarIcon name="search" color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="trash"
            options={{
              drawerLabel: "Trash",
              title: "Trash",
              drawerActiveTintColor: "#111827",
              drawerInactiveTintColor: "#a8a29e",
              drawerLabelStyle: { marginTop: 3 },
              drawerIcon: ({ color }) => (
                <TabBarIcon name="trash" color={color} />
              ),
            }}
          />
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
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Capsyl",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="genius"
        options={{
          title: "Genius",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
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
        name="trash"
        options={{
          title: "Trash",
          tabBarIcon: ({ color }) => <TabBarIcon name="trash" color={color} />,
        }}
      />
    </Tabs>
  );
}
