# Jahs Adoption Centre Website

**WEDE5020 Portfolio of Evidence - Part 3**

**Student:** Brynn Williams

**Student number:** ST10324555

## Project overview

This is a responsive information website for Jahs Adoption Centre in Gqeberha. It introduces the centre, explains general adoption guidance, provides enquiry and contact forms, and shows visitors ways to ask about volunteering or donations.

The site uses HTML, CSS, and vanilla JavaScript. It has no build step or package dependencies.

## Portfolio parts

- **Part 1:** Proposal and initial HTML website.
- **Part 2:** CSS styling and responsive page structure. I received 100/100 and no lecturer feedback was provided, so there were no Part 2 feedback items to implement for Part 3.
- **Part 3:** JavaScript interactions, validation, search, image lightbox, child-centred adoption information, accessibility refinements, and browser checks.

Part 3 work began after the Part 2 submission date on 18 September 2026. The first JavaScript learning and planning session was 22 September. The detailed retrospective timeline is in `CHANGELOG.md`; dates are based on my recollection and some task descriptions are approximate.

## Pages and features

- **Home:** Centre introduction, core activities, ways to help, and a contact call to action.
- **About Us:** History, mission, vision, and child-centred information in a responsive image-and-text layout.
- **Services:** General adoption journey guidance, service information, live service search, and questions to ask when verifying an adoption service provider.
- **Enquiry:** Child-centred FAQ, page-content search, and adoption, volunteering, or sponsorship enquiry form.
- **Contact Us:** Centre contact details, map, opening information, and contact form.

## JavaScript modules

The project has five JavaScript files:

- `main.js` updates the copyright year, marks the current navigation link, and provides shared accordion behavior for accordion elements.
- `search.js` filters the service cards and the content sections on pages with a page search box.
- `lightbox.js` opens marked images in an accessible modal with close-button and Escape-key controls.
- `validation.js` checks required fields, email and telephone formats, and text lengths on the Contact Us and Enquiry forms. It shows field-level and form-level feedback.
- `email.js` maps each form's fields to its own EmailJS template and handles submission feedback. The Contact Us and Enquiry forms use separate templates.

## Running the website

Open the project folder in Visual Studio Code and press **F5** to use the included Edge launch configuration. A static server such as the VS Code Live Server extension also works. The website can be deployed as a static site without a build step.

The `.gitignore` file excludes operating-system metadata files and Netlify CLI's local project state. `.vscode/launch.json` contains the Edge launch configuration used by the **F5** option in Visual Studio Code.

## Form delivery status

The Contact Us and Enquiry forms validate their fields in the browser and send submissions through EmailJS. Both forms were tested on 31 October 2026. The Contact Us template uses `name`, `surname`, `cell`, `email`, `subject`, and `message`; the Enquiry template uses `name`, `surname`, `cell`, `email`, `purpose`, and `query`. Keep private account credentials out of this public repository.

To check form delivery, submit a non-sensitive test through each page. Confirm the site displays its sent message, then check the receiving inbox (including spam) and make sure the submitted details appear in the email.

## Project links

- **Part 1 GitHub repository:** [Jahs Adoption Centre](https://github.com/TheBrynnWilliams/WEDE5020-Brynn-Williams-Part-1-)
- **Part 1 Netlify deployment:** The previously listed URL currently returns 404.
- **Part 2 Netlify deployment:** [Jahs Adoption Centre](https://brynnwilliamswede5020part2.netlify.app)
- **Part 2 GitHub repository:** [Jahs Adoption Centre](https://github.com/SirBrynnWilliams/WEDE5020-Brynn-Williams-Part-2)
- **Part 3 GitHub repository:** [Jahs Adoption Centre](https://github.com/SirBrynnWilliams/WEDE5020-Brynn-Williams-POE-Part-3)
- **Part 3 Netlify deployment:** [Jahs Adoption Centre](https://wede5020-brynn-williams-poe-part-3.netlify.app) (currently redirects visitors to Netlify sign-in; set project visibility to Public before sharing)

Part 3 continues the website developed for Part 2. The two parts are stored in separate GitHub repositories, so each repository has its own commit history.

## Part 3 verification

The five pages were checked in Edge for page and image loading, local links, JavaScript errors, lightbox behavior, search filtering, form validation, and horizontal overflow at desktop and mobile widths. The Contact Us and Enquiry forms were each submitted through EmailJS and displayed the success confirmation.

## References

Google, 2026. *Google Chrome web browser*. [computer program] Available at: <https://www.google.com/chrome/> [Accessed 11 September 2026].

Google Maps, 2026. *Google Maps*. [online] Available at: <https://www.google.com/maps/> [Accessed 11 September 2026].

MDN Web Docs, 2026. *CSS: Cascading Style Sheets*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS> [Accessed 11 September 2026].

Microsoft, 2026. *Visual Studio Code*. [computer program] Available at: <https://code.visualstudio.com/> [Accessed 11 September 2026].

South African Government, 2026. *Apply for national adoption*. [online] Available at: <https://www.gov.za/services/services-residents/parenting/adopt-child/apply-national-adoption> [Accessed 30 October 2026].

The Independent Institute of Education (IIE), 2025. *Harvard - Anglia style reference guide – adapted for The IIE*. Johannesburg: The Independent Institute of Education.

The Independent Institute of Education (IIE), 2026. *Web development (introduction) [WEDE5020 Module Manual]*. Johannesburg: The Independent Institute of Education.

W3Schools, 2026. *CSS and responsive web design tutorials*. [online] Available at: <https://www.w3schools.com/css/> [Accessed 11 September 2026].

EmailJS, 2026. *EmailJS: Send email directly from JavaScript*. [online] Available at: <https://www.emailjs.com/> [Accessed 30 October 2026].
