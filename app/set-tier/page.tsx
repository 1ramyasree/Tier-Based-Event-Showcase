// app/set-tier/page.tsx
"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { updateUser } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";

export default function SetTierPage() {
const { user } = useUser();
const router = useRouter();
const [error, setError] = useState("");

const setTier = async (tier: string) => {
setError("");
try {
if (!user) throw new Error("User not found");
await user.update({ publicMetadata: { tier } });
router.push("/events");
} catch (err) {
console.error(err);
setError("❌ Error setting tier");
}
};

return (
<div className="p-6 space-y-4">
<h1 className="text-xl font-semibold">Set Your Tier</h1>
<div className="flex gap-2">
{["free", "silver", "gold", "platinum"].map((tier) => (
<button
key={tier}
onClick={() => setTier(tier)}
className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
{tier}
</button>
))}
</div>
{error && <p className="text-red-500">{error}</p>}
</div>
);
}