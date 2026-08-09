"use client";

import { useState } from "react";

const css = `
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --teal: #1affd5;
  --purple: #b47fff;
  --pink: #ff6ec7;
  --blue: #4cc9ff;
  --green: #39ff8a;
  --bg: #050810;
  --bg2: #0b1020;
  --text: #e8e6f0;
  --muted: #7a7a9a;
  --border: rgba(180, 127, 255, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
}

#stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 92% 10%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 18% 90%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 62% 45%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 78% 75%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 33% 5%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 47% 92%, rgba(255,255,255,0.7) 0%, transparent 100%);
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 4rem;
  border-bottom: 0.5px solid var(--border);
  background: rgba(5, 8, 16, 0.75);
  backdrop-filter: blur(12px);
}

.nav-logo {
  font-family: "Cinzel", serif;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  background: linear-gradient(90deg, var(--teal), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--teal);
}

section {
  position: relative;
  z-index: 1;
}

#hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
}

.hero-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.2s forwards;
}

.hero-title {
  font-family: "Cinzel", serif;
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--teal) 0%, var(--purple) 50%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  animation: fadeUp 0.9s 0.35s forwards;
}

.hero-year {
  display: block;
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  font-weight: 400;
  letter-spacing: 0.3em;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.5rem;
}

.hero-meta {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: fadeUp 0.9s 0.55s forwards;
}

.hero-date {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-family: "Cinzel", serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--text);
}

.hero-venue {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero-venue a {
  color: var(--teal);
  text-decoration: none;
  border-bottom: 0.5px solid rgba(26, 255, 213, 0.3);
  transition: border-color 0.2s;
}
.hero-venue a:hover {
  border-color: var(--teal);
}

.hero-divider {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--purple), transparent);
  margin: 2.5rem auto 0;
  opacity: 0;
  animation: fadeUp 0.9s 0.7s forwards;
}

#about {
  padding: 7rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--purple);
  display: block;
  margin-bottom: 1.5rem;
}

.section-title {
  font-family: "Cinzel", serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text);
}

.about-body {
  font-size: 1.05rem;
  color: rgba(232, 230, 240, 0.75);
  line-height: 1.85;
  max-width: 640px;
  margin: 0 auto;
}

.about-body p + p {
  margin-top: 1.25rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 0.5px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  max-width: 700px;
  margin: 4rem auto 0;
}

.stat {
  background: var(--bg2);
  padding: 2rem 1rem;
  text-align: center;
}

.stat-num {
  font-family: "Cinzel", serif;
  font-size: 2.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--teal), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

#program {
  padding: 7rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

#program .section-label,
#program .section-title {
  text-align: center;
}

.program-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 3.5rem;
}

.program-card {
  border: 0.5px solid var(--border);
  border-radius: 6px;
  padding: 2rem;
  background: var(--bg2);
  position: relative;
  overflow: hidden;
}

.program-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
}

.program-card.hackathon::before {
  background: linear-gradient(90deg, var(--teal), var(--blue));
}
.program-card.talks::before {
  background: linear-gradient(90deg, var(--purple), var(--pink));
}

.program-card-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: block;
}

.program-card h3 {
  font-family: "Cinzel", serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.program-card p {
  font-size: 0.92rem;
  color: rgba(232, 230, 240, 0.65);
  line-height: 1.75;
}

#schedule {
  padding: 7rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

#schedule .section-label,
#schedule .section-title {
  text-align: center;
}

.schedule-tabs {
  display: flex;
  gap: 0;
  margin: 2.5rem auto 0;
  max-width: 400px;
  border: 0.5px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.tab-btn {
  flex: 1;
  padding: 0.65rem;
  background: var(--bg2);
  color: var(--muted);
  border: none;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.2s;
}

.tab-btn.active {
  background: rgba(180, 127, 255, 0.12);
  color: var(--purple);
}

.schedule-day {
  display: none;
  margin-top: 2rem;
}
.schedule-day.active {
  display: block;
}

.schedule-entry {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1.25rem;
  padding: 1rem 0;
  border-bottom: 0.5px solid var(--border);
  align-items: start;
}

.schedule-entry:last-child {
  border-bottom: none;
}

.entry-time {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  padding-top: 0.15rem;
  white-space: nowrap;
}

.entry-title {
  font-size: 0.95rem;
  color: var(--text);
  font-weight: 400;
}

.entry-sub {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.2rem;
}

.entry-tag {
  display: inline-block;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
  margin-top: 0.4rem;
}

.tag-talk {
  background: rgba(180, 127, 255, 0.12);
  color: var(--purple);
}
.tag-social {
  background: rgba(57, 255, 138, 0.1);
  color: var(--green);
}
.tag-food {
  background: rgba(76, 201, 255, 0.1);
  color: var(--blue);
}
.tag-hackathon {
  background: rgba(26, 255, 213, 0.1);
  color: var(--teal);
}
.tag-awards {
  background: rgba(255, 110, 199, 0.1);
  color: var(--pink);
}

#sponsors {
  padding: 7rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.sponsor-tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3.5rem;
}

.tier-card {
  border: 0.5px solid var(--border);
  border-radius: 6px;
  padding: 2rem 1.5rem;
  background: var(--bg2);
  position: relative;
}

.tier-card.gold {
  border-color: rgba(255, 196, 0, 0.3);
}
.tier-card.gold::before {
  content: "Gold";
  position: absolute;
  top: -0.65rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 196, 0, 0.15);
  color: #ffc400;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.2rem 0.8rem;
  border-radius: 2px;
  border: 0.5px solid rgba(255, 196, 0, 0.3);
}

.tier-card.silver::before {
  content: "Silver";
  position: absolute;
  top: -0.65rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(180, 190, 200, 0.12);
  color: #b4c0c8;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.2rem 0.8rem;
  border-radius: 2px;
  border: 0.5px solid rgba(180, 190, 200, 0.3);
}

.tier-card.bronze::before {
  content: "Bronze";
  position: absolute;
  top: -0.65rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(200, 140, 80, 0.12);
  color: #c88c50;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.2rem 0.8rem;
  border-radius: 2px;
  border: 0.5px solid rgba(200, 140, 80, 0.3);
}

.tier-price {
  font-family: "Cinzel", serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.25rem;
  display: block;
}

.tier-perks {
  list-style: none;
  text-align: left;
  font-size: 0.83rem;
  color: rgba(232, 230, 240, 0.65);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.tier-perks li::before {
  content: "—";
  color: var(--purple);
  margin-right: 0.5rem;
}

.sponsor-cta {
  margin-top: 3rem;
  font-size: 0.9rem;
  color: var(--muted);
}

.sponsor-cta a {
  color: var(--teal);
  text-decoration: none;
  border-bottom: 0.5px solid rgba(26, 255, 213, 0.3);
}

#cta {
  padding: 8rem 2rem;
  text-align: center;
}

.cta-inner {
  max-width: 560px;
  margin: 0 auto;
}

.cta-title {
  font-family: "Cinzel", serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--teal), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-sub {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2.5rem;
  border-radius: 3px;
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--teal), var(--blue));
  color: var(--bg);
  font-weight: 500;
  border: none;
}
.btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  color: var(--purple);
  border: 0.5px solid rgba(180, 127, 255, 0.4);
  margin-left: 1rem;
}
.btn-ghost:hover {
  border-color: var(--purple);
  background: rgba(180, 127, 255, 0.06);
}

footer {
  border-top: 0.5px solid var(--border);
  padding: 2.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.footer-logo {
  font-family: "Cinzel", serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  background: linear-gradient(90deg, var(--teal), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-copy {
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.05em;
}

.floral-accent {
  position: absolute;
  pointer-events: none;
  opacity: 0.06;
  font-size: 18rem;
  line-height: 1;
  user-select: none;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  nav {
    padding: 1rem 1.5rem;
  }
  .nav-links {
    gap: 1.2rem;
  }
  .program-grid,
  .sponsor-tiers {
    grid-template-columns: 1fr;
  }
  .stats {
    grid-template-columns: 1fr;
  }
  footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
`;

