import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Home() {
    return (
        <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-y-3 gap-x-10">
            <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                <Image src={"/img_hero.svg"} fill alt="Hero image" />
            </div>
            <div className="flex flex-col items-center gap-y-8">
                <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
                    Learn, practice, and master new languages with LingoMaster.
                </h1>
                <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
                    {/* Loading to change between session */}
                    <ClerkLoading>
                        <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        {/* Session when user not auth */}
                        <SignedOut>
                            <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                                <Button size={"lg"} variant={"secondary"}>
                                    Get Started
                                </Button>
                            </SignUpButton>
                            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                                <Button size={"lg"} variant={"primaryOutline"}>
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        {/* Session when user success auth */}
                        <SignedIn>
                            <Button size={"lg"} variant={"secondary"} className="w-full" asChild>
                                <Link href={"/learn"}>Continue Learning</Link>
                            </Button>
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </div>
        </div>
    )
}
