"use client"

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import usePremiumModal from "@/hooks/usePremiumModal";

export const premiumFeatures = [
  "2 resumes",
  "Limited downloads: 5",
  "Limited font styles",
  "upcoming: Limited templates"
]

export const premiumPlusFeatures = [
  "Unlimted resumes",
  "Unlimited downloads",
  "All font styles",
  "upcoming: All templates"
]

export default function PremiumModal() {
  const {open, setOpen} = usePremiumModal()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            ResuFlex Premium
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p>Get a premium subscription to unlock more features</p>
          <div className="flex">
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="text-center text-lg font-bold">Premium</h3>
              <ul className="list-inside space-y-2">
                {premiumFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button>Get Premium</Button>
            </div>
            <div className="border-l mx-6" />
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="text-center text-lg font-bold bg-gradient-to-r from-purple-600 to-pruple-400 bg-clip-text text-transparent">Premium plus</h3>
              <ul className="list-inside space-y-2">
                {premiumPlusFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-green-500" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="premium">Get Premium Plus</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
