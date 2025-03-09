import React, { useState, } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { AppColor } from '../../appStyles/AppStyles';
interface EmailInputPops {
    onchangeEmail: (email: string) => void;
}
const EmailInput: React.FC<EmailInputPops> = ({ onchangeEmail }) => {
    const [email, setEmail] = useState<string>('')

    const handleEmailChange = (text: string): void => {
        setEmail(text)
        onchangeEmail(text)
    }



    return (
        <View style={styles.container}>

            <TextInput style={styles.input}
                placeholder='Địa chỉ email'
                value={email}
                onChangeText={handleEmailChange}

            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 30,
        width: '100%'

    },

    input: {

        width: '100%',
        height: 55,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#E9E9E9',
        fontSize: 20,
        paddingLeft: 25



    },

})
export default EmailInput;