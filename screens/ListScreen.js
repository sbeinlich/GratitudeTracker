import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import { DateList } from '../components/DateList';

class ListScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center",}}>
                <DateList/> 
            </SafeAreaView>
        );
    }
  }

export default ListScreen;
