import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
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
import PNG_ICONS from '../../assets/png-icons';
import Button from '../../components/button';

const ADD_CART = "ADD";
const REMOVE_CART = "REMOVE";

const DrinkPreferences = ({ navigation, route }) => {

    const [cartCount, setCartCount] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <AppHeader
                headerText={"Preferences"}
                backIcon={true}
                navigation={navigation}
                goBack={(): any => { navigation.goBack() }}
            />
        });
    }, [navigation]);

    const onPressCartOperationButton = (operation) => {
        switch (operation) {
            case ADD_CART:
                setCartCount(cartCount + 1);
                return;
            case REMOVE_CART:
                setCartCount(cartCount !== 0 ? cartCount - 1 : 0);
                return;
        }
    }

    const attributeLabel = (label) => (
        <View style={{ flex: 5 }} >
            <Text style={[commonStyles.text, styles.itemNameText, {
                fontWeight: '100',
                fontSize: 18
            }]} >{label}</Text>
        </View>
    )

    const item = route.params.item;
    return (
        <View style={[commonStyles.container, { justifyContent: 'center' }]}>
            <ScrollView>

                <ImageBackground
                    source={PNG_ICONS.itemDetailBackground}
                    style={styles.imageBackground}>
                    <Avatar
                        rounded
                        source={{ uri: item.strDrinkThumb }}
                        size={80}
                    />
                </ImageBackground>

                <View style={styles.detailContainer} >
                    <View style={{ flex: 5 }} >
                        <Text style={[commonStyles.text, styles.itemNameText]} >{item.strDrink}</Text>
                        <Text style={[commonStyles.text, { color: colors.darkGray }]}>{"36 EGP"}</Text>
                    </View>
                    <View style={styles.cartCountContainer} >
                        <Text>{cartCount}</Text>
                    </View>
                    <View style={styles.cartOperationsContainer}>
                        <TouchableOpacity
                            onPress={() => onPressCartOperationButton(REMOVE_CART)}
                            style={[styles.cartOperationButton, styles.addButton]}>
                            <Text style={[commonStyles.text, styles.cartButtonText]} >{"-"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onPressCartOperationButton(ADD_CART)}
                            style={[styles.cartOperationButton, styles.removeButton]}>
                            <Text style={[commonStyles.text, styles.cartButtonText]}>{"+"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.detailContainer} >
                    {attributeLabel("Size")}
                </View>

                <View style={styles.detailContainer} >
                    {attributeLabel("Sugar")}
                </View>

                <View style={styles.detailContainer} >
                    {attributeLabel("Additions")}
                </View>

                <View style={styles.totalContainer} >
                    <View>
                        <Text style={[commonStyles.text, { fontSize: 28 }]}>{"Total"}</Text>
                    </View>
                    <View>
                        <Text style={[commonStyles.text, styles.totalEgp]}>{"42"}<Text style={{ fontSize: 20 }} >{" EGP"}</Text></Text>
                    </View>
                </View>
                
            </ScrollView>
            <Button
                text={'Add to cart'}
                style={{ margin: 20 }}
            />
        </View >
    )
}

export default DrinkPreferences;


const styles = StyleSheet.create({
    imageBackground: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.placeholder,
        borderWidth: 0.3,
        borderTopColor: colors.primaryColor,
        paddingVertical: 20,
        padding: 15
    },
    itemNameText: {
        color: colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: 20
    },
    cartCountContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    cartOperationsContainer: {
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'space-around'
    },
    cartOperationButton: {
        borderWidth: 1,
        borderColor: colors.secondaryColor,
        flex: 1,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 5,
        marginLeft: 8,
    },
    removeButton: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 5,
        marginRight: 8,
    },
    cartButtonText: {
        color: colors.secondaryColor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    totalEgp: {
        color: colors.darkBrown,
        fontSize: 30,
        fontWeight: 'bold'
    }
})