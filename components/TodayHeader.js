import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TodayHeader = (props) => {
    const { date, dateRelative, rememberMsg, canGoBack, canGoForward } = props;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.arrow}>{canGoBack ? "<" : ""}</Text>
            </View>
            <View style={{maxWidth: '80%'}}>
                <Text style={styles.date}> {date} </Text>
                <Text style={styles.dateRelative}> {dateRelative} </Text>
                <Text style={styles.rememberMsg}> {rememberMsg} </Text>
            </View>
            <View>
                <Text style={styles.arrow}>{canGoForward ? ">" : ""}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#333333'
    },
    date: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    dateRelative: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    rememberMsg: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    arrow: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default TodayHeader;