import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";
import AuthButton from "../components/buttons/AuthButton";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { AppColor, AppText } from "../appStyles/AppStyles";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    LoginScreen: undefined;

    HomeScreen: undefined;

};


type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
};
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassWord] = useState<string>('')



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>

            <EmailInput onchangeEmail={setEmail} />
            <PasswordInput onchangePassword={setPassWord} />
            <AuthButton title="Đăng nhập" onPress={() => { navigation.navigate('HomeScreen',) }} hideButton={!email || !password} />

            <View style={styles.containerLine}>
                <View style={styles.line}></View>
                <Text>or sign in with</Text>
                <View style={styles.line}></View>

            </View>
            {/* đăng nhập vs gg và fb */}

            <SocialLoginButtons onNavigate={() => navigation.navigate('HomeScreen')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20

    },
    title: {
        fontSize: 35,
        marginTop: 60,
        fontFamily: AppText[700]

    },
    containerLine: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 50
    },
    line: {
        width: '30%',
        height: 1,
        backgroundColor: AppColor
    }
});

export default LoginScreen;