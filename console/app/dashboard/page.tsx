

import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";

const stats = [
  { label: "Total Courses", value: "24", icon: "🎸", change: "+3 this month" },
  { label: "Total Students", value: "1,240", icon: "🎤", change: "+120 this month" },
  { label: "Blog Articles", value: "38", icon: "📝", change: "+5 this week" },
  { label: "Testimonials", value: "56", icon: "⭐", change: "+8 this month" },
];

const quickLinks = [
  { label: "Add Course", href: "/admin/courses/create", icon: "🎸" },
  { label: "Add Blog", href: "/admin/blogs/create", icon: "📝" },
  { label: "Add Testimonial", href: "/admin/testimonials/create", icon: "⭐" },
  { label: "App Config", href: "/admin/app-config", icon: "⚙️" },
];

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #111 0%, #1a1a0a 100%)",
          border: "0.5px solid #bcee1630",
          borderRadius: "16px",
          padding: "32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "200px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(188,238,22,0.08) 0%, transparent 70%)",
        }} />
        <p style={{ color: "#bcee16", fontSize: "13px", marginBottom: "8px", letterSpacing: "0.05em" }}>
          WELCOME BACK
        </p>
        <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          {user?.name || "Admin"} 👋
        </h1>
        <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
          Music Mania Admin Console — manage your academy from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              border: "0.5px solid #1e1e1e",
              borderRadius: "14px",
              padding: "20px 24px",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>{stat.icon}</div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#bcee16", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "13px", color: "#fff", margin: "4px 0 6px", fontWeight: 500 }}>
              {stat.label}
            </div>
            <div style={{ fontSize: "11px", color: "#555" }}>{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
          Quick Actions
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {quickLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#111",
                border: "0.5px solid #1e1e1e",
                borderRadius: "12px",
                padding: "16px 20px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#bcee1650")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e1e1e")}
            >
              <span style={{ fontSize: "22px" }}>{link.icon}</span>
              <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}


// import { redirect } from "react-router";

// // app/dashboard/page.tsx
// export default function DashboardPage() {
//   redirect("/blog");
//   return null;
// }

