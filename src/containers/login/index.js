import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image, ImageStore} from 'react-native';
import {PRIMARY_COLOR, INPUT_STYLE} from '../../assets/styles';

const images = {
    logo: require('../../../assets/logo.jpg'),
}

function Login(props) {
    return (
        <SafeAreaView style={styles.loginContainer}>
            <Text style={styles.title} >Welcome to My App.</Text>
            <View style={styles.form}>
                {/* <Image source={images.logo} /> */}
                <TextInput style={styles.input} placeholder='Username' keyboardType='default'/>
                <TextInput style={styles.input} placeholder='Password' keyboardType='number-pad' secureTextEntry={true}/>
                {/* <Button title="Login" style={styles.button}/> */}
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("TabNav")}>
                    <Text>Login Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Register")}>
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
      input: {
          padding: 15,
          width: '100%',
          marginTop: 15,
          marginBottom: 15,
          marginVertical: 20,
          backgroundColor: 'white', 
      }
  }

  
export default Login;
