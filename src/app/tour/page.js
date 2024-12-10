export default async function Tours() {
  const res = await fetch('http://localhost:6500/tour', {cache: "no-cache"});
  const data = await res.json();
  console.log(data)
  return (
    <div >
      {data.map(tour => <h1 key={tour.id}>{tour.title}</h1>)}
    </div>
  );
}