import { db } from "../db";

export default function JobForm() {
  async function createNewEntry(formData: FormData) {
    "use server";

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

  return (
    <form action={createNewEntry}>
      <h3 className="font-bold m-3">Enter details</h3>

      <div>
        <div>
          <label htmlFor="name" className="w-12">
            Name
          </label>
          <input
            name="name"
            title="name"
            type="text"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="minSalary" className="w-12">
            Min Salary
          </label>
          <input
            name="minSalary"
            title="minSalary"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="maxSalary" className="w-12">
            Max Salary
          </label>
          <input
            name="maxSalary"
            title="maxSalary"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="experience" className="w-12">
            Experience
          </label>
          <input
            name="experience"
            title="experience"
            type="number"
            className="border rounded p-2 w-half"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="rating" className="w-12">
            Rating
          </label>
          <input
            name="rating"
            title="rating"
            type="number"
            className="border rounded p-2 w-half"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="minExpectedSal" className="w-12">
            Min Expected Salary
          </label>
          <input
            name="minExpectedSal"
            title="minExpectedSal"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="maxExpectedSal" className="w-12">
            Max Expected Salary
          </label>
          <input
            name="maxExpectedSal"
            title="maxExpectedSal"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="lastSalary" className="w-12">
            Last Salary
          </label>
          <input
            name="lastSalary"
            title="lastSalary"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="hiringFee" className="w-12">
            Hiring Fee
          </label>
          <input
            name="hiringFee"
            title="hiringFee"
            type="number"
            className="border rounded p-2 w-half"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="evalScore" className="w-12">
            Evaluation Score
          </label>
          <input
            name="evalScore"
            title="evalScore"
            type="number"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="skills" className="w-12">
            Skills
          </label>
          <input
            name="skills"
            title="skills"
            type="text"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="w-12">
            Start Date
          </label>
          <input
            name="startDate"
            title="startDate"
            type="date"
            className="border rounded p-2 w-half"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="w-12">
            End Date
          </label>
          <input
            name="endDate"
            title="endDate"
            type="date"
            className="border rounded p-2 w-half"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
