import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { helloWorld, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
        syncUserCreation, syncUserUpdation, syncUserDeletion
    ],
});
