import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'app'),
  title: 'Mohamed Amine Fouzai | Home',
  icon: '/me.png',
  logo: {
    light: '/me.png',
    dark: '/me.png',
  },
  ssg: {
    strict: true
  },
  themeConfig: {
  
    sourceCodeText:"text",
    footer: {
      message:
        'Made with ❤️ by Fouzai Mohamed Amine',
    },
    nav: [
      {
        "text": "Home",
        "link": "/",
        "activeMatch": "/",
        "position":"left"
      },
      {
        "text": "Education and Certifications",
        "link": "/education_certfications/",
        "activeMatch": "/education_certfications/",
        "position":"left"
      },
      {
        "text": "Work Experience",
        "link": "/experience/",
        "activeMatch": "/experience/",
         "position":"left"
      },
      {
        "text": "Projects",
        "link": "/projects/",
        "activeMatch": "/projects/",
         "position":"left"
      },
    
      {
        "text": "Contact and Resume",
        "link": "/contact_resume/contact_resume",
        "activeMatch": "/contact_resume/contact_resume",
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
