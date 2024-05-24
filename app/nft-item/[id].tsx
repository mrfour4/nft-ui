import { color, images } from "@/constants";
import {
    AntDesign,
    Entypo,
    FontAwesome5,
    Fontisto,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";
import { Link, router, useLocalSearchParams, usePathname } from "expo-router";
import React from "react";
import {
    Alert,
    Image,
    ScrollView,
    Share,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const formatTime = (time: Date) => {
    const formattedDate = time.toLocaleDateString("vi-VN", {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
    });

    const formattedTime = time.toLocaleTimeString("vi-VN", {
        hour: "numeric",
        minute: "numeric",
        second: undefined,
        hour12: true,
        timeZoneName: "short",
    });

    return `${formattedDate} at ${formattedTime}`;
};

const NFTItem = () => {
    const { id } = useLocalSearchParams();
    const pathname = usePathname();

    const onShare = async () => {
        try {
            await Share.share({
                message: `https://nft-market.io${pathname}`,
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    const data = {
        nft: {
            title: "Small Bro #1338",
            liked: 10,
            owners: 1,
            editions: 1,
            visitors: 22,
            chain: "ETH",
            ends: new Date(),
            price: 0.041,
            usdPrice: 15.22,
            bio: "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.",
            created: "Smallbros",
            owned: "Unnamed",
        },

        creator: {
            name: "Karafuru",
            popular: true,
        },
    };

    const { nft, creator } = data;

    const endsTime = formatTime(nft.ends);

    return (
        <SafeAreaView className="h-full bg-dark">
            <ScrollView className="flex-1">
                <View className="px-6 pb-8">
                    <View className="flex-row items-center justify-between top-8 z-10">
                        <TouchableOpacity
                            className="w-9 h-9 rounded-full bg-secondary items-center justify-center"
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={18}
                                color={color.white}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="w-9 h-9 rounded-full bg-secondary items-center justify-center"
                            onPress={onShare}
                        >
                            <Ionicons
                                name="share-social"
                                size={18}
                                color={color.white}
                            />
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={images.nft2}
                        className="w-full h-[334px] rounded-xl mt-14 mb-6"
                        resizeMode="cover"
                    />

                    <View className="flex-row items-center gap-2">
                        <Link
                            href={`/profile/${creator.name}`}
                            className="font-pmedium text-base text-white"
                        >
                            {creator.name}
                        </Link>
                        {creator.popular && (
                            <MaterialIcons
                                name="verified"
                                size={18}
                                color={color.primary}
                            />
                        )}
                    </View>
                    <Text className="mt-2 font-pbold text-2xl text-white">
                        {nft.title}
                    </Text>
                    <Text className="font-plight text-sm text-gray-100">
                        {nft.bio}
                    </Text>
                    <Text className="font-pregular text-sm text-gray-100 mt-2">
                        Chain{" "}
                        <Text className="font-psemibold text-white">
                            {nft.chain}
                        </Text>
                    </Text>

                    <View className="flex-row mt-4 items-center justify-between">
                        <View className="justify-center items-center gap-1">
                            <AntDesign
                                name="heart"
                                size={18}
                                color={color.lightGray}
                            />
                            <Text className="font-pmedium text-white text-sm">
                                {nft.liked}
                            </Text>
                            <Text className="font-pregular text-gray-100 text-xs">
                                favorites
                            </Text>
                        </View>
                        <View className="justify-center items-center gap-1">
                            <FontAwesome5
                                name="users"
                                size={18}
                                color={color.lightGray}
                            />
                            <Text className="font-pmedium text-white text-sm">
                                {nft.owners}
                            </Text>
                            <Text className="font-pregular text-gray-100 text-xs">
                                owners
                            </Text>
                        </View>
                        <View className="justify-center items-center gap-1">
                            <Fontisto
                                name="nav-icon-grid"
                                size={18}
                                color={color.lightGray}
                            />
                            <Text className="font-pmedium text-white text-sm">
                                {nft.editions}
                            </Text>
                            <Text className="font-pregular text-gray-100 text-xs">
                                editions
                            </Text>
                        </View>
                        <View className="justify-center items-center gap-1">
                            <Entypo
                                name="eye"
                                size={18}
                                color={color.lightGray}
                            />
                            <Text className="font-pmedium text-white text-sm">
                                {nft.visitors}
                            </Text>
                            <Text className="font-pregular text-gray-100 text-xs">
                                visitors
                            </Text>
                        </View>
                    </View>

                    <View className="mt-4 p-3 rounded-lg border border-secondary">
                        <Text className="font-pregular text-xs text-gray-100 ">
                            Ends on {endsTime}
                        </Text>

                        <View className="pb-1 border-b-[1px] border-secondary my-1" />

                        <Text className="font-pregular text-xs text-gray-100 mt-1">
                            Current price
                        </Text>

                        <Text className="font-pmedium text-lg text-white">
                            {nft.price.toLocaleString("de-DE")} {nft.chain}
                        </Text>

                        <Text className="font-pregular text-gray-100 text-sm">
                            ${nft.usdPrice.toLocaleString("en-US")}
                        </Text>
                    </View>

                    <View className="flex-row mt-6 items-center">
                        <Image
                            source={images.avatar}
                            className="w-10 h-10 rounded-full"
                            resizeMode="cover"
                        />
                        <Text className="ml-2 font-plight text-xs text-gray-100">
                            Created by{" "}
                            <Link
                                href={`/profile/${nft.created}`}
                                className="text-primary"
                            >
                                {nft.created}
                            </Link>
                        </Text>
                    </View>

                    <View className="my-3 border-b-[1px] border-secondary" />

                    <View className="flex-row items-center">
                        <Image
                            source={images.avatar2}
                            className="w-10 h-10 rounded-full"
                            resizeMode="cover"
                        />
                        <Text className="ml-2 font-plight text-xs text-gray-100">
                            Owned by{" "}
                            <Link
                                href={`/profile/${nft.created}`}
                                className="text-primary"
                            >
                                {nft.owned}
                            </Link>
                        </Text>
                    </View>

                    <TouchableOpacity className="mt-6 p-3 rounded-lg bg-primary flex-row items-center justify-center">
                        <Entypo name="wallet" size={20} color={color.white} />
                        <Text className="font-psemibold text-sm text-white ml-2">
                            Place a Bid
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NFTItem;
