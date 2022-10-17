import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/company/helpcenter/__docusaurus/debug',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug', '908'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/config',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/config', '9b7'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/content',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/content', '63c'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/globalData',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/globalData', 'f3f'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/metadata',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/metadata', '060'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/registry',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/registry', 'a2e'),
    exact: true
  },
  {
    path: '/company/helpcenter/__docusaurus/debug/routes',
    component: ComponentCreator('/company/helpcenter/__docusaurus/debug/routes', '64f'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog',
    component: ComponentCreator('/company/helpcenter/blog', '865'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/archive',
    component: ComponentCreator('/company/helpcenter/blog/archive', '2b8'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/first-blog-post',
    component: ComponentCreator('/company/helpcenter/blog/first-blog-post', 'e82'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/long-blog-post',
    component: ComponentCreator('/company/helpcenter/blog/long-blog-post', '397'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/mdx-blog-post',
    component: ComponentCreator('/company/helpcenter/blog/mdx-blog-post', '0f3'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/tags',
    component: ComponentCreator('/company/helpcenter/blog/tags', 'cfd'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/tags/docusaurus',
    component: ComponentCreator('/company/helpcenter/blog/tags/docusaurus', '94f'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/tags/facebook',
    component: ComponentCreator('/company/helpcenter/blog/tags/facebook', '51e'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/tags/hello',
    component: ComponentCreator('/company/helpcenter/blog/tags/hello', '13e'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/tags/hola',
    component: ComponentCreator('/company/helpcenter/blog/tags/hola', '893'),
    exact: true
  },
  {
    path: '/company/helpcenter/blog/welcome',
    component: ComponentCreator('/company/helpcenter/blog/welcome', 'f51'),
    exact: true
  },
  {
    path: '/company/helpcenter/markdown-page',
    component: ComponentCreator('/company/helpcenter/markdown-page', '363'),
    exact: true
  },
  {
    path: '/company/helpcenter/docs',
    component: ComponentCreator('/company/helpcenter/docs', '418'),
    routes: [
      {
        path: '/company/helpcenter/docs/administration',
        component: ComponentCreator('/company/helpcenter/docs/administration', '516'),
        exact: true,
        sidebar: "administrationSidebar"
      },
      {
        path: '/company/helpcenter/docs/category/using-famedly',
        component: ComponentCreator('/company/helpcenter/docs/category/using-famedly', '8a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/company/helpcenter/docs/category/your-profile',
        component: ComponentCreator('/company/helpcenter/docs/category/your-profile', 'b37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/company/helpcenter/docs/famedly-nutzen',
        component: ComponentCreator('/company/helpcenter/docs/famedly-nutzen', '9ab'),
        exact: true,
        sidebar: "using_famedlySidebar"
      },
      {
        path: '/company/helpcenter/docs/first-steps',
        component: ComponentCreator('/company/helpcenter/docs/first-steps', '96e'),
        exact: true,
        sidebar: "first_stepsSidebar"
      },
      {
        path: '/company/helpcenter/docs/intro',
        component: ComponentCreator('/company/helpcenter/docs/intro', '381'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/company/helpcenter/docs/mistakes',
        component: ComponentCreator('/company/helpcenter/docs/mistakes', '6d4'),
        exact: true,
        sidebar: "mistakesSidebar"
      },
      {
        path: '/company/helpcenter/docs/using-famedly/Group chat/join-group-chat',
        component: ComponentCreator('/company/helpcenter/docs/using-famedly/Group chat/join-group-chat', '66e'),
        exact: true,
        sidebar: "using_famedlySidebar"
      },
      {
        path: '/company/helpcenter/docs/using-famedly/Group chat/what-is-a-group-chat',
        component: ComponentCreator('/company/helpcenter/docs/using-famedly/Group chat/what-is-a-group-chat', 'd19'),
        exact: true,
        sidebar: "using_famedlySidebar"
      },
      {
        path: '/company/helpcenter/docs/using-famedly/Private chat/join-privat-chat',
        component: ComponentCreator('/company/helpcenter/docs/using-famedly/Private chat/join-privat-chat', '191'),
        exact: true,
        sidebar: "using_famedlySidebar"
      },
      {
        path: '/company/helpcenter/docs/using-famedly/Private chat/what-are-private-chats',
        component: ComponentCreator('/company/helpcenter/docs/using-famedly/Private chat/what-are-private-chats', 'f1f'),
        exact: true,
        sidebar: "using_famedlySidebar"
      },
      {
        path: '/company/helpcenter/docs/your-profile',
        component: ComponentCreator('/company/helpcenter/docs/your-profile', '6bb'),
        exact: true,
        sidebar: "your_profileSidebar"
      },
      {
        path: '/company/helpcenter/docs/your-profile/notifications',
        component: ComponentCreator('/company/helpcenter/docs/your-profile/notifications', '39d'),
        exact: true,
        sidebar: "your_profileSidebar"
      },
      {
        path: '/company/helpcenter/docs/your-profile/style',
        component: ComponentCreator('/company/helpcenter/docs/your-profile/style', '265'),
        exact: true,
        sidebar: "your_profileSidebar"
      }
    ]
  },
  {
    path: '/company/helpcenter/',
    component: ComponentCreator('/company/helpcenter/', '96d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
