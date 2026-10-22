# IISE Lucknow website

A responsive, lightweight one-page website for the International Institute for Special Education (IISE), Lucknow. It uses semantic HTML, CSS, and plain JavaScript so staff can update the course and news content without a framework build step.

## Run locally

From this folder, start any static file server. For example, with Python:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Content notes

- Course names, the 1991 founding year, institutional philosophy, facilities, alumni examples, address, email and phone numbers are taken from the official IISE website.
- Programme duration marked with an asterisk should be confirmed against the current intake and university requirements.
- Current admission dates, fees, eligibility for all programmes, current recognition/approval wording, and live enquiry handling need confirmation from IISE.
- The enquiry form validates the fields and prepares a message in the visitor’s email app; a server-side form endpoint has not been configured.
- Hero, campus and event images are illustrative stock photography, not verified photographs of IISE.
- The official IISE logo image is referenced from the source site at `https://iiseindia.com/images/logo-wide-white.jpg`.

## Updating course and news content

Course cards and their filters are rendered from the `courses` array in `app.js`. News and events currently live in the “Around IISE” section in `index.html`; update the event name and year there when IISE confirms new content.
