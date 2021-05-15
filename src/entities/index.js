import Matter from 'matter-js';
import {height, width} from '../utils/styleSheet';
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
        
    }
}