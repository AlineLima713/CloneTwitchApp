import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';


const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name="md-heart"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Screen
        name="Esports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;

