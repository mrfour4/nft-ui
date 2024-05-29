import { cn } from "@/lib/utils";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
    title: string;
    handlePress: () => void;
    containerStyle?: string;
    textStyle?: string;
    isLoading?: boolean;
};

export const Button = ({
    title,
    handlePress,
    containerStyle,
    textStyle,
    isLoading,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={isLoading}
            className={cn(
                "bg-primary rounded-xl min-h-[50px] justify-center items-center px-4 min-w-[80px]",
                containerStyle,
                isLoading ? "opacity-50" : ""
            )}
            onPress={handlePress}
        >
            {!isLoading ? (
                <Text
                    className={cn("font-pbold text-sm text-white", textStyle)}
                >
                    {title}
                </Text>
            ) : (
                <View className="flex flex-row gap-x-2">
                    <ActivityIndicator animating={isLoading} />
                    <Text
                        className={cn(
                            "font-pbold text-sm text-white",
                            textStyle
                        )}
                    >
                        {title}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};
