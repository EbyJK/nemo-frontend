








// import { useEffect, useState } from 'react'
// import { EmailCard } from './EmailCard'
// import { TodoList } from './TodoList'
// import logo from './assets/logo.png'

// import { User } from '@supabase/supabase-js'
// import { supabase } from './supabase'
// import { Auth } from './Auth'
// const STORAGE_KEY = 'mail-sidebar-tasks'


// type Section = 'summaries' | 'active' | 'completed'

// type Task = {
//   id: number
//   title: string
//   completed: boolean
// }


// export default function App() {

// //   console.log('ENV CHECK', {
// //   url: process.env.REACT_APP_SUPABASE_URL,
// //   key: process.env.REACT_APP_SUPABASE_ANON_KEY
// // })

// const [user, setUser] = useState<User | null>(null)
// const [authChecked, setAuthChecked] = useState(false)
// useEffect(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     setUser(data.session?.user ?? null)
//     setAuthChecked(true)
//   })

//   const { data: listener } = supabase.auth.onAuthStateChange(
//     (_event, session) => {
//       setUser(session?.user ?? null)
//     }
//   )

//   return () => {
//     listener.subscription.unsubscribe()
//   }
// }, [])




//   const [darkMode, setDarkMode] = useState(false)
//   const [hydrated, setHydrated] = useState(false)
//   const [activeSection, setActiveSection] =
//     useState<Section>('summaries')

//   // ✅ SINGLE source of truth
//   // const [tasks, setTasks] = useState<Task[]>([
//   //   { id: 1, title: 'Review budget', completed: false },
//   //   { id: 2, title: 'Send approval email', completed: false },
//   //   { id: 3, title: 'Schedule follow-up meeting', completed: true }
//   // ])

// const [tasks, setTasks] = useState<Task[]>([])




//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode)
//   }, [darkMode])




//   useEffect(() => {
//   const stored = localStorage.getItem(STORAGE_KEY)

//   // if (stored) {
//   //   setTasks(JSON.parse(stored))
//   // } else {
//   //   // initial demo data
//   //   setTasks([
//   //     { id: 1, title: 'Review budget', completed: false },
//   //     { id: 2, title: 'Send approval email', completed: false },
//   //     { id: 3, title: 'Schedule follow-up meeting', completed: true }
//   //   ])
//   // }
// if (stored) {
//   const parsed = JSON.parse(stored)
//   if (parsed.length > 0) {
//     setTasks(parsed)
//     setHydrated(true)
//     return
//   }
// }

// // fallback demo data
// setTasks([
//   { id: 1, title: 'Review budget', completed: false },
//   { id: 2, title: 'Send approval email', completed: false },
//   { id: 3, title: 'Schedule follow-up meeting', completed: true }
// ])


//  setHydrated(true)

// }, [])

// useEffect(() => {
// if (!hydrated) return
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
// }, [tasks,hydrated])



//   const toggleTask = (id: number) => {
//     setTasks(tasks =>
//       tasks.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }


//   if (!authChecked) {
//   return (
//     <div className="h-screen flex items-center justify-center">
//       Loading…
//     </div>
//   )
// }

// if (!user) {
//   return <Auth />
// }

// const handleLogout = async () => {
//   await supabase.auth.signOut()
//   setUser(null)
// }




//   return (
//     <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
//       {/* HEADER */}
//       <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
//         {/* <h1 className="text-lg font-semibold">Nemo</h1> */}
//         <div className="flex items-center gap-2">
//   <img
//     src={logo}
//     alt="Mail Assistant"
//     className="h-9 w-9 object-contain"
//   />
//   <span className="text-lg font-semibold">
//     NEMO
//   </span>
// </div>


        

// <div className="flex items-center gap-3">
//   {/* Logout */}
//   <button
//     onClick={handleLogout}
//     title="Logout"
//     className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
//   >
//     <svg
//       className="w-5 h-5 text-zinc-600 dark:text-zinc-400"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//     >
//       <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
//       <path d="M7 8v8" />
//     </svg>
//   </button>

