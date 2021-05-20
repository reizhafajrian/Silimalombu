import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../../Utils/Colors/colors';
import {TextBoldTitleWhite} from '../../SimpleComponents/Text/Text';

const StyledButton = props => {
  const {onPress, content} = props;

  return (
    <View style={style.container}>
      <Pressable style={style.containerButton} onPress={() => onPress()}>
        <TextBoldTitleWhite text={content} />
      </Pressable>
    </View>
  );
};

export default StyledButton;

const style = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  containerButton: {
    backgroundColor: colors.Primary,
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
