import Link from "next/link";
import Nav from "../../Components/Nav/Nav";
import { navLinks } from "../../Components/Nav/navLinks";
import HomeIcon from "@mui/icons-material/Home";

export default function CustomerSeviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='md:flex justify-between md:h-screen mt-2'>
      <div className='w-full md:w-1/4 flex justify-center bg-white'>
        <Link href='/' className='absolute left-4 top-2 z-50'>
          <HomeIcon color={"primary"} />
        </Link>

        <Nav navLinks={navLinks} />
      </div>
      <div className='w-full md:w-3/4 border-l-4 pl-8'>{children}</div>
    </section>
  );
}
