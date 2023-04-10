import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faMessage} from '@fortawesome/free-solid-svg-icons/faMessage';
import {faShareFromSquare} from '@fortawesome/free-solid-svg-icons/faShareFromSquare';
// import {postStyles} from './Post.styles';

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  postHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderIcon: {
    marginLeft: 'auto',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontWeight: '500',
  },
  postMeta: {
    color: 'grey',
  },
  postDescription: {
    lineHeight: 20,
    padding: 10,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postFooter: {
    paddingHorizontal: 10,
  },
  postFooterStats: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: 'lightgray',
  },
  postLikeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  postLikedBy: {
    color: 'grey',
  },
  postShares: {
    color: 'grey',
    marginLeft: 'auto',
  },
  postActions: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: 'gray',
    marginLeft: 5,
    fontWeight: '500',
  },
});

const {
  post: $Post,
  postHeader: $PostHeader,
  postHeaderIcon: $PostHeaderIcon,
  profileImage: $ProfileImage,
  profileName: $ProfileName,
  postMeta: $PostMeta,
  postDescription: $PostDescription,
  postImage: $PostImage,
  postFooter: $PostFooter,
  postFooterStats: $PostFooterStats,
  postLikeIcon,
  postLikedBy,
  postShares,
  postActions: $PostActions,
  postAction: $PostAction,
  postActionText: $PostActionText,
} = styles;

const LikeIcon = require('../../../assets/images/like.png');

type PostProps = {
  post: {
    id: string;
    createdAt: string;
    User: {
      id: string;
      image: string;
      name: string;
    };
    description: string;
    image: string;
    numberOfShares: number;
    numberOfLikes: number;
    isLiked: boolean;
  };
};
const Post = (props: PostProps) => {
  const {post} = props;
  const [isLiked, setIsLiked] = useState(() => post.isLiked || false);

  return (
    <View testID={'post'} key={post.id} style={[$Post]}>
      <View testID={'post-header'} style={[$PostHeader]}>
        <Image source={{uri: post.User.image}} style={[$ProfileImage]} />
        <View>
          <Text style={[$ProfileName]}>{post.User.name}</Text>
          <Text style={[$PostMeta]}>{post.createdAt}</Text>
        </View>
        <FontAwesomeIcon icon={faEllipsisVertical} style={[$PostHeaderIcon]} />
      </View>
      <Text style={[$PostDescription]}>{post.description}</Text>
      {post.image && (
        <Image
          source={{uri: post.image}}
          resizeMode={'cover'}
          style={[$PostImage]}
        />
      )}
      <View testID={'post-footer'} style={[$PostFooter]}>
        <View testID={'post-footer-stats'} style={[$PostFooterStats]}>
          <Image source={LikeIcon} style={[postLikeIcon]} />
          <Text style={[postLikedBy]}>Tom and {post.numberOfLikes} others</Text>
          <Text style={[postShares]}>{post.numberOfShares} shares</Text>
        </View>
        <View testID={'post-footer-actions'} style={[$PostActions]}>
          <Pressable
            onPress={() => setIsLiked(prevState => !prevState)}
            style={[$PostAction]}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              color={isLiked ? 'royalblue' : 'grey'}
            />
            <Text
              style={[
                $PostActionText,
                {color: isLiked ? 'royalblue' : 'grey'},
              ]}>
              Like
            </Text>
          </Pressable>
          <View style={[$PostAction]}>
            <FontAwesomeIcon icon={faMessage} color="gray" />
            <Text style={[$PostActionText]}>Comment</Text>
          </View>
          <View style={[$PostAction]}>
            <FontAwesomeIcon icon={faShareFromSquare} color="gray" />
            <Text style={[$PostActionText]}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
