import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "./button";

type EmptyStateProps = {
    title: string;
    subtitle: string;
};

export const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
    return (
        <View className="justify-center items-center px-6 -mt-10">
            <Image
                source={images.lookup}
                className="w-[207px]  "
                resizeMode="contain"
            />

            <Text className="text-base font-pmedium text-gray-100">
                {title}
            </Text>
            <Text className="text-lg text-center font-psemibold text-white mt-2">
                {subtitle}
            </Text>

            <Button
                title="Create NFT"
                handlePress={() => router.push("/create")}
                containerStyle="w-full my-5"
                textStyle="text-lg"
            />
        </View>
    );
};