//   {/* Theme toggle */}
//   <button
//     onClick={() => setDarkMode(!darkMode)}
//     className="relative w-11 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors"
//   >
//     <span
//       className={`absolute top-0.5 left-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-white shadow transition-transform
//         ${darkMode ? 'translate-x-5' : 'translate-x-0'}
//       `}
//     >
//       {darkMode ? (
//         <svg
//           className="w-3 h-3 text-zinc-700"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
//         </svg>
//       ) : (
//         <svg
//           className="w-3 h-3 text-zinc-500"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <circle cx="12" cy="12" r="5" />
//           <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
//         </svg>
//       )}
//     </span>
//   </button>
// </div>


//       </header>

//       <main className="p-4 space-y-3 overflow-y-auto">
//         {/* SUMMARIES */}
//         <SectionHeader
//           title="SUMMARIES"
//           open={activeSection === 'summaries'}
//           onClick={() => setActiveSection('summaries')}
//         />

//         {activeSection === 'summaries' && (
//           <div className="space-y-3">
//             <EmailCard />
//             <EmailCard />
//           </div>
//         )}

//         {/* ACTIVE TASKS */}
//         <SectionHeader
//           title="ACTIVE TASKS"
//           open={activeSection === 'active'}
//           onClick={() => setActiveSection('active')}
//         />

//         {activeSection === 'active' && (
//           <TodoList
//             mode="active"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}

//         {/* COMPLETED TASKS */}
//         <SectionHeader
//           title="COMPLETED TASKS"
//           open={activeSection === 'completed'}
//           onClick={() => setActiveSection('completed')}
//         />

//         {activeSection === 'completed' && (
//           <TodoList
//             mode="completed"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}
//       </main>
//     </div>
//   )
// }

// /* ---------- Section Header ---------- */
// function SectionHeader({
//   title,
//   open,
//   onClick
// }: {
//   title: string
//   open: boolean
//   onClick: () => void
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium
//         ${open
//           ? 'bg-zinc-200 dark:bg-zinc-800'
//           : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
//       `}
//     >
//       {title}
//       <span className="text-xs">{open ? '−' : '+'}</span>
//     </button>
//   )
// }







// import { useEffect, useState } from 'react'
// import { EmailCard } from './EmailCard'
// import { TodoList } from './TodoList'
// import logo from './assets/logo.png'

// import { User } from '@supabase/supabase-js'
// import { supabase } from './supabase'
// import { Auth } from './Auth'

// type Section = 'summaries' | 'active' | 'completed'

// type Task = {
//   id: number
//   title: string
//   completed: boolean
//   due_date?: string
//   priority?: string
// }

// type Summary = {
//   id: string
//   summary: string
//   email_id: string
// }

// const BACKEND_URL = 'http://127.0.0.1:8001'

// export default function App() {
//   /* ---------------- AUTH ---------------- */
//   const [user, setUser] = useState<User | null>(null)
//   const [authChecked, setAuthChecked] = useState(false)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setUser(data.session?.user ?? null)
//       setAuthChecked(true)
//     })

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null)
//       }
//     )

//     return () => {
//       listener.subscription.unsubscribe()
//     }
//   }, [])

//   /* ---------------- UI STATE ---------------- */
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeSection, setActiveSection] =
//     useState<Section>('summaries')

//   /* ---------------- DATA STATE ---------------- */
//   const [tasks, setTasks] = useState<Task[]>([])
//   const [summaries, setSummaries] = useState<Summary[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode)
//   }, [darkMode])

//   /* ---------------- FETCH FROM BACKEND ---------------- */
//   useEffect(() => {
//     if (!user) return

//     async function loadData() {
//       try {
//         const [tasksRes, summariesRes] = await Promise.all([
//           fetch(`${BACKEND_URL}/tasks?completed=false`),
//           fetch(`${BACKEND_URL}/summaries`)
//         ])

//         const tasksData = await tasksRes.json()
//         const summariesData = await summariesRes.json()


