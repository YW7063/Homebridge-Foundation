@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

:root {
  --green:        #3aaa35;
  --green-dark:   #2e7d4f;
  --green-light:  #e8f7e8;
  --blue:         #1b6bbf;
  --blue-dark:    #1B5E8A;
  --blue-light:   #e8f2fb;
  --navy:         #1a2e44;
  --text:         #1a2e44;
  --muted:        #5a6a7a;
  --white:        #ffffff;
  --off-white:    #f8faf9;
  --border:       #e0eae2;
  --orange:       #e67e22;
  --orange-light: #fef3e2;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body { font-family: 'DM Sans', sans-serif; color: var(--text); background: var(--white); overflow-x: hidden; }
img { max-width: 100%; display: block; }
a { color: inherit; }

/* ── UTILITIES ─────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: var(--green); margin-bottom: 0.6rem; }
.section-title  { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; color: var(--navy); line-height: 1.15; margin-bottom: 1rem; }
.section-sub    { font-size: 1.05rem; color: var(--muted); line-height: 1.75; max-width: 560px; }
.text-center    { text-align: center; }
.text-center .section-sub { margin: 0 auto; }

.btn-primary {
  background: var(--green); color: white; border: none;
  padding: 0.85rem 1.9rem; border-radius: 50px;
  font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif;
  cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: all 0.25s;
  box-shadow: 0 4px 18px rgba(58,170,53,0.3);
}
.btn-primary:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(58,170,53,0.4); }

.btn-secondary {
  background: transparent; color: var(--blue); border: 2px solid var(--blue);
  padding: 0.85rem 1.9rem; border-radius: 50px;
  font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif;
  cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem;
  transition: all 0.25s;
}
.btn-secondary:hover { background: var(--blue); color: white; transform: translateY(-2px); }

.btn-outline {
  border: 2px solid var(--green); color: var(--green-dark);
  padding: 0.65rem 1.5rem; border-radius: 50px;
  font-size: 0.88rem; font-weight: 600; font-family: 'DM Sans', sans-serif;
  text-decoration: none; display: inline-block;
  transition: all 0.2s;
}
.btn-outline:hover { background: var(--green); color: white; }

/* ── NAV ───────────────────────────────────── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: rgba(255,255,255,0.96); backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  height: 68px;
}
.nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 2rem;
  height: 100%; display: flex; align-items: center; justify-content: space-between;
}
.nav-logo { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; }
.nav-logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.nav-logo-text .top { font-size: 1rem; font-weight: 600; }
.nav-logo-text .top em  { color: var(--green); font-style: normal; }
.nav-logo-text .top strong { color: var(--blue); }
.nav-logo-text .sub { font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
.nav-links { display: flex; align-items: center; gap: 1.8rem; list-style: none; }
.nav-links a { text-decoration: none; color: var(--text); font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover, .nav-links a.active { color: var(--green); }
.nav-donate { background: var(--green); color: white !important; padding: 0.5rem 1.3rem; border-radius: 50px; font-weight: 600 !important; transition: background 0.2s !important; }
.nav-donate:hover { background: var(--green-dark) !important; }

.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.hamburger span { display: block; width: 24px; height: 2px; background: var(--navy); border-radius: 2px; transition: all 0.3s; }

.mobile-menu {
  display: none; position: fixed; top: 68px; left: 0; right: 0;
  background: white; border-bottom: 1px solid var(--border);
  padding: 1.5rem 2rem; z-index: 199;
  flex-direction: column; gap: 1rem;
}
.mobile-menu.open { display: flex; }
.mobile-menu a { text-decoration: none; color: var(--text); font-weight: 500; font-size: 1rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border); }

/* ── PAGE HERO (inner pages) ───────────────── */
.page-hero {
  padding-top: 68px;
  background: linear-gradient(135deg, var(--navy) 0%, #0f2035 100%);
  position: relative; overflow: hidden;
  padding-bottom: 4rem;
}
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 80% at 10% 60%, rgba(58,170,53,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 90% 20%, rgba(27,107,191,0.2) 0%, transparent 60%);
}
.page-hero-inner { position: relative; z-index: 1; padding: 4rem 2rem 2rem; max-width: 1200px; margin: 0 auto; }
.page-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.2rem); color: white; font-weight: 900; margin-bottom: 1rem; }
.page-hero p  { font-size: 1.1rem; color: rgba(255,255,255,0.75); max-width: 560px; line-height: 1.7; }
.breadcrumb   { display: flex; gap: 0.5rem; align-items: center; margin-bottom: 1.5rem; }
.breadcrumb a, .breadcrumb span { font-size: 0.82rem; color: rgba(255,255,255,0.55); text-decoration: none; }
.breadcrumb a:hover { color: var(--green); }
.breadcrumb .sep { color: rgba(255,255,255,0.3); }

/* ── FOOTER ────────────────────────────────── */
.footer {
  background: var(--navy); color: white;
  padding: 4rem 2rem 0;
}
.footer-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 3rem;
  padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand p { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin-top: 1rem; max-width: 260px; }
.footer-brand .tagline { font-family: 'DM Serif Display', serif; font-style: italic; color: var(--green); font-size: 0.95rem; margin-top: 0.4rem; }
.footer-col h4 { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); margin-bottom: 1.2rem; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
.footer-col ul li a, .footer-col ul li span { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
.footer-col ul li a:hover { color: var(--green); }
.footer-bottom { max-width: 1200px; margin: 0 auto; padding: 1.2rem 0; display: flex; justify-content: space-between; align-items: center; }
.footer-bottom p, .footer-bottom a { font-size: 0.78rem; color: rgba(255,255,255,0.35); text-decoration: none; }
.footer-bottom a:hover { color: var(--green); }
.footer-bottom-links { display: flex; gap: 1.5rem; }

/* ── SCROLL REVEAL ─────────────────────────── */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ── RESPONSIVE ────────────────────────────── */
@media (max-width: 960px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
}
