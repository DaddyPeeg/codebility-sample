import { create } from "zustand"
import { Client } from "@/types"

import Image, { StaticImageData } from "next/image"

interface ModalData {
  image?: string | StaticImageData
  imgBgColor?: string
  name?: string
  time?: string
  date?: string
  company?: string
  company_name?: string
  subtext?: string
  phonenumber?: string
  linkedin?: string
  email?: string
  address?: string
  description?: {
    label: string
    sublabel: string
  }[]
  footerText?: string
}

export type ModalType =
  | "companyProfile"
  | "termsAndCondition"
  | "privacyPolicy"
  | "techStackModal"
  | "scheduleModal"
  | "todoAddModal"
  | "todoViewModal"
  | "todoEditModal"
  | "projectAddModal"
  | "projectEditModal"
  | "companyAddModal"
  | "companyEditModal"
  | "companyViewModal"

interface ModalStore {
  type: ModalType | null
  data?: Client
  isOpen: boolean
  onOpen: (type: ModalType, data?: Client) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: undefined, // Initialize data as undefined
  isOpen: false,
  onOpen: (type, data = undefined) => set({ isOpen: true, type, data }), // Pass undefined as default data
  onClose: () => set({ type: null, isOpen: false }),
}))
