import { ProfileComponent } from "@/components/profile";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Profile = () => {
    const { id } = useLocalSearchParams();
    return <ProfileComponent id={id} />;
};

export default Profile;
