import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { PageItemProps } from './PageComponent'
import { COLORS, FONTS, moderateScale } from '../utils/theme'
import { IMAGES } from '../assets/images'

const PageItem : React.FC<{item: PageItemProps}> = ({item}) => {

    const imageName : string[] = item['poster-image'].split('.');

    function imageSource(){
        if(imageName.length){
            return IMAGES[imageName[0]];
        }
        return null;
    }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
            source={imageSource()}
            resizeMode={'cover'}
            style={{width: '100%', height: '100%'}}
        />
      </View>
      <Text style={styles.labelStyle}>{item.name}</Text>
      <View style={{width:'100%',height:moderateScale(22)}} />
    </View>
  )
}

export default memo(PageItem);

const styles = StyleSheet.create({
    container: {
        width : '100%',
        padding:moderateScale(5),
    },
    imageContainer : {
        width : '100%',
        height: moderateScale(180),
        backgroundColor:COLORS.grey,
        overflow: 'hidden'
    },
    labelStyle : {
        fontFamily: FONTS.Light,
        fontSize: moderateScale(15),
        color:COLORS.white,
        textAlign:'left',
        width:'100%',
        marginTop:moderateScale(8)
    }
})