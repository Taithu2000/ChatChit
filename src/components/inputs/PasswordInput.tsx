import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { AppColor } from "../../appStyles/AppStyles";
interface PassWordInputPops {
    onchangePassword: (password: string) => void;
}
const PasswordInput: React.FC<PassWordInputPops> = ({ onchangePassword }) => {
    const [password, setPassWord] = useState<string>('');
    const [hidePass, setHidePassword] = useState<boolean>(true)


    const handlePasswordChange = (text: string) => {
        setPassWord(text);
        onchangePassword(text);
    }
    const handleShowPassword = () => {
        setHidePassword(!hidePass);
    }

    return (
        <View style={styles.container} >

            <View style={styles.body}>

                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    placeholder="Mật khẩu"
                    secureTextEntry={hidePass}
                />
                <TouchableOpacity style={styles.button}
                    onPress={handleShowPassword}
                    activeOpacity={1}
                >
                    <Image
                        style={styles.iconEye}
                        source={hidePass ? require('../../assets/icons/eye.png') : require('../../assets/icons/eye-crossed.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {

        marginBottom: 20

    },
    body: {
        width: '100%',
        flexDirection: 'row',

    },

    input: {

        fontSize: 18,
        width: '100%',
        paddingLeft: 25,
        paddingRight: 50,
        backgroundColor: '#E9E9E9',
        height: 55,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc'

    },
    button: {
        right: 10,
        zIndex: 100,
        position: 'absolute',
        alignSelf: 'center',
    },

    iconEye: {

        width: 30,
        height: 30,
        tintColor: AppColor,

    },


})

export default PasswordInput