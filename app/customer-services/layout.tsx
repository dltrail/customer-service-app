import Link from "next/link";
import Nav from "../../Components/Nav/Nav";
import { navLinks } from "../../Components/Nav/navLinks";
import HomeIcon from "@mui/icons-material/Home";
import Header from "@/Components/Header/Header";

export default function CustomerSeviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='md:flex justify-between md:h-screen mt-2'>
      <div className='w-1/4'>
        <Link href='/' className='p-4'>
          <HomeIcon color={"primary"} />
        </Link>

        <Nav navLinks={navLinks} />
      </div>
      <div className='w-3/4 border-l-4 pl-8'>{children}</div>
    </section>
  );
}
