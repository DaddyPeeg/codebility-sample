import React from "react"
import { Paragraph } from "../shared/home"
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { useModal } from "@/hooks/use-modal"
import Image from "next/image"
import { IconBullet, IconEmail, IconLinkedIn, IconMapPin, IconTelephone } from "@/public/assets/svgs"
import { Label } from "../ui/label"

const CompanyViewModal = () => {
  const { isOpen, type, onClose, onOpen, data } = useModal()

  const { company_name, email, contact_number, linkedin_link, location, working_hours, company_hist } = data || {}

  const isModalOpen = isOpen && type === "companyViewModal"

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent hasButton className="h-[32rem] w-[80%] max-w-xl overflow-x-auto overflow-y-auto lg:h-auto">
        <div className="flex flex-col gap-6">
          <div className="relative flex flex-col gap-1">
            <div className="space-y-8 md:p-5">
              <div className="flex flex-col items-center gap-8 md:h-40 md:flex-row md:gap-10">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray">
                  <Image src="/assets/svgs/icon-company.svg" width={80} height={80} alt="logo" />
                </div>
                <div className="flex h-full flex-col justify-between gap-2">
                  <p className="text-center text-xl font-semibold uppercase">{company_name}</p>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconEmail className="invert dark:invert-0" />
                    {email}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconTelephone className="invert dark:invert-0" />
                    {contact_number}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconLinkedIn className="invert dark:invert-0" />
                    {linkedin_link}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray">
                    <IconMapPin className="invert dark:invert-0" />
                    {location}
                  </div>
                </div>
              </div>
              <div className="">
                <Label className="text-gray">Work Schedule</Label>
                {working_hours &&
                  working_hours.map((item, i: number) => (
                    <Paragraph key={i} className="text-black dark:text-white">
                      {item}
                    </Paragraph>
                  ))}
              </div>
              <div className="space-y-2">
                <Label className="text-gray">History</Label>

                {company_hist &&
                  company_hist.map((hist, i: number) => (
                    <div key={i} className="flex gap-2">
                      <IconBullet className="invert dark:invert-0" />
                      <Paragraph className="dark:text-white">{hist}</Paragraph>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col gap-2 lg:flex-row">
          <Button variant="default" className="w-full sm:w-[130px]" onClick={() => onOpen("companyEditModal", data)}>
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyViewModal
