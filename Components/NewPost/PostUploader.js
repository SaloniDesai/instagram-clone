import React, { useEffect, useState } from 'react';
import {View, TextInput, Image, Button} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import validUrl from 'valid-url'; 
import {db, firebase} from '../../firebase';

const placeHolderImg = 'https://placebeard.it/640x360';

const PostUploaderSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2000, 'Caption has reached character limit')
})

const PostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(placeHolderImg);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

    const getUsername = () => {
        const user = firebase.auth().currentUser;
        const unsubscribe = db
        .collection('users')
        .where('owner_uid', '==', user.uid)
        .limit(1).onSanspshot(snapshot => snapshot.docs.map(doc => {
            setCurrentLoggedInUser({
                username: doc.data().username,
                profilePicture: doc.data().profile_picture
            })
        })
        )
        return unsubscribe;
    }

    useEffect(() => {
        getUsername()
    }, []);

    const uploadPostToFirebase = (imageUrl, caption) => {
        const unsubscribe = db.collection('users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
            imageUrl: imageUrl,
            user: currentLoggedInUser.username,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_uid: firebase.auth().currentUser.uid,
            caption: caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes:0,
            likes_by_users: [],
            comments: [] 
        }).then(() => navigation.goBack())
        return unsubscribe;
    }
    return (
        <Formik 
        initialValues = {{ caption: '', imageUrl: ' '}}
        onSubmit={(values) => {
            uploadPostToFirebase(values.imageUrl, values.caption)
            console.log(values);
        }}
        validationSchema={PostUploaderSchema}
        validateOnMount={true}>
            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>
                <View style={{ margin: 20, justifyContent: 'space-between', flexDirection:'row' }}>
                <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : placeHolderImg}} style={{ width: 100, height: 100 }}/>
                <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput 
                placeholder='Write a caption...' 
                placeholderTextColor='black'
                multiline={true} 
                onChangeText = {handleChange('caption')}
                onBlur= {handleBlur('caption')}
                value={values.caption}
                style={{fontSize: 20}} />
                </View>
               </View>
               <Divider width={0.2} orientation='vertical' />
               <TextInput 
                placeholder='Upload a URL'
                placeholderTextColor='black'
                onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl} />

                <Button onPress={handleSubmit} title='Share' disabled={!isValid} style={{ width: '40%'}}/> 
                </>
            )}

        </Formik>
    )
}

export default PostUploader;