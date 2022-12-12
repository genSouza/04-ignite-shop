// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {priceId} = req.body;
  
  if(!priceId) {
    return res.status(400).json({error: 'price not found'});
  }

  if(req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  
  const checkOutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });
  res.status(201).json({ checkOutUrl: checkOutSession.url });
}
