"use client";
import Header from "@/Components/Header/Header";
import Link from "next/link";

function Home() {
  return (
    <main className='text-center flex flex-col justify-center align-middle h-screen mt-4'>
      <Header title='Dummy landing page' />
      <Link
        href='/customer-services'
        className='links border p-4 inline-block hover:bg-black hover:text-white w-[230px] m-auto translate-y-[0%]'
      >
        customer services
      </Link>
    </main>
  );
}

export default Home;
