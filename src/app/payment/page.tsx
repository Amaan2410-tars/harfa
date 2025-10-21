'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const programPrices = {
  'Foundation': 45000,
  'Advanced': 75000,
  'Gen AI': 10000,
}

export default function PaymentPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedProgram, setSelectedProgram] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }
  }, [status, router])

  const handlePayment = async () => {
    if (!selectedProgram) {
      setError('Please select a program')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ program: selectedProgram }),
      })

      const data = await response.json()

      if (response.ok) {
        // In a real implementation, you would integrate with Stripe Elements
        // For now, we'll just show a success message
        alert(`Payment initiated for ${selectedProgram} program (₹${programPrices[selectedProgram as keyof typeof programPrices]})`)
        router.push('/dashboard')
      } else {
        setError(data.error || 'Payment failed')
      }
    } catch (error) {
      setError('Payment failed')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 bg-[var(--accent)]" />
            <Link href="/" className="text-xl font-semibold tracking-wide">Harfa <span className="accent">AI</span></Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">Welcome, {session.user?.name}</span>
            <button
              onClick={() => router.push('/api/auth/signout')}
              className="text-sm text-white/70 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Payment</h1>

        {error && (
          <div className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(programPrices).map(([program, price]) => (
            <div
              key={program}
              className={`rounded-lg border p-6 cursor-pointer transition-all ${
                selectedProgram === program
                  ? 'border-[var(--accent)] bg-[var(--accent)]/10'
                  : 'border-white/10 bg-white/[.03] hover:border-white/20'
              }`}
              onClick={() => setSelectedProgram(program)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{program} Program</h3>
                {selectedProgram === program && (
                  <div className="w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                )}
              </div>
              <p className="text-3xl font-bold text-[var(--accent)] mb-2">₹{price.toLocaleString()}</p>
              <p className="text-sm text-white/60">
                {program === 'Foundation' && '12 weeks intensive program'}
                {program === 'Advanced' && '16 weeks intensive program'}
                {program === 'Gen AI' && '8 weeks intensive program'}
              </p>
            </div>
          ))}
        </div>

        {selectedProgram && (
          <div className="mt-8 p-6 rounded-lg border border-white/10 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{selectedProgram} Program</span>
                <span>₹{programPrices[selectedProgram as keyof typeof programPrices].toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{programPrices[selectedProgram as keyof typeof programPrices].toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full mt-6 bg-[var(--accent)] text-black px-6 py-3 rounded-md font-semibold hover:brightness-110 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
