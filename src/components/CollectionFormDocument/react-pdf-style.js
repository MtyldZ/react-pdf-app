import {StyleSheet} from "@react-pdf/renderer";

export const Styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
        flexDirection: 'column',
    },

    pv1: {
        paddingVertical: 4,
    },
    pv2: {
        paddingVertical: 8,
    },
    pv3: {
        paddingVertical: 12,
    },
    pv4: {
        paddingVertical: 16,
    },
    pv5: {
        paddingVertical: 20,
    },

    btl1: {
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: '#000000'
    },
    br1: {
        borderRightWidth: 1,
        borderColor: '#000000'
    },
    bt1: {
        borderTopWidth: 1,
        borderColor: '#000000'
    },
    bb1: {
        borderBottomWidth: 1,
        borderColor: '#000000'
    },
    floatToLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    floatToRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    floatToCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textMini: {
        fontSize: 6,
    },
    textTiny: {
        fontSize: 7,
    },
    textSmall: {
        fontSize: 8,
    },
    textMedium: {
        fontSize: 9,
    },
    textLarge: {
        fontSize: 10,
    },
    textBig: {
        fontSize: 12,
    },
    textHuge: {
        fontSize: 14,
    },
});
