import React from 'react';
import { TouchableOpacity } from "react-native";
import { VectorIcons } from "../../../constants/app-constants";
import { commonStyles } from "../../../styles";
import Feather from 'react-native-vector-icons/Feather';

const LEFT_ICON_SIZE = 18;
export const HeaderBackIcon = ({ onPressBackIcon, style }) => (
    <TouchableOpacity
        onPress={onPressBackIcon}
        style={[style]} >
        <Feather
            name={VectorIcons.FEATHER_ICONS.chevronLeft}
            size={LEFT_ICON_SIZE}
        />
    </TouchableOpacity>
)