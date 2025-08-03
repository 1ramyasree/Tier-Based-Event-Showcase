'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SetTierPage() {
const { user } = useUser();
const router = useRouter();
const [tier, setTier] = useState<string>('free');
const [error, setError] = useState<string | null>(null);

const handleSubmit = async () => {
try {
if (user) {
await user.updateMetadata({
publicMetadata: { tier },
});
router.push('/events');
} else {
setError('User not found');
}
} catch (err) {
setError('Error setting tier');
}
};

return (

<div className="min-h-screen flex flex-col items-center justify-center px-4"> <h1 className="text-3xl font-bold mb-4">Set Your Tier</h1> <div className="flex gap-2 mb-6"> {['free', 'silver', 'gold', 'platinum'].map((t) => ( <button key={t} className={`px-4 py-2 rounded ${tier === t ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setTier(t)} > {t} </button> ))} </div> <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition" > Submit </button> {error && <p className="text-red-600 mt-4">{error}</p>} </div> );