import { useEffect, useState } from 'react'
import { MachineGroup } from '@models/laundry'
import { fetchMachinesFromDatabase } from 'services/machineService'

export const useAllMachineData = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<MachineGroup[] | null>(null)

  useEffect(() => {
    const fetchMachineData = async () => {
      try {
        const machines: MachineGroup[] = await fetchMachinesFromDatabase()
        setData(machines)
      } catch (err: any) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMachineData()
  }, [])

  return { data, error, isLoading }
}
