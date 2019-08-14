import React, { Component } from 'react';
import { TextInput, View } from 'react-native';


class EntryDetail extends Component { 
    constructor(props) {
        super(props);
        const { placeholder, entry, onSubmit } = this.props;

        this.state = {
            entry
        }
    }

    render() {
        return(
            <View opacity={this.props.opacity}>
                <TextInput
                    placeholder={this.props.placeholder}
                    multiline={true}
                    onChangeText={(entry) => this.setState({entry})}
                    onSubmitEditing={this.props.onSubmit}
                    value={this.state.entry}
                />
            </View>
        )
    }
}


export { EntryDetail };