//         const adaptedTasks = tasksData.map((t: any, index: number) => ({
//   id: index + 1,               // numeric ID for UI
//   title: t.title,
//   completed: t.completed
// }))
//         setTasks(tasksData)
//         setSummaries(summariesData)
//       } catch (err) {
//         console.error('Failed to load backend data', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadData()
//   }, [user])

//   /* ---------------- TASK TOGGLE (LOCAL ONLY FOR NOW) ---------------- */
//   const toggleTask = (id: string) => {
//     setTasks(tasks =>
//       tasks.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }

//   /* ---------------- AUTH GUARDS ---------------- */
//   if (!authChecked) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading…
//       </div>
//     )
//   }

//   if (!user) {
//     return <Auth />
//   }

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     setUser(null)
//   }

//   /* ---------------- RENDER ---------------- */
//   return (
//     <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
//       {/* HEADER */}
//       <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Mail Assistant"
//             className="h-9 w-9 object-contain"
//           />
//           <span className="text-lg font-semibold">NEMO</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleLogout}
//             title="Logout"
//             className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
//           >
//             ⎋
//           </button>

//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="relative w-11 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700"
//           >
//             <span
//               className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform
//                 ${darkMode ? 'translate-x-5' : 'translate-x-0'}
//               `}
//             />
//           </button>
//         </div>
//       </header>

//       <main className="p-4 space-y-3 overflow-y-auto">
//         {/* SUMMARIES */}
//         <SectionHeader
//           title="SUMMARIES"
//           open={activeSection === 'summaries'}
//           onClick={() => setActiveSection('summaries')}
//         />

//         {activeSection === 'summaries' && (
//           <div className="space-y-3">
//             {loading && <p className="text-sm">Loading summaries…</p>}
//             {summaries.map(s => (
//               <EmailCard key={s.id}> {s.summary} </EmailCard>
//             ))}
//           </div>
//         )}

//         {/* ACTIVE TASKS */}
//         <SectionHeader
//           title="ACTIVE TASKS"
//           open={activeSection === 'active'}
//           onClick={() => setActiveSection('active')}
//         />

//         {activeSection === 'active' && (
//           <TodoList
//             mode="active"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}

//         {/* COMPLETED TASKS */}
//         <SectionHeader
//           title="COMPLETED TASKS"
//           open={activeSection === 'completed'}
//           onClick={() => setActiveSection('completed')}
//         />

//         {activeSection === 'completed' && (
//           <TodoList
//             mode="completed"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}
//       </main>
//     </div>
//   )
// }

// /* ---------- Section Header ---------- */
// function SectionHeader({
//   title,
//   open,
//   onClick
// }: {
//   title: string
//   open: boolean
//   onClick: () => void
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium
//         ${open
//           ? 'bg-zinc-200 dark:bg-zinc-800'
//           : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
//       `}
//     >
//       {title}
//       <span className="text-xs">{open ? '−' : '+'}</span>
//     </button>
//   )
// }








// import { useEffect, useState } from 'react'
// import { TodoList } from './TodoList'
// import logo from './assets/logo.png'

// import { User } from '@supabase/supabase-js'
// import { supabase } from './supabase'
// import { Auth } from './Auth'

// type Section = 'summaries' | 'active' | 'completed'

// type UITask = {
//   id: number
//   title: string
//   completed: boolean
// }

// type Summary = {
//   id: string
//   summary: string
// }

// const BACKEND_URL = 'http://127.0.0.1:8001'

// export default function App() {
//   /* ---------- AUTH ---------- */
//   const [user, setUser] = useState<User | null>(null)
//   const [authChecked, setAuthChecked] = useState(false)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setUser(data.session?.user ?? null)
//       setAuthChecked(true)
//     })

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null)
//       }
//     )

//     return () => {
//       listener.subscription.unsubscribe()
//     }
//   }, [])

//   /* ---------- UI STATE ---------- */
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeSection, setActiveSection] =
//     useState<Section>('summaries')

//   /* ---------- DATA STATE ---------- */
//   const [tasks, setTasks] = useState<UITask[]>([])
//   const [summaries, setSummaries] = useState<Summary[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode)
//   }, [darkMode])

