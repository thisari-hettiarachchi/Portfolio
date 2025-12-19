"use client";

import { useCallback, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    particlesRef.current = container;
  }, []);

  // Fixed particle color and link opacity
  const particleColor = "#00ffff"; // cyan
  const linkOpacity = 0.6;

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, links: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 1 },
          repulse: { distance: 200 },
          push: { quantity: 4 },
          remove: { quantity: 2 },
        },
      },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 }, limit: 80 },
        color: { value: particleColor },
        shape: { type: "circle", stroke: { width: 0, color: particleColor } },
        opacity: { value: 0.5, random: false },
        size: { value: 5, random: true },
        links: { enable: true, distance: 150, color: particleColor, opacity: linkOpacity, width: 1 },
        move: {
          enable: true,
          speed: 2.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    if (particlesRef.current) {
      const container = particlesRef.current;
      const newColor = { value: particleColor };

      container.options.particles.color = newColor;
      container.options.particles.links.color = newColor;
      container.options.particles.links.opacity = linkOpacity;

      container.refresh();
    }
  }, [particleColor, linkOpacity]);

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleOptions} />;
};

export default ParticleBackground;
