import { useState } from "react";
import Dropdown from "./dropdown";

export default function InputForm() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSalary(e) {
    setSalary(e.target.value);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Dropdown name={name} salary={salary} />
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleName}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              onChange={handleSalary}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
