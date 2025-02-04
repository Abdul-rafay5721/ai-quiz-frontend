// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: boolean; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  toolTip?: string;
};

export const ROUTES: EachRoute[] = [
  // {
  //   title: "Getting Started",
  //   href: "/getting-started",
  //   noLink: true,
  //   items: [
  //     { title: "Introduction", href: "/introduction" },
  //     {
  //       title: "Installation",
  //       href: "/installation",
  //     },
  //     { title: "Quick Start Guide", href: "/quick-start-guide" },
  //     {
  //       title: "Project Structure",
  //       href: "/project-structure",
  //     },
  //     {
  //       title: "Components",
  //       href: "/components",
  //       items: [
  //         { title: "Stepper", href: "/stepper" },
  //         { title: "Tabs", href: "/tabs" },
  //         { title: "Note", href: "/note" },
  //         { title: "Code Block", href: "/code-block" },
  //         { title: "Image & Link", href: "/image-link" },
  //         { title: "Custom", href: "/custom" },
  //       ],
  //     },
  //     { title: "Themes", href: "/themes" },
  //     {
  //       title: "Customize",
  //       href: "/customize",
  //     },
  //   ],
  // },
  {
    title: "What is Solo Scriptura",
    href: "/what-is-solo-scriptura",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Defending Solo Scriptura",
    href: "/defending-solo-scriptura",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Apologetics",
    href: "/apologetics",
    noLink: false, // Set to true to prevent routing,
    toolTip: "Defending God"
  },
  {
    title: "Hermeneutics",
    href: "/hermeneutics",
    noLink: false, // Set to true to prevent routing
    toolTip: "Interpreting scriptures"
  },
  {
    title: "Theology",
    href: "/theology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of religious scripts"
  },
  {
    title: "Christology",
    href: "/christology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of Christ"
  },
  {
    title: "Pneumatology",
    href: "/pneumatology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of The Holy Spirit"
  },
  {
    title: "Soteriology",
    href: "/soteriology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of Salvation"
  },
  {
    title: "Anthropology",
    href: "/anthropology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of Humanity"
  },
  {
    title: "Ecclesiology",
    href: "/ecclesiology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of the Church"
  },
  {
    title: "Eschatology",
    href: "/eschatology",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of the last things"
  },
  {
    title: "Studies in the Pentateuch",
    href: "/studies-in-the-pentateuch",
    noLink: false, // Set to true to prevent routing
    toolTip: "Study of the first 5 books of the Bible"
  },
  {
    title: "Studies in History",
    href: "/studies-in-history",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Poetry",
    href: "/studies-in-poetry",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Major Prophets",
    href: "/studies-in-major-prophets",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Minor Prophets",
    href: "/studies-in-minor-prophets",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in the Gospels",
    href: "/studies-in-the-gospels",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Acts",
    href: "/studies-in-acts",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Paul's Letters",
    href: "/studies-in-pauls-letters",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in General Epistles",
    href: "/studies-in-general-epistles",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Revelation",
    href: "/studies-in-revelation",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Studies in Greek",
    href: "/studies-in-greek",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Role Of Christians",
    href: "/role-of-christians",
    noLink: false, // Set to true to prevent routing
  },
  {
    title: "Prayer Resources",
    href: "/prayer-resources",
    noLink: false, // Set to true to prevent routing
  },
  // {
  //   title: "The Significance of Nature of Jesus",
  //   href: "/the-significance-of-nature-of-jesus",
  //   noLink: false, // Set to true to prevent routing
  // },
  // {
  //   title: "The Greek word Parousia",
  //   href: "/the-greek-word-parousia",
  //   noLink: false, // Set to true to prevent routing
  // },
  // {
  //   title: "The Preexistence of Jesus",
  //   href: "/the-preexistence-of-jesus",
  //   noLink: false, // Set to true to prevent routing
  // },

];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
