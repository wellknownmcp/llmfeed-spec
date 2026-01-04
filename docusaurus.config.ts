import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LLMFeed Specification',
  tagline: 'The open standard for AI agent discovery and trust',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production URL
  url: 'https://spec.wellknownmcp.org',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'wellknownmcp',
  projectName: 'llmfeed-spec',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/wellknownmcp/llmfeed-spec/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          exclude: [
            'README.md', 'README.old.md', 'CHANGELOG.md', 'CONTRIBUTING.md',
            'SHOWCASE.md', 'LICENSE', 'node_modules/**', 'local-only/**',
            '06_scripts/**', 'src/**', 'static/**', 'build/**',
            '*.js', '*.ts', '*.json', '*.sh',
          ],
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/llmfeed-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LLMFeed Spec',
      logo: {
        alt: 'LLMFeed Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'specSidebar',
          position: 'left',
          label: 'Specification',
        },
        {
          href: 'https://wellknownmcp.org',
          label: 'Main Site',
          position: 'left',
        },
        {
          href: 'https://llmca.org',
          label: 'Certification',
          position: 'left',
        },
        {
          href: 'https://github.com/wellknownmcp/llmfeed-spec',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Specification',
          items: [
            {
              label: 'LLMFeed Core',
              to: '/llmfeed',
            },
            {
              label: 'Feed Types',
              to: '/llmfeed_feedtype',
            },
            {
              label: 'Extensions',
              to: '/llmfeed_extensions',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'WellKnownMCP',
              href: 'https://wellknownmcp.org',
            },
            {
              label: 'LLMCA (Certification)',
              href: 'https://llmca.org',
            },
            {
              label: 'LLMFeedForge',
              href: 'https://llmfeedforge.org',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wellknownmcp/llmfeed-spec',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/wellknownmcp/llmfeed-spec/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WellKnownMCP / LLMCA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['json', 'bash', 'python', 'typescript'],
    },
    algolia: {
      // Algolia DocSearch (apply at https://docsearch.algolia.com/)
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'llmfeed-spec',
      contextualSearch: true,
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
