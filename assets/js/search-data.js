// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Learning from experience, coordinating manipulation skills, and building complete robot systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers on robot learning, manipulation, perception, and intelligent remanufacturing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "A path through mechanical engineering, industrial automation, and robot learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic CV with full publication list, research experience, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-new-preprint-on-vla-for-selective-robotic-disassembly-is-now-available-on-arxiv",
          title: 'New preprint on VLA for Selective Robotic Disassembly is now available on arXiv....',
          description: "",
          section: "News",},{id: "news-our-paper-raise-robot-assisted-selective-disassembly-and-sorting-for-end-of-life-phones-has-been-published-in-resources-conservation-and-recycling",
          title: 'Our paper RAISE: Robot-Assisted Selective Disassembly and Sorting for End-of-Life Phones has been...',
          description: "",
          section: "News",},{id: "news-new-preprint-self-vla-a-skill-enhanced-agentic-vision-language-action-framework-for-contact-rich-disassembly-is-now-on-arxiv",
          title: 'New preprint! SELF-VLA: A Skill Enhanced Agentic Vision-Language-Action Framework for Contact-Rich Disassembly is...',
          description: "",
          section: "News",},{id: "news-our-paper-pacer-process-aware-vla-policy-learning-from-human-corrections-for-robotic-disassembly-has-been-accepted-to-corl-2026",
          title: 'Our paper PACER: Process-Aware VLA Policy Learning from Human Corrections for Robotic Disassembly...',
          description: "",
          section: "News",},{id: "news-our-paper-transforming-remanufacturing-automation-with-large-language-models-is-now-published-in-robotics-and-computer-integrated-manufacturing-arxiv",
          title: 'Our paper Transforming Remanufacturing Automation with Large Language Models is now published in...',
          description: "",
          section: "News",},{id: "news-pacer-is-now-on-arxiv-with-a-project-page-and-code-it-learns-from-robot-experience-and-human-corrections-through-native-supervised-fine-tuning",
          title: 'PACER is now on arXiv, with a project page and code. It learns...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%6E%67%6C%69%75.%63%68%72%69%73@%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ChangChrisLiu", "_blank");
        },
      },{
        id: 'social-huggingface',
        title: 'Hugging Face',
        section: 'Socials',
        handler: () => {
          window.open("https://huggingface.co/ChangChrisLiu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chang9633ch", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=MTOVnMwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
