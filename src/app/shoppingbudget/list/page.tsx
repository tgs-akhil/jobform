import { db } from "@/src/db";

export default async function RenderList() {
  const list = await db.shopping.findMany();

  return JSON.stringify(list, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );

  // If rendering the list, convert BigInt to string to avoid issues with React rendering
  // return (
  //   <div>
  //     {list.map((item) => (
  //       <div key={item.id}>
  //         <p>Date: {item.date}</p>
  //         <p>Budget: {item.budget.toString()}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
}
