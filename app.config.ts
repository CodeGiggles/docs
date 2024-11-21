// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: "Codegiggles Docs",
    description: "Belajar programming bareng codegiggles.",
    image: "/cover.png",
    socials: {
      twitter: "#",
      github: "https://github.com/CodeGiggles",
      /*     nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      } */
    },
    /*github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },*/
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: false,
      title: "CodeGiggles",
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
