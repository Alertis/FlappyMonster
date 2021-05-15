import Matter from 'matter-js';
import Monster from '../components/Monster';
import {height, width, heightRatio, widthRatio} from '../utils/styleSheet';
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
        )
    }
}