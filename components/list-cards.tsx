import React from "react";
import { FlatList } from "react-native";
import CollectionCard from "./collection-card";

type ListCardsProps = {
    cards: {
        id: number | string;
        creator: {
            name: string;
            popular: boolean;
        };
        nft: {
            floor: number;
            totalVolume: number;
            chain: string;
        };
    }[];
};

const ListCards = ({ cards }: ListCardsProps) => {
    return (
        <FlatList
            horizontal
            contentContainerStyle={{
                gap: 16,
            }}
            data={cards}
            renderItem={({ item: { id, nft, creator } }) => (
                <CollectionCard id={id} nft={nft} creator={creator} />
            )}
        />
    );
};

export default ListCards;
