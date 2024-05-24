import Dropdown from "@/components/dropdown";
import FormField from "@/components/form-field";
import { color } from "@/constants";
import { SimpleLineIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
    const [image, setImage] = useState<string>();
    const [form, setForm] = useState({
        name: "",
        supply: 1,
        description: "",
    });

    const collectionData = [
        { label: "Kolectiv", value: "Kolectiv" },
        { label: "Pudgy Rods", value: "Pudgy Rods" },
        { label: "Damien", value: "Damien" },
    ];

    const blockchainData = [
        { label: "Ethererum", value: "Ethererum" },
        { label: "Polygon", value: "Polygon" },
        { label: "Hyperledger Fabric", value: "Hyperledger Fabric" },
    ];

    const onPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [5, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const onDeployContract = () => {
        // TODO: verify data
        const { name, description, supply } = form;

        if (!name) {
            Alert.alert("Miss data");
            return;
        }

        // TODO: handle deploy contract
        router.push("/success");
    };

    return (
        <SafeAreaView className="h-full bg-dark">
            <ScrollView className="flex-1 px-6 py-8">
                <Text className="font-pbold text-2xl text-white text-center">
                    Create an NFT
                </Text>

                <View className="mt-8">
                    <Text className="font-pmedium text-base text-white">
                        Upload new items{" "}
                        <Text className="text-red-500 font-pbold text-xl">
                            *
                        </Text>
                    </Text>

                    <TouchableOpacity
                        className="h-[168px] border-dashed rounded-xl border-1 items-center justify-center mt-2"
                        style={
                            !image && {
                                borderWidth: 1,
                                borderColor: color.lightGray,
                            }
                        }
                        onPress={onPickImage}
                    >
                        {image ? (
                            <Image
                                source={{ uri: image }}
                                className="w-full h-full rounded-xl"
                                resizeMode="cover"
                            />
                        ) : (
                            <>
                                <SimpleLineIcons
                                    name="cloud-upload"
                                    size={60}
                                    color={color.lightGray}
                                />
                                <Text className="font-pmedium text-base text-gray-100 mt-2">
                                    Upload your NFT
                                </Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>

                <View className="mt-6">
                    <Dropdown title="Collection" data={collectionData} />
                </View>

                <FormField
                    containerStyle="mt-4"
                    title="Name"
                    required
                    placeholder="Name your NFT"
                    value={form.name}
                    onChangeText={(value) => setForm({ ...form, name: value })}
                />

                <FormField
                    containerStyle="mt-4 "
                    inputStyle="h-[128px] justify-start"
                    title="Description"
                    placeholder="Enter a description"
                    value={form.description}
                    onChangeText={(value) =>
                        setForm({ ...form, description: value })
                    }
                    multiline
                />

                <View className="mt-6">
                    <Dropdown title="Blockchain" data={blockchainData} />
                </View>

                <FormField
                    containerStyle="mt-4"
                    title="Supply"
                    required
                    value={form.supply.toString()}
                    onChangeText={(value) =>
                        setForm({ ...form, supply: Math.max(+value, 1) })
                    }
                    inputMode={"decimal"}
                />

                <TouchableOpacity
                    className="p-3 bg-primary rounded-lg mt-6 "
                    onPress={onDeployContract}
                >
                    <Text className="font-psemibold text-white text-base ml-2 text-center">
                        Deploy now
                    </Text>
                </TouchableOpacity>

                <View className="h-20" />
            </ScrollView>

            <StatusBar style="light" backgroundColor={color.dark} />
        </SafeAreaView>
    );
};

export default Create;
