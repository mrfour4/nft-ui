import { images } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type CollectionCardProps = {
    id: number | string;
    creator: {
        name: string;
        popular: boolean;
    };
    nft: {
        floor: number;
        totalVolume: number;
        chain: string;
    };
};

const CollectionCard = ({ id, creator, nft }: CollectionCardProps) => {
    return (
        <TouchableOpacity
            key={id}
            className="bg-gray-700 rounded-xl"
            onPress={() => router.push(`/collection/${id}`)}
        >
            <Image
                source={images.nft2}
                className="w-full h-[150px] rounded-t-xl"
                resizeMode="cover"
            />
            <View className="p-4 max-w-[200px]">
                <View className="flex-row">
                    <Text className="font-psemibold text-white text-sm mr-1">
                        {creator.name}
                    </Text>
                    {creator.popular && (
                        <MaterialIcons
                            name="verified"
                            size={12}
                            color="#1D9BF0"
                        />
                    )}
                </View>
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-xs text-gray-100 font-plight">
                            Floor
                        </Text>
                        <Text className="text-sm text-white font-psemibold">
                            {nft.floor} {nft.chain}
                        </Text>
                    </View>
                    <View>
                        <Text className="text-xs text-gray-100 font-plight">
                            Total volume
                        </Text>
                        <Text className="text-sm text-white font-psemibold ml-auto">
                            {nft.totalVolume} {nft.chain}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CollectionCard;
