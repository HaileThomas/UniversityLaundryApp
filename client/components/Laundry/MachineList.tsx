import { StyleSheet, SafeAreaView, SectionList, View, Text } from 'react-native'
import { MachineStatusCard } from './MachineStatusCard/MachineStatusCard'
import { MachineGroup } from '@models/laundry'
import { globalStyles } from '@styles/global'

type MachineListProps = {
  data: MachineGroup[] | null
}

const MachineList = ({ data }: MachineListProps) => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={data ?? []}
      keyExtractor={(item, index) => item.machineName + item.machineNumber + index}
      renderItem={({ item: { machineName, machineNumber, status } }) => (
        <View style={styles.card}>
          <MachineStatusCard machineName={machineName} machineNumber={machineNumber} status={status} />
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[globalStyles.title, styles.sectionHeader]}>{title}</Text>
      )}
      renderSectionFooter={() => <View style={styles.sectionFooter} />}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 90,
  },
  sectionFooter: {
    padding: 20,
  },
  card: {
    marginVertical: 10,
  },
  sectionHeader: {
    paddingVertical: 15,
  },
})

export default MachineList
