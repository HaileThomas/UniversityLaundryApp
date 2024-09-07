import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 40,
  },
  header: {
    fontFamily: 'Lexend-Medium',
    fontSize: 20,
  },
  paragraph: {
    fontFamily: 'Lexend-Light',
    fontSize: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
})
