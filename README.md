# 🏠 Home-Bridge Foundation Website

**Live site:** https://homebridgefoundation.netlify.app (update after deploy)

A full multi-page nonprofit website for Home-Bridge Foundation, Inc. — 501(c)(3), Dillon County, SC.

---

## 📁 File Structure

```
homebridge-foundation/
├── index.html              ← Homepage
├── netlify.toml            ← Netlify config (required)
├── css/
│   ├── main.css            ← Shared styles (nav, footer, utilities)
│   └── home.css            ← Homepage-specific styles
├── js/
│   ├── components.js       ← Shared nav + footer (injected into every page)
│   └── main.js             ← Scroll reveal, donate form, hamburger menu
└── pages/
    ├── about.html          ← About Us, Board of Directors, Governance
    ├── programs.html       ← All 3 programs (Workforce, Housing, Green Energy)
    ├── donate.html         ← Donation page with impact map
    └── contact.html        ← Contact form (Netlify Forms built in)
```

---

## 🚀 Deploy to Netlify via GitHub

### Step 1 — Push to GitHub

1. Go to **github.com** → Sign in → Click **"New repository"**
2. Name it: `homebridge-foundation`
3. Set to **Public** (required for free Netlify)
4. Click **"Create repository"**
5. Upload all files (drag & drop into GitHub, or use Git):

```bash
git init
git add .
git commit -m "Initial commit — HomeBridge Foundation website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/homebridge-foundation.git
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Go to **netlify.com** → Sign up free (use GitHub login)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select your `homebridge-foundation` repo
4. Build settings:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.` (just a dot)
5. Click **"Deploy site"**
6. Your site will be live at `https://random-name.netlify.app` in ~60 seconds!

### Step 3 — Add Your Custom Domain (Optional)

1. In Netlify: **Site settings → Domain management → Add custom domain**
2. Enter: `homebridgefoundation.org` (or whatever you registered)
3. Update your domain's DNS nameservers to point to Netlify
4. Netlify auto-provisions a free SSL certificate (HTTPS)

---

## 📋 Netlify Forms (Contact Page — Already Set Up!)

The contact form on `contact.html` uses `data-netlify="true"` and will work **automatically** on Netlify — no backend, no code, no monthly fee.

To view submissions:
- Netlify Dashboard → Your site → **Forms** tab

To get email notifications for new form submissions:
- Netlify Dashboard → Forms → **Form notifications** → Add email

---

## 💳 Adding a Donation Payment Processor

The Donate button currently shows an alert. To make it live:

**Recommended free options for 501(c)(3) nonprofits:**

| Platform | Fees | Setup |
|----------|------|-------|
| **Zeffy** | 0% — completely free | zeffy.com |
| **PayPal Giving Fund** | 0% | paypal.com/fundraiser |
| **Network for Good** | Low | networkforgood.com |

To connect:
1. Create account on your chosen platform
2. Get your donation page URL (e.g. `https://www.zeffy.com/donate/your-org`)
3. In `pages/donate.html`, find `handleDonate()` in `js/main.js`
4. Replace the `alert(...)` with: `window.open('YOUR_DONATION_URL', '_blank')`

---

## ✏️ Customizing Content

| What to update | Where |
|---------------|-------|
| Contact info / phone | `js/components.js` (footer) + `pages/contact.html` |
| Email address | Search `info@homebridgefoundation.org` — replace in both files |
| Board member bios | `pages/about.html` → `.board-card` sections |
| Program descriptions | `pages/programs.html` |
| Donation amounts/impact | `pages/donate.html` → `.impact-row` + `.amount-btn` |
| Colors / branding | `css/main.css` → `:root` CSS variables |

---

## 🌐 Google Workspace Email (Free for Nonprofits)

After deploying, set up free professional email:
1. Apply at **google.com/nonprofits** (use your 501(c)(3) letter)
2. Get approved (~3–5 days)
3. Activate Google Workspace → set up `marcus@homebridgefoundation.org`
4. Update the email in `js/components.js` and `pages/contact.html`

---

## 📞 Support

For questions about the website, contact:
**Marcus Hayes** — Home-Bridge Foundation, Inc.
547 Hickory Pointe Place · Latta, SC 29565
