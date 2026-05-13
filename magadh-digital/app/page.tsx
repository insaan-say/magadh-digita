import { MagadhExperience } from "@/components/magadh-experience";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Magadh Digital",
    founder: "Aman Kumar",
    telephone: "+916280200778",
    email: "magadhdigitalsolutions@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN"
    },
    serviceType: [
      "Cinematic reel editing",
      "Digital marketing",
      "Branding",
      "Website development",
      "Social media management",
      "Restaurant branding",
      "Automotive cinematic shoots"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MagadhExperience />
    </>
  );
}
