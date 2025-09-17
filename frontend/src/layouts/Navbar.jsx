import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, User, Search, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left side - Logo + Search */}
      <div className="flex items-center gap-8">
        {/* Schedura Logo (shadcn style) */}
        <Button variant="ghost" className="flex items-center gap-2 px-0 hover:bg-transparent">
          <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
            <AvatarFallback>
              <Calendar className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
         <span className="text-2xl font-semibold text-primary tracking-tight">
  Schedura
</span>
        </Button>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 w-64"
            type="text"
          />
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Notifications" type="button">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="User Profile" type="button">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
