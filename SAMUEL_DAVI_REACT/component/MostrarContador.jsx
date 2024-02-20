import {View, Text, TouchableOpacity} from "react-native";
import React from "react"; 
import { increment, decrement } from "../context/actions/counterActions";
import { connect } from "react-redux";

const MostrarContador = ({count, increment, decrement}) => {
    return(
        <View>
            <Text>Contador:</Text>
            <View>
                <Text>{count}</Text>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(MostrarContador);