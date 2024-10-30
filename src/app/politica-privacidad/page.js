import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Privacy from '@/components/Privacy'
import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Privacy />
      <Footer />
    </main>
  )
}
