'use client'

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function EventsPage() {
const { userId } = await auth();
if (!userId) redirect("/sign-in");

const user = await currentUser();
const tier = user?.publicMetadata?.tier as string | undefined;

return (
<div className="p-8">
<h1 className="text-2xl font-bold mb-4">🎉 Events Page</h1>
<p>Welcome, {user?.emailAddresses?.[0]?.emailAddress}</p>
{typeof tier === "string" && tier.length > 0 ? (
<p>Your Tier: <strong>{tier}</strong></p>
) : (
<p className="text-red-500">No tier information found.</p>
)}
</div>
);
}