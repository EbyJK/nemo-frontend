export function EmailCard() {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h2 className="font-medium">Quarterly Budget Review</h2>

      <p className="text-sm text-zinc-600 mt-1">
        Finance team shared the budget proposal and requested approval.
      </p>

      <ul className="mt-3 list-disc ml-4 text-sm">
        <li>Review budget</li>
        <li>Send approval email</li>
      </ul>
    </div>
  )
}
