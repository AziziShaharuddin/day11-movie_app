import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, TextInput, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from '../../actions';

function Home(props) {
    // function _renderList(data){
    //     return(
    //         <TouchableOpacity style={styles.cardStyle} onPress={() => props.navigation.navigate('Detail', data)} >
    //             <ImageBackground style={styles.imagebackground} source={data.poster} />
    //             {/* <Image source={data.poster} /> */}
    //             <Text style={styles.title}>{data.name}</Text>
    //         </TouchableOpacity>
    //     );
    // };
    const [movieName, movienameChange] = React.useState("");
    const movieList = useSelector((state) => state.fetchMovie.data.Search); //mapStatetoProps
    const dispatch = useDispatch(); //mapDispatchtoProps

    function _renderMovie(data) {
        return(
            <SafeAreaView>
                <TouchableOpacity 
                style={styles.cardStyle} 
                onPress={() => props.navigation.navigate('Detail', data)}
                // data.imdbID
                >
                    <ImageBackground style={styles.imagebackground} source={data.Poster} />
                    <Text style={styles.title}>{data.Title}</Text>
                </TouchableOpacity>
            </SafeAreaView>
            
        );
    }

    function search() {
        // console.log('try', movieName);
        dispatch(fetchMovie(movieName));
    }
    return(
        <SafeAreaView style={styles.container}>
            {/* <Text> This is Home page</Text> */}
            <View style={styles.searchBar}>
                <TextInput 
                style={styles.input}
                name="search" 
                placeholder="Search" 
                keyboardType='default'
                onChangeText={movienameChange}
                value={movieName}
                />
                {/* <Button style={styles.button} title="Search" onPress={() => search()} /> */}
                <TouchableOpacity style={styles.button} onPress={() => search()}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingHorizontal: 20, flexWrap: "wrap", flexDirection: "row", justifyContent: "center",}}>
                <FlatList
                    data={movieList}
                    renderItem={({item}) => _renderMovie(item)} 
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Sorry no data available</Text>
                        </View>
                    )} 
                />
            </ScrollView>
            
            {/* <ScrollView 
            showsVerticalScrollIndicator={false} 
            // horizontal={true}
            // showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{paddingHorizontal: 20, flexWrap: "wrap", flexDirection: "row", justifyContent: "center",}}>
                {
                    Data.map((list) => (
                        _renderList(list)
                    ))
                }
            </ScrollView> */}
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#F7F7F7",
    },
    cardStyle: {
        width: 300,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 10,
        marginHorizontal: 20
    },
    imagebackground: {
        width: '100%',
        height: '100%',
        marginTop: 30
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    searchBar: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    input: {
        padding: 15,
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: 'white', 
    },
    button: {
        padding: 15,
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: '#D1E8E4', 
        color: '#142F43',
        borderRadius: 10,
    }
}

export default Home;