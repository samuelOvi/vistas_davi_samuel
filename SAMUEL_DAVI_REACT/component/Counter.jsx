import {View, Text, TouchableOpacity} from "react-native";
import React from "react"; 
import { increment, decrement } from "../context/actions/counterActions";
import { connect } from "react-redux";

const Counter = ({count, increment, decrement}) => {
    return(
        <View>
            <Text>Counter</Text>
            <View>
                <Text>{count}</Text>
            </View>
            <TouchableOpacity onPress={() => increment()}><Text>Aumentar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => decrement()}><Text>Diminuir</Text></TouchableOpacity>
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


export default connect(mapStateToProps, mapDispatchToProps)(Counter);