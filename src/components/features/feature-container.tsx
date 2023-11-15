import FeatureCard from "./feature-card";
import { features } from "@/config/features";

export default function Feature() {
  return (
    <section id="features" className="relative my-6 lg:my-24 min-h-screen">
      <div>
        <h1 className="head-text primary-gradient">Features</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
        {features
          .map((feature, i) => {
            return <FeatureCard key={i} feature={feature} />;
          })}
      </div>
    </section>
  );
}
