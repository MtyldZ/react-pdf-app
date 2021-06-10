import {Font, StyleSheet} from "@react-pdf/renderer";

// todo add tr font

// Font.register({family: 'Arial', src: arial})

Font.register({
    family: 'Roboto',
    fonts: [
        {src: '../../fonts/ubuntuRegular.ttf'}, // font-style: normal, font-weight: normal
        // { src: source2, fontStyle: 'italic' },
        // { src: source3, fontStyle: 'italic', fontWeight: 700 },
    ]
});

export const Styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        // fontFamily: 'Roboto',
        padding: 24,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 14,
        color: '#00157d',
    },
    headerRightPart: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    headerCodeContainer: {
        height: 100,
        width: 244,
        marginBottom: 8,
    },
    headerFormNameText: {
        fontSize: 14,
        marginBottom: 8,
        paddingRight: 12,
    },

    textCell: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 2,
        paddingRight: 4,
    },

    bigCell: {
        height: 150,
    },


});
