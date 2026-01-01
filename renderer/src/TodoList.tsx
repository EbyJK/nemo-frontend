

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
        <label
          key={task.id}
          className={`flex items-center gap-2 text-sm cursor-pointer
            ${task.completed ? 'text-zinc-400' : ''}
          `}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className={task.completed ? 'line-through' : ''}>
            {task.title}
          </span>
        </label>
      ))}
    </div>
  )
}
