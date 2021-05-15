import Matter from 'matter-js';

const UpdateMonster = (entities, {touches, time}) => {
  const engine = entities.physics.engine;
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Monster.body, {
        x: entities.Monster.body.velocity.x,
        y: -3,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateMonster;