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

## Form delivery status

The Contact Us and Enquiry forms validate their fields in the browser and send submissions through EmailJS. Both forms were tested on 31 October 2026. The Contact Us template uses `name`, `surname`, `cell`, `email`, `subject`, and `message`; the Enquiry template uses `name`, `surname`, `cell`, `email`, `purpose`, and `query`. Keep private account credentials out of this public repository.

## Project links

- **Part 1 deployment:** [Jahs Adoption Centre](https://wede5020brynnwilliamspart1.netlify.app)
- **Part 2 deployment:** [Jahs Adoption Centre](https://brynnwilliamswede5020part2.netlify.app)
- **Part 2 GitHub repository:** [WEDE5020 Part 2](https://github.com/SirBrynnWilliams/WEDE5020-Brynn-Williams-Part-2)
- **Part 3 GitHub repository:** [Jahs Adoption Centre](https://github.com/SirBrynnWilliams/WEDE5020-Brynn-Williams-POE-Part-3)
- **Part 3 Netlify deployment:** To be added after deployment.

Part 3 continues the website developed for Part 2. The two parts are stored in separate GitHub repositories, so each repository has its own commit history.

## Part 3 verification

The five pages were checked in Edge for page and image loading, local links, JavaScript errors, lightbox behavior, search filtering, form validation, and horizontal overflow at desktop and mobile widths. The Contact Us and Enquiry forms were each submitted through EmailJS and displayed the success confirmation.

Adoption service registration, certificates, and outcome statistics are not asserted by this website. Visitors should confirm current provider details directly with the Department of Social Development or the registered adoption agency responsible for their case. Child-identifying information should not be published as marketing content.

## References

Google, n.d. *Google Chrome web browser* [computer program]. Available at: <https://www.google.com/chrome/> (Accessed: 11 September 2026).

Google Maps, n.d. *Google Maps* [online]. Available at: <https://www.google.com/maps/> (Accessed: 11 September 2026).

MDN Web Docs, n.d. *CSS: Cascading Style Sheets* [online]. Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS> (Accessed: 11 September 2026).

Microsoft, n.d. *Visual Studio Code* [computer program]. Available at: <https://code.visualstudio.com/> (Accessed: 11 September 2026).

South African Government, n.d. *Apply for national adoption* [online]. Available at: <https://www.gov.za/services/services-residents/parenting/adopt-child/apply-national-adoption> (Accessed: 30 October 2026).

The Independent Institute of Education (IIE), 2025. *Harvard-Anglia referencing guide adapted for The IIE*. Johannesburg: The Independent Institute of Education.

The Independent Institute of Education (IIE), 2026. *Web development (Introduction)* [WEDE5020 module manual]. Johannesburg: The Independent Institute of Education.

W3Schools, n.d. *CSS and responsive web design tutorials* [online]. Available at: <https://www.w3schools.com/css/> (Accessed: 11 September 2026).
