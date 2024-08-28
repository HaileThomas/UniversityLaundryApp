import { MachineStatusCard } from '@components/MachineStatusCard/MachineStatusCard'
import { View, Text, StyleSheet } from 'react-native'

const LaundryPage = () => {
  return (
    <View style={styles.container}>
      <MachineStatusCard machineName={'Washer'} machineNumber={1} status={'In Progress'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LaundryPage
