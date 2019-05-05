import {StyleSheet, Platform, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
const percentWidth = width / 100;
const percentHeight = height / 100;

const sizeFont = (percent) => {
    return percent * percentWidth;
};

const sizeWidth = (percent) => {
    return percent * (percentWidth < percentHeight ? percentWidth : percentHeight);
};

const sizeHeight = (percent) => {
    return percent * (percentWidth > percentHeight ? percentWidth : percentHeight);
};

const styleBase = StyleSheet.create({
    base: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    selfCenter: {
        alignSelf: 'center'
    },
    selfStart: {
        alignSelf: 'flex-start'
    },
    selfEnd: {
        alignSelf: 'flex-end'
    },
    textCenter: {
        textAlign: 'center',
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: "center"
    },
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row"
    },
    wrap: {
        flexWrap: 'wrap'
    },
    divider: {
        height: 1,
        borderColor: "#e5e5e5",
        borderWidth: 1,
    },
    column: {
        flexDirection: "column"
    },
    nav: {
        height: 60,
        backgroundColor: "#fff"
    },
    fillParent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    fullParent: {
        height: '100%',
        width: '100%'
    },
    w60: {
        width: '60%'
    },
    w70: {
        width: '70%'
    },
    h75: {
        height: '75%'
    },
    w75: {
        width: '75%'
    },
    w80: {
        width: '80%'
    },
    h25: {
        height: '25%'
    },
    w25: {
        width: '25%'
    },
    w100: {
        width: '100%'
    },
    h100: {
        height: '100%'
    },
    h50: {height: '50%'},
    w50: {width: '50%'},
    w40: {width: '40%'},
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    textInput: {
        height: 40
    },
    input: {
        borderWidth: 1,
        borderColor: '#e5e5e5'
    },
    fontRubik: {
        fontFamily: 'Rubik',
        color: "#444"
    },
    grow: {
        flexGrow: 1
    },
    borderButton: {
        borderRadius: 4
    },
    roundCornerButton: {
        borderRadius: 30
    },
    textWhite: {
        color: "#fff"
    },
    RobotoLight: {
        fontFamily: 'Roboto-Light'
    },
    RobotoRegular: {
        fontFamily: 'Roboto-Regular'
    },
    RobotoBold: {
        fontFamily: 'Roboto-Bold'
    },
    RubikLight: {
        fontFamily: 'Rubik-Light'
    },
    RubikRegular: {
        fontFamily: 'Rubik-Regular'
    },
    RubikBold: {
        fontFamily: 'Rubik-Bold'
    },
    CookieRegular: {
        fontFamily: 'Cookie-Regular'
    },
    textBlack: {
        color: '#4A4643'
    },
    textGrey: {
        color: '#a2a8b1'
    },
    text4: {
        color: "#444"
    },
    text6: {
        color: '#666'
    },
    textPrim: {
        color: "#D0CFD0"
    },
    textE5: {
        color: '#e5e5e5'
    },
    textWhiteSmoke: {
        color: '#F6F6F6'
    },
    textDanger: {
        color: '#ff4444'
    },
    textBlue: {
        color: "#3092FF"
    },
    textYellow: {
        color: "#F8E71C"
    },
    fontBold: {
        fontWeight: "600"
    },
    textWrap: {
        width: 0,
        flexGrow: 1
    },
    shadowBox: {
        elevation: 2,
        shadowColor: "#999",
        shadowOffset: {
            width: 0.5,
            height: 1.5
        },
        backgroundColor: "#fff",
        shadowOpacity: 0.9,
        shadowRadius: 1.5,
        borderBottomWidth: 0,
        borderRadius: 5
    },
    shadow: {
        elevation: 2,
        shadowColor: "#999",
        shadowOffset: {
            width: 0.5,
            height: 1.5
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.5,
        borderBottomWidth: 0
    },
    colorInput: {
        color: "#55db55"
    },
    panelHeader: {
        height: 40,
        borderWidth: 0
    },
    roundButton: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: "#e5e5e5",
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    borderTop: {
        borderTopWidth: 1,
    },
    borderBottom: {
        borderBottomWidth: 1
    },
    borderLeft: {
        borderLeftWidth: 1
    },
    borderRight: {
        borderRightWidth: 1
    },
    bordered: {
        borderWidth: 1
    },
    borderNone: {
        borderWidth: 0
    },
    borderE5: {
        borderColor: "#e5e5e5"
    },
    borderWhite: {
        borderColor: "#fff"
    },
    borderRadiusNone: {
        borderRadius: 0
    },
    borderBlue: {
        borderColor: '#3092FF'
    },
    bgGreen: {
        backgroundColor: '#55db55'
    },
    bgE5: {
        backgroundColor: "#e5e5e5"
    },
    bgGrey: {
        backgroundColor: '#a2a8b1'
    },
    bgLightGrey: {
        backgroundColor: "#ebecf0"
    },
    bgWhite: {
        backgroundColor: "#fff"
    },
    bgWhiteTransparent: {
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    bgWhiteTransparentBrighter: {
        backgroundColor: 'rgba(229,229,229,0.5)'
    },
    bgBlue: {
        backgroundColor: '#3092FF'
    },
    colorBlue: {
        color: '#3092ff'
    },
    bgFacebook: {
        backgroundColor: '#3b5998'
    },
    bgGoogle: {
        backgroundColor: '#dc4e41'
    },
    bgDanger: {
        backgroundColor: '#ff4444'
    },
    bgBlack: {
        backgroundColor: "#000"
    },
    bgYellow: {
        backgroundColor: "#F8E71C"
    },
    noBg: {
        backgroundColor: "transparent"
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    /* Gutters */
    p_sm_top: {
        paddingTop: 5
    },
    p_sm_left: {
        paddingLeft: 5
    },
    p_sm_right: {
        paddingRight: 5
    },
    p_sm_bottom: {
        paddingBottom: 5
    },
    p_sm_vertical: {
        paddingVertical: 5
    },
    p_sm_horizontal: {
        paddingHorizontal: 5
    },
    m_sm_top: {
        marginTop: 5
    },
    m_sm_left: {
        marginLeft: 5
    },
    m_sm_right: {
        marginRight: 5
    },
    m_sm_bottom: {
        marginBottom: 5
    },
    m_sm_vertical: {
        marginVertical: 5
    },
    m_sm_horizontal: {
        marginHorizontal: 5
    },
    // Padding 10.

    p_10_top: {
        paddingTop: 10
    },
    p_10_left: {
        paddingLeft: 10
    },
    p_10_right: {
        paddingRight: 10
    },
    p_10_bottom: {
        paddingBottom: 10
    },
    p_10_vertical: {
        paddingVertical: 10
    },
    p_10_horizontal: {
        paddingHorizontal: 10
    },
    m_10_top: {
        marginTop: 10
    },
    m_10_left: {
        marginLeft: 10
    },
    m_10_right: {
        marginRight: 10
    },
    m_10_bottom: {
        marginBottom: 10
    },
    m_10_vertical: {
        marginVertical: 10
    },
    m_10_horizontal: {
        marginHorizontal: 10
    },
    // Padding md
    p_md_top: {
        paddingTop: 15
    },
    p_md_left: {
        paddingLeft: 15
    },
    p_md_right: {
        paddingRight: 15
    },
    p_md_bottom: {
        paddingBottom: 15
    },
    p_md_vertical: {
        paddingVertical: 15
    },
    p_md_horizontal: {
        paddingHorizontal: 15
    },
    // Gutter md
    m_md_top: {
        marginTop: 15
    },
    m_md_left: {
        marginLeft: 15
    },
    m_md_right: {
        marginRight: 15
    },
    m_md_bottom: {
        marginBottom: 15
    },
    m_md_vertical: {
        marginVertical: 15
    },
    m_md_horizontal: {
        marginHorizontal: 15
    },

    // Gutter LG
    m_lg_top: {
        marginTop: 30
    },
    p_lg_top: {
        paddingTop: 30
    },
    m_lg_bottom: {
        marginBottom: 30
    },
    p_lg_bottom: {
        paddingBottom: 30
    },
    p_lg_right: {
        paddingRight: 30
    },
    p_lg_left: {
        paddingLeft: 30
    },
    m_lg_right: {
        marginRight: 30
    },
    p_lg_vertical: {
        paddingVertical: 30
    },
    m_lg_vertical: {
        marginVertical: 30
    },
    p_lg_horizontal: {
        paddingHorizontal: 30
    },
    m_lg_horizontal: {
        marginHorizontal: 30
    },

    //Gutter XL
    m_xl_top: {
        marginTop: 45
    },
    m_xl_bottom: {
        marginBottom: 45
    },
    m_xl_right: {
        marginRight: 45
    },
    m_xl_horizontal: {
        marginHorizontal: 45
    },
    m_xl_vertical: {
        marginVertical: 45
    },
    p_xl_top: {
        paddingTop: 45
    },
    p_xl_bottom: {
        paddingBottom: 45
    },
    p_xl_right: {
        paddingRight: 45
    },
    p_xl_left: {
        paddingLeft: 45
    },
    p_xl_horizontal: {
        paddingHorizontal: 45
    },
    p_xl_vertical: {
        paddingVertical: 45
    },
    /**
     * Text
     */
    extraText: {
        fontSize: sizeFont(6.8)
    },
    bigText: {
        fontSize: sizeFont(5.3)
    },
    normalText: {
        fontSize: sizeFont(4.2)
    },
    smallText: {
        fontSize: sizeFont(3.8)
    },
    smallerText: {
        fontSize: sizeFont(3)
    },
    extraIcon: {
        fontSize: sizeFont(7)
    },
    bigIcon: {
        fontSize: sizeFont(5.7)
    },
    icon: {
        fontSize: sizeFont(4.4)
    },
    smallIcon: {
        fontSize: sizeFont(4)
    },

    /**
     * Image Size
     * */
    image120: {
        width: sizeWidth(32),
        height: sizeWidth(32),
        borderRadius: sizeWidth(32) / 2
    },
    image60: {
        width: sizeWidth(16),
        height: sizeWidth(16),
        borderRadius: sizeWidth(16) / 2
    },
    image45: {
        width: sizeWidth(12),
        height: sizeWidth(12),
        borderRadius: sizeWidth(12) / 2
    },
    image10: {
        width: sizeWidth(10),
        height: sizeWidth(10),
        borderRadius: sizeWidth(10) / 2
    },
    minHeight100: {
        minHeight: sizeWidth(26.6)
    },
    height250: {
        height: sizeWidth(66.6)
    },
    height60: {
        height: sizeWidth(60)
    },
    dimension100: {
        width: sizeWidth(100)
    },
    url: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    email: {
        textDecorationLine: 'underline',
    }
});

export default styleBase;