export default function Home() {
	const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: css }} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
				rel="stylesheet"
			/>

			<div id="stars"></div>

			<nav>
				<a className="nav-logo" href="#hero">
					QuendCon
				</a>
				<ul className="nav-links">
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#program">Program</a>
					</li>
					<li>
						<a href="#schedule">Schedule</a>
					</li>
					<li>
						<a href="#sponsors">Sponsors</a>
					</li>
					<li>
						<a href="#cta">Register</a>
					</li>
				</ul>
			</nav>

			<section id="hero">
				<p className="hero-eyebrow">Margin Research x DiceCTF presents</p>
				<h1 className="hero-title">
					QuendCon
					<span className="hero-year">2026</span>
				</h1>
				<div className="hero-meta">
					<span className="hero-date">August 29 – 30</span>
					<span className="hero-venue">
						<a href="https://www.os-nyc.com" target="_blank" rel="noopener">
							OS NYC
						</a>
						{" · "} New York, NY
					</span>
				</div>
				<div className="hero-divider"></div>
			</section>

			<section id="about">
				<span className="section-label">What is QuendCon</span>
				<h2 className="section-title">
					Where security&apos;s best minds gather
				</h2>
				<div className="about-body">
					<p>
						QuendCon is a gathering place for the security and CTF community — a
						space designed for collaboration, competition, and the kind of
						knowledge sharing that only happens when top talent is in the same
						room.
					</p>
					<p>
						At its core is the DiceCTF Finals, where twelve of the world&apos;s
						best teams compete across a range of hardware and software hacking
						challenges. Around it: lightning talks, sponsor sessions, and the
						conversations that define careers.
					</p>
					<p>
						The event draws its name from the Calaquendi — the elves of light in
						Tolkien&apos;s lore — a nod to the brilliant, relentless minds who
						make this community what it is.
					</p>
				</div>
				<div className="stats">
					<div className="stat">
						<span className="stat-num">12</span>
						<span className="stat-label">Elite teams</span>
					</div>
					<div className="stat">
						<span className="stat-num">48</span>
						<span className="stat-label">Competitors</span>
					</div>
					<div className="stat">
						<span className="stat-num">2</span>
						<span className="stat-label">Days</span>
					</div>
				</div>
			</section>

			<section id="program">
				<span className="section-label">What to expect</span>
				<h2 className="section-title">
					Two days of competition and conversation
				</h2>
				<div className="program-grid">
					<div className="program-card hackathon">
						<h3>DiceCTF Finals</h3>
						<p>
							Twelve teams of four go head-to-head across challenges spanning
							reversing, binary exploitation, web, hardware, cryptography, and
							more — each designed to surface the sharpest technical minds in
							the community.
						</p>
					</div>
					<div className="program-card talks">
						<h3>Lightning Talks</h3>
						<p>
							Focused 20-minute talks from researchers, practitioners, and
							competitors. Fast-paced, high-signal presentations covering the
							topics that are actually moving the field — no fluff.
						</p>
					</div>
				</div>
			</section>

			<section id="schedule">
				<span className="section-label">Agenda</span>
				<h2 className="section-title">August 29 – 30, 2026</h2>
				<div className="schedule-tabs">
					<button
						className={`tab-btn${activeDay === "day1" ? " active" : ""}`}
						onClick={() => setActiveDay("day1")}
					>
						Day 1 — Aug 29
					</button>
					<button
						className={`tab-btn${activeDay === "day2" ? " active" : ""}`}
						onClick={() => setActiveDay("day2")}
					>
						Day 2 — Aug 30
					</button>
				</div>

				<div
					className={`schedule-day${activeDay === "day1" ? " active" : ""}`}
					id="day1"
				>
					<div className="schedule-entry">
						<span className="entry-time">9:00 AM</span>
						<div>
							<span className="entry-title">Breakfast &amp; Registration</span>
							<div className="entry-tag tag-food">Food</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">9:45 AM</span>
						<div>
							<span className="entry-title">Welcome &amp; Opening Remarks</span>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">10:00 AM</span>
						<div>
							<span className="entry-title">Hackathon Begins</span>
							<div className="entry-tag tag-hackathon">CTF</div>
							<div className="entry-sub">Sponsor tables open all day</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">12:00 PM</span>
						<div>
							<span className="entry-title">Lunch</span>
							<div className="entry-tag tag-food">Food</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">1:00 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 1</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">1:30 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 2</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">2:00 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 3</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">2:30 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 4</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">3:00 PM</span>
						<div>
							<span className="entry-title">
								Open Networking &amp; Sponsor Tables
							</span>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">5:00 PM</span>
						<div>
							<span className="entry-title">Hackathon Day 1 ends</span>
							<div className="entry-tag tag-hackathon">CTF</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">5:00 PM</span>
						<div>
							<span className="entry-title">
								Light Refreshments &amp; Networking
							</span>
							<div className="entry-tag tag-food">Food</div>
							<div className="entry-tag tag-social">Social</div>
						</div>
					</div>
				</div>

				<div
					className={`schedule-day${activeDay === "day2" ? " active" : ""}`}
					id="day2"
				>
					<div className="schedule-entry">
						<span className="entry-time">9:00 AM</span>
						<div>
							<span className="entry-title">Breakfast &amp; Networking</span>
							<div className="entry-tag tag-food">Food</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">9:45 AM</span>
						<div>
							<span className="entry-title">Day 2 Kickoff</span>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">10:00 AM</span>
						<div>
							<span className="entry-title">Lightning Talk 1</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">10:30 AM</span>
						<div>
							<span className="entry-title">Lightning Talk 2</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">11:00 AM</span>
						<div>
							<span className="entry-title">Lightning Talk 3</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">11:30 AM</span>
						<div>
							<span className="entry-title">Lightning Talk 4</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">12:00 PM</span>
						<div>
							<span className="entry-title">Lunch</span>
							<div className="entry-tag tag-food">Food</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">1:00 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 5</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">1:30 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 6</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">2:00 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 7</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">2:30 PM</span>
						<div>
							<span className="entry-title">Lightning Talk 8</span>
							<div className="entry-tag tag-talk">Talk</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">3:00 PM</span>
						<div>
							<span className="entry-title">
								Open Networking &amp; Sponsor Tables
							</span>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">4:00 PM</span>
						<div>
							<span className="entry-title">
								Hackathon Results &amp; Awards Ceremony
							</span>
							<div className="entry-tag tag-awards">Awards</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">5:00 PM</span>
						<div>
							<span className="entry-title">
								Hackathon ends &amp; Closing Remarks
							</span>
							<div className="entry-tag tag-hackathon">CTF</div>
						</div>
					</div>
					<div className="schedule-entry">
						<span className="entry-time">5:00 PM</span>
						<div>
							<span className="entry-title">Networking &amp; Farewell</span>
							<div className="entry-tag tag-social">Social</div>
						</div>
					</div>
				</div>
			</section>

			<section id="sponsors">
				<span className="section-label">Support QuendCon</span>
				<h2 className="section-title">Sponsorship</h2>
				<div className="sponsor-tiers">
					<div className="tier-card gold">
						<span className="tier-price">$20,000</span>
						<ul className="tier-perks">
							<li>Featured logo on website</li>
							<li>Logo on merch</li>
							<li>Competitor resume list</li>
							<li>In-person booth at finals</li>
							<li>Sponsored challenge</li>
							<li>Sponsored opening party</li>
						</ul>
					</div>
					<div className="tier-card silver">
						<span className="tier-price">$10,000</span>
						<ul className="tier-perks">
							<li>Featured logo on website</li>
							<li>Logo on merch</li>
							<li>Competitor resume list</li>
							<li>In-person booth at finals</li>
							<li>Sponsored challenge</li>
						</ul>
					</div>
					<div className="tier-card bronze">
						<span className="tier-price">$5,000</span>
						<ul className="tier-perks">
							<li>Featured logo on website</li>
							<li>Logo on merch</li>
							<li>Competitor resume list</li>
						</ul>
					</div>
				</div>
				<p className="sponsor-cta">
					Custom tiers available.{" "}
					<a href="mailto:chelsea@margin.re">Get in touch →</a>
				</p>
			</section>

			<section id="cta">
				<div className="cta-inner">
					<h2 className="cta-title">Join us in New York</h2>
					<p className="cta-sub">
						August 29 – 30, 2026 at OS NYC. Two days of elite competition, sharp
						talks, and the security community at its best.
					</p>
					<a href="mailto:chelsea@margin.re" className="btn btn-primary">
						Register interest
					</a>
					<a href="mailto:chelsea@margin.re" className="btn btn-ghost">
						Contact us
					</a>
				</div>
			</section>

			<footer>
				<span className="footer-logo">QuendCon 2026</span>
				<span className="footer-copy">
					August 29–30 · OS NYC · New York, NY
				</span>
			</footer>
		</>
	);
}
