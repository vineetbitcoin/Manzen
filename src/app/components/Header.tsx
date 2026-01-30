import { Bell, Search, Settings, HelpCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              3
            </Badge>
          </button>
          
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
