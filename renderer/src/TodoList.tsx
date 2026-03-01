

import { motion, AnimatePresence } from "framer-motion"

type Task = {
  id: string
  title: string
  completed: boolean
  due_date?: string
  priority?: string
  context?: string
}

type TodoListProps = {
  mode: "active" | "completed"
  tasks: Task[]
  onToggle: (id: string) => void
  googleConnected: boolean
  onPush: (task: Task) => void
  onOpenDetails: (task: Task) => void
  pushingTaskId: string | null
  pushResult: {
    taskId: string
    calendarLink?: string
  } | null
  

}

export function TodoList({
  mode,
  tasks,
  onToggle,
  googleConnected,
  onPush,
  pushingTaskId,
  pushResult,
  onOpenDetails
}: TodoListProps) {

  const filteredTasks = tasks.filter(t =>
    mode === "active" ? !t.completed : t.completed
  )

  if (filteredTasks.length === 0) {
    return <p className="text-sm text-zinc-500 px-2">No tasks here</p>
  }

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {filteredTasks.map(task => {
          const isOverdue =
            task.due_date && !task.completed &&
            new Date(task.due_date) < new Date()

          return (
            <motion.li
              key={task.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className={`flex flex-col gap-1 p-3 rounded-xl border 
                transition shadow-sm
                ${task.completed
                  ? "bg-zinc-100/60 dark:bg-zinc-800/60 border-zinc-300 dark:border-zinc-700 opacity-70"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 hover:shadow-md"
                }
              `}
            >
              <div className="flex items-center gap-3">

                {/* Checkbox with animation */}
                <motion.input
                  whileTap={{ scale: 0.85 }}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggle(task.id)}
                  className="h-4 w-4 accent-blue-600"
                />

                {/* Title */}
                <span 
                onClick={() => onOpenDetails(task)}
                className={`
                  font-medium transition-all cursor-pointer hover:underline
                  ${task.completed
                    ? "line-through text-zinc-400"
                    : "text-zinc-800 dark:text-zinc-100"
                  }
                `}>
                  {task.title}
                </span>

                {/* Priority Badge */}
                {task.priority && (
                  <span className={`
                    text-xs px-2 py-0.5 rounded-md font-semibold
                    ${task.priority === "high"
                      ? "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : task.priority === "medium"
                        ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }
                  `}>
                    {task.priority.toUpperCase()}
                  </span>
                )}

              </div>

              {/* Due Date */}
              {task.due_date && (
                <span className={`
                  text-xs 
                  ${isOverdue ? "text-red-500 font-semibold" : "text-zinc-500"}
                `}>
                  📅 Due: {new Date(task.due_date).toLocaleString()}
                </span>
              )}

              {/* Context */}
              {task.context && (
                <span className="text-xs text-zinc-400 italic">
                  {task.context}
                </span>
              )}

              {/* Push to Calendar */}
              {mode === "active" && task.due_date && (
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  disabled={!googleConnected || pushingTaskId === task.id}
                  onClick={() => onPush(task)}
                  className={`mt-1 px-3 py-1 rounded text-xs font-medium transition
                    ${googleConnected
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-zinc-400 text-zinc-200 cursor-not-allowed"}
                  `}
                >
                  {pushingTaskId === task.id ? "Adding…" : "Push to Calendar"}
                </motion.button>
              )}

              {/* Push Success Badge */}
              {pushResult?.taskId === task.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 flex items-center gap-2"
                >
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Calendar updated
                  </span>

                  {pushResult.calendarLink && (
                    <a
                      href={pushResult.calendarLink}
                      target="_blank"
                      className="text-xs text-green-700 hover:text-green-800"
                    >
                      View
                    </a>
                  )}
                </motion.div>
              )}
            </motion.li>
          )
        })}
      </AnimatePresence>
    </div>
  )
}