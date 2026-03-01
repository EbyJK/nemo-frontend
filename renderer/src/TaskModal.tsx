import React from "react"

type TaskModalProps = {
  task: any
  email: any
  onClose: () => void
}

export function TaskModal({ task, email, onClose }: TaskModalProps) {
  if (!task) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-xl w-full max-w-lg">

        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Task Details
          </h2>
          <button onClick={onClose} className="text-xl">×</button>
        </div>

        {/* Task Info */}
        <div className="space-y-2 text-sm">
          <p><strong>Title:</strong> {task.title}</p>

          {task.due_date && (
            <p><strong>Due Date:</strong> {new Date(task.due_date).toLocaleString()}</p>
          )}

          {task.priority && (
            <p><strong>Priority:</strong> {task.priority}</p>
          )}

          {task.context && (
            <p><strong>Context:</strong> {task.context}</p>
          )}

          {task.source_sentence && (
            <p className="italic text-zinc-500">
              "{task.source_sentence}"
            </p>
          )}
        </div>

        <hr className="my-3" />

        {/* Email Preview */}
        {email && (
          <div className="text-sm">
            <p className="font-semibold">{email.subject}</p>
            <p className="text-xs text-pink-500">{email.sender}</p>

            <p className="mt-2 whitespace-pre-line text-zinc-700 dark:text-zinc-300 line-clamp-5">
              {email.body}
            </p>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-4 text-right">
          {email?.gmail_id && (
            <a
              href={`https://mail.google.com/mail/u/0/#inbox/${email.gmail_id}`}
              target="_blank"
              className="mr-4 text-blue-600"
            >
              Open in Gmail
            </a>
          )}
          
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}