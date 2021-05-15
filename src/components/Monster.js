import React from 'react';
import {Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const monster = require('../assets/monster.png');

const Monster = props => {
    const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;

    return (
        <Image 
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
            }}
            resizeMode="stretch"
            source={monster}
        />
    )
}

export default (world, color, pos, size) => {
    const initalMonster = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
    );
    Matter.World.add(world, [initalMonster]);

    return{
        body: initalMonster,
        size: [size.width, size.height],
        color: color,
        renderer: <Monster />,
    }
}

Monster.propTypes = {
    size: array,
    body: object,
    color: string,
};