import React, { useRef, useState, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Physics, RigidBody, useSphericalJoint, CuboidCollider, BallCollider } from '@react-three/rapier';
import * as THREE from 'three';
import gilangPhoto from '../assets/gilang.jpg';
import ubLogo from '../assets/logo-ub.png';
import { personalInfo } from '../data/portfolioData';

// Canvas Texture Generator for Card Front
function useCardFrontTexture() {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    const profileImg = new Image();
    const logoImg = new Image();

    let loadedCount = 0;
    const checkDraw = () => {
      loadedCount++;
      if (loadedCount >= 2) {
        drawCanvas();
      }
    };

    profileImg.onload = checkDraw;
    logoImg.onload = checkDraw;
    profileImg.src = gilangPhoto;
    logoImg.src = ubLogo;

    // Handle cached images
    if (profileImg.complete) checkDraw();
    if (logoImg.complete) checkDraw();

    const drawCanvas = () => {
      // Dark Zinc Background
      ctx.fillStyle = '#18181b';
      ctx.fillRect(0, 0, 512, 768);

      // Card Border Accent
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 8;
      ctx.strokeRect(4, 4, 504, 760);

      // Top Accent Bar (Cyan Gradient)
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0, '#06b6d4');
      grad.addColorStop(1, '#3b82f6');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 16);

      // Lanyard Slot Punch
      ctx.fillStyle = '#09090b';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(216, 28, 80, 16, 8);
      } else {
        ctx.rect(216, 28, 80, 16);
      }
      ctx.fill();
      ctx.strokeStyle = '#3f3f46';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Photo Frame
      const photoW = 240;
      const photoH = 280;
      const photoX = (512 - photoW) / 2;
      const photoY = 70;

      ctx.fillStyle = '#09090b';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(photoX, photoY, photoW, photoH, 20);
      } else {
        ctx.rect(photoX, photoY, photoW, photoH);
      }
      ctx.fill();
      ctx.strokeStyle = '#3f3f46';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Profile Image Crop
      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(photoX + 2, photoY + 2, photoW - 4, photoH - 4, 18);
      } else {
        ctx.rect(photoX + 2, photoY + 2, photoW - 4, photoH - 4);
      }
      ctx.clip();

      const imgAspect = profileImg.width / profileImg.height || 1;
      const rectAspect = photoW / photoH;
      let drawW, drawH, drawX, drawY;
      if (imgAspect > rectAspect) {
        drawH = photoH;
        drawW = photoH * imgAspect;
        drawX = photoX - (drawW - photoW) / 2;
        drawY = photoY;
      } else {
        drawW = photoW;
        drawH = photoW / imgAspect;
        drawX = photoX;
        drawY = photoY - (drawH - photoH) / 2;
      }
      ctx.drawImage(profileImg, drawX, drawY, drawW, drawH);
      ctx.restore();

      // Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(personalInfo.name || 'Gilang', 256, 400);

      // Handle
      ctx.fillStyle = '#22d3ee';
      ctx.font = '600 22px Inter, monospace';
      ctx.fillText('@lamski', 256, 435);

      // Subtitle
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '500 18px Inter, sans-serif';
      ctx.fillText('Mahasiswa Pendidikan', 256, 475);
      ctx.fillText('Teknologi Informasi', 256, 500);

      // Divider Line
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, 545);
      ctx.lineTo(472, 545);
      ctx.stroke();

      // UB Logo & Text Footer
      const logoSize = 44;
      const footerY = 590;

      ctx.drawImage(logoImg, 95, footerY, logoSize, logoSize);

      ctx.fillStyle = '#f4f4f5';
      ctx.font = 'bold 22px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Universitas Brawijaya', 155, footerY + 30);

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      setTexture(tex);
    };
  }, []);

  return texture;
}

// Canvas Texture Generator for Card Back
function useCardBackTexture() {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, 512, 768);

    // Border
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 504, 760);

    // Carbon Pattern Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 4;
    for (let i = -768; i < 512 + 768; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 768, 768);
      ctx.stroke();
    }

    // Top Bar
    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(0, 0, 512, 16);

    // Emblem Branding
    ctx.fillStyle = '#22d3ee';
    ctx.font = 'bold 42px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LAMSKI.DEV', 256, 370);

    ctx.fillStyle = '#71717a';
    ctx.font = '500 18px Inter, monospace';
    ctx.fillText('SOFTWARE ENGINEERING', 256, 410);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    setTexture(tex);
  }, []);

  return texture;
}

