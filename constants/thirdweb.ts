import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { bscTestnet } from "thirdweb/chains";
import { resolveScheme } from "thirdweb/storage";
import marketplaceAbi from "./marketplace-abi.json";
const clientId = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
    throw new Error("Missing env");
}

export const client = createThirdwebClient({
    clientId,
});

export const chain = bscTestnet;

export const tokenAddress = "0x69123C51402D2D4Ab476FeF19dB9F5f75A7fA4Fe";
export const tokenContract = getContract({
    address: tokenAddress,
    client,
    chain,
});

export const collectionAddress = "0x386E4cFc7b2909AB3e7FE284d6C0012Ec744B856";
export const collectionContract = getContract({
    address: collectionAddress,
    client,
    chain,
});
export const marketplaceAddress = "0xf7ac128E1fF6E81E5B51506c4Af72746E7271c86";
export const marketplaceContract = getContract({
    address: marketplaceAddress,
    client,
    chain,
    // abi: marketplaceAbi,
});
export const renderIPFS = (uri) => {
    return `${resolveScheme({
        client,
        uri,
    })}?bundleId=com.thirdweb.demo`;
};
