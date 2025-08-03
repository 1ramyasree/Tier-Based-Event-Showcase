import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import EventsList from "@/components/EventsList";

export default async function EventsPage() {
  const hdrs = headers(); // ✅ await-compatible
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <EventsList userId={userId} />;
}
