import { router } from "expo-router";
import { useSession } from "@/helpers/ctx";
import { useUser } from "@/helpers/useUser";
import { Box, Text as GlueText, Button } from "@gluestack-ui/themed";

import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const { state, dispatch } = useUser();

  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <Box justifyContent="center" alignItems="center">
        <GlueText size="5xl" p={"$8"}>
          Expo V3
        </GlueText>
      </Box>
      <Button
        m={"$2"}
        p={"$2"}
        onPress={() => {
          signIn(username, password);
          // Store required data in local reducer
          const user = { username, password };
          dispatch({ type: "LOGIN", payload: user });
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        <GlueText size="xl" p={"$1"} color="$white">
          Sign In
        </GlueText>
      </Button>
    </Box>
  );
}
