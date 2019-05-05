import {ACTION_HIDE_LOADING, ACTION_SHOW_LOADING} from "../Action";
import DialogUtil from "../../utils/DialogUtil";
import {strings} from "app/src/utils/i18n";

export const showLoading = () => {
    return {type: ACTION_SHOW_LOADING}
};

export const hideLoading = () => {
    return {type: ACTION_HIDE_LOADING}
};

export const showError = (error, title) => {
    title = title || strings("common.server_error");
    if (error && error.message) {
        DialogUtil.showMessageDialog(title, error.message, 'OK');
    }
};

export const showConfirm = (message, title, cb) => {
  DialogUtil.showMessageDialog(title, message, 'OK', cb);
};

export const showPromt = ({title = '', content = '', confirmText = strings("common.yes"),
                              rejectText = strings("common.no"), onConfirm, onReject}) => {
    DialogUtil.showConfirmDialog(title, content, confirmText, rejectText, onConfirm, onReject)
}

