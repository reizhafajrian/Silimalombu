import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import BottomNaviagtion from '../../BottomNavigation/BottomNavigation';

export default function MainStack() {
    const Stack=createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={BottomNaviagtion}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}