//   /* ---------- FETCH BACKEND DATA ---------- */
//   useEffect(() => {
//     if (!user) return

//     async function loadData() {
//       try {
//         const [tasksRes, summariesRes] = await Promise.all([
//           fetch(`${BACKEND_URL}/tasks?completed=false`),
//           fetch(`${BACKEND_URL}/summaries`)
//         ])

//         const rawTasks = await tasksRes.json()
//         const rawSummaries = await summariesRes.json()

//         // 🔑 Adapt backend → UI shape
//         const uiTasks: UITask[] = rawTasks.map(
//           (t: any, index: number) => ({
//             id: index + 1, // numeric ID for UI
//             title: t.title,
//             completed: t.completed
//           })
//         )

//         setTasks(uiTasks)
//         setSummaries(rawSummaries)
//       } catch (err) {
//         console.error('Failed to load backend data', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadData()
//   }, [user])

//   /* ---------- TASK TOGGLE ---------- */
//   const toggleTask = (id: number) => {
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }

//   /* ---------- AUTH GUARDS ---------- */
//   if (!authChecked) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading…
//       </div>
//     )
//   }

//   if (!user) {
//     return <Auth />
//   }

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     setUser(null)
//   }

//   /* ---------- RENDER ---------- */
//   return (
//     <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
//       {/* HEADER */}
//       <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="h-9 w-9" />
//           <span className="text-lg font-semibold">NEMO</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <button onClick={handleLogout}>Logout</button>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? '🌙' : '☀️'}
//           </button>
//         </div>
//       </header>

//       <main className="p-4 space-y-3 overflow-y-auto">
//         {/* SUMMARIES */}
//         <SectionHeader
//           title="SUMMARIES"
//           open={activeSection === 'summaries'}
//           onClick={() => setActiveSection('summaries')}
//         />

//         {activeSection === 'summaries' && (
//           <div className="space-y-3">
//             {loading && <p>Loading summaries…</p>}
//             {summaries.map(s => (
//               <div
//                 key={s.id}
//                 className="p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-sm"
//               >
//                 {s.summary}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ACTIVE TASKS */}
//         <SectionHeader
//           title="ACTIVE TASKS"
//           open={activeSection === 'active'}
//           onClick={() => setActiveSection('active')}
//         />

//         {activeSection === 'active' && (
//           <TodoList
//             mode="active"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}

//         {/* COMPLETED TASKS */}
//         <SectionHeader
//           title="COMPLETED TASKS"
//           open={activeSection === 'completed'}
//           onClick={() => setActiveSection('completed')}
//         />

//         {activeSection === 'completed' && (
//           <TodoList
//             mode="completed"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}
//       </main>
//     </div>
//   )
// }

// /* ---------- Section Header ---------- */
// function SectionHeader({
//   title,
//   open,
//   onClick
// }: {
//   title: string
//   open: boolean
//   onClick: () => void
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex justify-between items-center px-3 py-2 rounded-lg
//         ${open
//           ? 'bg-zinc-200 dark:bg-zinc-800'
//           : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
//       `}
//     >
//       {title}
//       <span>{open ? '−' : '+'}</span>
//     </button>
//   )
// }




// import { useEffect, useState } from 'react'
// import { EmailCard } from './EmailCard'
// import { TodoList } from './TodoList'
// import logo from './assets/logo.png'

// import { User } from '@supabase/supabase-js'
// import { supabase } from './supabase'
// import { Auth } from './Auth'

// type Section = 'summaries' | 'active' | 'completed'

// type Task = {
//   id: number
//   title: string
//   completed: boolean
// }

// // ✅ NEW: backend URL
// const BACKEND_URL = 'http://127.0.0.1:8001'

// export default function App() {

//   /* ---------- AUTH ---------- */
//   const [user, setUser] = useState<User | null>(null)
//   const [authChecked, setAuthChecked] = useState(false)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setUser(data.session?.user ?? null)
//       setAuthChecked(true)
//     })

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null)
//       }
//     )

