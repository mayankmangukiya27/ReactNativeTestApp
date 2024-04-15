import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {COLORS, DEVICE_WIDTH, FONTS, moderateScale} from '../utils/theme';
import {IMAGES} from '../assets/images';

interface HeaderProps {
  onSearchClose : () => void;
  search: string;
  setSearch: (search: string) => void;
}

const Header : React.FC<HeaderProps> = (props) => {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{height: moderateScale(60)}}>
        <View
          style={{
            height: '100%',
            flexDirection: 'row',
            alignItems: 'stretch',
          }}>
          <View
            style={{
              flex: 0.88,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.15}}>
              <TouchableOpacity
                activeOpacity={0.8}
                accessibilityRole={'button'}
                role={'button'}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={IMAGES.backButtonIcon}
                  style={{
                    width: moderateScale(20),
                    height: undefined,
                    aspectRatio: 1,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.85}}>
              <Text style={styles.labelStyle}>Romantic Comedy</Text>
            </View>
          </View>
          <View style={{flex: 0.12}}>
            <TouchableOpacity
              activeOpacity={0.8}
              accessibilityRole={'button'}
              role={'button'}
              onPress={() => setShowSearch(true)}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IMAGES.searchIcon}
                style={{
                  width: moderateScale(20),
                  height: undefined,
                  aspectRatio: 1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {showSearch && (<View style={styles.searchContainer}>
          <View style={{flex: 0.13}}>
            <TouchableOpacity
              activeOpacity={0.8}
              accessibilityRole={'button'}
              role={'button'}
              onPress={() => {
                setShowSearch(false)
                props?.onSearchClose && props?.onSearchClose();
              }}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={IMAGES.backButtonIcon}
                style={{
                  width: moderateScale(20),
                  height: undefined,
                  aspectRatio: 1,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.87}}>
            <TextInput
              value={props.search}
              onChangeText={props.setSearch}
              placeholder="Search movie"
              placeholderTextColor={COLORS.darkGrey}
              autoCorrect={false}
              autoFocus={true}
              blurOnSubmit={true}
              autoCapitalize={'sentences'}
              style={[styles.containerTextStyle]}
            />
          </View>
        </View>)}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateScale(40),
    width: '100%',
    backgroundColor: COLORS.black,
  },
  labelStyle: {
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(20),
    color: COLORS.white,
  },
  containerTextStyle: {
    fontFamily: FONTS.SemiBold,
    fontSize: moderateScale(15),
    color: COLORS.white,
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    backgroundColor: COLORS.black,
    width: '100%',
    height: '100%',
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
