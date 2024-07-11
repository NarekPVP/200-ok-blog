import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "200 Ok",
  tagline:
    "Сайт телеграм-канала 200Ok. Здесь вы можете ознакомиться со статьями канала, но с более подробной информацией.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.two-hundredth-ok.info",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "200OkBlog", // Usually your GitHub org/user name.
  projectName: "200-ok-blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "zen-verification",
        content:
          "73gpWemxhmgLQeKdcvRUvtwsEUGiDUIYq7eiMGlaPUTb0sAI3oyHp4SP2uVDLRxd",
      },
    },
    {
      tagName: "script",
      innerHTML: "window.yaContextCb=window.yaContextCb||[]",
      attributes: {},
    },
    {
      tagName: "script",
      attributes: {
        src: "https://yandex.ru/ads/system/context.js",
        async: "async",
      },
    },
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NarekPVP/200-ok-blog/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NarekPVP/200-ok-blog/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "200Ok",
      logo: {
        alt: "200Ok Logo",
        src: "img/200-ok-logo.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/blog", label: "Статьи", position: "left" },
        {
          href: "https://t.me/Ok200Dev",
          label: "Телеграм",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Общий",
          items: [
            {
              label: "Статьи",
              to: "/blog",
            },
          ],
        },
        {
          title: "Сообщество",
          items: [
            {
              label: "Телеграм",
              href: "https://t.me/Ok200Dev",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@200OK-dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/200OkDev",
            },
          ],
        },
        {
          title: "Автор проекта",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/NarekPVP",
            },
            {
              label: "Телеграм",
              href: "https://t.me/NarekDev",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 200Ok, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
