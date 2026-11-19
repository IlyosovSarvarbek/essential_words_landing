import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/config/site";

export const alt = site.seo.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialImage() {
  const [font, icon, library, flashcard] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/roboto-bold.ttf")),
    readFile(join(process.cwd(), "public/app/icon.png")),
    readFile(join(process.cwd(), "public/social/library.png")),
    readFile(join(process.cwd(), "public/social/flashcard.png")),
  ]);
  const data = (file: Buffer, type: string) =>
    `data:image/${type};base64,${file.toString("base64")}`;
  // These data-URI images are rasterized by ImageResponse, not sent as HTML img elements.
  /* eslint-disable @next/next/no-img-element */
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#121316",
        display: "flex",
        position: "relative",
        fontFamily: "Roboto",
        color: "#f0eff4",
        padding: "48px 58px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(ellipse at 85% 55%, #263864 0%, #121316 65%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: 650,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={data(icon, "png")} width={52} height={52} alt="" />
          <span style={{ fontSize: 28, letterSpacing: -1 }}>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#b3c5ff",
            fontSize: 15,
            letterSpacing: 3,
            marginTop: 42,
          }}
        >
          ENGLISH + UZBEK
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            letterSpacing: -4,
            lineHeight: 1.06,
            marginTop: 17,
          }}
        >
          <span>Small steps.</span>
          <span>Stronger</span>
          <span style={{ color: "#b3c5ff" }}>English.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            gap: 20,
            color: "#b7bdce",
            fontSize: 18,
          }}
        >
          <span>
            {site.collection.entries.toLocaleString("en-US")} vocabulary entries
          </span>
          <span style={{ color: "#63708c" }}>·</span>
          <span>{site.collection.books} books</span>
          <span style={{ color: "#63708c" }}>·</span>
          <span>One unit at a time</span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 190,
          height: 420,
          left: 732,
          top: 137,
          transform: "rotate(-10deg)",
          border: "4px solid #353a48",
          borderRadius: 27,
          overflow: "hidden",
          background: "#121316",
          opacity: 0.75,
        }}
      >
        <img src={data(library, "png")} width={182} height={394} alt="" />
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          width: 232,
          height: 515,
          left: 909,
          top: 67,
          transform: "rotate(6deg)",
          border: "5px solid #555e72",
          borderRadius: 31,
          overflow: "hidden",
          background: "#121316",
          paddingTop: 15,
        }}
      >
        <img src={data(flashcard, "png")} width={222} height={481} alt="" />
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Roboto", data: font, weight: 700, style: "normal" }],
    },
  );
  /* eslint-enable @next/next/no-img-element */
}
