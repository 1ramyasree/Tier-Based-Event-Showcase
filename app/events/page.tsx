// app/events/page.tsx
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function EventsPage() {
const { userId } = await auth(); // ✅ Await properly
if (!userId) return redirect("/sign-in");

const user = await currentUser();
const tier = user?.publicMetadata?.tier ?? "free";

return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">🎉 Events Page</h1>
<p>Welcome, {user?.emailAddresses[0]?.emailAddress}</p>
<p>Your Tier: <strong>{tier}</strong></p>
</div>
);
}