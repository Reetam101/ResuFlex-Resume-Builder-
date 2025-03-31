"use server"

import stripe from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server"

export async function createCheckoutSession(priceId: string) {
  const user = await currentUser();

  if(!user) {
    throw new Error("Unauthorized");
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: priceId,
      quantity: 1
    }],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/billing/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/billing`,
    customer_email: user.emailAddresses[0].emailAddress,
    subscription_data: {
      metadata: {
        userId: user.id
      }
    }
  })
}