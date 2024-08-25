import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex justify-center items-center ">
      <Text className="text-black text-4xl">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
