import React from 'react';
import { View } from "react-native";
import { commonStyles } from "../../../styles";
import { HeaderText } from './header-text';


export const HeaderTextContainer = ({ headerText }) => (
    <View style={commonStyles.headerTextContainer}>
        <HeaderText
            headerText={headerText}
        />
    </View>
)