

// import { useState } from 'react'

// type Task = {
//   id: number
//   title: string
//   completed: boolean
// }

// export function TodoList({
//   mode
// }: {
//   mode: 'active' | 'completed'
// }) {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: 'Review budget', completed: false },
//     { id: 2, title: 'Send approval email', completed: false },
//     { id: 3, title: 'Schedule follow-up meeting', completed: true }
//   ])

//   const toggleTask = (id: number) => {
//     setTasks(tasks =>
//       tasks.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }

//   const filteredTasks = tasks.filter(task =>
//     mode === 'active'
//       ? !task.completed
//       : task.completed
//   )

//   if (filteredTasks.length === 0) {
//     return (
//       <p className="text-sm text-zinc-500 px-2">
//         No tasks here
//       </p>
//     )
//   }

//   return (
//     <div className="space-y-2">
//       {filteredTasks.map(task => (
//         <label
//           key={task.id}
//           className={`flex items-center gap-2 text-sm cursor-pointer
//             ${task.completed ? 'text-zinc-400' : ''}
//           `}
//         >
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => toggleTask(task.id)}
//           />
//           <span className={task.completed ? 'line-through' : ''}>
//             {task.title}
//           </span>
//         </label>
//       ))}
//     </div>
//   )
// }


// import { useState } from 'react'

// type Task = {
//   id: number
//   title: string
//   completed: boolean
// }

// export function TodoList({
//   mode
// }: {
//   mode: 'active' | 'completed'
// }) {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: 'Review budget', completed: false },
//     { id: 2, title: 'Send approval email', completed: false },
//     { id: 3, title: 'Schedule follow-up meeting', completed: true }
//   ])

//   const toggleTask = (id: number) => {
//     setTasks(tasks =>
//       tasks.map(task =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     )
//   }

//   const filteredTasks = tasks.filter(task =>
//     mode === 'active'
//       ? !task.completed
//       : task.completed
//   )

//   if (filteredTasks.length === 0) {
//     return (
//       <p className="text-sm text-zinc-500 px-2">
//         No tasks here
//       </p>
//     )
//   }

//   return (
//     <div className="space-y-2">
//       {filteredTasks.map(task => (
//         <label
//           key={task.id}
//           className={`flex items-center gap-2 text-sm cursor-pointer
//             ${task.completed ? 'text-zinc-400' : ''}
//           `}
//         >
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => toggleTask(task.id)}
//           />
//           <span className={task.completed ? 'line-through' : ''}>
//             {task.title}
//           </span>
//         </label>
//       ))}
//     </div>
//   )
// }

import { useState } from 'react'
type Task = {
  id: number
  title: string
  completed: boolean
  due_date?: string
  priority?: string
  context?: string
}

type TodoListProps = {
  mode: 'active' | 'completed'
  tasks: Task[]
  onToggle: (id: number) => void
}

export function TodoList({
  mode,
  tasks,
  onToggle
}: TodoListProps) {
  const filteredTasks = tasks.filter(task =>
    mode === 'active' ? !task.completed : task.completed
  )

  if (filteredTasks.length === 0) {
    return (
      <p className="text-sm text-zinc-500 px-2">
        No tasks here
      </p>
    )
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map(task => (
        // <label
        //   key={task.id}
        //   className={`flex items-center gap-2 text-sm cursor-pointer
        //     ${task.completed ? 'text-zinc-400' : ''}
        //   `}
        // >
        //   <input
        //     type="checkbox"
        //     checked={task.completed}
        //     onChange={() => onToggle(task.id)}
        //   />
        //   <span className={task.completed ? 'line-through' : ''}>
        //     {task.title}
        //   </span>
        // </label>

        <li
  key={task.id}
  className="flex flex-col gap-1 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
>
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
    />

   <span
  className={`font-medium ${
    task.completed ? 'line-through text-zinc-400' : ''
  }`}
>
  {task.title}
</span>

    {task.priority && (
      <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200">
        {task.priority.toUpperCase()}
      </span>
    )}
  </div>

  {task.due_date && (
    <span className="text-xs text-zinc-500">
      📅 Due: {new Date(task.due_date).toLocaleString()}
    </span>
  )}

  {task.context && (
    <span className="text-xs text-zinc-400 italic">
      {task.context}
    </span>
  )}
</li>

      ))}
    </div>
  )
}