// Interactive Physics Simulation (Rope & Card)
function LanyardSimulation() {
  const frontTexture = useCardFrontTexture();
  const backTexture = useCardBackTexture();

  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  // Matched joint pivots math for smooth stability
  useSphericalJoint(fixed, j1, [[0, 0, 0], [0, 0.8, 0]]);
  useSphericalJoint(j1, j2, [[0, -0.4, 0], [0, 0.4, 0]]);
  useSphericalJoint(j2, j3, [[0, -0.4, 0], [0, 0.4, 0]]);
  useSphericalJoint(j3, card, [[0, -0.4, 0], [0, 1.55, 0]]);

  const [ropePoints, setRopePoints] = useState([
    [0, 3.2, 0],
    [0, 2.4, 0],
    [0, 1.6, 0],
    [0, 0.8, 0],
    [0, 0.4, 0]
  ]);

  const isDragging = useRef(false);
  const dragPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);

  useFrame((state) => {
    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      const p0 = fixed.current.translation();
      const p1 = j1.current.translation();
      const p2 = j2.current.translation();
      const p3 = j3.current.translation();
      const pC = card.current.translation();

      setRopePoints([
        [p0.x, p0.y, p0.z],
        [p1.x, p1.y, p1.z],
        [p2.x, p2.y, p2.z],
        [p3.x, p3.y, p3.z],
        [pC.x, pC.y + 1.55, pC.z]
      ]);

      if (isDragging.current) {
        raycaster.setFromCamera(state.pointer, state.camera);
        const target = new THREE.Vector3();
        raycaster.ray.intersectPlane(dragPlane, target);

        card.current.wakeUp();
        const cur = card.current.translation();
        
        const vx = (target.x - cur.x) * 16;
        const vy = (target.y - cur.y) * 16;
        const vz = (target.z - cur.z) * 16;

        card.current.setTranslation({ x: target.x, y: target.y, z: target.z }, true);
        card.current.setLinvel({ x: vx, y: vy, z: vz }, true);
      }
    }
  });

  return (
    <>
      {/* 3D Lanyard Strap Line */}
      <Line
        points={ropePoints}
        color="#0891b2"
        lineWidth={6}
      />
      <Line
        points={ropePoints}
        color="#22d3ee"
        lineWidth={2}
        dashed
        dashScale={20}
      />

      {/* Top Anchor Mount */}
      <RigidBody ref={fixed} type="fixed" position={[0, 3.2, 0]} />

      {/* Rope Segment Joints */}
      <RigidBody ref={j1} position={[0, 2.4, 0]} colliders={false} linearDamping={0.6} angularDamping={0.6}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      <RigidBody ref={j2} position={[0, 1.6, 0]} colliders={false} linearDamping={0.6} angularDamping={0.6}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      <RigidBody ref={j3} position={[0, 0.8, 0]} colliders={false} linearDamping={0.6} angularDamping={0.6}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      {/* Physical Draggable Card Body */}
      <RigidBody
        ref={card}
        position={[0, -1.15, 0]}
        colliders={false}
        linearDamping={1.0}
        angularDamping={1.2}
      >
        <CuboidCollider args={[1.0, 1.5, 0.04]} />

        <group
          onPointerDown={(e) => {
            e.stopPropagation();
            e.target.setPointerCapture(e.pointerId);
            isDragging.current = true;
          }}
          onPointerUp={(e) => {
            e.stopPropagation();
            e.target.releasePointerCapture(e.pointerId);
            isDragging.current = false;
          }}
          onPointerLeave={() => {
            isDragging.current = false;
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Top Metal Swivel Clip */}
          <mesh position={[0, 1.65, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.2, 16]} />
            <meshStandardMaterial color="#a1a1aa" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* 3D Box ID Card */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.1, 3.1, 0.06]} />
            {frontTexture && backTexture ? (
              [
                <meshStandardMaterial key="0" color="#18181b" metalness={0.2} roughness={0.4} />,
                <meshStandardMaterial key="1" color="#18181b" metalness={0.2} roughness={0.4} />,
                <meshStandardMaterial key="2" color="#06b6d4" metalness={0.3} roughness={0.3} />,
                <meshStandardMaterial key="3" color="#18181b" metalness={0.2} roughness={0.4} />,
                <meshStandardMaterial key="4" map={frontTexture} metalness={0.15} roughness={0.25} />,
                <meshStandardMaterial key="5" map={backTexture} metalness={0.2} roughness={0.3} />
              ]
            ) : (
              <meshStandardMaterial color="#18181b" metalness={0.2} roughness={0.4} />
            )}
          </mesh>
        </group>
      </RigidBody>
    </>
  );
}

// Main 3D Lanyard Card Component
export default function LanyardCard3D() {
  return (
    <div className="relative w-full max-w-[360px] h-[520px] flex items-center justify-center select-none">
      <Canvas
        camera={{ position: [0, 0, 6.0], fov: 45 }}
        shadows
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow />
        <pointLight position={[-4, 2, 4]} intensity={1.2} color="#06b6d4" />

        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]}>
            <LanyardSimulation />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
