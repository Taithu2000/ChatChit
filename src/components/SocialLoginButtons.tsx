import React from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import auth, { getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, Settings } from 'react-native-fbsdk-next';
import SocialButton from "../components/buttons/SocialButton";
import { Text } from "react-native-gesture-handler";
interface ButtonProps {
    onNavigate: () => void;
}


const SocialLoginButtons: React.FC<ButtonProps> = ({ onNavigate }) => {
    // Cấu hình Google Sign-In
    GoogleSignin.configure({
        webClientId: '563898510173-kjrpser99bkbgigpuob1vmgj2tikeiue.apps.googleusercontent.com',

    });

    Settings.setAppID('1850553942360298')

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const signInResult = await GoogleSignin.signIn();

            console.log(signInResult.data?.user)
            const idToken = signInResult.data?.idToken;

            if (!idToken) {
                throw new Error('No ID token found');
            }

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);



            await signInWithCredential(getAuth(), googleCredential);

            onNavigate();
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    }

    const onFacebookButtonPress = async () => {
        try {
            // Đăng nhập bằng Facebook
            const result = await LoginManager.logInWithPermissions(['public_profile']);

            if (result.isCancelled) {
                throw new Error('User cancelled the login process');
            }

            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw new Error('Something went wrong obtaining access token');
            }

            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            await getAuth().signInWithCredential(facebookCredential);
            onNavigate();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.containerSocial}>
            <View style={styles.boxButton}>
                <SocialButton
                    title="FACEBOOK"
                    icon={require('../assets/icons/facebook.png')}
                    onPress={() => {
                        onFacebookButtonPress()
                    }}
                />
            </View>
            <View style={styles.boxButton}>
                <SocialButton
                    title="GOOGLE"
                    icon={require('../assets/icons/google.png')}
                    onPress={onGoogleButtonPress}
                />
            </View>
            <TouchableOpacity onPress={() => { GoogleSignin.signOut(); }}>
                <Text>
                    logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerSocial: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxButton: {
        width: '45%',
    },
});

export default SocialLoginButtons;