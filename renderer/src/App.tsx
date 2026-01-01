








import { useEffect, useState } from 'react'
import { EmailCard } from './EmailCard'
import { TodoList } from './TodoList'
import logo from './assets/logo.png'

import { User } from '@supabase/supabase-js'
import { supabase } from './supabase'
import { Auth } from './Auth'
const STORAGE_KEY = 'mail-sidebar-tasks'


type Section = 'summaries' | 'active' | 'completed'

type Task = {
  id: number
  title: string
  completed: boolean
}


export default function App() {

//   console.log('ENV CHECK', {
//   url: process.env.REACT_APP_SUPABASE_URL,
//   key: process.env.REACT_APP_SUPABASE_ANON_KEY
// })

const [user, setUser] = useState<User | null>(null)
const [authChecked, setAuthChecked] = useState(false)
useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    setUser(data.session?.user ?? null)
    setAuthChecked(true)
  })

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setUser(session?.user ?? null)
    }
  )

  return () => {
    listener.subscription.unsubscribe()
  }
}, [])




  const [darkMode, setDarkMode] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [activeSection, setActiveSection] =
    useState<Section>('summaries')

  // ✅ SINGLE source of truth
  // const [tasks, setTasks] = useState<Task[]>([
  //   { id: 1, title: 'Review budget', completed: false },
  //   { id: 2, title: 'Send approval email', completed: false },
  //   { id: 3, title: 'Schedule follow-up meeting', completed: true }
  // ])

const [tasks, setTasks] = useState<Task[]>([])




  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])




  useEffect(() => {
  const stored = localStorage.getItem(STORAGE_KEY)

  // if (stored) {
  //   setTasks(JSON.parse(stored))
  // } else {
  //   // initial demo data
  //   setTasks([
  //     { id: 1, title: 'Review budget', completed: false },
  //     { id: 2, title: 'Send approval email', completed: false },
  //     { id: 3, title: 'Schedule follow-up meeting', completed: true }
  //   ])
  // }
if (stored) {
  const parsed = JSON.parse(stored)
  if (parsed.length > 0) {
    setTasks(parsed)
    setHydrated(true)
    return
  }
}

// fallback demo data
setTasks([
  { id: 1, title: 'Review budget', completed: false },
  { id: 2, title: 'Send approval email', completed: false },
  { id: 3, title: 'Schedule follow-up meeting', completed: true }
])


 setHydrated(true)

}, [])

useEffect(() => {
if (!hydrated) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}, [tasks,hydrated])



  const toggleTask = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }


  if (!authChecked) {
  return (
    <div className="h-screen flex items-center justify-center">
      Loading…
    </div>
  )
}

if (!user) {
  return <Auth />
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  setUser(null)
}




  return (
    <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
        {/* <h1 className="text-lg font-semibold">Nemo</h1> */}
        <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="Mail Assistant"
    className="h-9 w-9 object-contain"
  />
  <span className="text-lg font-semibold">
    NEMO
  </span>
</div>


        

<div className="flex items-center gap-3">
  {/* Logout */}
  <button
    onClick={handleLogout}
    title="Logout"
    className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    <svg
      className="w-5 h-5 text-zinc-600 dark:text-zinc-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
      <path d="M7 8v8" />
    </svg>
  </button>

  {/* Theme toggle */}
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="relative w-11 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors"
  >
    <span
      className={`absolute top-0.5 left-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-white shadow transition-transform
        ${darkMode ? 'translate-x-5' : 'translate-x-0'}
      `}
    >
      {darkMode ? (
        <svg
          className="w-3 h-3 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      ) : (
        <svg
          className="w-3 h-3 text-zinc-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </span>
  </button>
</div>


      </header>

      <main className="p-4 space-y-3 overflow-y-auto">
        {/* SUMMARIES */}
        <SectionHeader
          title="SUMMARIES"
          open={activeSection === 'summaries'}
          onClick={() => setActiveSection('summaries')}
        />

        {activeSection === 'summaries' && (
          <div className="space-y-3">
            <EmailCard />
            <EmailCard />
          </div>
        )}

        {/* ACTIVE TASKS */}
        <SectionHeader
          title="ACTIVE TASKS"
          open={activeSection === 'active'}
          onClick={() => setActiveSection('active')}
        />

        {activeSection === 'active' && (
          <TodoList
            mode="active"
            tasks={tasks}
            onToggle={toggleTask}
          />
        )}

        {/* COMPLETED TASKS */}
        <SectionHeader
          title="COMPLETED TASKS"
          open={activeSection === 'completed'}
          onClick={() => setActiveSection('completed')}
        />

        {activeSection === 'completed' && (
          <TodoList
            mode="completed"
            tasks={tasks}
            onToggle={toggleTask}
          />
        )}
      </main>
    </div>
  )
}

/* ---------- Section Header ---------- */
function SectionHeader({
  title,
  open,
  onClick
}: {
  title: string
  open: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium
        ${open
          ? 'bg-zinc-200 dark:bg-zinc-800'
          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
      `}
    >
      {title}
      <span className="text-xs">{open ? '−' : '+'}</span>
    </button>
  )
}

