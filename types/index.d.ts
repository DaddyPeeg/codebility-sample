export interface User {
  id: string
  name: string
  short_bio?: string
  image_icon?: string
  address?: string
  email_address?: string | undefined
  phone_no?: string
  github_link?: string
  fb_link?: string
  linkedin_link?: string
  whatsapp_link?: string
  skype_link?: string
  telegram_link?: string
  portfolio_website?: string
  tech_stacks?: string[]
  addtl_skills?: string[]
  about_me?: string
  education?: string
  created_at?: string
  updated_at?: string
  schedule?: string
  position?: string[]
  roleType?: string
  userType?: string
  projects?: any[]
  clientId?: string
}

export interface Client {
  id: string
  company_name: string
  company_logo?: string
  working_hours?: string[]
  email?: string
  contact_number?: string
  linkedin_link?: string
  location?: string
  company_hist?: string[] //history
  created_at: string
  updated_at: string
  projects: Project[]
}

export interface Project {
  id: string
  project_name: string
  github_link?: string | URL
  createdAt: string
  updatedAt: string
  users: User[]
  clientId: string
}

export interface Todo {
  id: string
  title: string
  subheader: string
  full_description: string
  userTodoId: string | null
  projectId: string | null
  prio_level: string
  github_link: string
  created_at: string
  updated_at: string
  tagId: string[]
  tags: Tag[]
  userTodo: any
  projects: any
}

export interface Tag {
  tag: string
}

export interface LeftSidebar {
  imgURL: string
  route: string
  label: string
}

export interface SocialIcons {
  imgURL: string
  route: string
  label: string
}

export interface Theme {
  value: string
  label: string
  icon: string
}

export interface TechStackIcons {
  [key: string]: React.ReactNode
}
