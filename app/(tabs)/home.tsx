import { BottomSheet } from "@/components/bottom-sheet";
import { EmptyState } from "@/components/empty-state";
import ListCards from "@/components/list-cards";
import NFTCard from "@/components/nft-card";
import TagsCategory from "@/components/tags-category";
import { images } from "@/constants";
import { chain, client, tokenAddress } from "@/constants/thirdweb";
import { formatNumber } from "@/lib/utils";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";

const Home = () => {
    // const {
    //     mutateAsync: sendTransactionAsync,
    //     isPending,
    //     error,
    //     data,
    // } = useSendTransaction();

    const account = useActiveAccount();

    const { data: balance } = useWalletBalance({
        chain,
        address: account?.address,
        client,
        tokenAddress,
    });

    const [modalVisible, setModalVisible] = useState(false);

    // console.log(error, "erorrrr");
    // console.log(account, "account");

    const [refreshing, setRefreshing] = useState(false);
    // // const { data, refetch } = useData(() => {});

    // const nftsQuery = useReadContract(getNFTs, {
    //     contract: collectionContract,
    //     start: 0,
    //     count: 10,
    // });
    // // console.log(nftsQuery);

    // const sendMutation = useSendAndConfirmTransaction();

    // const { mutateAsync: sendTx, data: transactionResult } =
    //     useSendTransaction();
    // const { mutateAsync: sendAndConfirmTxAsync, data: transactionReceipt } =
    //     useSendAndConfirmTransaction();

    // // const sendMutation = useSendAndConfirmTransaction();
    // // console.log(sendMutation.data, "dataaaaaaaaaaa");

    // const buyNFT = async () => {
    //     try {
    //         const tx = await sendAndConfirmTxAsync(
    //             buyFromListing({
    //                 contract: marketplaceContract,
    //                 listingId: 5n,
    //                 quantity: 1n,
    //                 recipient: account?.address,
    //             })
    //         );
    //         console.log(tx);
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     // console.log("click");
    //     // const transaction=prepareContractCall({
    //     //     contract
    //     // })
    //     // console.log("validListings: ", validListings);

    //     // const wallet = createWallet("io.metamask");
    //     // await wallet.connect({
    //     //     client: client,
    //     //     chain: chain,
    //     // });
    // };

    // const createNFT = async () => {
    //     try {
    //         //    await     uploadMobile({ client: client,files:[{
    //         //     uri:
    //         //    }] });
    //         // const transaction = mintTo({
    //         //     contract: collectionContract,
    //         //     to: account?.address,
    //         //     // nft: {
    //         //     //     name: "My NFT",
    //         //     //     description: "This is my NFT",
    //         //     //     image: "https://example.com/image.png",
    //         //     // },
    //         // });

    //         // const { transactionHash } = await sendTransaction({
    //         //     transaction,
    //         //     account,
    //         // });

    //         // console.log(transactionHash);

    //         let result = await launchImageLibraryAsync({
    //             mediaTypes: MediaTypeOptions.Images,
    //         });

    //         const res = await uploadMobile({
    //             client: client,
    //             files: [
    //                 {
    //                     name: "Test",
    //                     uri: result.assets[0].uri,
    //                 },
    //             ],
    //         });

    //         const transaction = mintTo({
    //             contract: collectionContract,
    //             to: account?.address,
    //             nft: res[0],
    //         });

    //         const rest = await sendTransaction({
    //             transaction,
    //             account,
    //         });

    //         console.log(rest);

    //         // console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // // buyNFT();
    // const owner = useReadContract(ownerOf, {
    //     contract: collectionContract,
    //     tokenId: 0n,
    // });

    // // console.log(owner);

    const onRefresh = async () => {
        // setRefreshing(true);
        // await refetch();
        // setRefreshing(false);
    };

    const nftData = [
        {
            id: 1,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 2,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 3,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 4,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
        {
            id: 5,
            nft: {
                title: "#3791",
                liked: 8,
                price: 0.638,
                chain: "ETH",
            },
            creator: {
                name: "Karafuru",
                popular: true,
            },
        },
    ];

    const collectionData = [
        {
            id: "Art",
            creator: {
                name: "Mosu",
                popular: true,
            },
            nft: {
                floor: 0.04,
                totalVolume: 0.9,
                chain: "ETH",
            },
        },
        {
            id: "Gaming",
            creator: {
                name: "Mosu",
                popular: false,
            },
            nft: {
                floor: 0.04,
                totalVolume: 0.9,
                chain: "ETH",
            },
        },
        {
            id: "Music",
            creator: {
                name: "Mosu",
                popular: true,
            },
            nft: {
                floor: 0.04,
                totalVolume: 0.9,
                chain: "ETH",
            },
        },
    ];

    return (
        <SafeAreaView className="bg-dark h-full">
            {/* <Button title="get" handlePress={createNFT} />
            <Image
                width={250}
                height={250}
                source={{
                    uri: renderIPFS(
                        "ipfs://QmT5MdxT35obg26ToFTfdW3upTaj9NfzX7FGCApYg8av7T/IMG_3877.jpeg"
                    ),
                }}
            /> */}
            <FlatList
                data={nftData}
                renderItem={({ item }) => (
                    <NFTCard
                        key={item.id}
                        id={item.id}
                        creator={item.creator}
                        nft={item.nft}
                    />
                )}
                ListHeaderComponent={() => (
                    <View>
                        <View className=" flex-row items-center justify-between">
                            {/* TODO: get data balance */}

                            <View className="flex-row items-center justify-between px-3 py-2 rounded-lg border border-gray-100">
                                <FontAwesome5
                                    name="ethereum"
                                    size={18}
                                    color="#C1CCF7"
                                />
                                <Text className="ml-3 font-pbold text-base text-white">
                                    {formatNumber(+balance?.displayValue!)}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                            >
                                <Image
                                    source={images.avatar}
                                    className="w-[52px] h-[52px] rounded-full"
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* TODO: get data and fill in component */}
                        <View className="w-full flex-1 pt-6 pb-8">
                            <TagsCategory />

                            <ListCards cards={collectionData} />
                        </View>

                        <Text className="font-pbold text-white text-2xl">
                            Trending NFT
                        </Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No NFTs Found"
                        subtitle="No NFTs created yet"
                    />
                )}
                ListFooterComponent={() => <Text>Footer</Text>}
                ListHeaderComponentStyle={{
                    marginBottom: 10,
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                numColumns={2}
                columnWrapperStyle={{
                    gap: 12,
                }}
                contentContainerStyle={{
                    gap: 18,
                }}
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 32,
                }}
            />

            {modalVisible && <BottomSheet setVisible={setModalVisible} />}
        </SafeAreaView>
    );
};

export default Home;
