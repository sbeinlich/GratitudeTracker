import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

import { EntryDetail } from './EntryDetail';

class EntryButton extends Component {
    constructor(props) {
        super(props);
        let { entry, onPress } = props;
        this.state = {
            entry,
            showPopup: false,
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text>{this.state.entry}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        borderWidth: 0.5,
    },
    entry: {
 
    }
});

export default EntryButton;