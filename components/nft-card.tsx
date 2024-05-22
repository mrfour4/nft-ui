import { images } from "@/constants";
import { cn } from "@/lib/utils";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type NFTCardProps = {
    nft: {
        title: string;
        liked: number;
        price: number;
        chain: string;
    };
    creator: {
        name: string;
        popular: boolean;
    };
};
const NFTCard = ({ nft, creator }: NFTCardProps) => {
    const [liked, setLiked] = useState(false);

    return (
        <View className="rounded-xl bg-gray-700 flex-1">
            <Image
                source={images.nft}
                className="w-full h-[120px] rounded-t-xl"
                resizeMode="cover"
            />
            <View className="py-3 px-2">
                <View className="flex-row items-center">
                    <Text className=" font-pregular text-xs text-gray-100 mr-0.5">
                        {creator.name}
                    </Text>
                    {creator.popular && (
                        <MaterialIcons
                            name="verified"
                            size={12}
                            color="#1D9BF0"
                        />
                    )}
                    <Text className="ml-auto font-semibold text-sm text-white  ">
                        {nft.title}
                    </Text>
                </View>
                <Text className="text-gray-100 text-xs mt-2">Buy Now</Text>
                <View className="flex-row items-center mt-0.5">
                    <Text className="font-psemibold text-sm text-white mr-auto">
                        {nft.price} {nft.chain}
                    </Text>

                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        {liked ? (
                            <AntDesign name="heart" size={12} color="#ef4444" />
                        ) : (
                            <AntDesign
                                name="hearto"
                                size={12}
                                color="#AAB8C2"
                            />
                        )}
                    </TouchableOpacity>

                    <Text
                        className={cn(
                            "text-xs text-gray-100 ml-1",
                            liked && "text-red-400"
                        )}
                    >
                        {liked ? nft.liked + 1 : nft.liked}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default NFTCard;
