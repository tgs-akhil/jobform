import { db } from "@/src/db";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreateNewEntry } from "./createEntry";

export default function JobForm() {
  <CreateNewEntry formData={FormData} />;
  // async function createNewEntry(formData: FormData) {
  //   "use server";

  //   try {
  //     // Input validation and conversion
  //     const name = formData.get("name") as string;
  //     const minSalary = parseInt(formData.get("minSalary") as string);
  //     const maxSalary = parseInt(formData.get("maxSalary") as string);
  //     const experience = parseFloat(formData.get("experience") as string);
  //     const rating = parseFloat(formData.get("rating") as string);
  //     const minExpectedSal = parseInt(formData.get("minExpectedSal") as string);
  //     const maxExpectedSal = parseInt(formData.get("maxExpectedSal") as string);
  //     const lastSalary = parseInt(formData.get("lastSalary") as string);
  //     const hiringFee = parseFloat(formData.get("hiringFee") as string);
  //     const evalScore = parseInt(formData.get("evalScore") as string);
  //     const skills = formData.get("skills") as string;
  //     const startDate = new Date(formData.get("startDate") as string);
  //     const endDate = new Date(formData.get("endDate") as string);

  //     // Create new record in db
  //     const form = await db.form.create({
  //       data: {
  //         name,
  //         minSalary,
  //         maxSalary,
  //         experience,
  //         rating,
  //         minExpectedSal,
  //         maxExpectedSal,
  //         lastSalary,
  //         hiringFee,
  //         evalScore,
  //         skills,
  //         startDate,
  //         endDate,
  //       },
  //     });

  //     console.log(form);
  //   } catch (error) {
  //     console.error("Error creating form entry:", error);
  //   }
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={CreateNewEntry}
        className="max-w-lg w-full p-6 bg-white shadow-md rounded-md space-y-4"
      >
        <h3 className="font-bold text-center text-lg mb-4">Enter details</h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </Label>
            <Input
              name="name"
              title="name"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="minSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Min Salary
            </Label>
            <Input
              name="minSalary"
              title="minSalary"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="maxSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Max Salary
            </Label>
            <Input
              name="maxSalary"
              title="maxSalary"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </Label>
            <Input
              name="experience"
              title="experience"
              type="number"
              step="0.1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </Label>
            <Input
              name="rating"
              title="rating"
              type="number"
              step="0.1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="minExpectedSal"
              className="block text-sm font-medium text-gray-700"
            >
              Min Expected Salary
            </Label>
            <Input
              name="minExpectedSal"
              title="minExpectedSal"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="maxExpectedSal"
              className="block text-sm font-medium text-gray-700"
            >
              Max Expected Salary
            </Label>
            <Input
              name="maxExpectedSal"
              title="maxExpectedSal"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="lastSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Last Salary
            </Label>
            <Input
              name="lastSalary"
              title="lastSalary"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="hiringFee"
              className="block text-sm font-medium text-gray-700"
            >
              Hiring Fee
            </Label>
            <Input
              name="hiringFee"
              title="hiringFee"
              type="number"
              step="0.1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="evalScore"
              className="block text-sm font-medium text-gray-700"
            >
              Evaluation Score
            </Label>
            <Input
              name="evalScore"
              title="evalScore"
              type="number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </Label>
            <Input
              name="skills"
              title="skills"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </Label>
            <Input
              name="startDate"
              title="startDate"
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <Label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </Label>
            <Input
              name="endDate"
              title="endDate"
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <Button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
