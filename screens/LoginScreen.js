import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LoginForm from '../Components/LoginScreen/LoginForm';

const INSTA_LOGO=require('../assets/icons8-instagram-logo-100.png');

const LoginScreen = ({ navigation} ) => (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTA_LOGO,  height: 100, width: 100 }}/>
            </View>
            <LoginForm navigation={navigation}/>
        </View>
    
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default LoginScreen;