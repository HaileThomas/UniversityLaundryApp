import MachineList from '@components/Laundry/MachineList'
import ErrorScreen from '@components/Shared/ErrorScreen'
import LoadingScreen from '@components/Shared/LoadingScreen'
import { useAllMachineData } from '@hooks/useAllMachineData'

const LaundryPage = () => {
  const { data, error, isLoading } = useAllMachineData()

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen />

  return <MachineList data={data} />
}

export default LaundryPage
