import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  toolbarItemContainer: {
    flex: 1,
    height: '100%',
    gap: 30,
    justifyContent: 'space-between',
    width: '100%',
  },

  toolbarText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: TEXT_CORRECTION,
    paddingRight: 0,
  },

  toolbarCancelText: {
    paddingLeft: GUTTER_WIDTH,
  },

  toolbarConfirmText: {
    paddingRight: GUTTER_WIDTH,
  },
});
