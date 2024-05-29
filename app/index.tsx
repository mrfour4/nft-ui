import "@thirdweb-dev/react-native-adapter";
import "expo-router/entry";

import { ConnectButton } from "@/components/connect-button";
import { color, images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActiveWallet } from "thirdweb/react";
const App = () => {
    const wallet = useActiveWallet();

    useEffect(() => {
        if (wallet) {
            router.replace("/home");
        }
    }, [wallet]);

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

                    <ConnectButton
                        title="Connect with Wallet"
                        containerStyle="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor={color.dark} />
        </SafeAreaView>
    );
};

export default App;
