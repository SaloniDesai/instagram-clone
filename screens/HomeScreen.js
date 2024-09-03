import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from '../Components/Home/Header';
import Post from '../Components/Home/Post';
import Stories from '../Components/Home/Stories';
import { POSTS } from '../data/posts';
import BottomNav, {BottomNavIcons} from '../Components/Home/BottomNav';
import { db } from '../firebase';
import { collection, addDoc, getDocs, collectionGroup, onSnapshot } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
    useEffect(async() => {
        const colRef = collectionGroup(db, "posts");
        onSnapshot(colRef, (snapshot) => {
            console.log(snapshot.docs.map(doc => doc.data));
        })
        const allPosts = await getDocs(collectionGroup(db, 'posts'));
    })
    return (
        <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <Stories />
        <ScrollView>
            {POSTS.map((postData, index) => (
                <Post post={postData} key={index} />
            )) }
        </ScrollView>
        <BottomNav icons={BottomNavIcons} navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        flex: 1
    }
})

export default HomeScreen;
