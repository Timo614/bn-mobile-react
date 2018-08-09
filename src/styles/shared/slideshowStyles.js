import {StyleSheet, Dimensions, Platform} from 'react-native'
const fullHeight = Dimensions.get('window').height
const fullWidth = Dimensions.get('window').width

export const primaryColor = '#FF20B1'
export const secondaryColor = '#707CED'
export const tertiaryColor = '#4EB0E5'
export const white = '#FFF'
export const errorTextColor = '#FF0000'
export const textColor = '#1E1E1E'
export const backgroundColor = white
export const inputBackgroundColor = '#FAFAFA'
export const disabledColor = '#F7F7F7'
export const helpTextColor = '#666'
export const borderColor = '#DCDCDC'
export const primaryTransparent = 'rgba(255, 34, 178, 0.5)'

export const globalPaddingTiny = 5
export const globalPaddingSmall = 10
export const globalPadding = 20
export const globalPaddingMedium = 30
export const globalPaddingLarge = 40
export const globalPaddingLarger = 45
export const globalPaddingJumbo = 55
export const globalMarginSmall = 10
export const globalMargin = 20

export const globalFontRegular = 'tt_commons_regular'
export const globalFontSemiBold = 'tt_commons_demibold'
export const globalFontBold = 'tt_commons_bold'
export const globalFontItalic = 'tt_commons_italic'

export const headerFontSize = 32
export const sectionHeaderFontSize = 18
export const bodyFontSize = 15
export const iconFontSize = 18
export const pickerItemHeight = 120

const SlideShowStyles = {
  slideshowContainer: {
    padding: globalPadding,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 300,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBottom: {
    paddingVertical: globalPaddingLarge,
  },
  header: {
    fontFamily: globalFontBold,
    fontSize: headerFontSize,
    color: white,
  },
  details: {
    fontFamily: globalFontRegular,
    fontSize: bodyFontSize,
    color: disabledColor,
  },
  slideShowArrowContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: globalPaddingSmall,
  },
  slideShowImage: {
    width: fullWidth - 43,
    height: 300,
    position: 'absolute',
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...SlideShowStyles, ...overrides})
}

export default {
  createStyles,
}
