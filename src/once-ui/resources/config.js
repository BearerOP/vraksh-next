const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "green", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "rounded", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Vraksh - link-in-bio",
  description:
    "One link to connect all your content, socials, and websites in a beautiful, customizable bio page.",
};

// default open graph data
const og = {
  title: "Vraksh - link-in-bio",
  description: "fastest way to create a link-in-bio page",
  type: "website",
  image: "/images/cover.jpg",
};

// default schema data
const schema = {
  logo: "vraksh",
  type: "Organization",
  name: "Vraksh",
  description:
    "One link to connect all your content, socials, and websites in a beautiful, customizable bio page.",
  email: "",
};

// social links
const social = {
  twitter: "https://x.com/ankit_189",
  linkedin: "https://www.linkedin.com/company/yadavankit189/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, style, meta, og, schema, social };
