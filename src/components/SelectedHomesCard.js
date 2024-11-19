





export default async function SelectedHomesCard() {
    const response = await fetch("https://dinmaegler.onrender.com/homes");
    const allBoligDataata = await response.json();
      console.log("Bolig Dataaaa", allBoligDataata);
  return (
    <div>
      
    </div>
  )
}
