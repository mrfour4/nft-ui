import { images } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type ListCardsProps = {
    cards: {
        id: number;
        creator: {
            name: string;
            popular: boolean;
        };
        nft: {
            floor: number;
            totalVolume: number;
            chain: string;
        };
    }[];
};

const ListCards = ({ cards }: ListCardsProps) => {
    return (
        <FlatList
            horizontal
            contentContainerStyle={{
                gap: 16,
            }}
            data={cards}
            renderItem={({ item: { nft, creator } }) => (
                <View className="bg-gray-700 rounded-xl">
                    <Image
                        source={images.nft2}
                        className="w-full h-[150px] rounded-t-xl"
                        resizeMode="cover"
                    />
                    <View className="p-4 w-[200px]">
                        <View className="flex-row">
                            <Text className="font-psemibold text-white text-sm mr-1">
                                {creator.name}
                            </Text>
                            <MaterialIcons
                                name="verified"
                                size={12}
                                color="#1D9BF0"
                            />
                        </View>
                        <View className="flex-row items-center justify-between">
                            <View>
                                <Text className="text-xs text-gray-100">
                                    Floor
                                </Text>
                                <Text className="text-sm text-white font-psemibold">
                                    {nft.floor} {nft.chain}
                                </Text>
                            </View>
                            <View>
                                <Text className="text-xs text-gray-100">
                                    Total volume
                                </Text>
                                <Text className="text-sm text-white font-psemibold ml-auto">
                                    {nft.totalVolume} {nft.chain}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        />
    );
};

export default ListCards;
