import Matter from 'matter-js';
import Monster from '../components/Monster';
import Obstacle from '../components/Obstacle';
import {height, width, heightRatio, widthRatio} from '../utils/styleSheet';
import {getRandom,topObstacleHeight, bottomObstacleHeight} from '../utils/random';
import Constants from '../utils/constants';
Matter.Common.isElement = () => false; // HTML elementlerini referans almaması için override edeiyoruz

export default restart => {
    // Mevcut varlıkları temizle
    if (restart) {
        Matter.Engine.clear(restart.physics.engine);
    }
    let engine = Matter.Engine.create({enableSleeping: false});
    let world = engine.world;
    world.gravity.y = 0.1;

    return{
        physics: {engine: engine, world: world},
        Monster: Monster(
            world,
            'blue',
            {x: width/2, y: height/2},
            {height: heightRatio * 50, width: widthRatio * 70}
        ),
        Obstacle1: Obstacle(
            world,
            'top',
            {
                x: width * 2 - Constants.TOP_PIPE_WIDTH / 2,
                y: getRandom(heightRatio * 100, heightRatio * 300),
            },
            {height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH},
        ),
        Obstacle2: Obstacle(
            world,
            'bottom',
            {
                x: width * 3 - Constants.TOP_PIPE_WIDTH / 2,
                y: getRandom(heightRatio * 300, heightRatio * 500),
            },
            {height: bottomObstacleHeight, width: Constants.BOTTOM_PIPE_WIDTH},
        ),
    }
}