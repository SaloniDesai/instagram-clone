import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { USERS } from '../../data/users';

const Stories = () => {
    return (
        <View style={{marginBottom:  15}}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                {USERS.map((stories, index) => (
                    <View key={index}>
                        <Image key={index} source={{uri: stories.image}} style={styles.story}/>
                        <Text style={{color: 'black'}}>
                            {stories.user.length > 11
                            ? stories.user.slice(0, 10).toLowerCase() + '...'
                            : stories.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
               
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: 'pink'
    }
})

export default Stories;