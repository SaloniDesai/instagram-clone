import React from 'react';
import { signOut } from 'firebase/auth';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from '../../firebase';

const Header = ({ navigation }) => {

    const handleSignOut = async() => {
        try {
            await signOut(auth).then(() => console.log("Signed out successfully"));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => handleSignOut()}>
        <View>
            <Image
                style={styles.logo}
                source={require('../../assets/header-logo.png')}/>
        </View>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                source={require('../../assets/icons8-heart-48.png')}
                style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>10</Text>
                </View>
                <Image
                source={require('../../assets/location-arrow.png')}
                style={styles.icon}
                />
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        color: 'white'
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 18,
        bottom: 20,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText :{
        color:'white',
        fontWeight: '600'
    }
});

export default Header;