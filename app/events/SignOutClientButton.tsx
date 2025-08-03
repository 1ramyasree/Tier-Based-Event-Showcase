// app/events/SignOutClientButton.tsx
'use client';
import { SignOutButton } from "@clerk/nextjs";

export default function SignOutClientButton() {
  return (
    <SignOutButton>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Sign Out
      </button>
    </SignOutButton>
  );
}
