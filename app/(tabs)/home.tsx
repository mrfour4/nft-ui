import { EmptyState } from "@/components/empty-state";
import ListCards from "@/components/list-cards";
import NFTCard from "@/components/nft-card";
import TagsCategory from "@/components/tags-category";
import { images } from "@/constants";
import { useData } from "@/hooks/useData";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { data, refetch } = useData(() => {});

    const onRefresh = async () => {
        setRefreshing(true);

        await refetch();

        setRefreshing(false);
    };

    return (
        <SafeAreaView className="bg-dark h-full">
            <FlatList
                data={[
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                    { id: 6 },
                ]}
                renderItem={({ item }) => (
                    <NFTCard
                        key={item.id}
                        nft={{
                            title: "#3791",
                            liked: 8,
                            price: 0.638,
                            chain: "ETH",
                        }}
                        creator={{
                            name: "Karafuru",
                            popular: true,
                        }}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className=" space-y-9">
                        <View className=" flex-row items-center justify-between">
                            {/* TODO: get data balance */}

                            <View className="flex-row items-center justify-between px-3 py-2 rounded-lg border border-gray-100">
                                <FontAwesome5
                                    name="ethereum"
                                    size={18}
                                    color="#C1CCF7"
                                />
                                <Text className="ml-3 font-pbold text-base text-white">
                                    26,031
                                </Text>
                            </View>

                            <Image
                                source={images.avatar}
                                className="w-[52px] h-[52px] rounded-full"
                                resizeMode="cover"
                            />
                        </View>

                        {/* TODO: get data and fill in component */}
                        <View className="w-full flex-1 pt-6 pb-8">
                            <TagsCategory />

                            <ListCards
                                cards={[
                                    {
                                        id: 1,
                                        creator: {
                                            name: "Mosu",
                                            popular: true,
                                        },
                                        nft: {
                                            floor: 0.04,
                                            totalVolume: 0.9,
                                            chain: "ETH",
                                        },
                                    },
                                    {
                                        id: 2,
                                        creator: {
                                            name: "Mosu",
                                            popular: false,
                                        },
                                        nft: {
                                            floor: 0.04,
                                            totalVolume: 0.9,
                                            chain: "ETH",
                                        },
                                    },
                                    {
                                        id: 3,
                                        creator: {
                                            name: "Mosu",
                                            popular: true,
                                        },
                                        nft: {
                                            floor: 0.04,
                                            totalVolume: 0.9,
                                            chain: "ETH",
                                        },
                                    },
                                ]}
                            />
                        </View>

                        <Text className="font-pbold text-white text-2xl">
                            Trending Collections
                        </Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No NFTs Found"
                        subtitle="No NFTs created yet"
                    />
                )}
                ListFooterComponent={() => <Text>Footer</Text>}
                ListHeaderComponentStyle={{
                    marginBottom: 10,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                numColumns={2}
                columnWrapperStyle={{
                    gap: 16,
                }}
                contentContainerStyle={{
                    gap: 20,
                }}
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 32,
                }}
            />
        </SafeAreaView>
    );
};

export default Home;