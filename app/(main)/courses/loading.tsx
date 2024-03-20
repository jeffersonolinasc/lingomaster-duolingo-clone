// this is a loading state for the courses page

import { Loader } from "lucide-react"

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
        </div>
    )
}
