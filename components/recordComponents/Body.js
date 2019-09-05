import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

class Body extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                {
                    this.props.records.map(data => (
                        <View style={styles.todo} key={data.id}>
                            <View style={styles.todoText}>
                                <Text>{data.text}</Text>
                            </View>
                         </View>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
    },
    todoDelBtn: {
        color: '#777'
    },
    todoCompleted: {
        color: "#bbb",
        textDecorationLine: "line-through"
    }
});

export default Body;