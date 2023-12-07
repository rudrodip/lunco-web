import Hero from "@/components/header/hero";
import dynamic from "next/dynamic";

const DynamicVision = dynamic(() => import("@/components/vision/vision"), {
  loading: () => <></>,
});
const DynamicFeature = dynamic(
  () => import("@/components/features/feature-container"),
  { loading: () => <></> }
);

export default function App() {
  return (
    <main className="">
      <Hero />
      <DynamicVision />
      <DynamicFeature />
    </main>
  );
}
