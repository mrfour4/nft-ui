import { color, images } from "@/constants";
import { cn } from "@/lib/utils";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type NFTCardProps = {
    id: bigint;
    nft: {
        title: string;
        image: string
        liked: number;
        price: number;
        chain: string;
    };
    creator: {
        name: string;
        popular: boolean;
    };
};
const NFTCard = ({ id, nft, creator }: NFTCardProps) => {
    const [liked, setLiked] = useState(false);

    return (
        <View className="rounded-xl bg-gray-700 flex-1 max-w-[48%]">
            <TouchableOpacity onPress={() => router.push(`/nft-item/${id}`)}>
                <Image
                    source={nft.image || images.nft}
                    className="w-full  h-[120px] rounded-t-xl"
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <View className="px-3 pt-2">
                <View className="flex-row items-center">
                    <Text className=" font-pregular text-xs text-gray-100 mr-0.5">
                        {creator.name}
                    </Text>
                    {creator.popular && (
                        <MaterialIcons
                            name="verified"
                            size={12}
                            color={color.primary}
                        />
                    )}
                    <Text className="ml-auto font-semibold text-sm text-white  ">
                        {nft.title}
                    </Text>
                </View>
                <Text className="text-gray-100 text-xs mt-1">Buy Now</Text>
                <View className="flex-row items-center -mt-2">
                    <Text className="font-psemibold text-sm text-white mr-auto">
                        {nft.price.toLocaleString("de-DE")} {nft.chain}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setLiked(!liked)}
                        className="flex-row  items-center p-3 pr-0"
                    >
                        {liked ? (
                            <AntDesign name="heart" size={12} color="#ef4444" />
                        ) : (
                            <AntDesign
                                name="hearto"
                                size={12}
                                color={color.lightGray}
                            />
                        )}
                        <Text
                            className={cn(
                                "text-xs text-gray-100 ml-1 font-pregular",
                                liked && "text-red-400"
                            )}
                        >
                            {liked ? nft.liked + 1 : nft.liked}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NFTCard;
