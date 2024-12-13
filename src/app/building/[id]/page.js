
import BuildingDetails from "@/components/BuildingDetails";

async function fetchBuildingData(id) {
  const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`, {
    next: { revalidate: 60 }, // Optional: Enables revalidation for ISR
  });

  if (!res.ok) {
    throw new Error('Failed to fetch building data');
  }
  return res.json();
}

export default async function BuildingPage({ params }) {
  // Directly destructure `id` from `params`
  const { id } = params;

  console.log("Fetching building data for ID:", id);

  try {
    // Fetch building data
    const building = await fetchBuildingData(id);

    console.log("Building data:", building);

    // Return the BuildingDetails component with fetched building data
    return <BuildingDetails building={building} agent={building.agent} />;
  } catch (error) {
    console.error("Error fetching building data:", error);
    return <div>Failed to load building data</div>;
  }
}
