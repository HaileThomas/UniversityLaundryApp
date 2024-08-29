export type MachineType = 'Washer' | 'Dryer'

export type Status = 'In Progress' | 'Completed' | 'In Use' | 'Available'

export type MachineStatus = {
  machineName: MachineType
  machineNumber: number
  status: Status
}

export type Machines = {
  title: MachineType
  data: MachineStatus[]
}
