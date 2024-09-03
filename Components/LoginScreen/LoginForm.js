import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { auth } from '../../firebase';


const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8,'Your password has to have atleast 8 characters')
    });

    const onLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Firebase login successful", email, password);
        } catch(error) {
            Alert.alert(error.message);
        }
    }

    return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{ email: '', password: ''}}
        onSubmit={values => {
            onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
        <>
        <View style={[styles.inputField, 
            {
                borderColor:
                values.email.length < 1 || Validator.validate(values.email) ?
                '#ccc': 'red'
            }]}>
        <TextInput 
        placeholder="Phone number, username or email"
        placeholderTextColor='#444'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        autoFocus={true}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        style={{ outlineWidth: 0}}/>
        
        </View>
        <View style={[styles.inputField,
        {
            borderColor:
            values.password.length < 1 || values.password.length > 8 ?
            '#ccc' : 'red'
        }]}>
        <TextInput
        placeholderTextColor='#444'
        autoCorrect={false}
        placeholder='Password'
        textContentType='password'
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        style={{ outlineWidth: 0}}/>
       
        </View>
        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
        </View>
        <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}> 
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable> 
        <View style={styles.signUpContainer }>
             <Text>Don't have an account ?</Text>
             <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                 <Text style={{color: '#6BB0F5'}}> Sign Up</Text>
             </TouchableOpacity>
        </View>
        </>
        )}
        </Formik>
    </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 4,
        padding: 12 ,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        justifyContent: 'center'
    },
    wrapper: {
        marginTop: 80
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6': '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    }),
    buttonText : {
        fontWeight: '600',
        color: '#FFF',
        fontSize: 20
    },
    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    }
    
})

export default LoginForm;