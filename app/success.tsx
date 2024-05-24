import { Button } from "@/components/button";
import { color, images } from "@/constants";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Success = () => {
    return (
        <SafeAreaView className="h-full bg-dark">
            <View className="flex-1 items-center justify-center px-6">
                <Image
                    source={images.deploySuccess}
                    className="w-[207px] h-[181px]"
                    resizeMode="contain"
                />
                <Text className="font-pbold text-3xl text-white mt-6">
                    Hurrah
                </Text>
                <Text className="font-pmedium text-base text-white">
                    Your NFT Published
                </Text>

                <Text className="font-pmedium text-base text-white mt-8">
                    Share
                </Text>

                {/* Social media */}
                <View className="flex-row gap-x-4 mt-4 mt-">
                    <Link href="https://www.google.com/">
                        <AntDesign name="earth" size={24} color={color.white} />
                    </Link>
                    <Link href="https://www.instagram.com/">
                        <AntDesign
                            name="instagram"
                            size={24}
                            color={color.white}
                        />
                    </Link>
                    <Link href="https://x.com/">
                        <AntDesign
                            name="twitter"
                            size={24}
                            color={color.white}
                        />
                    </Link>
                    <Link href="https://discord.com/">
                        <MaterialIcons
                            name="discord"
                            size={24}
                            color={color.white}
                        />
                    </Link>
                </View>

                <Button
                    title="Back To Home"
                    handlePress={() => router.push("/home")}
                    containerStyle="mt-20 w-full"
                />
            </View>
        </SafeAreaView>
    );
};

export default Success;
