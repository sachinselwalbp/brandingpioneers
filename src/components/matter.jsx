// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter, { Mouse } from 'matter-js';

export default function MatterScene() {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Body = Matter.Body;
    let Svg = Matter.Svg;
    let Vector = Matter.Vector;
    let Vertices = Matter.Vertices;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 550,
        height: 550,
        background: 'red',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(300, 400, 600, 10, {
      isStatic: true,
      render: {
        fillStyle: 'green'
      }
    });

    const ball = Bodies.rectangle(150, 20, 20, 30, {
      restitution: 0.9,
      render: {
        fillStyle: 'blue'
      }
    });

    // let mouse = Matter.mouse.create(render.canvas)
    // let mouseCon = Matter.MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     render: { visible: false }
    //   }
    // })
    // render.mouse = mouse

    World.add(engine.world, [floor, ball]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 550,
        height: 550
      }}>
      <canvas ref={canvasRef} />
    </div>
  );
};