//     return () => {
//       listener.subscription.unsubscribe()
//     }
//   }, [])

//   /* ---------- UI STATE ---------- */
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeSection, setActiveSection] =
//     useState<Section>('summaries')

//   /* ---------- DATA STATE ---------- */
//   const [tasks, setTasks] = useState<Task[]>([])
//   const [summaryCount, setSummaryCount] = useState(0)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode)
//   }, [darkMode])

//   /* ---------- ✅ NEW: FETCH FROM BACKEND ---------- */
//   useEffect(() => {
//     if (!user) return

//     async function loadData() {
//       try {
//         const [tasksRes, summariesRes] = await Promise.all([
//           fetch(`${BACKEND_URL}/tasks?completed=false`),
//           fetch(`${BACKEND_URL}/summaries`)
//         ])

//         const rawTasks = await tasksRes.json()
//         const rawSummaries = await summariesRes.json()

//         // 🔑 adapt backend → UI
//         const uiTasks: Task[] = rawTasks.map(
//           (t: any, index: number) => ({
//             id: index + 1,
//             title: t.title,
//             completed: t.completed
//           })
//         )

//         setTasks(uiTasks)
//         setSummaryCount(rawSummaries.length)
//       } catch (err) {
//         console.error('Failed to fetch backend data', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadData()
//   }, [user])

//   /* ---------- TASK TOGGLE ---------- */
//   const toggleTask = (id: number) => {
//     setTasks(tasks =>
//       tasks.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }

//   /* ---------- AUTH GUARDS ---------- */
//   if (!authChecked) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading…
//       </div>
//     )
//   }

//   if (!user) {
//     return <Auth />
//   }

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     setUser(null)
//   }

//   /* ---------- RENDER ---------- */
//   return (
//     <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
//       {/* HEADER */}
//       <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
//         <div className="flex items-center gap-2">
//           <img
//             src={logo}
//             alt="Mail Assistant"
//             className="h-9 w-9 object-contain"
//           />
//           <span className="text-lg font-semibold">NEMO</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <button onClick={handleLogout}>Logout</button>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? '🌙' : '☀️'}
//           </button>
//         </div>
//       </header>

//       <main className="p-4 space-y-3 overflow-y-auto">
//         {/* SUMMARIES */}
//         <SectionHeader
//           title="SUMMARIES"
//           open={activeSection === 'summaries'}
//           onClick={() => setActiveSection('summaries')}
//         />

//         {activeSection === 'summaries' && (
//           <div className="space-y-3">
//             {loading && <p className="text-sm">Loading summaries…</p>}

//             {/* ✅ render same EmailCard, just multiple */}
//             {Array.from({ length: summaryCount }).map((_, i) => (
//               <EmailCard key={i} />
//             ))}
//           </div>
//         )}

//         {/* ACTIVE TASKS */}
//         <SectionHeader
//           title="ACTIVE TASKS"
//           open={activeSection === 'active'}
//           onClick={() => setActiveSection('active')}
//         />

//         {activeSection === 'active' && (
//           <TodoList
//             mode="active"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}

//         {/* COMPLETED TASKS */}
//         <SectionHeader
//           title="COMPLETED TASKS"
//           open={activeSection === 'completed'}
//           onClick={() => setActiveSection('completed')}
//         />

//         {activeSection === 'completed' && (
//           <TodoList
//             mode="completed"
//             tasks={tasks}
//             onToggle={toggleTask}
//           />
//         )}
//       </main>
//     </div>
//   )
// }

// /* ---------- Section Header ---------- */
// function SectionHeader({
//   title,
//   open,
//   onClick
// }: {
//   title: string
//   open: boolean
//   onClick: () => void
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium
//         ${open
//           ? 'bg-zinc-200 dark:bg-zinc-800'
//           : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}
//       `}
//     >
//       {title}
//       <span className="text-xs">{open ? '−' : '+'}</span>
//     </button>
//   )
// }





