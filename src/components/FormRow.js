import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = props => {
    const { children, first, last } = props;
    return(
        <View style={[
            styles.container,
            first ? styles.first : null,
            last ? styles.last : null
        ]}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#cccccc',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1,
        marginLeft: 15,
        marginRight: 15
    },
    first:{
        marginTop: 10
    },
    last:{
        marginBottom: 10
    }
})

export default FormRow;