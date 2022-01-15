import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../../screens/DrawerContent";
import MainTabScreen from "../../screens/MainTabScreen";

const Drawer = createDrawerNavigator();
const UserDrawerContent = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
    )
}

export default UserDrawerContent;