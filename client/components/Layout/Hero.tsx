import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { COLORS } from '@constants/Colors'
import { globalStyles } from '@styles/global'

export const Hero = () => {
  return (
    <View style={styles.hero}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={[styles.text, globalStyles.title]}>Welcome</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    position: 'absolute',
    backgroundColor: COLORS.primaryRed,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    width: '113%',
    height: '50%',
    borderCurve: 'circular',
    borderBottomLeftRadius: 200,
    paddingLeft: '20%',
  },
  text: {
    color: COLORS.primaryWhite,
    textAlign: 'left',
    marginTop: 25,
  },
})
