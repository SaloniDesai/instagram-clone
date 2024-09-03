import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PostUploader from './PostUploader';

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <PostUploader navigation={navigation}/>
        </View>
    )
}

const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={require('../../assets/icons8-close-30.png')}
            style={{ width: 30, height: 30}} />
            </TouchableOpacity>
            <Text style={styles.headerText}>New post</Text>
        </View>
)
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
         color: 'black',
         fontWeight: '700',
         fontSize: 20,
         alignItems: 'center',
        marginRight: 100
    }
})
export default AddNewPost;