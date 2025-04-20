import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="py-3 px-5 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo of application"
            width={144}
            height={30}
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create" className="">
                <span>Create</span>
              </Link>
              <form action={async() => {
                "use server"

                await signOut({redirectTo: "/" });
            }} >
              <button type="submit">
                <span>Logout</span>
              </button>
            </form>
             <Link href={`user/${session?.id}`} >
                <span>{session?.user?.name}</span>
            </Link>
            </>
          ) : (
            <form action={async() => {
                "use server"

                await signIn('github');
            }} >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
