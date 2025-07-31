'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export default function SetTierPage() {
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const setTier = async (tier: 'free' | 'silver' | 'gold' | 'platinum') => {
    if (!user) return
    setLoading(true)

    await user.update({
      unsafeMetadata: {
        tier,
      },
    })

    await user.reload()
    setLoading(false)
    alert(`Tier updated to ${tier}`)


  }

  if (!user) return <div className="p-6 text-lg">Not signed in.</div>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your current tier: {(user?.unsafeMetadata?.tier as string) || 'none'}</h1>


        <div className="flex gap-4">
    <button
      onClick={() => setTier('free')}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Set to Free
    </button>
    <button
      onClick={() => setTier('silver')}
      disabled={loading}
      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
    >
      Set to Silver
    </button>
    <button
      onClick={() => setTier('gold')}
      disabled={loading}
      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
    >
      Set to Gold
    </button>
    <button
      onClick={() => setTier('platinum')}
      disabled={loading}
      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Set to Platinum
    </button>
  </div>
</main>

  )
}
