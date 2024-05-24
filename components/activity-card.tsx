import { color, images } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { formatDistance } from "date-fns";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type ActivityCardProps = {
    nft: {
        title: string;
        price: number;
        chain: string;
        usdPrice: number;
        quantity: number;
        from: string;
        to: string;
        latest: Date;
    };
    creator: {
        name: string;
        popular: boolean;
    };
};

const ActivityCard = ({ nft, creator }: ActivityCardProps) => {
    const latest = formatDistance(nft.latest, new Date(), { addSuffix: true });
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <View className="p-3 rounded-lg bg-secondary">
            <View className="flex-row items-center">
                <Image
                    source={images.nft2}
                    className="w-20 h-20 rounded-xl"
                    resizeMode="cover"
                />
                <View className="ml-3 flex-1 pr-2 ">
                    <View className=" flex-row items-center">
                        <Text className="text-xs text-gray-100 mr-1">
                            {creator.name}
                        </Text>

                        {creator.popular && (
                            <MaterialIcons
                                name="verified"
                                size={12}
                                color={color.primary}
                            />
                        )}
                    </View>
                    <Text className="font-pmedium text-white text-sm">
                        {nft.title}
                    </Text>
                </View>

                <View className="ml-auto flex items-end">
                    <Text className="font-plight text-[10px] text-green-500">
                        Sale
                    </Text>
                    <Text className="font-psemibold text-white text-sm">
                        {nft.price} {nft.chain}
                    </Text>
                    <Text className="font-plight text-[10px] text-gray-100">
                        {latest}
                    </Text>
                </View>
            </View>
            <View className="flex-row mt-4 justify-between">
                <View className="items-center justify-center">
                    <Text className="font-plight text-[10px] text-gray-100">
                        USD Price
                    </Text>
                    <Text className="text-xs text-white">
                        {formatter.format(nft.usdPrice)}
                    </Text>
                </View>
                <View className="items-center justify-center">
                    <Text className="font-plight text-[10px] text-gray-100">
                        Quantity
                    </Text>
                    <Text className="text-xs text-white">{nft.quantity}</Text>
                </View>
                <View className="items-center justify-center">
                    <Link
                        href={`/profile/${nft.from}`}
                        className="font-plight text-[10px] text-gray-100"
                    >
                        From
                    </Link>
                    <Text className="text-xs text-primary">{nft.from}</Text>
                </View>
                <View className="items-center justify-center">
                    <Text className="font-plight text-[10px] text-gray-100">
                        To
                    </Text>
                    <Link
                        href={`/profile/${nft.to}`}
                        className="text-xs text-primary"
                    >
                        {nft.to}
                    </Link>
                </View>
            </View>
        </View>
    );
};

export default ActivityCard;
