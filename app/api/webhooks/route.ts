import connectToDB from "@/app/Models/connectToDB";
import User from "@/app/Models/UserSchema";
import { EmailAddress } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { connect } from "http2";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    if (evt.type === "user.created") {
      const { id, email_addresses } = evt.data;
      const newUser = {
        clerkUserId: id,
        EmailAddress: email_addresses[0].email_address,
      };
      console.log(newUser);

      try {
        await connectToDB();
        await User.create(newUser);
        console.log("user created");
      } catch (error) {}
    }

    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`,
    );

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
