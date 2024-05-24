import { color } from "@/constants";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: color.primary,
                    tabBarInactiveTintColor: color.lightGray,
                    tabBarStyle: {
                        backgroundColor: color.darkGray,
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 70,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={24} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="search"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <AntDesign
                                name="pluscircle"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5
                                name="user-alt"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
