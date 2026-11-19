"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { Icon } from "./ui-icon";
import { screenshots as screens, site } from "@/config/site";

export function AppGallery() {
  const [selected, setSelected] = useState(0);
  const gallery = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const image = gallery.current?.querySelector(".gallery-phone img");
        if (image)
          gsap.fromTo(
            image,
            { autoAlpha: 0, clipPath: "inset(0% 0% 8% 0%)", scale: 1.015 },
            {
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              duration: 0.65,
              ease: "power3.out",
              clearProps: "opacity,visibility,clipPath,transform",
            },
          );
      });
      return () => media.revert();
    },
    { scope: gallery, dependencies: [selected], revertOnUpdate: true },
  );
  const screen = screens[selected];
  return (
    <div className="gallery-shell" ref={gallery}>
      <div className="gallery-copy">
        <div
          className="gallery-selectors"
          role="group"
          aria-label="Choose an actual app screenshot"
        >
          {screens.map((item, index) => (
            <button
              key={item.file}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <Icon name={item.icon} />
              <span>{item.name}</span>
              <span className="selector-mark" aria-hidden="true">
                {selected === index ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-description" aria-live="polite">
          <h3>{screen.title}</h3>
          <p>{screen.text}</p>
        </div>
      </div>
      <figure className="gallery-preview">
        <div className="gallery-grid" />
        <div className="gallery-phone">
          <Image
            key={screen.file}
            src={`/app/${screen.file}.webp`}
            alt={`${screen.name}: original ${site.name} application screenshot. ${screen.text}`}
            width={780}
            height={screen.height}
            sizes="(max-width: 600px) 260px, 300px"
          />
        </div>
        <figcaption>
          {site.name.toUpperCase()} <span>·</span> {screen.name.toUpperCase()}
        </figcaption>
      </figure>
    </div>
  );
}
