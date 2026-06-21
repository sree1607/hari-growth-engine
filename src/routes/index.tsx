import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import {
  ProblemsSolve, FeaturedAudits, FrameworkPreview, CaseStudiesPreview, ProofPreview, BottomCTA,
} from "@/components/home/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hari — Product, Growth & UX Analysis" },
      { name: "description", content: "I find what is holding your product back. Deep analysis for founders and teams who want real growth." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProblemsSolve />
      <FeaturedAudits />
      <FrameworkPreview />
      <CaseStudiesPreview />
      <ProofPreview />
      <BottomCTA />
    </>
  );
}
