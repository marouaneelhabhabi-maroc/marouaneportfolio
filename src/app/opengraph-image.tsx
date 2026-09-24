import { ImageResponse } from "next/og";

// Global brand OG image (Latin script — avoids complex-script shaping risk
// in the image renderer). Per-page metadata points here; replace with a
// designed PNG at public/og/cover.png + metadata update if preferred.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const row: React.CSSProperties = { display: "flex", alignItems: "center" };

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF8F5",
          padding: 80,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ ...row, gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              backgroundColor: "#111214",
              color: "#FAF8F5",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            <span>MH</span>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#7A7F87", fontFamily: "Arial, sans-serif" }}>
            <span>FEZ, MOROCCO — WORLDWIDE · REMOTE</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#111214", lineHeight: 1.05 }}>
            <span>Marouane El Habhabi</span>
          </div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 40, color: "#2B5CFF", fontFamily: "Arial, sans-serif" }}>
            <span>Web Developer &amp; Digital Product Builder</span>
          </div>
        </div>
        <div style={{ ...row, justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#3F434A", fontFamily: "Arial, sans-serif" }}>
            <span>Websites · Web Apps · SaaS · E-commerce</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#111214", fontFamily: "Arial, sans-serif" }}>
            <span>marouaneportfolio.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
