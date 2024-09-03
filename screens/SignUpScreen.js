import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import SignupForm from '../Components/SignUpScreen/SignupForm';

const INSTA_LOGO=require('../assets/icons8-instagram-logo-100.png');

const SignUpScreen = ({ navigation} ) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTA_LOGO,  height: 100, width: 100 }}/>
            </View>
            <SignupForm navigation={navigation}/>
        </View>
    )
}
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
export default SignUpScreen;