// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Без обратного билета',
    tagline: 'Сообщество IT специалистов, которые уехали из России',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://one-way-russia.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/knowledge-base/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'one-way-russia', // Usually your GitHub org/user name.
    projectName: 'knowledge-base', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en',"ru"],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/one-way-russia/knowledge-base',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/one-way-russia/knowledge-base',
                     blogSidebarTitle: 'Все посты',
                    // blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/logo.png',
            navbar: {
                title: 'Без обратного билета',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'База знаний',
                    },
                    {to: '/blog', label: 'Блог', position: 'left'},
                    {
                        href: 'https://github.com/one-way-russia',
                        label: 'GitHub',
                        position: 'right',
                    },
                  {
                    href: 'https://t.me/+9qJCd-C4Qk9iYmRi',
                    label: 'Telegram',
                    position: 'right',
                  },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Контент',
                        items: [
                            {
                                label: 'База знаний',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Блог',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Сообщество',
                        items: [
                            {
                                label: 'Telegram',
                                href: 'https://t.me/+9qJCd-C4Qk9iYmRi',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/one-way-russia',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Автор идеи',
                                href: 'https://www.linkedin.com/in/gleb-nazemnov-97095816a/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} One-Way-Russia. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