import { useEffect, useState } from 'react'
import { EmailCard } from './EmailCard'
import { TodoList } from './TodoList'
import logo from './assets/logo.png'

import { User } from '@supabase/supabase-js'
import { supabase } from './supabase'
import { Auth } from './Auth'

type Section = 'emails'| 'summaries' | 'active' | 'completed'

type Task = {
  id: number
  title: string
  completed: boolean
  due_date?: string
  priority?: string
  context?: string
}

type Summary = {
  
  summary: string
  confidence?: number
}
type ClassifiedEmail = {
  id: string
  subject: string
  sender: string
  body: string
  category: 'corporate' | 'personal' | 'spam' | 'promotion'
  detailed_category: string
  confidence: number
}

// ✅ NEW: backend URL
const BACKEND_URL = 'http://127.0.0.1:8000'

export default function App() {

  /* ---------------- AUTH ---------------- */
  const [user, setUser] = useState<User | null>(null)
  const [authChecked, setAuthChecked] = useState(false)
   const [googleConnected, setGoogleConnected] = useState(false)
const [pushingTaskId, setPushingTaskId] = useState<number | null>(null)
const [pushResult, setPushResult] = useState<{
  taskId: number
  calendarLink?: string
} | null>(null)
const [emails, setEmails] = useState<ClassifiedEmail[]>([])


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

  /* ---------------- UI STATE ---------------- */
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] =
    useState<Section>('summaries')

  /* ---------------- DATA STATE ---------------- */
  const [tasks, setTasks] = useState<Task[]>([])
  const [summaryCount, setSummaryCount] = useState(0)
  const [loading, setLoading] = useState(true)
// const [summaries, setSummaries] = useState<any[]>([])

