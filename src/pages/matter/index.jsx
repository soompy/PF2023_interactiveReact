import {
    Engine,
    Render,
    Runner,
    Mouse,
    MouseConstraint,
    Composite,
    Bodies,
    Events,
  } from "matter-js";  
  import { useEffect, useRef, useState } from "react";
    
  import IconEarphones from "../../assets/icon_earphones.png";
  import IconGame from "../../assets/icon_game-console.png";
  import IconMic from "../../assets/icon_microphone.png";
  import IconSms from "../../assets/icon_sms.png";
  import IconSoccer from "../../assets/icon_soccer.png";
  import IconWindmill from "../../assets/icon_windmill.png";
  import { entries } from "lodash";
  
  const RotateCanvas = () => {    
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const cw = 1100;
      const ch = 1100;
  
      const gravityPower = 0.5;
      let gravityDeg = 0;
  
      let engine, render, runner, mouse, mouseConstraint;
  
      let observer
  
      initScene();
      initMouse();
      initIntersectionObserver();
      initGround();
      initImageBoxes();      
  
      Events.on(runner, "tick", () => {
        gravityDeg += 1;
        // engine.world.gravity.x = gravityPower * Math.cos((Math.PI / 180) * gravityDeg);
        // engine.world.gravity.y = gravityPower * Math.sin((Math.PI / 180) * gravityDeg);
      });
  
      function initScene() {
        engine = Engine.create();
        render = Render.create({
          canvas: canvas,
          engine: engine,
          options: {
            width: cw,
            height: ch,
            wireframes: false,
            background: "#1b1b19",
          },
        });
        runner = Runner.create();
        Render.run(render);
        Runner.run(runner, engine);
      }
  
      function initMouse() {
        mouse = Mouse.create(canvas);
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
        });
        Composite.add(engine.world, mouseConstraint);
  
        canvas.removeEventListener('mousewheel', mouse.mousewheel)
        canvas.removeEventListener('DOMMouseScroll', mouse.mousewheel)
      }
  
      function initIntersectionObserver() {
        const options = {
          threshold: 0.1
        }
       
        observer = new IntersectionObserver(entries => {
          const canvasEntry = entries[0]
          if(canvasEntry.isIntersecting) {
            runner.enabled = true
            Render.run(render)
          } else {
            runner.enabled = false
            Render.stop(render)
          }
        }, options)
  
        observer.observe(canvas)
      }
  
      function initGround() {        
        const segments = 32;
        const deg = (Math.PI * 2) / segments;
        const width = 50;
        const radius = cw / 2 + width / 2;
        const height = radius * Math.tan(deg / 2) * 2;
  
        for (let i = 0; i < segments; i++) {
          const theta = deg * i;
          const x = radius * Math.cos(theta) + cw / 2;
          const y = radius * Math.sin(theta) + ch / 2;
          addRect(x, y, width, height, { isStatic: true, angle: theta });
        }
      }
  
      function initImageBoxes() {
        const scale = 0.45;
        const t1 = { w: 250 * scale, h: 650 * scale };
        const t2 = { w: 732 * scale, h: 144 * scale };        
  
        addRect(cw / 2, ch / 2, t1.w, t1.h, {
          chamfer: { radius: 50 },
          render: { sprite: { texture: IconSms, xScale: scale, yScale: scale } },
        });
        addRect(cw / 2 - t1.w, ch / 2, t1.w, t1.h, {          
          chamfer: { radius: 50 },
          render: { sprite: { texture: IconGame, xScale: scale, yScale: scale } },
        });
        addRect(cw / 2 + t1.w, ch / 2, t1.w, t1.h, {
          chamfer: { radius: 50 },
          render: { sprite: { texture: IconMic, xScale: scale, yScale: scale } },
        });
        addRect(cw / 2, ch / 2 + t1.h, t1.w, t1.h, {
          chamfer: { radius: 50 },
          render: {
            sprite: { texture: IconWindmill, xScale: scale, yScale: scale },
          },
        });
        addRect(cw / 2 - t1.w, ch / 2 + t1.h, t1.w, t1.h, {          
          chamfer: { radius: 50 },
          render: {
            sprite: { texture: IconSoccer, xScale: scale, yScale: scale },
          },
        });
        addRect(cw / 2, ch / 2 + t2.h, t2.w, t2.h, {
          chamfer: { radius: 50 },
          render: {
            sprite: { texture: IconEarphones, xScale: scale, yScale: scale },
          },
        });        
      }
  
      function addRect(x, y, w, h, options = {}) {
        const rect = Bodies.rectangle(x, y, w, h, options);
        Composite.add(engine.world, rect);
      }
  
      return () => {
        observer.unobserve(canvas)
  
        Composite.clear(engine.world)
        Mouse.clearSourceEvents(mouse)
        Runner.stop(runner)
        Render.stop(render)
        Engine.clear(engine)
      }
    }, []);
  
    return (
      <div className="rotate-canvas-wrapper">
        <canvas ref={canvasRef}></canvas>      
      </div>
    );
  };
  
  export default RotateCanvas;
  