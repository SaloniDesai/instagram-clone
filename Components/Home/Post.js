import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: require('../../assets/icons8-heart-30.png'),
        likedImageUrl: ''
    },
    {
        name: 'Comment',
        imageUrl: require('../../assets/icons8-comment-32.png')
    },
    {
        name: 'Share',
        imageUrl: require('../../assets/icons8-sent-32.png')
    },
    {
        name: 'Save',
        imageUrl: require('../../assets/icons8-save-30.png')
    }

];

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <View style={{marginHorizontal: 15, marginTop: 10}}>
            <PostFooter />
            <Likes post={post} />
            <Caption post={post}/>
            <CommentSection post={post} />
            <Comments post={post} />
            </View>
            
        </View>
    )

}

const PostHeader = ({ post }) => (
    <View 
    style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{ uri: post.profile_picture }} style={styles.story}/>
            <Text style={{color: 'black', marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>

        </View>
        <Text style={{color: 'black'}}>...</Text>
    </View>
)

const PostImage = (post) => (
    <View style={{
        width: '100%',
        height: 450
    }}>
    <Image source={{ uri: post.imageUrl}} style={{ height: '100%', resizeMode: 'cover'}}/>
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.leftFooterContainer}>
        <Image style={styles.footerIcon} source={postFooterIcons[0].imageUrl}/>
        <Image style={styles.footerIcon} source={postFooterIcons[1].imageUrl}/>
        <Image style={styles.footerIcon} source={postFooterIcons[2].imageUrl}/>
        </View>
        <View>
        <TouchableOpacity>
            <Image  style ={styles.footerIcon} source={require('../../assets/icons8-save-30.png')}/>
        </TouchableOpacity>
        </View>
    </View>
)

const Icon = ({imageStyle, imageUrl}) =>{
    <TouchableOpacity>
        <Image style={imageStyle} source={imageUrl}></Image>
    </TouchableOpacity>
}

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{color: 'black', fontWeight: '600'}}>{post.likes} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5}}>
        <Text>
        <Text style={{ fontWeight: '600', marginRight: 2}}>{post.user}</Text>
        <Text>{post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({post}) => (
    <View style={{ marginTop: 2 }}>
        { !!post.comments.length && (
            <Text style={{ color: "gray"}}>
            View {post.comments.length >1 ? "all": " "} {post.comments.length} {post.comments.length > 1 ? "comments" : "comments"}    
        </Text>
        )}
    </View>
)

const Comments = ({ post }) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginTop: 5}}>
            <Text>
                <Text style={{ fontWeight: '600', marginRight: 2}}> {comment.user}</Text>
                {comment.comment}
            </Text>
        </View>

    ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: 'pink'
    },
    footerIcon: {
        width: 20,
        height:20
    },
    leftFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '18%'
    }
})
export default Post;