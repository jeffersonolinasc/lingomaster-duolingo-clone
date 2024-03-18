import Image from "next/image"
import Link from "next/link"
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

import { cn } from "@/lib/utils"
import { SidebarItem } from "@/components/sidebar-item"

type Props = {
    className?: string
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                // if you want to check the size add bg-blue-500
                "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
                className
            )}>
            <Link href={"/learn"}>
                <div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
                    <Image src={"/ic_mascot.svg"} height={40} width={40} alt="mascot of lingomaster" />
                    <h1 className="text-2xl font-extrabold tracking-wide text-green-600">Lingo</h1>
                </div>
            </Link>

            {/* flex-1 is growth size if needed */}
            <div className="flex flex-col flex-1 gap-y-2">
                <SidebarItem label="Learn" href="/learn" iconSrc="/ic_learn.svg" />
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/ic_leaderboard.svg" />
                <SidebarItem label="Quests" href="/quests" iconSrc="/ic_quests.svg" />
                <SidebarItem label="Shop" href="/shop" iconSrc="/ic_shop.svg" />
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}
