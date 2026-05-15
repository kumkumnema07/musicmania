"use client";

import Link from "next/link";

const courses = [
  { id: 1, icon: "🎸", name: "Guitar Mastery", level: "Beginner → Advanced", lessons: 48, tag: "Popular" },
  { id: 2, icon: "🎤", name: "Vocal Training", level: "All Levels", lessons: 36, tag: "New" },
  { id: 3, icon: "🎹", name: "Piano & Keyboard", level: "Beginner", lessons: 30, tag: "Trending" },
  { id: 4, icon: "🎛️", name: "Music Production", level: "Intermediate", lessons: 52, tag: "Featured" },
];

const stats = [
  { num: "5,000+", label: "Students" },
  { num: "98%", label: "Success Rate" },
  { num: "20+", label: "Courses" },
  { num: "15+", label: "Instructors" },
];

export default function CoursesHero() {
  return (
    <section className="courses-hero">
      <div className="bg-glow" />
      <div className="bg-glow2" />
      <div className="bg-grid" />
      <div className="bg-line-bottom" />

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="badge">
            <span className="badge-dot" />
            20+ Professional Courses
          </div>

          <h1 className="hero-title">
            Master<br />
            Music. Like<br />
            a <span className="accent">Rockstar.</span>
          </h1>

          <p className="hero-sub">
            Learn Guitar, Vocals, Piano, and Music Production from
            world-class instructors — at your own pace, from anywhere.
          </p>

          <div className="btn-row">
            <Link href="/courses" className="btn-primary">
              <span>Explore Courses</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Free Demo Class
            </Link>
          </div>

          <div className="stats-row">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                {i > 0 && <div className="stat-divider" />}
                <div className="stat-content">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <p className="right-label">Popular Courses</p>
          <div className="cards-list">
            {courses.map((course, i) => (
              <Link
                href={`/courses/${course.id}`}
                key={course.id}
                className="course-card"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="course-icon">{course.icon}</div>
                <div className="course-info">
                  <p className="course-name">{course.name}</p>
                  <p className="course-meta">{course.level} · {course.lessons} lessons</p>
                </div>
                <span className="course-tag">{course.tag}</span>
                <svg className="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .courses-hero {
          position: relative;
          background: #080808;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-glow {
          position: absolute;
          top: -200px; right: -100px;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(188,238,22,0.07) 0%, transparent 60%);
          pointer-events: none;
        }

        .bg-glow2 {
          position: absolute;
          bottom: -200px; left: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(188,238,22,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .bg-line-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #bcee16 50%, transparent 100%);
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 55% 45%;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          padding: 0;
        }

        /* LEFT */
        .hero-left {
          padding: 80px 56px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          animation: fadeUp 0.7s ease both;
          border-right: 0.5px solid #1a1a1a;
        }

        /* RIGHT */
        .hero-right {
          padding: 80px 64px 80px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          animation: fadeUp 0.7s ease 0.15s both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(188,238,22,0.08);
          border: 0.5px solid rgba(188,238,22,0.25);
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 13px; color: #bcee16;
          letter-spacing: 0.03em;
          margin-bottom: 32px;
          width: fit-content;
        }

        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #bcee16;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-title {
          font-size: 76px;
          font-weight: 800;
          line-height: 1.0;
          color: #fff;
          margin: 0 0 28px;
          letter-spacing: -0.04em;
        }

        .hero-title .accent {
          color: #bcee16;
        }

        .hero-sub {
          font-size: 17px;
          color: #666;
          line-height: 1.8;
          margin: 0 0 44px;
          max-width: 440px;
        }

        .btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #bcee16; color: #080808;
          border-radius: 10px; padding: 16px 32px;
          font-size: 15px; font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: -0.01em;
        }
        .btn-primary:hover { background: #d0ff1a; transform: translateY(-2px); }

        .btn-secondary {
          display: inline-flex; align-items: center;
          background: transparent; color: #fff;
          border: 0.5px solid #2a2a2a;
          border-radius: 10px; padding: 16px 32px;
          font-size: 15px; text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-secondary:hover { border-color: #444; background: rgba(255,255,255,0.04); }

        /* Stats */
        .stats-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding-top: 40px;
          border-top: 0.5px solid #1a1a1a;
        }

        .stat-item { display: flex; align-items: center; }

        .stat-divider {
          width: 0.5px; height: 40px;
          background: #2a2a2a;
          margin: 0 28px;
        }

        .stat-content { display: flex; flex-direction: column; gap: 4px; }

        .stat-num {
          font-size: 30px; font-weight: 800;
          color: #bcee16; letter-spacing: -0.03em;
          line-height: 1;
        }

        .stat-label {
          font-size: 12px; color: #555;
          letter-spacing: 0.03em;
        }

        /* Right side */
        .right-label {
          font-size: 11px; color: #3a3a3a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 16px;
        }

        .cards-list { display: flex; flex-direction: column; gap: 12px; }

        .course-card {
          display: flex; align-items: center; gap: 18px;
          background: #0f0f0f;
          border: 0.5px solid #1c1c1c;
          border-radius: 16px;
          padding: 22px 24px;
          text-decoration: none;
          animation: slideIn 0.5s ease both;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
        }

        .course-card:hover {
          border-color: rgba(188,238,22,0.3);
          background: #121212;
          transform: translateX(6px);
        }

        .course-card:hover .card-arrow {
          color: #bcee16;
          transform: translateX(3px);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .course-icon {
          width: 60px; height: 60px;
          border-radius: 14px;
          background: rgba(188,238,22,0.07);
          border: 0.5px solid rgba(188,238,22,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
        }

        .course-info { flex: 1; }

        .course-name {
          font-size: 16px; font-weight: 600;
          color: #fff; margin: 0 0 5px;
          letter-spacing: -0.01em;
        }

        .course-meta {
          font-size: 13px; color: #444; margin: 0;
        }

        .course-tag {
          background: rgba(188,238,22,0.08);
          color: #bcee16;
          border: 0.5px solid rgba(188,238,22,0.2);
          border-radius: 999px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 500;
          flex-shrink: 0;
        }

        .card-arrow {
          color: #2a2a2a;
          flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 58px; }
          .hero-left { padding: 60px 40px 60px 48px; }
          .hero-right { padding: 60px 40px 60px 40px; }
        }

        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-left {
            min-height: auto;
            padding: 60px 24px 40px;
            border-right: none;
            border-bottom: 0.5px solid #1a1a1a;
          }
          .hero-right {
            min-height: auto;
            padding: 40px 24px 60px;
          }
          .hero-title { font-size: 42px; }
          .stats-row { flex-wrap: wrap; gap: 20px; }
          .stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
}

