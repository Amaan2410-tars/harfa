'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Application {
  id: string
  program: string
  status: string
  message?: string
  created_at: string
}

interface Enrollment {
  id: string
  program: string
  status: string
  progress: number
  start_date: string
  end_date: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [applications, setApplications] = useState<Application[]>([])
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (session) {
      fetchData()
    }
  }, [session, status, router])

  const fetchData = async () => {
    try {
      const [appsRes, enrollRes] = await Promise.all([
        fetch('/api/applications'),
        fetch('/api/enrollments')
      ])

      if (appsRes.ok) {
        const apps = await appsRes.json()
        setApplications(apps)
      }

      if (enrollRes.ok) {
        const enrolls = await enrollRes.json()
        setEnrollments(enrolls)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const submitApplication = async (program: string) => {
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ program, message: '' }),
      })

      if (response.ok) {
        fetchData() // Refresh data
      }
    } catch (error) {
      console.error('Failed to submit application:', error)
    }
  }

  if (status === 'loading' || loading) {
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

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Applications</h3>
            <p className="text-3xl font-bold text-[var(--accent)]">{applications.length}</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Enrollments</h3>
            <p className="text-3xl font-bold text-green-400">{enrollments.length}</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <p className="text-3xl font-bold text-blue-400">
              {enrollments.length > 0 ? `${Math.round(enrollments.reduce((acc, e) => acc + e.progress, 0) / enrollments.length)}%` : '0%'}
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="rounded-lg border border-white/10 bg-white/[.03] mb-8">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold">Your Applications</h2>
          </div>
          <div className="p-6">
            {applications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-white/60 mb-4">No applications yet</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => submitApplication('Foundation')}
                    className="px-4 py-2 bg-[var(--accent)] text-black rounded-md font-semibold hover:brightness-110"
                  >
                    Apply for Foundation
                  </button>
                  <button
                    onClick={() => submitApplication('Advanced')}
                    className="px-4 py-2 bg-[var(--accent)] text-black rounded-md font-semibold hover:brightness-110"
                  >
                    Apply for Advanced
                  </button>
                  <button
                    onClick={() => submitApplication('Gen AI')}
                    className="px-4 py-2 bg-[var(--accent)] text-black rounded-md font-semibold hover:brightness-110"
                  >
                    Apply for Gen AI
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                    <div>
                      <h3 className="font-semibold">{app.program} Program</h3>
                      <p className="text-sm text-white/60">
                        Applied on {new Date(app.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-md text-sm ${
                      app.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                      app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Enrollments */}
        {enrollments.length > 0 && (
          <div className="rounded-lg border border-white/10 bg-white/[.03]">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold">Your Enrollments</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {enrollments.map((enrollment) => (
                  <div key={enrollment.id} className="p-4 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{enrollment.program} Program</h3>
                      <span className={`px-3 py-1 rounded-md text-sm ${
                        enrollment.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        enrollment.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {enrollment.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-white/60 mb-1">
                        <span>Progress</span>
                        <span>{enrollment.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-[var(--accent)] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${enrollment.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-white/60">
                      <span>Start: {new Date(enrollment.start_date).toLocaleDateString()}</span>
                      <span>End: {new Date(enrollment.end_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
