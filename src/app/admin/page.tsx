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
  users: {
    id: string
    email: string
    full_name: string
    phone?: string
  }
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }

    if (session) {
      fetchApplications()
    }
  }, [session, status, router])

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/admin/applications')
      if (response.ok) {
        const data = await response.json()
        setApplications(data)
      } else {
        setError('Failed to fetch applications')
      }
    } catch (error) {
      setError('Failed to fetch applications')
    } finally {
      setLoading(false)
    }
  }

  const updateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      const response = await fetch('/api/admin/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId, status }),
      })

      if (response.ok) {
        setApplications(prev => 
          prev.map(app => 
            app.id === applicationId 
              ? { ...app, status }
              : app
          )
        )
      } else {
        setError('Failed to update application')
      }
    } catch (error) {
      setError('Failed to update application')
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
            <span className="text-sm text-white/70">Admin Dashboard</span>
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
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {error && (
          <div className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
            <p className="text-3xl font-bold text-[var(--accent)]">{applications.length}</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Pending</h3>
            <p className="text-3xl font-bold text-yellow-400">
              {applications.filter(app => app.status === 'pending').length}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/[.03]">
            <h3 className="text-lg font-semibold mb-2">Approved</h3>
            <p className="text-3xl font-bold text-green-400">
              {applications.filter(app => app.status === 'approved').length}
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[.03]">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold">Applications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left p-4">Student</th>
                  <th className="text-left p-4">Program</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Applied</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-white/5">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{app.users.full_name}</p>
                        <p className="text-sm text-white/60">{app.users.email}</p>
                        {app.users.phone && (
                          <p className="text-sm text-white/60">{app.users.phone}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-md bg-[var(--accent)]/20 text-[var(--accent)] text-sm">
                        {app.program}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-md text-sm ${
                        app.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                        app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-white/60">
                      {new Date(app.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {app.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateApplicationStatus(app.id, 'approved')}
                              className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm hover:bg-green-500/30"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateApplicationStatus(app.id, 'rejected')}
                              className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-sm hover:bg-red-500/30"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {app.message && (
                          <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm hover:bg-blue-500/30">
                            View Message
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
