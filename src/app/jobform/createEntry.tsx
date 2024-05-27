"use server";

import { db } from "@/src/db";

export async function CreateNewEntry(formData: FormData) {
  try {
    // Input validation and conversion
    const name = formData.get("name") as string;
    const minSalary = parseInt(formData.get("minSalary") as string);
    const maxSalary = parseInt(formData.get("maxSalary") as string);
    const experience = parseFloat(formData.get("experience") as string);
    const rating = parseFloat(formData.get("rating") as string);
    const minExpectedSal = parseInt(formData.get("minExpectedSal") as string);
    const maxExpectedSal = parseInt(formData.get("maxExpectedSal") as string);
    const lastSalary = parseInt(formData.get("lastSalary") as string);
    const hiringFee = parseFloat(formData.get("hiringFee") as string);
    const evalScore = parseInt(formData.get("evalScore") as string);
    const skills = formData.get("skills") as string;
    const startDate = new Date(formData.get("startDate") as string);
    const endDate = new Date(formData.get("endDate") as string);

    // Create new record in db
    const form = await db.form.create({
      data: {
        name,
        minSalary,
        maxSalary,
        experience,
        rating,
        minExpectedSal,
        maxExpectedSal,
        lastSalary,
        hiringFee,
        evalScore,
        skills,
        startDate,
        endDate,
      },
    });

    console.log(form);
  } catch (error) {
    console.error("Error creating form entry:", error);
  }
}
