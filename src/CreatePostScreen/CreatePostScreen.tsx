import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Platform,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons/faCamera';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const insets = useSafeAreaInsets();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const onPost = () => {
    console.warn('Posting: ', description);
    setDescription('');
  };

  const onPickImage = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      presentationStyle: 'pageSheet',
      quality: 1,
    };
    const result = await launchImageLibrary(options);
    if (!result.didCancel && result.assets?.length) {
      setImage(result.assets[0]?.uri || '');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container]}
      contentContainerStyle={{flex: 1}}
      keyboardVerticalOffset={150}>
      <View style={styles.header}>
        <Image source={{uri: user.image}} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Pressable onPress={onPickImage} style={[styles.icon]}>
          <FontAwesomeIcon icon={faCamera} />
        </Pressable>
      </View>
      <TextInput
        placeholder="What's on your mind?"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
        autoFocus={true}
      />
      {!!image && <Image source={{uri: image}} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!description} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    paddingTop: 30,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  input: {
    marginBottom: 'auto',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginVertical: 10,
  },
  icon: {marginLeft: 'auto'},
  image: {width: '100%', aspectRatio: 4 / 3},
});

export default CreatePostScreen;
