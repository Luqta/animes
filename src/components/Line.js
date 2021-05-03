import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "" }) => {
       return(
       <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label, 
                label.length > 8 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[styles.cell,styles.content]}>{ content }</Text>
        </View>  
        );    
}

const styles = StyleSheet.create({
    line:{
        marginLeft: 25,
        marginRight: 25,
        height: 60,

        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',

        alignItems: 'center',
        flexDirection: 'row'
    },
    cell:{
        fontSize: 18,
        paddingLeft: 5,
        color: '#cccccc'
    },
    label:{
        fontWeight:'bold',
        flex: 1,
        color: '#cccccc'
    },
    content:{
        flex: 3
    },
    longLabel:{
        fontSize: 14
    }
});

export default Line;