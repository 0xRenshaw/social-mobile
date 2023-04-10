import Post from '../components/Post/Post';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const posts = require('../../assets/data/posts.json');

const img =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  const createPost = () => {
    navigation.navigate('PostCreate');
  };

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <Pressable onPress={createPost} style={styles.header}>
            <Image source={{uri: img}} style={styles.profileImage} />
            <Text style={styles.name}>What's on your mind?</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
});
export default HomeScreen;
