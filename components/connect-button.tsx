import { color } from "@/constants";
import { chain, client } from "@/constants/thirdweb";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useActiveWallet, useConnect } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

type ButtonProps = {
    title: string;
    containerStyle?: string;
    textStyle?: string;
};

export const ConnectButton = ({
    title,
    containerStyle,
    textStyle,
}: ButtonProps) => {
    const { connect, isConnecting } = useConnect();
    const connectMetamask = async () => {
        await connect(async () => {
            const wallet = createWallet("io.metamask");
            await wallet.connect({
                client: client,
                chain: chain,
            });
            return wallet;
        });
    };

    const wallet = useActiveWallet();

    const handleConnectWallet = async () => {
        await connectMetamask();
        router.push("/home");
    };

    return (
        !wallet && (
            <TouchableOpacity
                activeOpacity={0.8}
                disabled={isConnecting}
                className={cn(
                    "bg-primary rounded-xl min-h-[50px] justify-center items-center px-4 min-w-[80px] flex-row gap-x-2",
                    containerStyle,
                    isConnecting ? "opacity-50" : ""
                )}
                onPress={handleConnectWallet}
            >
                <Text
                    className={cn("font-pbold text-sm text-white", textStyle)}
                >
                    {isConnecting ? "Connecting" : title}
                </Text>
                {isConnecting && (
                    <ActivityIndicator color={color.white} size="small" />
                )}
            </TouchableOpacity>
        )
    );
};

// return !wallet ? (
//     <TouchableOpacity
//         activeOpacity={0.8}
//         disabled={isConnecting}
//         className={cn(
//             "bg-primary rounded-xl min-h-[50px] justify-center items-center px-4 min-w-[80px]",
//             containerStyle,
//             isConnecting ? "opacity-50" : ""
//         )}
//         onPress={handleConnectWallet}
//     >
//         {!isConnecting ? (
//             <Text
//                 className={cn("font-pbold text-sm text-white", textStyle)}
//             >
//                 {title}
//             </Text>
//         ) : (
//             <Text>Log in</Text>
//         )}
//         {account && (
//             <>
//                 <Text className="flex flex-row gap-x-2">
//                     <Text>Address: </Text>
//                     <Text>{account.address}</Text>
//                 </Text>
//             </>
//         )}
//     </TouchableOpacity>
// ) : (
//     <TouchableOpacity
//         activeOpacity={0.8}
//         disabled={isConnecting}
//         className={cn(
//             "bg-primary rounded-xl min-h-[50px] justify-center items-center px-4 min-w-[80px]",
//             containerStyle,
//             isConnecting ? "opacity-50" : ""
//         )}
//         onPress={() => {
//             disconnect(wallet);
//         }}
//     >
//         {account && (
//             <>
//                 <Text className="flex flex-row gap-x-2">
//                     <Text>Address: </Text>
//                     <Text>{account.address}</Text>
//                     <Text>
//                         Balance: {mthBlance?.displayValue}{" "}
//                         {mthBlance?.symbol} s
//                     </Text>
//                 </Text>
//             </>
//         )}
//         <Text>Logout</Text>
//     </TouchableOpacity>
// );

// const account = useActiveAccount();
// const { data } = useReadContract(balanceOf, {
//     contract: tokenContract,
//     address: account?.address!,
// });

// const { data: mthBlance } = useWalletBalance({
//     address: account?.address,
//     chain,
//     client,
//     tokenAddress: tokenAddress,
// });
// // console.log(mthBlance);
// // console.log(data);
// const { disconnect } = useDisconnect();
//
