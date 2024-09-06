import { MachineGroup } from '@models/laundry'

export const fetchMachinesFromDatabase = async (): Promise<MachineGroup[]> => {
  // Simulate a database fetch. Replace with database query logic
  return [
    {
      title: 'Washer',
      data: [
        { machineName: 'Washer', machineNumber: 1, status: 'In Progress' },
        { machineName: 'Washer', machineNumber: 2, status: 'Completed' },
        { machineName: 'Washer', machineNumber: 3, status: 'Available' },
        { machineName: 'Washer', machineNumber: 4, status: 'Available' },
      ],
    },
    {
      title: 'Dryer',
      data: [
        { machineName: 'Dryer', machineNumber: 1, status: 'Available' },
        { machineName: 'Dryer', machineNumber: 2, status: 'In Progress' },
        { machineName: 'Dryer', machineNumber: 3, status: 'Completed' },
        { machineName: 'Dryer', machineNumber: 4, status: 'In Use' },
      ],
    },
  ]
}
