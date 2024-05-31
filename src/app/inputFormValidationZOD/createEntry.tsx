"use server";

import { db } from "@/src/db";
import { z } from "zod";

// Define schema
const schema = z.object({
  name: z.string(),
  minSalary: z.number(),
  maxSalary: z.number(),
  experience: z.number(),
  rating: z.number(),
  minExpectedSal: z.number(),
  maxExpectedSal: z.number(),
  lastSalary: z.number(),
  hiringFee: z.number(),
  evalScore: z.number(),
  skills: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export async function CreateNewEntry(formData: FormData) {
  try {
    // Extract and parse form data
    const data = {
      name: formData.get("name") as string,
      minSalary: parseInt(formData.get("minSalary") as string),
      maxSalary: parseInt(formData.get("maxSalary") as string),
      experience: parseFloat(formData.get("experience") as string),
      rating: parseFloat(formData.get("rating") as string),
      minExpectedSal: parseInt(formData.get("minExpectedSal") as string),
      maxExpectedSal: parseInt(formData.get("maxExpectedSal") as string),
      lastSalary: parseInt(formData.get("lastSalary") as string),
      hiringFee: parseFloat(formData.get("hiringFee") as string),
      evalScore: parseInt(formData.get("evalScore") as string),
      skills: formData.get("skills") as string,
      startDate: new Date(formData.get("startDate") as string),
      endDate: new Date(formData.get("endDate") as string),
    };

    // Validate parsed data using safeParse
    const validationResult = schema.safeParse(data);

    if (!validationResult.success) {
      // Handle validation errors
      console.error("Validation errors:", validationResult.error);
      throw new Error("Validation failed. Please check your input data.");
    }

    // Create new record in db
    const form = await db.form.create({
      data: validationResult.data,
    });

    console.log(form);
    return form;
  } catch (error) {
    console.error("Error creating form entry:", error);
  }
}
