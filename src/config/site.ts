import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Smil",
  description:
    "Utveckla ditt företag och ledarskap med SMIL i Linköping. Få tillgång till ett unikt nätverk, givande utbildningar och värdefulla affärskontakter.",
  url: "https://smil.se",
  lang: "sv",
  locale: "sv_SE",
  author: "SMIL", //Vad för namn ska stå som avsändare på sidan? (ex. Smil, Smil AB, Smil Företagsutveckling AB)
  facebook: "https://www.facebook.com/smilforetagsutveckling/",
  ogImage: ogImage,
  socialLinks: {
    linkedin: "https://se.linkedin.com/company/smilse/",
    facebook: "https://www.facebook.com/smilforetagsutveckling/",
  },
  navLinks: [
    { text: "Hem", href: "/" },
    {
      text: "Utbildningar",
      href: "/utbildningar",
      links: [
        {
          text: "Managementprogram i retorik",
          href: "/utbildningar/managementprogram-i-retorik",
        },
        {
          text: "Utvecklingsprogrammet",
          href: "/utbildningar/utvecklingsprogrammet",
        },
      ],
    },
    {
      text: "Evenemang",
      href: "/evenemang",
      links: [
        { text: "Smilpub", href: "/evenemang/smilpub" },
        { text: "Smil-konferens", href: "/evenemang/smil-konferens" },
      ],
    },
    { text: "Medlemmar", href: "/medlemmar" },
    { text: "Bli medlem", href: "/bli-medlem" },
    { text: "Om SMIL", href: "/om-smil" },
  ],
};
