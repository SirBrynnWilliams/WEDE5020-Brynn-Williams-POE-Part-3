/* EmailJS handler shared by the Contact and Enquiry forms. */
(() => {
  const publicKey = "J3WxonV3MDe80ui-I";
  const serviceId = "service_0y56a0r";
  const contactTemplateId = "template_38jrkys";
  const enquiryTemplateId = "template_hbaalcc";

  const getValue = (form, name) => form.elements.namedItem(name)?.value.trim() || "";

  const isConfigured = (templateId) =>
    [publicKey, serviceId, templateId].every(
      (value) => value && !value.startsWith("YOUR_")
    );

  document.querySelectorAll("#contact-form, .enquiry-form").forEach((form) => {
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

    form.addEventListener("form:valid-submit", async (event) => {
      const status = event.detail.status;
      const isEnquiry = form.classList.contains("enquiry-form");
      const templateId = isEnquiry ? enquiryTemplateId : contactTemplateId;
      if (!isConfigured(templateId) || !window.emailjs) {
        status.classList.remove("success");
        status.textContent = isEnquiry
          ? "The Enquiry form still needs its EmailJS template ID in Javascript/email.js."
          : "EmailJS is not configured yet. Check the Public Key, Service ID, and Contact Us template ID in Javascript/email.js.";
        return;
      }

      const templateParams = {
        name: getValue(form, "name"),
        surname: getValue(form, "surname"),
        cell: getValue(form, "cell"),
        email: getValue(form, "email"),
        ...(isEnquiry
          ? {
              purpose: getValue(form, "purpose"),
              query: getValue(form, "query"),
            }
          : {
              subject: getValue(form, "subject"),
              message: getValue(form, "message"),
            }),
      };

      if (submitButton) submitButton.disabled = true;
      try {
        await emailjs.init({ publicKey });
        await emailjs.send(serviceId, templateId, templateParams);
        form.reset();
        status.classList.add("success");
        status.textContent = "Thank you. Your message has been sent.";
      } catch (error) {
        console.error("EmailJS send failed:", error);
        status.classList.remove("success");
        status.textContent = "Sorry, your message could not be sent. Please try again or contact us by email.";
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });
})();
