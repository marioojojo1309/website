import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jay Vora - Product | Tech",
  author: "Jay Vora",
  websitename: "marioojojo",
  description:
    "Game Developer turned Product Manager from Goa, India. I love working with early stage startups and help them scale from 0 to 1",
  lang: "en",
  siteLogo: "/jay-img-small.jpg",
  navLinks: [
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "About", href: "/#about" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/marioojojo" },
    //{ text: "Github", href: "https://github.com/marioojojo13" },
    //{ text: "Resume", href: "https://drive.google.com/file/d/1fWNt4Ah04oKQGmXZTSZLce9MPR-_rZZg/view?usp=drive_link" },
    { text: "Resume", href: "https://drive.google.com/file/d/1EaFlo_IyfrdLcIkAW2YNUrPzbJTjmoTF/view?usp=sharing"},
  ],
  socialImage: "/jay-img.jpg",
  canonicalURL: "https://jay-vora.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jay Vora",
    specialty: "Game Developer | Product Manager",
    summary:
    "Game Developer turned Product Manager with 13 years of experience.<br>I thrive in the 0 to 1 zone; where problems are complex, timelines are tight, and smart innovative solutions matter the most.<br><i>Jack of all trades, master of some</i>",
    email: "marioojojo@gmail.com?subject=Hello World!",
  },
  about: {
    description:
    //"Hi, I’m Jay Vora, a Game Developer turned Product Manager with a knack for crafting seamless digital experiences beyond games. My blend of hands-on development experience and strategic product mindset allows me to thrive at the intersection where business meets technology. Over the years, I’ve honed my skills in building robust games and applications that are user-first and push the boundaries of what is possible. My projects range from simple and replayable platformer games to making a custom no-code game engine that can make high fidelity 3D games via a browser. I have spent the last 10 years of my career helping early stage startups scale from 0 to 1 to 10 by wearing multiple hats as required and achieving results that help shape the product."
    "Hi, I'm Jay Vora, a Game Developer turned Product Manager with 13+ years of experience in the gaming industry, specializing in game development and game production. I've led the production cycles for end-to-end games, including developing custom game engines, game tools, and live-ops pipelines that resulted in 45%+ D1 retention. I've worked with early stage startups for 10+ years helping them achieve Product/Market Fit and secure multiple rounds of funding."
      ,
    image: "/jay-img.jpg",
  },
  experience: [
    {
      company: "Freelance",
      description:"Freelancing as a Product Consultant for 2 gaming startups",
      roles: [
        {
          position: "Consultant",
          startDate: "Sept 2025",
          endDate: "Present",
          summary: [
            "<u>Stealth Gaming Startup</u>: Roadmap planning and strategy ownership to help founders achieve PMF, by prioritizing features with tight deadlines and a small team.",
            "<u>PlayShifu</u>: Product Consultant at PlayShifu driving ideation, research, and strategy for a new phygital platform to define product vision and the next milestone for the company. Increased activation rate from 55% to 80% across all existing products.",
          ],
        }
      ]
    },
    {
      company: "TerraByte Inc",
      description:"A startup that is developing a metaverse and a gaming platform for children and Gen Z users. They are focused on building immersive 3D social, learning, and gaming platforms, as well as a game engine called \"Terra Studio\" that enables creators to build and deploy games instantly. ",
      roles: [
        {
          position: "Associate Director - Product & Tech (Founding Team Member)",
          startDate: "Mar 2023",
          endDate: "Sept 2025",
          summary: [
            "<u>Terra Studio</u>: Launched a game maker tool to create high fidelity 3D games for Terra Platform, which cut down the development time by 70%. This product helped Terra secure $4M in seed funding from top US and Indian VCs including a16z. Developed proprietary compiler for C# code over the air, resulting in a faster live-ops pipeline.",
            "<u>3D R&D Pipeline</u>: Led the R&D pipeline for games that resulted in running 3D games at 30+ fps on low-end devices, resulting in a broader audience reach. Decreased load times by 90% by optimizing 3D assets using a custom gltf parser and automated pipelines.",
            "<u>Game Retention</u>: Helped game pods by building features and scalable systems that increased <b>D1 retention to 45% (Top 10% of industry).</b>",
            "<u>Team building & Organizational strategy</u>: Played a key leadership role in pivoting the company from Playshifu to Terra. Worked closely with the core team to establish Terra's vision, mission and strategy. Hired and built new teams across engineers, designers, and product managers to accelerate Terra’s growth."
            // "Product & Tech Lead for Terra Studio - A game maker tool that allows creators to make and deploy high fidelity 3D games on the Terra Platform.",
            // "Integrated a no-code solution inside Terra Studio which helped game designers make games for Terra.",
            // "Integrated an OTA C# compiler that helped game developers hot deploy their games onto Terra Platform without app releases.",
            // "Mentored and helped game pods to improve games and achieve higher engagement & retention.",
            // "In charge of all 3D optimizations including writing a custom gltf parser to decrease download time and increase performance on mobile devices.",
            // "Helped Terra secure $4M in seed funding from top US and Indian VCs incl. A16z.",
            // "Played a key leadership role in pivoting the company from PlayShifu to Terra by ideating, developing, and releasing multiple MVPs for product-market-fit.",
            // "Hired and mentored 10+ game developers and Product Managers.",
          ],
        }
      ]
    },
    // {
    //   company: "PlayShifu",
    //   roles: [
    //     {
    //       position: "Senior Product Manager",
    //       startDate: "Jul 2021",
    //       endDate: "Mar 2023",
    //       summary: [
    //         "Scaled the Orboot Brand from a single product to a 3-product line (Earth, Dinos, Mars), achieving 200% product portfolio growth.",
    //         "Led hands-on development of 30+ interactive games across Orboot, Plugo, and Tacto ecosystems.",
    //         "Managed product development for Tacto, finalist for Toy of the Year Award 2022, from concept to market release.",
    //         "Executed international playtesting across India and USA, validating product-market fit.",
    //         "Delivered the Tacto Suite of Phygital Games, leading the full product lifecycle from ideation to global launch.",
    //         "Orchestrated product localization and distribution strategy, successfully entering 20+ global markets.",
    //         "Collaborated closely with operations to ensure smooth product deployment and scaling.",
    //       ],
    //     },
    //     /*{
    //       position: "Associate Product Director",
    //       startDate: "Jul 2022",
    //       endDate: "Mar 2023",
    //       summary: [
    //         "Scaled the Orboot Brand from a single product to a 3-product line (Earth, Dinos, Mars), achieving 200% product portfolio growth.",
    //         "Led hands-on development of 30+ interactive games across Orboot, Plugo, and Tacto ecosystems.",
    //         "Managed product development for Tacto, finalist for Toy of the Year Award 2022, from concept to market release.",
    //         "Executed international playtesting across India and USA, validating product-market fit.",
    //       ],
    //     },
    //     {
    //       position: "Senior Product Manager",
    //       startDate: "Jul 2021",
    //       endDate: "Jun 2022",
    //       summary: [
    //         "Delivered the Tacto Suite of Phygital Games, leading the full product lifecycle from ideation to global launch.",
    //         "Orchestrated product localization and distribution strategy, successfully entering 20+ global markets.",
    //         "Collaborated closely with operations to ensure smooth product deployment and scaling.",
    //       ],
    //     },*/
    //     {
    //       position: "Product Manager",
    //       startDate: "Apr 2020",
    //       endDate: "Jun 2021",
    //       summary: [
    //         "Led R&D for monetization features in Orboot Earth, integrating new business models and expanding revenue streams.",
    //         "Designed and released 3 new interactive games utilizing the physical globe as an input device, improving product engagement and user retention.",
    //         "Worked cross functionally with design, development, and business teams to define and deliver prioritized product features.",
    //       ],
    //     },
    //     {
    //       position: "Senior Game Developer",
    //       startDate: "Nov 2017",
    //       endDate: "Mar 2020",
    //       summary: [
    //         "Architected core systems for Orboot, Tacto, and Minglings game lines, establishing a modular and scalable codebase.",
    //         "Conceptualized, designed, and developed 5+ immersive games, directly contributing to user engagement.",
    //         "Mentored and led a high performing game development team, driving best practices and development efficiency.",
    //       ],
    //     },
    //   ],
    // },
    {
      company: "PlayShifu",
      description:"A leading educational toy company that creates \"phygital\" (physical and digital) learning experiences for children aged 4-12",
      roles: [
        {
          position: "Lead Developer turned Associate Product Director",
          startDate: "Nov 2017",
          endDate: "Mar 2023",
          summary: [
            "<u>Award winning Products</u>: Led production and development of Orboot Earth, winner of multiple Toy Awards, with more than 1M users. Led production of Tacto, a phygital gaming platform, finalist of Toy of the Year award in 2022.",
            "<u>Game Production</u>: Developed and released 10+ games across Orboot, Plugo, and Tacto which resulted in increasing daily engagement to 60+ minutes.",
            "<u>Funding Rounds</u>: Expanded Orboot product line to Orboot Earth, Dinos, and Mars which helped PlayShifu raise $11.5M Series-A. Led R&D and product for Tacto which helped PlayShifu raise $17M Series-B.",
            "<u>PLG</u>: Conceptualized and led development of high-impact features that helped PlayShifu reduce CPI by selling more products via the apps.",
            // "Developed and released Orboot Earth - A phygital AR-powered Globe with 5+ games.",
            // "Ideated, developed, and released Orboot Dinos & Orboot Mars, 2 new AR-powered Globes under the Orboot Brand",
            // "Led the development & management of Tacto - A phygital gaming ecosystem with 7 different kits and 30+ games, which was a finalist for the Toy of The Year award, 2022.",
            // "Led the localization for Orboot, Plugo, and Tacto - Scaling them to be released in over 50 countries in 25+ languages.",
            // "Hired & mentored 20+ developers and game designers.",
            // "Helped PlayShifu raise $11.5M Series-A by releasing Orboot Dinos, Orboot Mars, and Tacto.",
            // "Helped PlayShifu raise $17M Series-B by scaling the products to achieve 60+ mins daily average session time and selling more than 1M toys in over 50 countries.",
          ],
        },
      ],
    },
    {
      company: "DigiFury Solutions",
      description:"A media company working on creating content for other companies",
      roles: [
        {
          position: "Lead Game Developer",
          startDate: "Apr 2016",
          endDate: "Oct 2017",
          summary: [
            "<u>10M Downloads</u>: Led development of PNB Metlife Badminton 3D that was downloaded 10M+ times with 10% D7 retention (Top 10% of industry).",
            "<u>Client Projects</u>: Made Games and Products for external partners - Aprilia, The Souled Store, EsselWorld, PNBMetlife, and History TV, and released them on iOS, Android, Windows, Mac, and VR devices."
            // "Lead game developer on 3D Pro Badminton Challenge, developed for PNB Metlife.",
            // "Developed & managed more than 10 AR & 5 VR games.",
          ]
        },
      ],
    },
    {
      company: "Pescados Software India",
      description:"A software company hired by Real Madrid FC to create their virtual world",
      roles: [
        {
          position: "Senior Game Developer",
          startDate: "Jan 2015",
          endDate: "Jul 2015",
          summary: [
            "<u>Virtual Worlds</u>: Developed and released the official virtual world for Real Madrid F.C."
          ]
        },
      ],
    },
    {
      company: "IndusGeeks Inc.",
      description:"An award-winning EdTech company that specializes in creating game-based learning, simulation-based training, and gamification solutions for corporate training and education. They transform traditional e-learning content into interactive, immersive, and narrative-driven experiences. ",
      roles: [
        {
          position: "Senior Game Developer",
          startDate: "Jun 2012",
          endDate: "Aug 2014",
          summary: [
            "<u>Medical Simulations</u>: Worked on core system architecture for medical simulation platforms, contributing to realistic training solutions",
            "<u>Virtual Worlds</u>: Developed 3D Virtual Worlds that ran on browsers using Flash Action Script 3.0.",
          ]
        },
      ],
    },
  ],
  projects: [
    {
      name: "Terra Studio",
      summary: "A game-maker studio tool designed for both game designers and developers, enabling them to create and deploy immersive 3D experiences directly to the Terra Platform",
      linkPreview: "https://sleep-shock-55654475.figma.site",
      urlopentype: "_blank",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/terra-studio-lite.jpg",
    },
    // {
    //   name: "Terra Studio Pro",
    //   summary: "A layer on top of Unity's Game Engine which helps developers make games for Terra with a hot-reload functionality to deploy games to Terra with ease",
    //   linkPreview: "/",
    //   //linkSource: "https://github.com/immois/astro-zen",
    //   image: "/shopify-clon.png",
    // },
    // {
    //   name: "Rainbow Obby : A Case Study",
    //   summary: "A simple obby game made for Terra that showcases how simple game with user-facing design increases a games' replayability",
    //   linkPreview: "/",
    //   urlopentype:"_blank",
    //   //linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",
    // },
    {
      name: "Tacto",
      summary: "A Phygital gaming ecosystem with 5 tactile kits and 20+ games",
      linkPreview: "https://www.playshifu.com/shop/category/tacto-board-games",
      urlopentype: "_blank",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/tacto.jpg",
    },
    {
      name: "Orboot Earth",
      summary: "An AR-powered Globe that helps kids learn more about the world",
      linkPreview: "https://www.playshifu.com/product/orboot-earth-globe-toy",
      urlopentype: "_blank",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/orboot-earth.jpg",
    },
    {
      name: "Orboot Dinos",
      summary: "An AR-powered Globe that helps kids learn more about Dinosaurs",
      linkPreview: "https://www.playshifu.com/product/orboot-dinosaur-globe-toy",
      urlopentype: "_blank",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/orboot-dinos.jpg",
    },
    {
      name: "Orboot Mars",
      summary: "An AR-powered Globe that helps kids learn more about the Red Planet",
      linkPreview: "https://www.playshifu.com/product/orboot-mars-globe-toy",
      urlopentype: "_blank",
      //linkSource: "https://github.com/immois/astro-zen",
      image: "/orboot-mars.jpg",
    },
  ],
  corecompetencies: [
    { cc: "Game Development (3D and 2D)", },
    { cc: "Game Production", },
    { cc: "Game Design", },
    { cc: "Product Management", },
    { cc: "Product Lifecycle Ownership", },
    { cc: "Team Leadership", },
    //{ cc: "Agile", },
    { cc: "Phygital Product Design", },
    { cc: "Analytical Decision Making", },
    { cc: "Global Product Localization" },
    { cc: "MVP Development & Market Validation", },
    { cc: "Strong Communication", },
    { cc: "Mentoring & Team Building", },
    { cc: "UI/UX", },
    { cc: "Wireframing", },
  ],
  tools: [
    { tool: "Unity3D" },
    { tool: "C#" },
    { tool: "Git" },
    { tool: "Figma" },
    { tool: "Notion" },
    { tool: "Mixpanel" },
    { tool: "Google Analytics" },
    { tool: "OneSignal" },
    { tool: "Jira" },
    { tool: "Postman" },
    { tool: "Miro" },
    { tool: "AWS" },
    { tool: "GCP" },
    { tool: "C++" },
    { tool: "Javascript" },
    { tool: "React" },
    { tool: "TailwindCSS" },
    { tool: "Astro" },
  ],
  terrastudio: "",
};

// #5755ff
