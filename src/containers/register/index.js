import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

function Register() {
    return(
        <SafeAreaView style={styles.loginContainer}>
            <Text style={styles.title}>Sign Up!</Text>
            <View style={styles.form}>
                <Text>Username</Text>
                <TextInput style={styles.input} placeholder="Username" keyboardType="default" />
                <Text>Password</Text>
                <TextInput style={styles.input} placeholder="Password" keyboardType="default" secureTextEntry={true} />
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder="Email" keyboardType="default" />
                <TouchableOpacity style={styles.button}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}

const styles = {
    loginContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#F7F7F7",
    }, 
    form: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '50%',
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        padding: 15,
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        // marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'white', 
    },
    button: {
        backgroundColor: '#D1E8E4',
        color: '#142F43',
        padding: 15,
        marginBottom: 15,
        marginTop: 15,
        width: 100,
        borderRadius: 15,
        alignItems: 'center'
    },
}

export default Register;