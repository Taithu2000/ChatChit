import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColor, AppText } from "../../appStyles/AppStyles";

interface ButtonProps {
    title: string;
    onPress: () => void;
    hideButton: boolean;
}

const AuthButton: React.FC<ButtonProps> = ({ title, onPress, hideButton }) => {

    const [isPressed, setIsPressed] = useState(false);

    const setButtonEffect = () => {
        if (hideButton) {
            return {
                backgroundColor: '#CCCCCC',
                marginTop: 0,
            };
        } else {
            return {
                backgroundColor: AppColor,
                marginTop: isPressed ? 0 : -5,
            };
        }
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
                <Text style={[styles.title, { color: hideButton ? '#999999' : '#FFFFFF' }]}>
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
        backgroundColor: '#339900',
    },
    body: {
        width: '100%',
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    title: {
        fontFamily: AppText[800],
        fontSize: 25,
    },
});

export default AuthButton;