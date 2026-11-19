"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Progressive enhancement only: the server HTML and no-JS page are always visible. */
export function PageMotion() {
  useGSAP(() => {
    const root = document.getElementById("main");
    if (!root) return;
    const media = gsap.matchMedia();
    let disposed = false;
    let heroEntered = false;
    let refreshFrame = 0;
    let refreshDeferred = false;
    const refresh = () => {
      if (disposed) return;
      cancelAnimationFrame(refreshFrame);
      // A refresh resets scroll position internally. Wait for native smooth scrolling
      // to finish so a lazy image loading cannot interrupt an anchor navigation.
      if (ScrollTrigger.isScrolling()) {
        refreshDeferred = true;
        return;
      }
      refreshDeferred = false;
      refreshFrame = requestAnimationFrame(() => {
        if (disposed) return;
        if (ScrollTrigger.isScrolling()) {
          refreshDeferred = true;
          return;
        }
        ScrollTrigger.refresh();
      });
    };
    const refreshAfterScroll = () => {
      if (refreshDeferred) refresh();
    };
    ScrollTrigger.addEventListener("scrollEnd", refreshAfterScroll);

    media.add(
      {
        desktop: "(min-width: 851px)",
        mobile: "(max-width: 850px)",
        reduced: "(prefers-reduced-motion: reduce)",
        finePointer: "(hover: hover) and (pointer: fine)",
      },
      (context) => {
        const { desktop, reduced, finePointer } = context.conditions!;
        root.dataset.motion = reduced ? "reduced" : "active";
        if (reduced) return;
        const select = gsap.utils.selector(root);
        const distance = desktop ? 34 : 20;
        const hero = select(".hero")[0];

        if (hero && !heroEntered) {
          heroEntered = true;
          const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
          entrance
            .from(
              select(".hero-copy .eyebrow"),
              { autoAlpha: 0, y: 14, duration: 0.7 },
              0,
            )
            .from(
              select(".hero h1"),
              {
                clipPath: "inset(100% 0% 0% 0%)",
                y: 28,
                duration: 1.25,
                ease: "power4.out",
                clearProps: "clipPath",
              },
              0.12,
            )
            .from(
              select(".hero-description"),
              { autoAlpha: 0, y: 20, duration: 0.85 },
              0.5,
            )
            .from(
              select(".hero-actions > *, .hero-assurances > *"),
              { autoAlpha: 0, y: 14, stagger: 0.09, duration: 0.65 },
              0.66,
            )
            .from(
              select(".phone-back"),
              {
                autoAlpha: 0,
                xPercent: desktop ? -12 : -4,
                yPercent: 10,
                rotation: desktop ? -17 : -12,
                scale: 0.96,
                duration: 1.5,
              },
              0.18,
            )
            .from(
              select(".phone-front"),
              {
                autoAlpha: 0,
                xPercent: desktop ? 10 : 0,
                yPercent: 13,
                rotation: desktop ? 13 : 8,
                scale: 0.95,
                duration: 1.6,
              },
              0.34,
            )
            .from(
              select(".visual-caption, .visual-note, .screenshot-caption"),
              { autoAlpha: 0, y: 18, stagger: 0.12, duration: 0.9 },
              0.9,
            );
        }
        if (hero) {
          gsap.to(select(".hero-visual"), {
            y: desktop ? -38 : -12,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
          gsap.to(select(".orbit-one"), {
            rotation: 35,
            scale: 1.07,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        const reveal = (
          targets: Element[],
          trigger: Element,
          options: gsap.TweenVars = {},
        ) => {
          if (!targets.length) return;
          gsap.from(targets, {
            opacity: 0,
            y: distance,
            duration: 0.95,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger, start: "top 90%", once: true },
            ...options,
          });
        };
        select(".section-heading").forEach((heading: Element) => {
          const headline = heading.querySelector("h2");
          if (headline)
            gsap.from(headline, {
              y: 18,
              clipPath: "inset(0% 0% 100% 0%)",
              duration: 1.1,
              ease: "power3.out",
              clearProps: "clipPath",
              scrollTrigger: { trigger: heading, start: "top 88%", once: true },
            });
          reveal(
            Array.from(
              heading.querySelectorAll(
                ".eyebrow, :scope > p, .authentic-label",
              ),
            ),
            heading,
            { y: 15, duration: 0.8 },
          );
        });
        for (const [container, children] of [
          [".stats-inner", ":scope > *"],
          [".features-grid", ".feature"],
          [".workflow-inner", ":scope > div, .workflow-list li"],
          [".faq-list", "details"],
          [".comfort-inner", ":scope > *"],
          [".closing-section", ":scope > *"],
        ]) {
          const section = select(container)[0] as Element | undefined;
          if (section)
            reveal(Array.from(section.querySelectorAll(children)), section, {
              stagger: 0.12,
            });
        }
        select(
          ".demo-shell, .gallery-preview, .gallery-copy, .faq-section > div:first-child",
        ).forEach((element: Element) => reveal([element], element));
        const gallery = select(".gallery-preview")[0];
        if (desktop && gallery)
          gsap.fromTo(
            select(".gallery-phone"),
            { y: 10 },
            {
              y: -10,
              ease: "none",
              immediateRender: false,
              scrollTrigger: {
                trigger: gallery,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            },
          );

        // Event-created tweens belong to this matchMedia context and revert on preference changes/unmount.
        const detach: (() => void)[] = [];
        if (finePointer) {
          const bind = (
            element: HTMLElement,
            type: string,
            callback: EventListener,
          ) => {
            element.addEventListener(type, callback);
            detach.push(() => element.removeEventListener(type, callback));
          };
          select(".button, .feature-icon, .workflow-icon").forEach(
            (element: HTMLElement, index: number) => {
              const enter = `hoverIn${index}`;
              const leave = `hoverOut${index}`;
              context.add(enter, () =>
                gsap.to(element, {
                  y: -3,
                  scale: element.classList.contains("button") ? 1.015 : 1.06,
                  duration: 0.3,
                  ease: "power2.out",
                  overwrite: "auto",
                }),
              );
              context.add(leave, () =>
                gsap.to(element, {
                  y: 0,
                  scale: 1,
                  duration: 0.45,
                  ease: "power3.out",
                  overwrite: "auto",
                }),
              );
              bind(element, "pointerenter", context[enter] as EventListener);
              bind(element, "pointerleave", context[leave] as EventListener);
              bind(element, "focus", context[enter] as EventListener);
              bind(element, "blur", context[leave] as EventListener);
            },
          );
        }
        return () => {
          detach.forEach((remove) => remove());
        };
      },
      root,
    );

    const images = Array.from(root.querySelectorAll("img"));
    images.forEach((img) => img.addEventListener("load", refresh));
    document.fonts.ready.then(refresh);
    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      images.forEach((img) => img.removeEventListener("load", refresh));
      ScrollTrigger.removeEventListener("scrollEnd", refreshAfterScroll);
      media.revert();
      delete root.dataset.motion;
    };
  }, []);
  return null;
}
