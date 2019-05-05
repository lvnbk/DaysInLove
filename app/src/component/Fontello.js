import React from 'react';
import {createIconSetFromFontello} from 'react-native-vector-icons'
import config from 'app/res/icons/config';

const Icon = createIconSetFromFontello(config);


class Fontello extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <Icon {...this.props}/>;
    }
}

Fontello.propTypes = {};
Fontello.defaultProps = {};

export default Fontello;