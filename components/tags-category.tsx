import clsx from "clsx";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "./button";

const TagsCategory = () => {
    const tags = [
        {
            id: 0,
            title: "Trending",
        },
        {
            id: 1,
            title: "Art",
        },
        {
            id: 2,
            title: "Gaming",
        },
    ];

    const [active, setActive] = useState(0);

    const handleChangeTag = (id: number) => {
        // TODO: handle change tag

        setActive(id);
    };

    return (
        <FlatList
            data={tags}
            renderItem={({ item: { id, title } }) => (
                <Button
                    key={id}
                    title={title}
                    handlePress={() => handleChangeTag(id)}
                    containerStyle={clsx(
                        "mr-4 px-5 min-w-[82px]",
                        id !== active && "bg-gray-700"
                    )}
                />
            )}
            horizontal
            style={{
                marginBottom: 32,
            }}
        />
    );
};

export default TagsCategory;
