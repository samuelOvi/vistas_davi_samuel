import React, { useState } from "react";
import {View, TouchableOpacity, Text} from "react-native"

const Card = ({children, cardStyle}) => {
    const [getColor, setColor] = useState("red");
    return (
        (true)?
        <View style={[{borderRadius:20}, cardStyle]}>
            {children.map((prop, key) => {
                    return <TouchableOpacity onPress={() => {(getColor === "red")? setColor("blue") : setColor("red")}} style={[{borderRadius:20, width: 100, height: 100, backgroundColor: getColor}, cardStyle]} ><Text>{prop.text}</Text></TouchableOpacity>;
                })
            }
        </View>
        : <></>
    );
}
export default Card;