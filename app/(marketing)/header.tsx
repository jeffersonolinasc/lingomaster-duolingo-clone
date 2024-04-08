import Image from "next/image"
import { Loader } from "lucide-react"
import {
    ClerkLoaded,
    ClerkLoading,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="w-full h-20 px-4 border-b-2 border-slate-200">
            <div className="flex items-center justify-between h-full mx-auto lg:max-w-screen-lg">
                <div className="flex items-center pt-8 pl-4 pb-7 gap-x-3">
                    <Image
                        src={"/ic_mascot.svg"}
                        height={40}
                        width={40}
                        alt="mascot of lingomaster"
                    />
                    <h1 className="text-2xl font-extrabold tracking-wide text-green-600">Lingo</h1>
                </div>
                {/* Loading to change between session */}
                <ClerkLoading>
                    <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    {/* Session when user authenticated */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    {/* Session when user not authenticated  */}
                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button size={"lg"} variant={"ghost"}>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}
