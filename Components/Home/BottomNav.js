import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

export const BottomNavIcons = [
{
    name: "Home",
    active: require("../../assets/icons8-home-30.png"),
    inactive: require("../../assets/icons8-home-30.png")
},
{
    name: "Search",
    inactive: require("../../assets/icons8-search-30.png")
},
{
    name: "Add",
    inactive:  require("../../assets/icons8-add-30.png")
},
{
    name: "Reels",
    inactive: require("../../assets/icons8-reels-30.png")
},
{
    name: "User",
    inactive: require("../../assets/icons8-user-30.png")
}
];

const BottomNav = ({ icons, navigation }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icons = ({ icon, navigation }) => (
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
            <Image source={{ uri: activeTab === icon.name ? icon.inactive : icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
    return(
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icons key={index} icon={icon} navigation={navigation}/>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999
    },
    icon: {
        width: 30,
        height: 30
    }
})

export default BottomNav;