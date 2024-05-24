import { EmptyState } from "@/components/empty-state";
import ListCards from "@/components/list-cards";
import { SearchInput } from "@/components/search-input";
import TagsCategory from "@/components/tags-category";
import { useData } from "@/hooks/useData";
import React, { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { data, refetch } = useData(() => {});

    const onRefresh = async () => {
        setRefreshing(true);

        await refetch();

        setRefreshing(false);
    };

    const collectionTitleData = [
        { id: 1, category: "Art" },
        { id: 2, category: "Membership" },
        { id: 3, category: "Music" },
        { id: 4, category: "Photography" },
        { id: 5, category: "PFPs" },
    ];

    const cardsData = [
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
    ];

    return (
        <SafeAreaView className="bg-dark h-full">
            <FlatList
                data={collectionTitleData}
                renderItem={({ item }) => (
                    <View>
                        <Text className="text-white font-pbold text-3xl mb-4">
                            {item.category}
                        </Text>
                        <ListCards cards={cardsData} />
                    </View>
                )}
                ListHeaderComponent={() => (
                    <View className=" space-y-9">
                        <Text className="font-pbold text-white text-4xl mb-6">
                            Search
                        </Text>
                        <SearchInput />

                        {/* TODO: get data and fill in component */}
                        <View className="w-full flex-1 -mb-6">
                            <TagsCategory />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No NFTs Found"
                        subtitle="No NFTs created yet"
                    />
                )}
                ListFooterComponent={() => <Text>Footer</Text>}
                contentContainerStyle={{
                    gap: 40,
                }}
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 32,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Search;
