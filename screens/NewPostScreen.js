import React from 'react';
import {SafeAreaView} from 'react-native';
import AddNewPost from '../Components/NewPost/AddNewPost';

const NewPostScreen = ({ navigation} ) => {
    return (
        <SafeAreaView>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen;