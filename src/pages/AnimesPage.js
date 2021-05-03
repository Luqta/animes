import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AnimeCard from '../components/AnimeCard';
import AddAnimeCard from '../components/AddAnimeCard';
import { connect } from 'react-redux';
import { watchAnimes } from '../actions'

const isEven = number => number % 2 === 0;

class AnimesPage extends React.Component{
    componentDidMount(){
        this.props.watchAnimes();
    }

    render(){
        const { animes, navigation } = this.props;
        console.log('a:', animes)
        if(animes === null) {
            return (
                <View style={styles.backgroundBugSolved}>
                <StatusBar style="inverted"/>
                <AddAnimeCard onNavigate={() => navigation.navigate('AnimeForm')}/>
                </View>
            )
        }

        return(
            <View>
                <StatusBar style="inverted" />
                <FlatList
                    style={styles.background}
                    data={[...animes, {isLast: true }]}
                    renderItem={({ item, index }) => (
                        item.isLast 
                            ? <AddAnimeCard 
                                isFirstColumn={isEven(index)}
                                onNavigate={() => navigation.navigate('AnimeForm')}
                            />
                            : <AnimeCard
                                anime={item}
                                isFirstColumn={isEven(index)}
                                onNavigate={() => navigation.navigate('AnimeDetail', { anime: item })}
                            />
                    
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    ListHeaderComponent={props => (<View style ={styles.marginTop} />)}
                    ListFooterComponent={props => (<View style ={styles.marginBottom} />)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        paddingBottom: '200%',
        backgroundColor: '#7f768a'
    },
    marginTop:{
        marginTop: 5
    },
    marginBottom:{
        marginBottom: 5
    },
    backgroundBugSolved:{
        paddingBottom: '200%',
        backgroundColor: '#7f768a',
        paddingTop: 5
    }
})

const mapStateToProps = state => {
    const { animes } = state;
    if(animes === null){
        return { animes }
    }

    const keys = Object.keys(animes);
    const animesWithKeys = keys.map(id => {
        return { ...animes[id], id }
    })
    return { animes: animesWithKeys };
}

export default connect(mapStateToProps, { watchAnimes })(AnimesPage);