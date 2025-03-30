import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

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
  return (
    <Dialog open>
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
            </div>
            <div className="border-l mx-6" />
            <div className="flex w-1/2 flex-col space-y-5">
              <h3 className="text-center text-lg font-bold bg-gradient-to-r from-purple-600 to-pruple-400 bg-clip-text text-transparent">Premium plus</h3>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
