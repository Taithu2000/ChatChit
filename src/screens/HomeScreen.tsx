import React from "react";
import { Button, Text, View } from "react-native";
import { writeUserData } from '../services/authServices';
import User from "../models/User";
const HomeScreen = () => {
    const newUser = new User(
        "",
        "thu@gmail.com",
        new Date().toISOString(),
        "user",
    );

    return (
        <View>
            <Text>THu</Text>
            <Button onPress={async () => { await writeUserData(newUser); }} title="Save User" />
        </View>
    );
};

export default HomeScreen;
