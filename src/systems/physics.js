import Matter from 'matter-js';

const Physics = (entities, {time, dispatch}) => {
    let engine = entities.physics.engine;
    Matter.Engine.update(engine, time.delta);
    Matter.Events.on(engine,'collisionStart', (event) => {
        dispatch({ type: "game-over"});
    });
    return entities;
}

export default Physics;