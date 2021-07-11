import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import AppHeader from '../../components/app-header/app-header';
import { commonStyles } from '../../styles';
import { colors } from '../../constants/theme';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { SPINNER_COLORS } from '../../constants/app-constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffeeDetail } from '../../actions/coffie-actions';
import { Avatar, Icon } from 'react-native-elements';

const NEXT_ICON = 'chevron-right';
const NEXT_ICON_TYPE = 'entypo';

const DrinksList = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const [drinksList, setDrinksList] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchCoffeeDetailsListResponse = useSelector((state: any) => state?.coffee?.fetchCoffeeDetailsListResponse);

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <AppHeader
                headerText={"Menu"}
                backIcon={true}
                navigation={navigation}
                goBack={(): any => { navigation.goBack() }}
            />
        });
    }, [navigation]);

    useEffect(() => {
        handleRefresh();
    }, [])

    useEffect(() => {
        if (loading) {
            if (fetchCoffeeDetailsListResponse?.success) {
                setDrinksList(fetchCoffeeDetailsListResponse.data.drinks);
                setLoading(false);
            }
            else {
                setLoading(false);
            }
        }
    }, [fetchCoffeeDetailsListResponse])

    const handleRefresh = () => {
        setLoading(true);
        dispatch(fetchCoffeeDetail(''));
    }

    const renderItem = (item, index) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.itemContainer,
                (index == 0) && { borderTopWidth: 0.3, borderTopColor: colors.placeholder },
                (index == drinksList.length - 1) && { borderBottomWidth: 0.3, borderBottomColor: colors.placeholder },
                ]} >
                <View style={{ flex: 3, alignItems: 'center' }}>
                    <Avatar
                        rounded
                        source={{ uri: item.strDrinkThumb }}
                        size={45}
                    />
                </View>
                <View style={{ flex: 7, justifyContent: 'center' }}>
                    <Text style={[commonStyles.text, { fontSize: 20 }]}>{item.strDrink}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        name={NEXT_ICON}
                        type={NEXT_ICON_TYPE}
                        color={colors.placeholder}
                        size={15}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[commonStyles.container, { justifyContent: 'center' }]}>
            <FlatList
                data={drinksList}
                contentContainerStyle={{ paddingBottom: 10 }}
                keyExtractor={(item, index) => '' + index}
                renderItem={({ item, index }): any => renderItem(item, index)}
                extraData={drinksList}
                ItemSeparatorComponent={() => <View style={{ height: 0.3, backgroundColor: colors.placeholder }} />}
                refreshControl={
                    <RefreshControl
                        size={1}
                        colors={SPINNER_COLORS}
                        onRefresh={handleRefresh}
                        refreshing={loading}
                    />
                }
            />
        </View >
    )
}

export default DrinksList;


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingVertical: 20
    },
    iconContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})