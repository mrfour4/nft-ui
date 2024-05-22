import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchInputProps = {
    initialQuery: string;
};

export const SearchInput = ({ initialQuery }: SearchInputProps) => {
    const [text, setText] = useState("");

    return (
        <View className="flex-row items-center space-x-4 w-full h-14 px-4 bg-gray-700 rounded-xl">
            <TouchableOpacity>
                <Feather name="search" size={20} color="#AAB8C2" />
            </TouchableOpacity>

            <TextInput
                className="flex-1 mt-0.5 font-pmedium text-base text-white"
                placeholder="Search your NFT..."
                placeholderTextColor="#AAB8C2"
                value={text}
                onChangeText={setText}
            />

            {text && (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setText("")}
                >
                    <FontAwesome5 name="times" size={20} color="#AAB8C2" />
                </TouchableOpacity>
            )}
        </View>
    );
};
