import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex justify-center items-center ">
      <Text className="text-black text-4xl">Sign In</Text>
    </SafeAreaView>
  );
};

export default SignIn;
