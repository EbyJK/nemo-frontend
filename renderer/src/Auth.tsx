
import { useState } from 'react'
import { supabase } from './supabase'

export function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) alert(error.message)
    setLoading(false)
  }

  const signUp = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) alert(error.message)
    setLoading(false)
  }

  return (
           
   



    <div className="h-screen flex flex-col justify-center p-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
       <div className="flex gap-2">
    <button onClick={() => window.electronAPI?.minimize()}>_</button>
    <button onClick={() => window.electronAPI?.toggleAlwaysOnTop()}>📌</button>
    <button onClick={() => window.electronAPI?.close()}>X</button>
  </div>
      <h2 className="text-lg font-semibold mb-4">
        Sign in to NEMO 
      </h2>

      <input
        className="mb-2 p-2 border rounded dark:bg-zinc-800"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="mb-4 p-2 border rounded dark:bg-zinc-800"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={signIn}
        disabled={loading}
        className="mb-2 p-2 bg-black text-white rounded"
      >
        Sign In
      </button>

      <button
        onClick={signUp}
        disabled={loading}
        className="p-2 border rounded"
      >
        Create Account
      </button>
    </div>
  )
}
