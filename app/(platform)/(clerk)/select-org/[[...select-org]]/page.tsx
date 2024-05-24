import { ClerkLoaded, ClerkLoading, OrganizationList } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function CreateOrganizationPage() {
    return <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
            <div className="text-center spage-y-4 pt-16">
                <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>

            </div>
            <div className="flex items-center justify-center mt-8">
                <ClerkLoaded>
                    <OrganizationList hidePersonal
                        afterCreateOrganizationUrl="/organization/:id"
                        afterSelectOrganizationUrl="/organization/:id"
                    />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin  text-muted-foreground" />
                </ClerkLoading>
            </div>
        </div>

        <div className="h-full bg-blue-200 hidden lg:flex items-center justify-center">
            <Image src="/logo.svg" height={100} width={100} alt="Logo" />
        </div>
    </div>
}