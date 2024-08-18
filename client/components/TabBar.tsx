import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const icons = {
    index: (props: any) => <FontAwesome size={28} name='home' {...props} />,
    laundry: (props: any) => <FontAwesome size={28} name='th-large' {...props} />,
  }

  return (
    <View style={styles.tabar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabarItem}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name as 'index' | 'laundry']({
              color: isFocused ? COLORS.primaryRed : COLORS.primaryWhite,
            })}
            {
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: isFocused ? COLORS.primaryRed : COLORS.primaryGrey,
                  },
                ]}
              />
            }
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabar: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGrey,
    marginHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: COLORS.primaryBlack,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
})

export default TabBar
