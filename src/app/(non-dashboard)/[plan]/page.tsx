import PlanDetailsPage from "@/components/PlanDetailsPage";

interface PlanPageProps {
  params: Promise<{ plan: string }>;
}

export const dynamic = 'force-dynamic';

export default async function PlanPage({ params }: PlanPageProps) {
  const { plan } = await params;
  // translate slug (hyphens) and decode URI
  const decodedPlan = decodeURIComponent(plan).replace(/-/g, " ");
  return <PlanDetailsPage plan={decodedPlan} />;
}