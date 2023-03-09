import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  cancelText: string;
  confirmText: string;
  titleText: string;
  toolbarButtonColor: string;
  toolbarTextColor: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  cancelText,
  confirmText,
  titleText,
  toolbarButtonColor,
  toolbarTextColor,
  toolbarBackground,
  toolbarBorderColor,
  onConfirm,
  onCancel
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
      },
    ]}
  >
    <View style={styles.toolbarItemContainer}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onCancel}
      >
        <Text style={[styles.toolbarText, styles.toolbarCancelText, { color: toolbarButtonColor }]}>
          {cancelText}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.toolbarText, { color: toolbarTextColor }]}>
        {titleText}
      </Text>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onConfirm}
        testID={TEST_IDS.CONFIRM_BUTTON}
      >
        <Text style={[styles.toolbarText, styles.toolbarConfirmText, { color: toolbarButtonColor }]}>
          {confirmText}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
