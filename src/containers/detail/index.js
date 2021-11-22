import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import {} from 'react-native';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovieDetails} from '../../actions';

function Detail({route}) {
    let deets = route.params;
    const dispatch = useDispatch();

    // const movieDeets = useSelector((state) => state.movieDetail.data);

    useEffect(() => {
        dispatch(fetchMovieDetails(deets));
        console.log(deets);
    })

    
    
    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>This is detail section</Text> */}
            <View>
                <ImageBackground style={styles.imagebackground} source={deets.Poster} />
                <Text style={styles.title}>{deets.Title}</Text>
                <Text>{deets.Year}</Text>
                {/* <ImageBackground style={styles.imagebackground} source={movieDeets.Poster} />
                <Text>Genre: {movieDeets.Genre}</Text>
                <Text>imdb Rating: {movieDeets.imdbRating}</Text>
                <Text>Rated: {movieDeets.Rated}</Text>
                <Text>Duration: {movieDeets.Runtime}</Text> 
                <Text>Description: {movieDeets.Plot}</Text>  */}
            </View>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#F7F7F7",
        textAlign: 'center'
    },
    imagebackground: {
        width: 300,
        height: 400,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        marginVertical: 15,
    }
}

export default Detail;