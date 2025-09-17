"use client"

export default function Topbar({ activeSection }) {
  const getSectionTitle = () => {
    switch (activeSection) {
      case "programs":
        return "Program Management"
      case "classSettings":
        return "Class Settings Management"
      default:
        return "Dashboard"
    }
  }

  return (
    <div className="h-12 bg-muted border-b border-border flex items-center px-6">
      <h2 className="text-lg font-semibold text-foreground">{getSectionTitle()}</h2>
    </div>
  )
}
