import CollectionSmall from "@/components/collection-small";
import NFTCard from "@/components/nft-card";
import { color, images } from "@/constants";
import { cn } from "@/lib/utils";
import {
    AntDesign,
    FontAwesome5,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { Link, useLocalSearchParams, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
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

const formatAddress = (address: string) => {
    const start = address.slice(0, 6);
    const end = address.slice(-4);
    const middle = address.length > 8 ? "..." : "";
    return `${start}${middle}${end}`;
};

const formatNumber = (num: number) => {
    if (num >= 1000) {
        let formatted = (num / 1000).toFixed(1);
        if (formatted.endsWith(".0")) {
            formatted = formatted.slice(0, -2);
        }
        formatted = formatted.replace(".", ",");
        return formatted + "K";
    }
    return num.toString();
};

const Profile = () => {
    const { id } = useLocalSearchParams();
    const pathname = usePathname();

    const [activeCollected, setActiveCollected] = useState(true);
    const [copying, setCopying] = useState(false);
    const timeId = useRef<NodeJS.Timeout>();

    const onShare = async () => {
        try {
            await Share.share({
                message: `https://nft-market.io${pathname}`,
            });
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    const copyToClipboard = async () => {
        clearTimeout(timeId.current);
        setCopying(true);

        timeId.current = setTimeout(() => {
            setCopying(false);
        }, 1000);

        await Clipboard.setStringAsync(profile.address);
    };

    const profile = {
        name: "Numbot world",
        bio: "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.",
        address: "0x20616cef3ebc8f7200df6182e52101fcaef4c8c7",
    };

    const address = formatAddress(profile.address);

    const collectedData = [
        {
            id: 1,
            creator: {
                name: "Mosu",
                popular: true,
            },
            nft: {
                title: "Alpha #2972",
                liked: 10,
            },
        },
        {
            id: 2,
            creator: {
                name: "Mosu",
                popular: true,
            },
            nft: {
                title: "Alpha #2972",
                liked: 10,
            },
        },
        {
            id: 3,
            creator: {
                name: "Mosu",
                popular: true,
            },
            nft: {
                title: "Alpha #2972",
                liked: 10,
            },
        },
    ];

    const createdData = [
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

    return (
        <SafeAreaView className="h-full bg-dark">
            <ScrollView className="flex-1">
                <View className="px-6 pb-8">
                    <View className="flex-row items-center justify-end top-8 z-10">
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
                        {profile.name}
                    </Text>

                    <TouchableOpacity
                        className="my-2 flex-row items-center"
                        onPress={copyToClipboard}
                        disabled={copying}
                    >
                        {copying ? (
                            <AntDesign
                                name="check"
                                size={16}
                                color={color.success}
                            />
                        ) : (
                            <FontAwesome5
                                name="copy"
                                size={16}
                                color={color.lightGray}
                            />
                        )}

                        <Text className="font-pregular text-xs text-gray-100 ml-2">
                            {address}
                        </Text>
                    </TouchableOpacity>

                    <Text className="font-pregular text-xs text-gray-100">
                        {profile.bio}
                    </Text>

                    {/* Navigation */}
                    <View className="flex-row mt-8 mb-5 border-b-[1px] border-slate-700 mb-5">
                        <TouchableOpacity
                            className={cn(
                                "border-b-2 border-transparent flex-1 flex-row items-start justify-center p-2",
                                activeCollected && " border-primary"
                            )}
                            onPress={() => setActiveCollected(true)}
                        >
                            <MaterialIcons
                                name="grid-on"
                                size={20}
                                color={
                                    activeCollected
                                        ? color.white
                                        : color.lightGray
                                }
                            />
                            <Text
                                className={cn(
                                    "font-psemibold text-gray-100 text-sm ml-1.5",
                                    activeCollected && "text-white"
                                )}
                            >
                                Collected {formatNumber(collectedData.length)}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={cn(
                                "border-b-2 border-transparent flex-1 flex-row items-center justify-center p-2",
                                !activeCollected && " border-primary"
                            )}
                            onPress={() => setActiveCollected(false)}
                        >
                            <MaterialIcons
                                name="format-paint"
                                size={20}
                                color={color.white}
                            />
                            <Text
                                className={cn(
                                    "font-psemibold text-gray-100 text-sm ml-2",
                                    !activeCollected && "text-white"
                                )}
                            >
                                Created {formatNumber(16310)}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {activeCollected && (
                        <FlatList
                            scrollEnabled={false}
                            data={collectedData}
                            renderItem={({ item }) => (
                                <CollectionSmall
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

                    {!activeCollected && (
                        <FlatList
                            scrollEnabled={false}
                            data={createdData}
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
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor={color.dark} />
        </SafeAreaView>
    );
};

export default Profile;
