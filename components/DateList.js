import React, { Component } from 'react';
import { SectionList, Text } from 'react-native';

class DateList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SectionList
                renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                renderSectionFooter={({section: {title}}) => (
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}

                sections={[
                    {title: 'Title1', data: ['Ben got me a coffee', 'dog', 'steak was good']},
                    {title: 'Title2', data: ['evening', 'afternoon', 'morning']},
                    {title: 'Title3', data: ['evening', 'afternoon', 'morning']},
                ]}

                keyExtractor={(item, index) => item + index}
                inverted={true}
                
            />
        )
    }
}

export { DateList }