import React from 'react';
import {SafeAreaView, View, Text, Button, ScrollView, StyleSheet} from 'react-native';
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
            rememberMsg: "Remember when Dave bought you coffee yesterday?",
        }
    }

    onSwipeLeft() {
        // WEEKDAYS[now.weekday()] for day of week

    }

    onSwipeRight() {

    }

    onScrollLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        this.setState({ height});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TodayHeader
                        date={this.state.date}
                        dateRelative={this.state.dateRelative}
                        rememberMsg={this.state.rememberMsg}
                        canGoBack={true}
                        canGoForward={true}
                    />
                </View>
                <View style={{flex: 2}}>
                    <ScrollView style={{ borderColor: "red" }} onLayout={this.onScrollLayout}>
                        <EntryButton entry={'entry1'} height={this.state.height}/>
                        <EntryButton entry={'entry2'} height={this.state.height}/>
                        <EntryButton entry={'entry3'} height={this.state.height}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}


export default FocusedScreen;
