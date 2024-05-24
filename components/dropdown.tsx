import { color } from "@/constants";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View } from "react-native";

type DropdownProps = {
    title: string;
    data: {
        label: string;
        value: string;
    }[];
};

const Dropdown = ({ title, data }: DropdownProps) => {
    const [selected, setSelected] = useState(data[0]);
    return (
        <View>
            <Text className="font-pmedium text-base text-white">{title}</Text>
            <View className=" rounded-xl bg-secondary py-1 mt-2">
                <Picker
                    className="text-white"
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelected(itemValue)
                    }
                    style={{
                        color: color.white,
                        fontFamily: "Poppins-Medium",
                    }}
                    itemStyle={{
                        color: color.white,
                        fontFamily: "Poppins-Medium",
                    }}
                    dropdownIconColor={color.white}
                    prompt={`Choose a ${title}`}
                >
                    {data.map((collect) => (
                        <Picker.Item
                            key={collect.value}
                            label={collect.label}
                            value={collect.value}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default Dropdown;
