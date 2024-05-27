"use server";
import { db } from "@/src/db";
// import DeleteData from "./DeleteData";

export default async function SaveData(value) {
  const shopping = await db.Shopping.create({
    data: {
      ...value,
    },
  });
  return shopping;
}