const [summaries, setSummaries] = useState<Summary[]>([])


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  /* ---------------- ✅ FETCH FROM BACKEND ---------------- */
  useEffect(() => {
    if (!user) return

    async function loadData() {
      try {
        const [tasksRes, summariesRes,emailsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/tasks?completed=false`),
          fetch(`${BACKEND_URL}/summaries`),
          fetch(`${BACKEND_URL}/emails/classified`)                 ///gmail/list   for all emails  fetching 
        ])
         
       
        const statusRes = await fetch(`${BACKEND_URL}/calendar/status`)
        const statusData = await statusRes.json()
        setGoogleConnected(statusData.connected)


        const rawTasks = await tasksRes.json()
        const rawSummaries = await summariesRes.json()
          const rawEmails = await emailsRes.json()
          //emails from classifier
          setEmails(rawEmails.emails)
        // Adapt backend → existing UI Task type
        const uiTasks: Task[] = rawTasks.map(
          (t: any, index: number) => ({
            id: index + 1,
            title: t.title,
            completed: t.completed,
            due_date:t.due_date,
            priority:t.priority,
            context:t.context
          })
        )

        setTasks(uiTasks)
        setSummaryCount(rawSummaries.length)
        setSummaries(rawSummaries)

      } catch (err) {
        console.error('Backend fetch failed', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [user])

  /* ---------------- TASK TOGGLE (UNCHANGED) ---------------- */
  const toggleTask = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }
  const pushToCalendar = async (task: Task) => {
    let dueDateToSend = task.due_date
// If backend gave only a date (YYYY-MM-DD), assume 9 AM IST
if (dueDateToSend && !dueDateToSend.includes('T')) {
  dueDateToSend = `${dueDateToSend}T09:00:00`
}

  try {
    setPushingTaskId(task.id)
    setPushResult(null)

    const res = await fetch(`${BACKEND_URL}/calendar/push`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: task.title,
        // due_date: task.due_date
        due_date: dueDateToSend

      })
    })
    //  console.log("Pushing due_date:", task.due_date)
    console.log("Pushing due_date:", dueDateToSend)
    const data = await res.json()

    if (data.event_link) {
      setPushResult({
        taskId: task.id,
        calendarLink: data.event_link
      })

      // optional: open automatically
      // window.open(data.event_link, '_blank')
    } else {
      console.error('Calendar push failed', data)
    }
  } catch (err) {
    console.error('Calendar error', err)
  } finally {
    setPushingTaskId(null)
  }
}


  /* ---------------- AUTH GUARDS ---------------- */
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

  /* ---------------- RENDER (UNCHANGED UI) ---------------- */
  return (
    <div className="h-screen w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b dark:border-zinc-700" style={{ WebkitAppRegion: 'drag' }as React.CSSProperties}>
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
         
<div className="flex items-center gap-2">
  <button
  onClick={() => window.electronAPI?.toggleAlwaysOnTop()}
  style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
  title="Toggle always on top"
  className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
>
  📌
</button>

  {/* Minimize */}
  <button
    onClick={() => window.electronAPI?.minimize()}
    style={{ WebkitAppRegion: 'no-drag' }as React.CSSProperties}
    title="Minimize"
    className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    —
  </button>

  {/* Close */}
  <button
    onClick={() => window.electronAPI?.close()}
    style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}

    title="Close"
    className="p-1 rounded hover:bg-red-200 dark:hover:bg-red-800"
  >
    ×
  </button>
</div>






        <div className="flex items-center gap-3">
          {/* Logout */}
          <button
            onClick={handleLogout}
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}

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
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}

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

        {/*Emails */}
        <SectionHeader
      title="EMAILS"
        open={activeSection === 'emails'}
      onClick={() => setActiveSection('emails')}
        />
        {activeSection === 'emails' && (
  <div className="space-y-3">
    {emails.length === 0 && (
      <p className="text-sm text-zinc-500">
        No unread emails
      </p>
    )}

    {emails.map(email => (
      <div
        key={email.id}
        className="p-3 rounded-lg border dark:border-zinc-700"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">{email.subject}</p>
            <p className="text-xs text-zinc-500">
              {email.sender}
            </p>
          </div>

          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {email.detailed_category}
          </span>
        </div>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
          {email.body}
        </p>

        <p className="mt-1 text-xs text-zinc-400">
          Category: {email.category} • Confidence: {(email.confidence * 100).toFixed(1)}%
        </p>
      </div>
    ))}
  </div>
)}



        {/* SUMMARIES */}
        <SectionHeader
          title="SUMMARIES"
          open={activeSection === 'summaries'}
          onClick={() => setActiveSection('summaries')}
        />

        {activeSection === 'summaries' && (
          <div className="space-y-3">
            {loading && <p className="text-sm">Loading summaries…</p>}
            {/* {Array.from({ length: summaryCount }).map((_, i) => (
              <EmailCard key={i} />
            ))} */}

            {/* {summaries.map((s) => (
  <EmailCard key={s.id} summary={s.summary} />
))} */}   
{summaries.map((s, i) => (
  <EmailCard
    key={i}
    summary={s.summary}
    confidence={s.confidence}
  />
))}


          </div>
        )}

        {/* ACTIVE TASKS */}
        <SectionHeader
          title="ACTIVE TASKS"
          open={activeSection === 'active'}
          onClick={() => setActiveSection('active')}
        />
        {!googleConnected && (
  <div className="mb-3 p-3 rounded-lg bg-blue-50 dark:bg-zinc-800 border border-blue-200 dark:border-zinc-700">
    <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
      Connect Google Calendar to push tasks automatically.
    </p>

    <button
      onClick={() => window.open(`${BACKEND_URL}/calendar/auth`, '_blank')}
      className="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Connect Google Calendar
    </button>
  </div>
)}

{googleConnected && (
  <div className="mb-2 text-xs text-green-600 dark:text-green-400">
    ✅ Google Calendar connected
  </div>
)}


        {activeSection === 'active' && (
          <TodoList
            mode="active"
            tasks={tasks}
            onToggle={toggleTask}
            googleConnected={googleConnected}
             onPush={pushToCalendar}
            pushingTaskId={pushingTaskId}
           pushResult={pushResult}

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
            googleConnected={googleConnected}
            onPush={pushToCalendar}
            pushingTaskId={pushingTaskId}
            pushResult={pushResult}
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
      style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}

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
