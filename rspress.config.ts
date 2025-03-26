import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  markdown: {
    checkDeadLinks: true,
  },
  root: path.join(__dirname, 'app'),
  title: 'Mohamed Amine Fouzai | Portfolio',
  icon: '/me.png',
  base:"/",
  logo: {
    light: '/light.png',
    dark: '/dark.png',
  },
  ssg: {
    strict: true
  },
  themeConfig: {
    outlineTitle:"Within This Page",
    footer: {
      message:
        'Made with ❤️ by Fouzai Mohamed Amine',
    },

    nav: [
    
      {
        "text": "👨🏼‍🎓 Education & Cerfications",
        "link": "/pages/education",
        "activeMatch": "/pages/education",
        "position":"right"
      },
      {
        "text": "👨🏼‍💻 Work Experience",
        "link": "/pages/experience/",
        "activeMatch": "/pages/experience/",
         "position":"right"
      },
      {
        "text": "💼 Portfolio Pieces",
        "link": "/pages/projects/",
        "activeMatch": "/pages/projects/",
         "position":"right"
      },
    
      {
        "text": "📞 Contact & Resume",
        "link": "/pages/contact",
        "activeMatch": "/pages/contact",
         "position":"right"
      },
      {
        "text": "ℹ️ Blog",
        "link": "/pages/blog",
        "activeMatch": "/pages/blog",
         "position":"right"
      }
      
    ],
    searchPlaceholderText:"Search Any Where",
    enableAppearanceAnimation:true,
    enableContentAnimation:true,
    enableScrollToTop:true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
      {
        icon: 'X',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
      {
        icon: 'youtube',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
