import { router } from "expo-router";
import { View } from "react-native";

import { useSession } from "@/helpers/ctx";
import { useUser } from "@/helpers/useUser";
import {
  Box,
  Text as GlueText,
  Button,
  Input,
  InputField,
  FormControl,
  FormControlLabelText,
  FormControlErrorText,
} from "@gluestack-ui/themed";
import { FormControlLabel } from "@gluestack-ui/themed";
import { FormControlHelper } from "@gluestack-ui/themed";
import { FormControlHelperText } from "@gluestack-ui/themed";
import { FormControlError } from "@gluestack-ui/themed";
import { FormControlErrorIcon } from "@gluestack-ui/themed";
import { AlertCircleIcon } from "@gluestack-ui/themed";
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const { state, dispatch } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Box justifyContent="center" alignItems="center">
        <GlueText size="5xl" p={"$8"}>
          Expo V3
        </GlueText>
      </Box>
      <FormControl minWidth="$80">
        <FormControlLabel>
          <FormControlLabelText>Username</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            What would you like people to call you?
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
      <FormControl minWidth="$80">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Password should be 6 characters long
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Choose one time slot for the meeting
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button
        m={"$2"}
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
    </View>
  );
}
