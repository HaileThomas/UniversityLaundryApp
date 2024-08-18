import { View, Text, StyleSheet } from 'react-native'

const LaundryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Laundry Page </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
})

export default LaundryPage
