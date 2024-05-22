import { Button } from "@/components/button";
import { images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
    const handleConnectWallet = () => {
        // TODO: Connect wallet func

        router.push("/home");
    };

    return (
        <SafeAreaView className="bg-dark h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center h-full px-6">
                    <Image source={images.logo} />
                    <Text className="font-pbold text-3xl text-white text-center">
                        Discover largest NFT marketplace
                    </Text>
                    <Text className="mt-6 font-pmedium text-base text-gray-100 text-center">
                        A credible and excellent marketplace for non-fungible
                        token.
                    </Text>

                    <Button
                        title="Connect with Wallet"
                        handlePress={handleConnectWallet}
                        containerStyle="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor="#15202B" />
        </SafeAreaView>
    );
};

export default App;
