import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import TodayHeader from '../components/TodayHeader';
import EntryButton from '../components/EntryButton';
import moment from 'moment';
import { createStackNavigator } from 'react-navigation';
import { EntryDetail } from '../components/EntryDetail';

const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

class FocusedScreen extends React.Component {
    constructor(props) {
        super(props);
        const now = moment();

        this.state = {
            date: now.format("MMMM Do, YYYY"),
            dateRelative: "TODAY",
            rememberMsg: "Remember when Dave bought you coffee yesterday?"
        }
    }

    onSwipeLeft() {
        // WEEKDAYS[now.weekday()] for day of week

    }

    onSwipeRight() {
        
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TodayHeader 
                        date={this.state.date} 
                        dateRelative={this.state.dateRelative} 
                        rememberMsg={this.state.rememberMsg}
                        canGoBack={true}
                        canGoForward={true}
                        />
                </View>
                <View style={{ flex: 2 }}>
                    <EntryButton entry={'entry1'} onPress={() => this.props.navigation.navigate('Detail')}/>
                    <EntryButton entry={'entry2'}/>
                    <EntryButton entry={'entry3'}/>
                </View>
                
            </SafeAreaView>
        );
    }
}

const FocusedNavigator = createStackNavigator({
    Focused: FocusedScreen,
    Detail: EntryDetail,
})


export default FocusedNavigator;
