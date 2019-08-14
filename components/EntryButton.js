import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View, TextInput,
} from 'react-native'

import { EntryDetail } from './EntryDetail';

class EntryButton extends Component {
    constructor(props) {
        super(props);
        let {entry, onPress} = props;
        this.state = {
            entry,
            showPopup: false,
        }
    }

    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                backgroundColor: '#DDDDDD',
                borderWidth: 0.5,
                flexGrow: 1,
                flexShrink: 0,
                minHeight: this.props.height * 0.333 || 0
            }}>
                {this.state.isEditing ?
                    <TextInput
                        value={this.state.entry}
                        onChangeText={(value) => this.setState({entry: value})}
                        style={{padding: 0, margin: 0, textAlign: "center"}}
                        autoFocus
                        multiline
                        onBlur={() => this.setState({isEditing: false})}
                    /> :
                    <Text
                        onPress={() => this.setState({isEditing: true})}
                        style={{padding: 0, margin: 0, paddingTop: 5, textAlign: "center"}}
                    >
                        {this.state.entry}
                    </Text>
                }
            </View>
        )
    }
}

export default EntryButton;