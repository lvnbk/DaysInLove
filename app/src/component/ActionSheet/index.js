import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity,
    Animated,
    Text,
    Easing,
    PanResponder
} from 'react-native';
import styleBase from "app/src/styles/base";
import {sizeFont, sizeWidth} from "app/src/utils/Size";
import {strings} from "app/src/utils/i18n";
import Fontello from "app/src/component/Fontello";

const TouchableAnimate = Animated.createAnimatedComponent(TouchableOpacity);
const TIMING_CONFIG = {duration: 200, easing: Easing.inOut(Easing.ease)};

class ActionSheet extends React.PureComponent {
    constructor(props) {
        super(props);
        this.customButtons = !!props.customButtons.length ? props.customButtons : [
            {title: strings("common.edit_comment"), onPress: props.onEdit, color: '#444444', icon: 'ic_pencil'},
            {title: strings("common.delete_comment"), onPress: props.onDelete, color: '#444444', icon: 'trash'},
            // {title: strings("common.history_edit_comment"), onPress: props.onRequestClose, color: '#444444', icon: 'ic_history'},
            {title: strings("common.cancel"), onPress: props.onRequestClose, color: '#444444', icon: 'cancel-circled-1'}
        ];
        this.state = {
            transformY: new Animated.Value(300)
        };

        this.requestClose = this.requestClose.bind(this);

        this.panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: () => false,
            onStartShouldSetPanResponderCapture: () => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                if (gestureState.dy > 30) {
                    return true;
                }
                return false;
            },
            onPanResponderMove: (evt, gestureState) => {
                if(gestureState.dy < 0 ) return;
                this.setState({
                    transformY: new Animated.Value(gestureState.dy)
                });
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.vy >= 0.5 || gestureState.dy >= 50) {
                    Animated.timing(this.state.transformY, {
                        toValue: 300,
                        easing: Easing.linear,
                        duration: 200,
                        useNativeDriver: true
                    }).start(this.props.onRequestClose);
                } else {
                    Animated.spring(this.state.transformY, {
                        toValue: 0,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }).start();
                }
            },
        });
    }

    requestClose() {
        Animated.timing(this.state.transformY, {
            toValue: 300,
            ...TIMING_CONFIG,
            useNativeDriver: true
        }).start(this.props.onRequestClose);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            Animated.spring(this.state.transformY, {
                toValue: 0,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    }

    renderHeader() {
        return(
            <View style={[styleBase.p_10_vertical, styleBase.center, styleBase.bgWhite, {
                borderBottomColor: '#CCCCCC', borderBottomWidth: 0.5
            }]}>
                <Text style={[styleBase.RobotoRegular, styleBase.text4]}>
                    {
                        this.props.header
                    }
                </Text>
            </View>
        )
    }

    render() {
        let opacity = this.state.transformY.interpolate({
            inputRange: [0, 150, 300],
            outputRange: [1, 0.7, 0]
        });

        return <Modal animationType={'none'}
                      visible={this.props.visible}
                      onRequestClose={this.props.onRequestClose}
                      transparent={true}>
            <TouchableWithoutFeedback onPress={this.requestClose}>
                <Animated.View style={[styleBase.fillParent, styleBase.overlay, {opacity}]}/>
            </TouchableWithoutFeedback>
            <Animated.View style={[
                {transform: [{translateY: this.state.transformY}]},
                {position: 'absolute', bottom: 0, left: 0, right: 0}, styleBase.bgWhite]}
                {...this.panResponder.panHandlers}>
                {
                    !!this.props.header && this.renderHeader()
                }
                {
                    !!this.customButtons.length &&
                    this.customButtons.map((customButton, index) => {
                        return (
                            <ActionButton key={`ACTION_SHEET_BUTTON_${index}`}
                                          onPress={customButton.onPress}
                                          color={customButton.color}
                                          icon={customButton.icon}
                                          title={customButton.title}/>
                        )
                    })
                }
            </Animated.View>
        </Modal>;
    }
}

const ActionButton = (props) => {
    return (
        <TouchableAnimate
            onPress={props.onPress}
            style={[styleBase.p_md_vertical, styleBase.m_md_horizontal, styleBase.alignCenter, styleBase.row]}>
            <View style={[styleBase.center, {width: sizeWidth(10)}]}>
                <Fontello name={props.icon} style={[{fontSize: sizeFont(4), color: props.color, textAlign: 'center'}, styleBase.m_10_right]}/>
            </View>
            <Text style={[{color: props.color, fontSize: sizeFont(4)}, styleBase.RobotoLight]}>
                {props.title}
            </Text>
        </TouchableAnimate>
    )
};

ActionSheet.propTypes = {
    customButtons: PropTypes.array,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    header: PropTypes.string
};
ActionSheet.defaultProps = {
    visible: false,
    onRequestClose: () => {
    },
    onEdit: () => {
    },
    onDelete: () => {
    },
    customButtons: [],
    header: ''
};

export default ActionSheet;