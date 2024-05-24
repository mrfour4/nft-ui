import { color, images } from "@/constants";
import { cn } from "@/lib/utils";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type CollectionSmallProps = {
    id: number;
    creator: {
        name: string;
        popular: boolean;
    };
    nft: {
        title: string;
        liked: number;
    };
};
const CollectionSmall = ({ id, creator, nft }: CollectionSmallProps) => {
    const [liked, setLiked] = useState(false);

    return (
        <View key={id} className="bg-secondary rounded-xl flex-1 max-w-[48%]">
            <TouchableOpacity onPress={() => router.push(`/collection/${id}`)}>
                <Image
                    source={images.nft2}
                    className="w-full  h-[144px] rounded-t-xl"
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <View className="p-3 pb-1">
                <Text className="font-psemibold text-base text-white">
                    {nft.title}
                </Text>
                <View className="flex-row items-center -mt-1">
                    <Text className="font-plight text-gray-100 text-sm mr-1 mt-2">
                        {creator.name}
                    </Text>

                    {creator.popular && (
                        <MaterialIcons
                            name="verified"
                            size={12}
                            color="#1D9BF0"
                        />
                    )}

                    <TouchableOpacity
                        className="ml-auto flex-row items-center p-3 pr-0"
                        onPress={() => setLiked(!liked)}
                    >
                        {liked ? (
                            <AntDesign name="heart" size={16} color="#ef4444" />
                        ) : (
                            <AntDesign
                                name="hearto"
                                size={16}
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

export default CollectionSmall;
