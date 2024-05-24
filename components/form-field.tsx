import { color } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { Alert, Text, TextInput, TextInputProps, View } from "react-native";

interface FormFieldProps extends TextInputProps {
    title: string;
    required?: boolean;
    placeholder?: string;
    onChangeText: (value: string) => void;
    containerStyle?: string;
    inputStyle?: string;
}
const FormField = ({
    title,
    required,
    value,
    placeholder,
    onChangeText,
    containerStyle,
    inputStyle,
    ...props
}: FormFieldProps) => {
    return (
        <View className={containerStyle}>
            <Text className="font-pmedium text-base text-gray-100 mt-2">
                {title}

                {required && (
                    <Text className="text-red-500 font-pbold text-xl">*</Text>
                )}
            </Text>

            <View
                className={cn(
                    "w-full h-16 px-4 bg-secondary rounded-xl mt-2 justify-center",
                    inputStyle
                )}
            >
                <TextInput
                    className=" text-white font-psemibold text-sm py-3"
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(value) => onChangeText(value)}
                    placeholderTextColor={color.lightGray}
                    {...props}
                    onBlur={() => {
                        if (required && !value) {
                            Alert.alert(`${title} is required`);
                        }
                    }}
                />
            </View>
        </View>
    );
};

export default FormField;
