export const OFFICIAL_CONTACT = {
  phone: "+91 6280200778",
  phoneHref: "tel:+916280200778",
  whatsapp: "https://wa.me/916280200778",
  email: "magadhdigitalsolutions@gmail.com",
  mailto: "mailto:magadhdigitalsolutions@gmail.com",
  instagram:
    "https://www.instagram.com/magadh.digital?igsh=MWk4c2FyaG43ZDg0Zg%3D%3D&utm_source=qr"
} as const;

export const CONTACT_RECIPIENT =
  process.env.CONTACT_TO_EMAIL || OFFICIAL_CONTACT.email;
