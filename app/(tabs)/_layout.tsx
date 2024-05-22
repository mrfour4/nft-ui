import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { ReactNode } from "react";

type TabIconProps = {
    icon: ReactNode;
    color: string;
    name: string;
    focused: boolean;
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#1D9BF0",
                    tabBarInactiveTintColor: "#AAB8C2",
                    tabBarStyle: {
                        backgroundColor: "#253341",
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
