// components/CubeAnimation.js
"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CubeAnimation = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let gltf = null;
    let mixer = null;
    let clock = new THREE.Clock();
    let controls;
    let camera;
    let scene;
    let renderer;
    
    // Initialize Three.js scene
    const init = () => {
      // Render size to match the container
      const width = window.innerWidth / 2;
      const height = window.innerHeight / 2;

      // Create new scene
      scene = new THREE.Scene();
      
      // IMPROVED LIGHTING SETUP
      // Increased ambient light intensity for better overall illumination
      let ambient = new THREE.AmbientLight(0xffffff, 1.0); // Increased from 0.5 to 1.0
      scene.add(ambient);
      
      // Main spotlight with improved positioning and parameters
      const mainSpotlight = new THREE.SpotLight(0xFFFFFF, 3, 100, Math.PI / 3, 0.5); // Increased intensity, reduced penumbra
      mainSpotlight.position.set(10, 15, 10); // Better positioning for cube illumination
      mainSpotlight.castShadow = true;
      mainSpotlight.shadow.bias = -0.0001; // Reduces shadow acne
      scene.add(mainSpotlight);
      
      // Add a secondary fill light from another angle
      const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      fillLight.position.set(-5, 10, 5);
      fillLight.castShadow = true;
      scene.add(fillLight);
      
      // Add a subtle rim light to highlight edges
      const rimLight = new THREE.DirectionalLight(0x9090ff, 0.8); // Slight blue tint
      rimLight.position.set(0, 5, -10);
      scene.add(rimLight);

      // Camera setup
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(3, 5, -3);

      // Create renderer and include antialiasing to smoothen edges
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows
      renderer.setSize(width, height);
      renderer.outputEncoding = THREE.sRGBEncoding; // Use this instead of deprecated gammaOutput
      renderer.physicallyCorrectLights = true; // More realistic lighting
      renderer.toneMapping = THREE.ACESFilmicToneMapping; // Improved tone mapping
      renderer.toneMappingExposure = 1.2; // Slightly brighter overall
      
      if (containerRef.current) {
        // Clear any existing canvas
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
        
        containerRef.current.appendChild(renderer.domElement);
      }

      // Allow user to orbit around object - but disable zoom
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false; // Disable zooming
      controls.userPan = false;
      controls.userPanSpeed = 0.0;
      controls.maxDistance = 5000.0;
      controls.maxPolarAngle = Math.PI * 0.495;
      controls.noRotate = true;

      // Load the 3D model
      loadModel();
      
      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    const loadModel = () => {
      let manager = new THREE.LoadingManager();
      manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
      };

      // Add error handler to debug loading issues
      manager.onError = function(url) {
        console.error('Error loading', url);
      };

      let loader = new GLTFLoader(manager);
      let scale = 23;
      
      // Update this path to where your model will be in the Next.js public folder
      let url = "/modals/cube/cube.glb";

      loader.load(
        url, 
        function (data) {
          gltf = data;
          let object = gltf.scene;
          object.scale.set(scale, scale, scale);
          object.position.y = 0;
          object.position.x = 0;
          object.position.z = 0;
          object.castShadow = true;
          object.receiveShadow = true;
          
          // IMPROVEMENT: Enhance material properties for better reflection
          object.traverse((child) => {
            if (child.isMesh) {
              // For black materials, increase roughness for better light interaction
              if (child.material) {
                // Make material properties more suitable for lighting
                child.material.roughness = 0.7; // Less mirror-like, more natural reflection
                child.material.metalness = 0.4; // Some metallic quality for highlights
                child.material.envMapIntensity = 1.5; // Enhance environment reflections
              }
            }
          });
          
          // Add to scene immediately to ensure visibility
          scene.add(object);

          let animations = gltf.animations;
          if (animations && animations.length) {
            mixer = new THREE.AnimationMixer(object);
            let animation = animations[0];
            var action = mixer.clipAction(animation);
            
            // Start playing immediately 
            action.play();
            
            // Create the scrolling animation without affecting camera
            createAnimation(mixer, action, animation, object);
          } else {
            console.warn('No animations found in the model');
          }
        },
        // Progress callback
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // Error callback
        function (error) {
          console.error('Error loading model:', error);
        }
      );
    };

    const createAnimation = (mixer, action, clip, object) => {
      // Setup proxy for animation control
      let proxy = {
        get time() {
          return mixer.time;
        },
        set time(value) {
          // Don't pause the action, allow it to always be active
          mixer.setTime(value);
        }
      };

      // Kill any existing ScrollTrigger instances to prevent conflicts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Store initial camera position
      const initialCameraPosition = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      };

      // Set up GSAP ScrollTrigger with improved configuration
      let scrollingTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_2_main",
          start: "top top",
          end: "bottom bottom",
          pin: ".section_2_left",
          scrub: 0.5, // Add a small smooth scrub for better performance
          // markers: true, // Uncomment for debugging
          onEnter: () => {
            console.log("ScrollTrigger ENTER");
            // Reset the animation to make sure we start fresh
            action.reset();
            action.play();
          },
          onLeaveBack: () => {
            console.log("ScrollTrigger LEAVE BACK");
          },
          onUpdate: (self) => {
            // Maintain camera position to prevent zooming
            camera.position.set(
              initialCameraPosition.x,
              initialCameraPosition.y,
              initialCameraPosition.z
            );
            
            // Update projection matrix after maintaining position
            camera.updateProjectionMatrix();
          }
        }
      });

      // Create the animation timeline that maps scroll to animation time
      scrollingTL.fromTo(
        proxy, 
        { time: 0 }, 
        { 
          time: clip.duration,
          ease: "none",
          immediateRender: true
        }
      );
      
      // Initialize mixer to ensure first frame renders
      mixer.update(0);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update the mixer with elapsed time
      var delta = clock.getDelta();
      if (mixer !== null) {
        mixer.update(delta);
      }
      
      // Update controls if needed
      if (controls) {
        controls.update();
      }
      
      // Render the scene
      render();
    };

    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    const onWindowResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
      if (renderer) {
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      }
    };

    // Initialize the scene
    init();
    
    // Start animation loop
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      
      // Dispose ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (mixer) mixer.stopAllAction();
      if (renderer) renderer.dispose();
      if (scene) {
        scene.traverse(object => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return <div ref={containerRef} id="hero" className="w-full" />;
};

export default CubeAnimation;