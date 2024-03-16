import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col  text-center gap-1">
        <span className="text-5xl">Hola mundo</span>
        <Link href={'/about'}>About page</Link>
      </div>
    </main>
  );
}
