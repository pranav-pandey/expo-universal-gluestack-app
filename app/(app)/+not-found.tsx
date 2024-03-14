import { Link, Stack } from "expo-router";
import { Box, Text } from "@gluestack-ui/themed";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Box flex={1} alignItems="center" justifyContent="center" padding={20}>
        <Text fontSize={20} fontWeight="bold">
          This screen doesn't exist.
        </Text>
        <Box marginTop={15} paddingVertical={15}>
          <Link href="/">
            <Text fontSize={14} color="#2e78b7">
              Go to home screen!
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}
