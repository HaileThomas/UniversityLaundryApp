import { globalStyles } from '@styles/global'
import { MachineStatus, Status } from '@models/laundry'
import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '@constants/Colors'

export const MachineStatusCard = ({ machineName, machineNumber, status }: MachineStatus) => {
  const renderStatusColor = (status: Status) => {
    switch (status) {
      case 'In Progress':
        return COLORS.primaryBlue
      case 'Available':
        return COLORS.primaryBlue
      case 'Completed':
        return COLORS.primaryOrange
      case 'In Use':
        return COLORS.primaryRed
    }
  }

  return (
    <View style={[styles.card, globalStyles.shadow]}>
      <View style={styles.info}>
        <View style={styles.icon} />
        <View style={styles.description}>
          <Text style={globalStyles.header}>{machineName}</Text>
          <Text style={globalStyles.paragraph}>Machine No: {machineNumber}</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text style={[globalStyles.paragraph, { color: renderStatusColor(status) }]}>{status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    height: '10%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
  },
  description: {
    paddingLeft: 15,
  },
  status: {
    padding: 10,
  },
})
