import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppText } from "../../appStyles/AppStyles";

interface ButtonProps {
    title: string;
    icon: any;
    onPress: () => void;

}

const SocialButton: React.FC<ButtonProps> = ({ title, icon, onPress }) => {

    const [isPressed, setIsPressed] = useState(false);


    const setButtonEffect = () => {
        return {
            marginTop: isPressed ? 0 : -5,
        };

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.body, setButtonEffect()]}
                activeOpacity={1}
                onPress={onPress}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
            >

                <Image
                    style={styles.logo}
                    source={icon}
                />

                <Text style={styles.title}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
    },
    body: {
        width: '100%',
        height: 55,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        borderWidth: 3,
        borderColor: '#CCCCCC',
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
    },
    title: {
        fontFamily: AppText[700],
        fontSize: 18,
    },
    logo: {
        width: 30,
        height: 30,
    }
});

export default SocialButton;