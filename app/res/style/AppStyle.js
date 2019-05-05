import {
    Platform
} from 'react-native';
import {sizeFont} from "../../src/utils/Size";

export const APP_COLOR = '#3092FF';
export const APP_BACKGROUND = '#F8FAFC';
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const TOOL_BAR_TEXT = {
    color: '#fff',
    fontSize: sizeFont(4.8),
};