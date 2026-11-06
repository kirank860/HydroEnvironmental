import { ImageResponse } from "next/og";

// Social share card (WhatsApp, LinkedIn, Google, X) generated at build time.
export const alt = "Hydro Environmental & Engineering Services LLC — Chem-Mechanical Process Engineering in UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markSvg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 86 100'>  <g fill='#00A654'>    <rect x='0' y='0' width='23.5' height='100' rx='1.6'/>    <rect x='62.5' y='0' width='23.5' height='100' rx='1.6'/>    <circle cx='42.5' cy='52' r='37.5'/>  </g>  <g fill='none' stroke='#fff' stroke-width='1.6' stroke-linecap='round'>    <path d='M 23.5 19.7 A 37.5 37.5 0 0 0 23.5 84.3'/>    <path d='M 62.5 20.3 A 37.5 37.5 0 0 1 79.3 44.6'/>    <path d='M 79.7 57 A 37.5 37.5 0 0 1 62.5 83.7'/>    <path d='M 24.5 44.6 H 79.3'/>    <path d='M 24.5 57 H 79.7'/>  </g>  <path d='M 29 42.6 A 14.3 9.2 0 0 1 57.6 42.6 Z' fill='#1a1a1a' stroke='#fff' stroke-width='1.6' stroke-linejoin='round'/>  <path d='M 29.5 59 A 14 7.4 0 0 0 57.5 59 Z' fill='#1a1a1a' stroke='#fff' stroke-width='1.6' stroke-linejoin='round'/></svg>";
const markSrc = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "64px 72px", color: "#fff",
          background: "radial-gradient(120% 120% at 80% 0%, #1F497D 0%, #0A1D33 55%, #06121F 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markSrc} width={66} height={77} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#33C27A", letterSpacing: 1 }}>HYDRO ENVIRONMENTAL</div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>&amp; ENGINEERING SERVICES LLC</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#33C27A" }}>CHEM-MECHANICAL PROCESS ENGINEERING · UAE</div>
          <div style={{ fontSize: 74, lineHeight: 1.05, fontWeight: 600, maxWidth: 980 }}>Engineering reliability in every process.</div>
          <div style={{ fontSize: 26, color: "#B9C8D8", maxWidth: 1000 }}>
            CHW flushing · Pre-commissioning · Hydrotesting · Chemical cleaning · Equipment rental
          </div>
        </div>
      </div>
    ),
    size,
  );
}
