import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name='laundry'
        options={{
          headerShown: false,
          title: 'Laundry',
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
