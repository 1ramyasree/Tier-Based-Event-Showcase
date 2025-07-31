import { auth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { redirect } from 'next/navigation';

export default async function EventsPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const user = await clerkClient.users.getUser(userId);
  const tier = user.publicMetadata.tier;

  if (tier !== 'gold' && tier !== 'platinum') {
    return redirect('/');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exclusive Events</h1>
      <p>Welcome to the premium events section, {user.firstName}!</p>
    </div>
  );
}
