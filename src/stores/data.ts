import type { EducationType, HobbiesType, ProfileType, SkillType, WorkType } from '@/types/data'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const profileData: ProfileType = {
    header: {
      title: 'Hi There!',
      info: `I'm Elena, a frontend developer based in Spain. 
      During the last 8 years I've been working in different companies developing applications mostly with Angular and ReactJS.`
    },
    contact: {
      header: 'Want to contact me?',
      data: [
        {
          title: 'Phone',
          info: '+34 617 763 680',
          icon: 'pi pi-mobile'
        },
        {
          title: 'Email',
          info: 'epv1991@gmail.com',
          icon: 'pi pi-at'
        },
        {
          title: 'Address',
          info: `Rua Leiras Pulpeiro,2 32005 Ourense`,
          icon: 'pi pi-map'
        }
      ]
    },
    socials: [
      {
        title: 'My github',
        link: 'https://github.com/elibo',
        icon: 'pi pi-github',
        download: false
      },
      {
        title: 'My linkedin',
        link: 'https://www.linkedin.com/in/elena-pereira-vazquez-637b47113/',
        icon: 'pi pi-linkedin',
        download: false
      },
      {
        title: 'My CV',
        link: '/public/files/ElenaPereiraCV.pdf',
        icon: 'pi pi-cloud-download',
        download: true
      }
    ]
  }

  const skillsData: Array<SkillType> = [
    { name: 'ReactJS', level: 4 },
    { name: 'Angular', level: 4 },
    { name: 'VueJS', level: 2 },
    { name: 'Typescript', level: 3 },
    { name: 'Spanish', level: 5 },
    { name: 'English', level: 4 }
  ]
  const educationData: EducationType = {
    'From errors...': `In 2012 I started a 2 year course to learn how to manage networks and operating systems.
      Pretty soon I realised that was not my future so I started looking for another course more
      apropiate to what I was expecting.`,
    '... we learn': `After studying something that did not make me happy I discovered my real passion in programming. 
      I started another 2 years of learning everything I could about programming languages, developing applications for iOS and Android, making videogames and web apps. 
      In 2016 I finished with my studies and I started working in a small startup that made what I'm today`
  }
  const workData: Array<WorkType> = [
    {
      company: 'Sparta',
      date: '2022-2024',
      icon: 'pi pi-wave-pulse',
      description:
        'Product company in where my main tools were ReactJS, ChartJS, CircleCI and a custom component library. We had to migrate from old vanilla JS to a proper TS version'
    },
    {
      company: 'Plexus',
      date: '2019-2022',
      icon: 'pi pi-sparkles',
      description:
        'Working in different projects for multiple clients in sectors such as banking, healthcare, commerce ... Had to create from scracht a custom component library with Storybook and Styled Components'
    },
    {
      company: 'Citecam',
      date: '2016-2019',
      icon: 'pi pi-hammer',
      description:
        'My first job ever as a developer. I learned Angular, Typescript, React, node, MongoDB and a long list of technologies. Made a bunch of projects for local and international clients.'
    }
  ]

  const hobbiesData: HobbiesType = {
    about: {
      title: 'Some bits about me',
      line1: `I'm 33 years old and the majority of those I've been enjoying all things technology.
      Since a young age I discovered videogames and computers and that changed my perspective in
      life. I love the sense of acomplishment that I get when I find the solution to a bothersome
      problem and that's pretty much the life of a developer, finding solutions and fixing problems.`,
      line2: `My first steps into programming were hand in hand with the old fella Angular JS then to
      discover Angular 2 and typescript and later ReactJS. In the last years I've been learning new
      frameworks and right now I'm full on VueJS, maybe in a future I'll go all in with VueJS work
      related but for now I keep it as a simple hobby.`
    },
    hobbies: {
      title: 'Not all in life is work',
      subtitle: `Even though I enjoy my job I love to spend my free time doing multiple activities. Some of those include:`,
      list: [
        { hobby: 'Motorcycle Riding', icon: 'pi pi-gauge' },
        { hobby: 'Listening to music', icon: 'pi pi-headphones' },
        { hobby: 'Playing videogames', icon: 'pi pi-trophy' },
        { hobby: 'Playing piano', icon: 'pi pi-play' },
        { hobby: 'Reading books', icon: 'pi pi-book' }
      ]
    }
  }

  return { profileData, skillsData, educationData, workData, hobbiesData }
})
