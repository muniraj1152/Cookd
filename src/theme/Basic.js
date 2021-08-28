import { StyleSheet, Dimensions } from "react-native";
import Color from "./Color";

const devDimensions = Dimensions.get('window');

const BasicStyle = StyleSheet.create({
  devDimens: {
    height: devDimensions.height,
    width: devDimensions.width
  },
  widthFull: {
    width: "100%"
  },
  sectionTitle: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
  },
  wrapItem: {
    flexDirection: 'row', flexWrap: 'wrap'
  }

})
export default BasicStyle;