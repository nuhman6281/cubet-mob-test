import React from 'react';
import { commonStyles } from "../../../styles";
import Text from '../../display-text/display-text';
import I18n from '../../../i18n/i18n';

const getDefaultHeaderText = () => {
    let text = I18n.t('app_common.header_text');
    let textArray = text.split(' ');
    return textArray.map((textValue, index) => {
        let textStyle = (index == 0) ?
            commonStyles.picText : (index == textArray.length - 1) ?
                commonStyles.dayText : commonStyles.aText;
        return <Text key={index} style={textStyle}>{textValue}</Text>;
    })
}

export const HeaderText = ({ headerText = "" }) => (
    <Text style={[commonStyles.commonText]}>
        {headerText == "" ? getDefaultHeaderText() : headerText}
    </Text>
)