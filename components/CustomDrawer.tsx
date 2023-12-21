import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Platform, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Box,
  Divider,
  Heading,
  Text as GlueText,
  LinkText,
  Link,
} from "@gluestack-ui/themed";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}
export const CustomDrawer = (props) => {
  return (
    <Box {...props} style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="space-between"
        flexDirection="column"
        h={"100%"}
      >
        <Box flex={2}>
          <Box justifyContent="center" alignItems="center">
            <GlueText size="6xl" p={"$8"} color="#F6F6F7">
              capsyl
            </GlueText>
          </Box>
          <DrawerItem
            label="Home"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "index")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("index")}
            icon={({ focused, color }) => (
              <TabBarIcon name="cloud" color={focused ? "#61dafb" : color} />
            )}
          />
          <DrawerItem
            label="Explore"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "explore")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("explore")}
            icon={({ focused, color }) => (
              <TabBarIcon name="compass" color={focused ? "#61dafb" : color} />
            )}
          />

          <GlueText p={"$4"} color="#a8a29e" size="xs" bold>
            Library
          </GlueText>

          <DrawerItem
            label="Documents"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "documents")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("documents")}
            icon={({ focused, color }) => (
              <TabBarIcon name="file" color={focused ? "#61dafb" : color} />
            )}
          />
          <Divider py={0.5} m={"$2"} w={"80%"} bgColor="#a8a29e" />
          <DrawerItem
            label="Genius"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "genius")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("genius")}
            icon={({ focused, color }) => (
              <TabBarIcon name="star-o" color={focused ? "#61dafb" : color} />
            )}
          />

          <DrawerItem
            label="Trash"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "trash")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("trash")}
            icon={({ focused, color }) => (
              <TabBarIcon name="trash" color={focused ? "#61dafb" : color} />
            )}
          />
        </Box>
        <Box flex={1} justifyContent="flex-end" p={"$2"}>
          <Box
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            paddingHorizontal={"$2"}
          >
            <Link isExternal href="https://gluestack.io/">
              <LinkText size="xs" pr={"$2"} color="#a8a29e">
                Terms
              </LinkText>
            </Link>
            <Link isExternal href="https://gluestack.io/">
              <LinkText size="xs" color="#a8a29e">
                Privacy
              </LinkText>
            </Link>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            paddingHorizontal={"$2"}
          >
            <Link isExternal href="https://gluestack.io/">
              <LinkText size="xs" pr={"$2"} color="#a8a29e">
                Acceptable Usage Policy
              </LinkText>
            </Link>
          </Box>
          <GlueText size="xs" color="#a8a29e" paddingHorizontal={"$2"}>
            @ Synchronoss 2023
          </GlueText>
          <GlueText size="xs" color="#a8a29e" paddingHorizontal={"$2"}>
            All Rights Reserved
          </GlueText>
        </Box>
      </Box>
    </Box>
  );
};
