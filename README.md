# Dr. Ujjwall Joshi — Personal Website

A responsive, multi-page static website for a professional profile, medical education resources, and Doctor’s Inspiration.

## Pages
- `index.html` — homepage
- `about.html` — profile and background
- `medical-education.html` — student-facing educational topics
- `doctors-inspiration.html` — initiative overview
- `resources.html` — filterable placeholder resource cards
- `contact.html` — YouTube and Instagram placeholders

## Before publishing
1. Replace the portrait placeholder with your chosen professional photo.
2. In `contact.html`, replace the generic YouTube and Instagram links with your real profile URLs.
3. Review the biography and confirm every professional claim.
4. Add real article/video links to `resources.html` when available.
5. Review the medical-education disclaimer and current claims before publication.
6. Check all pages on mobile and desktop.

## Publish free with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new **public** repository. For a personal site, the repository can be named `YOUR-USERNAME.github.io` (replace with your GitHub username).
3. Upload the contents of this folder to the repository root. Ensure `index.html` is in the root, not nested in another folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for the deployment to finish. The site URL should be `https://YOUR-USERNAME.github.io/`.
8. If using a regular repository name instead, the URL generally includes that repository name at the end.
9. After every update, commit or upload the changed files; GitHub Pages republishes the site.

GitHub Pages serves static files. A contact form needs a separate form provider or backend; this starter does not send form submissions. A custom domain is optional and usually costs money.

## Customise the photo
Replace the placeholder block in `index.html` and `about.html` with an image element, for example:
`<img class="profile-photo" src="assets/images/ujjwall-joshi.jpg" alt="Dr. Ujjwall Joshi">`
Then add appropriate CSS for `.profile-photo`, and upload your image into `assets/images/`.

## Design notes
- Responsive layout and mobile navigation
- Keyboard skip link and reduced-motion support
- No frameworks or build process required
- Google Fonts are loaded externally; system fonts are fallbacks
- No invented email address, phone number, social profile URL, or medical credential beyond the supplied brief
