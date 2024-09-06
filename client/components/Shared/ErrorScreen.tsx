import { StyleSheet, View, Text } from 'react-native'

const ErrorScreen = () => (
  <View style={styles.container}>
    <Text>Something went wrong! Please try again.</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ErrorScreen
