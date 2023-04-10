import {StyleSheet} from 'react-native';

export const postStyles = StyleSheet.create({
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
