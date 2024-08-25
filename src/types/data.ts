export interface EducationType {
  [key: string]: string
}

export interface SkillType {
  name: string
  level: number
}

export interface WorkType {
  company: string
  date: string
  icon: string
  description: string
}

interface Header {
  title: string
  info: string
}

interface ContactData {
  title: string
  info: string
  icon: string
}

interface Contact {
  header: string
  data: Array<ContactData>
}

interface Social {
  title: string
  link: string
  icon: string
  download: boolean
}

interface AboutMe {
  title: string
  line1: string
  line2: string
}

interface Hobby {
  hobby: string
  icon: string
}

interface Hobbies {
  title: string
  subtitle: string
  list: Array<Hobby>
}

export interface ProfileType {
  header: Header
  contact: Contact
  socials: Array<Social>
}

export interface HobbiesType {
  about: AboutMe
  hobbies: Hobbies
}
