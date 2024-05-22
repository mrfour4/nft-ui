import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Search = () => {
    const { query } = useLocalSearchParams();
    return (
        <View>
            <Text className="text-3xl text-white">{query}</Text>
        </View>
    );
};

export default Search;
