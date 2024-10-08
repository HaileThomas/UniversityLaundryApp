import { StyleSheet, View, Text } from 'react-native'

const LoadingScreen = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingScreen
