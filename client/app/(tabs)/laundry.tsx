import { MachineStatusCard } from '@components/MachineStatusCard/MachineStatusCard'
import { useAllMachineData } from '@hooks/useAllMachineData'
import { globalStyles } from '@styles/global'
import { View, Text, StyleSheet, SectionList, FlatList, SafeAreaView } from 'react-native'

const LaundryPage = () => {
  const { data, error, isLoading } = useAllMachineData()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong! Please try again.</Text>
      </View>
    )
  }

  return (
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
}

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

export default LaundryPage
