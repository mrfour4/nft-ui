import ActivityCard from "@/components/activity-card";
import NFTCard from "@/components/nft-card";
import { color, images } from "@/constants";
import { cn } from "@/lib/utils";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { subDays, subHours, subMinutes } from "date-fns";
import { Link, router, useLocalSearchParams, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Share,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

const collections = {
    name: "Numbot world",
    bio: "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.",
    items: 20,
    owners: 104,
    floor: 2,
    totalVolume: 199,
    chain: "ETH",
};

const Collection = () => {
    const { id } = useLocalSearchParams();
    const pathname = usePathname();

    const [activeItems, setActiveItems] = useState(true);

    const onShare = async () => {
        try {
            await Share.share({
                message: `https://nft-market.io${pathname}`,
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    const itemData = [
        {
            id: 1,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 2,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 3,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 4,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 5,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
    ];

    const activityData = [
        {
            id: 1,
            nft: {
                title: "Small Bro #2155",
                price: 0.18,
                chain: "ETH",
                usdPrice: 3.6,
                quantity: 1,
                from: "TVNOY1718",
                to: "Unnamed",
                latest: subMinutes(new Date(), 15),
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 2,
            nft: {
                title: "Small Bro #2155",
                price: 0.18,
                chain: "ETH",
                usdPrice: 1.23,
                quantity: 1,
                from: "TVNOY1718",
                to: "Unnamed",
                latest: subHours(new Date(), 3),
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 3,
            nft: {
                title: "Small Bro #2155",
                price: 0.18,
                chain: "ETH",
                usdPrice: 12.7,
                quantity: 1,
                from: "TVNOY1718",
                to: "Unnamed",
                latest: subDays(new Date(), 3),
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
    ];

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
                        className="h-[200px] -ml-6 -mt-8"
                        style={{
                            width: windowWidth,
                        }}
                    />
                    <View className="flex-row items-end justify-between">
                        <View className="flex-row items-end">
                            <Image
                                source={images.avatar}
                                className="w-24 h-24 rounded-full -mt-10"
                            />

                            <View className="-ml-5">
                                <MaterialIcons
                                    name="verified"
                                    size={24}
                                    color={color.primary}
                                />
                            </View>
                        </View>

                        {/* Social media */}
                        <View className="flex-row gap-4">
                            <Link href="https://www.google.com/">
                                <AntDesign
                                    name="earth"
                                    size={24}
                                    color={color.white}
                                />
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
                    </View>
                    <Text className="font-pbold text-2xl text-white mt-6">
                        {collections.name}
                    </Text>
                    <Text className="font-pregular text-xs text-gray-100">
                        {collections.bio}
                    </Text>

                    <View className="flex-row justify-between mt-6 rounded-lg bg-secondary p-4">
                        <View className="justify-center items-center">
                            <Text className="font-pmedium text-base text-white">
                                {collections.totalVolume} {collections.chain}
                            </Text>
                            <Text className="font-pregular text-xs text-gray-100">
                                Total volume
                            </Text>
                        </View>
                        <View className="justify-center items-center">
                            <Text className="font-pmedium text-base text-white">
                                {collections.floor} {collections.chain}
                            </Text>
                            <Text className="font-pregular text-xs text-gray-100">
                                Floor price
                            </Text>
                        </View>
                        <View className="justify-center items-center">
                            <Text className="font-pmedium text-base text-white">
                                {collections.items}
                            </Text>
                            <Text className="font-pregular text-xs text-gray-100">
                                Items
                            </Text>
                        </View>
                        <View className="justify-center items-center">
                            <Text className="font-pmedium text-base text-white">
                                {collections.owners}
                            </Text>
                            <Text className="font-pregular text-xs text-gray-100">
                                Owners
                            </Text>
                        </View>
                    </View>

                    {/* Navigator */}
                    <View className="flex-row mt-8 mb-5 border-b-[1px] border-slate-700">
                        <TouchableOpacity
                            className={cn(
                                "border-b-2 border-transparent flex-1 flex-row items-start justify-center p-2",
                                activeItems && " border-primary"
                            )}
                            onPress={() => setActiveItems(true)}
                        >
                            <Ionicons
                                name="stats-chart"
                                size={18}
                                color={
                                    activeItems ? color.white : color.lightGray
                                }
                            />
                            <Text
                                className={cn(
                                    "font-psemibold text-gray-100 text-base ml-1.5",
                                    activeItems && "text-white"
                                )}
                            >
                                Items
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={cn(
                                "border-b-2 border-transparent flex-1 flex-row items-center justify-center p-2",
                                !activeItems && " border-primary"
                            )}
                            onPress={() => setActiveItems(false)}
                        >
                            <Entypo
                                name="line-graph"
                                size={18}
                                color={
                                    activeItems ? color.lightGray : color.white
                                }
                            />
                            <Text
                                className={cn(
                                    "font-psemibold text-gray-100 text-base ml-2",
                                    !activeItems && "text-white"
                                )}
                            >
                                Activity
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Items */}
                    {activeItems && (
                        <FlatList
                            scrollEnabled={false}
                            data={itemData}
                            renderItem={({ item }) => (
                                <NFTCard
                                    key={item.id}
                                    id={item.id}
                                    creator={item.creator}
                                    nft={item.nft}
                                />
                            )}
                            numColumns={2}
                            columnWrapperStyle={{
                                gap: 12,
                            }}
                            contentContainerStyle={{
                                gap: 18,
                            }}
                        />
                    )}

                    {/* Activity */}
                    {!activeItems && (
                        <FlatList
                            scrollEnabled={false}
                            data={activityData}
                            renderItem={({ item }) => (
                                <ActivityCard
                                    key={item.id}
                                    nft={item.nft}
                                    creator={item.creator}
                                />
                            )}
                            contentContainerStyle={{
                                gap: 16,
                            }}
                        />
                    )}
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor={color.dark} />
        </SafeAreaView>
    );
};

export default Collection;
