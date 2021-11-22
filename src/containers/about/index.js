import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

//if we take data from ABOUTDATA, it will display the data, if we take data from EMPTYDATA, it will display th output

const ABOUTDATA = [
    {
        title: 'title One',
        content: 'this is content for section One',
    },
    {
        title: 'title Two',
        content: 'this is content for section Two',
    },
    {
        title: 'title Three',
        content: 'this is content for section Three',
    },
    {
        title: 'title Four',
        content: 'this is content for section Four',
    },
]

const EMPTYDATA = [];

function About() {
    function _renderListView(data) {
        return (
            <View key={data.index}>
                <Text>{data.title}</Text>
                <Text>{data.content}</Text>
            </View>
        );
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text>This is about</Text>
                <FlatList 
                    data={ABOUTDATA}
                    renderItem={({item}) => 
                    // (
                        // <View key={item.index}>
                        //     <Text>{item.title}</Text>
                        // </View>
                        _renderListView(item)
                    // )
                }
                    // keyExtractor={(item) => {item.id}}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Sorry no data available</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
export default About;