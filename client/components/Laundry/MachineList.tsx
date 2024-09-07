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
      keyExtractor={(item, index) => `${item.machineName}${item.machineNumber}${index}`}
      renderItem={({ item: { machineName, machineNumber, status } }) => (
        <View style={styles.cardWrapper}>
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
  cardWrapper: {
    margin: 15,
  },
  sectionHeader: {
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  sectionFooter: {
    padding: 20,
  },
})

export default MachineList
