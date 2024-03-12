import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerItem } from "@react-navigation/drawer";
import {
  Box,
  Divider,
  Text as GlueText,
  LinkText,
  Link,
  Pressable,
} from "@gluestack-ui/themed";
import { useSession } from "@/helpers/ctx";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}
export const CustomDrawer = (props) => {
  const { signOut } = useSession();

  return (
    <Box {...props} style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="space-between"
        flexDirection="column"
        height={"100%"}
      >
        <Box flex={2}>
          <Box justifyContent="center" alignItems="center">
            <GlueText size="5xl" p={"$8"} color="#F6F6F7">
              Expo V3
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
          <Divider py={0.5} m={"$2"} w={"90%"} bgColor="#a8a29e" />
          <DrawerItem
            label="List"
            focused={
              props.state.index ===
              props.state.routes.findIndex((e) => e.name === "list")
            }
            activeTintColor="#FFFFFF"
            inactiveTintColor="#a8a29e"
            onPress={() => props.navigation.navigate("list")}
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
            <Pressable
              onPress={() => {
                signOut();
              }}
            >
              <GlueText size="xs" color="#a8a29e" paddingRight={"$2"} underline>
                Logout
              </GlueText>
            </Pressable>

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
            @ Pranav Pandey
          </GlueText>
          <GlueText size="xs" color="#a8a29e" paddingHorizontal={"$2"}>
            All Rights Reserved
          </GlueText>
        </Box>
      </Box>
    </Box>
  );
};
