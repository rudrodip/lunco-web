import Hero from "@/components/header/hero";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";

const DynamicEarth = dynamic(() => import("@/components/three-scenes/earth"), {
  loading: () => <span className="flex justify-center items-center"><Spinner /></span>
});

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
