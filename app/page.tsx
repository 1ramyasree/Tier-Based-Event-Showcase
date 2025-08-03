// app/page.tsx
"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
const { user, isSignedIn } = useUser();

return (
<main className="flex flex-col items-center justify-center min-h-screen gap-4">
<h1 className="text-3xl font-bold">Home Page</h1>

  {isSignedIn ? (
    <>
      <UserButton />
      <Link href="/events">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Go to Events</button>
      </Link>
      <Link href="/set-tier">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Set Tier</button>
      </Link>
    </>
  ) : (
    <>
      <Link href="/sign-in">
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Sign In</button>
      </Link>
      <Link href="/sign-up">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Sign Up</button>
      </Link>
    </>
  )}
</main>
);
}