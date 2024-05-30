"use client";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  console.log(sidebarLinks);
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="mb-12 text-center gap-2 cursor-pointer">
          <Image src="/public/calendly.png" alt="logo image" width={32} height={32} />
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              key={item.label}
              href={item.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image src={item.imgURL} alt={item.label} fill />
              </div>{" "}
              <p>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
