import { Dimensions } from "react-native";

export const FONTS = {
    Black : 'TitilliumWeb-Black',
    Bold : 'TitilliumWeb-Bold',
    ExtraLight : 'TitilliumWeb-ExtraLight',
    Light : 'TitilliumWeb-Light',
    Regular : 'TitilliumWeb-Regular',
    SemiBold : 'TitilliumWeb-SemiBold',
}

export const COLORS = {
    black: '#000000',
    white : '#ffffff',
    darkGrey : '#999999',
    grey : '#BCBEC0',
    lightGrey : '#D8D9DA',
}

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 813;

export const DEVICE_HEIGHT: number = height;
export const DEVICE_WIDTH: number = width;

const scale = (size: number): number => width / guidelineBaseWidth * size;
const verticalScale = (size: number): number => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor: number = 0.5): number => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };