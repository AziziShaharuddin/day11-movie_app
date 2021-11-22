import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; //react hooks
import { increase, decrease } from '../../actions';

function Contact() {
    const count = useSelector((state) => state.count); //mapStatetoProps
    const dispatch = useDispatch(); //mapDispatchtoProps
    return(
        <SafeAreaView style={styles.loginContainer}>
            <Text>This is Contact</Text>
            <Text>Count: {count}</Text>
            <Button title="Increase" onPress={() => dispatch(increase())}/>
            <Button title="Decrease" onPress={() => dispatch(decrease())}/>
            {/* <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Name' keyboardType='default'/>
                <TextInput style={styles.input} placeholder='Email' keyboardType='default' />
                <TouchableOpacity style={styles.button}>
                    <Text>Submit form</Text>
                </TouchableOpacity>
            </View> */}
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

export default Contact;