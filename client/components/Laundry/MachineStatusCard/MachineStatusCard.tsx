import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
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
        <MaterialCommunityIcons name={machineName === 'Washer' ? 'washing-machine' : 'tumble-dryer'} size={45} />
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
    backgroundColor: '#fff',
    width: 350,
    height: 80,
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
    height: 40,
    width: 40,
    backgroundColor: 'black',
  },
  description: {
    paddingLeft: 15,
  },
  status: {
    padding: 10,
  },
})
