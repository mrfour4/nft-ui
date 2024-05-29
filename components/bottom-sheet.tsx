import { color } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Animated, Pressable, Text, TouchableOpacity } from "react-native";
import { useActiveWallet, useDisconnect } from "thirdweb/react";

type Props = {
    setVisible: Dispatch<SetStateAction<boolean>>;
};

export const BottomSheet = ({ setVisible }: Props) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const timeId = useRef<NodeJS.Timeout>();

    const slideUp = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(slideAnim, {
            toValue: 100,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        slideUp();
    }, []);

    const closeModal = () => {
        slideDown();

        clearTimeout(timeId.current);

        timeId.current = setTimeout(() => {
            setVisible(false);
        }, 100);
    };

    const { disconnect } = useDisconnect();
    const wallet = useActiveWallet();

    const handleLogout = () => {
        if (wallet) {
            disconnect(wallet);
        }
        router.replace("/");
    };

    return (
        <Pressable
            className="absolute flex-1 bottom-0 left-0 right-0 h-full justify-end bg-dark/80"
            onPress={closeModal}
        >
            <Animated.View
                className="w-full h-24 bg-secondary rounded-t-3xl justify-center p-6"
                style={{
                    transform: [
                        {
                            translateY: slideAnim,
                        },
                    ],
                }}
            >
                <TouchableOpacity
                    className="flex-row items-center justify-end"
                    onPress={handleLogout}
                >
                    <MaterialIcons
                        name="logout"
                        size={22}
                        color={color.danger}
                    />

                    <Text className="font-psemibold text-base text-red-500 ml-1">
                        Log out
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </Pressable>
    );
};
