import { Hero, Choice, About, Gift } from "@/Components";

export default function Home() {
  return (
    <main className=' grid place-content-center'>
        <Hero />
      <About />
      <Choice />
      <Gift />
    </main>
  );
}
