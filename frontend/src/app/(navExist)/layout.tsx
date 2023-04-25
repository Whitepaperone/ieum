import Nav from "@/components/nav";

export default function navLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100%]">
      <Nav />
      <div className="h-[92%]">{children}</div>
    </div>
  );
}