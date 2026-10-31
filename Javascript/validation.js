/* Client-side checks shared by the Contact and Enquiry forms. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".contact-form, .enquiry-form").forEach((form) => {
    // Custom feedback should run for empty fields too, before browser validation blocks submit.
    form.noValidate = true;
    const status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    form.append(status);

    const fields = [...form.querySelectorAll("input:not([type=submit]):not([type=reset]), select, textarea")];
    const messageFor = (field) => {
      const value = field.value.trim();
      if (field.required && !value) return `Please enter your ${field.labels?.[0]?.textContent.replace(/[:*]/g, "").trim().toLowerCase() || "answer"}.`;
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address, such as name@example.com.";
      if (field.type === "tel" && value && value.replace(/\D/g, "").length < 7) return "Enter a valid phone number with at least 7 digits.";
      if ((field.id === "name" || field.id === "surname") && value.length < 2) return "Please enter at least 2 characters.";
      if ((field.id === "message" || field.id === "query") && value.length < 10) return "Please enter at least 10 characters so we can understand your message.";
      return "";
    };
    const validateField = (field) => {
      const error = messageFor(field);
      const feedback = field.nextElementSibling?.classList.contains("field-feedback")
        ? field.nextElementSibling
        : null;
      field.classList.toggle("error", Boolean(error));
      if (error) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      if (feedback) {
        feedback.textContent = error;
        feedback.hidden = !error;
      }
      return error;
    };

    fields.forEach((field, index) => {
      const feedback = document.createElement("span");
      feedback.className = "field-feedback";
      feedback.id = `${field.id || `form-field-${index}`}-feedback`;
      feedback.hidden = true;
      field.setAttribute("aria-describedby", feedback.id);
      field.insertAdjacentElement("afterend", feedback);
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("error")) validateField(field);
        status.textContent = "";
      });
      field.addEventListener("change", () => validateField(field));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";
      status.classList.remove("success");
      let firstInvalid = null;
      fields.forEach((field) => {
        if (validateField(field) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.textContent = "Please correct the highlighted fields before continuing.";
        firstInvalid.focus();
        return;
      }
      if (form.id === "contact-form" || form.classList.contains("enquiry-form")) {
        status.textContent = "Sending your message...";
        form.dispatchEvent(new CustomEvent("form:valid-submit", { detail: { status } }));
        return;
      }
      status.classList.add("success");
      status.textContent = "All fields look good. This demonstration site does not send submissions.";
    });

    form.addEventListener("reset", () => {
      form.querySelectorAll(".error").forEach((field) => {
        field.classList.remove("error");
        field.removeAttribute("aria-invalid");
      });
      form.querySelectorAll(".field-feedback").forEach((feedback) => {
        feedback.textContent = "";
        feedback.hidden = true;
      });
      status.textContent = "";
      status.classList.remove("success");
    });
  });
});
