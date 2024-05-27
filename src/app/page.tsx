import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 max-w-md w-full">
        <h3 className="text-3xl mb-6 text-center font-semibold text-gray-800">
          Assignments
        </h3>
        <div className="flex flex-col space-y-4">
          <Link
            href="/jobform"
            className="block p-4 bg-blue-100 border border-blue-200 rounded-lg text-center text-blue-700 font-medium hover:bg-blue-200 transition duration-300"
          >
            Job Form
          </Link>
          <Link
            href="/clipboard"
            className="block p-4 bg-purple-100 border border-purple-200 rounded-lg text-center text-purple-700 font-medium hover:bg-purple-200 transition duration-300"
          >
            Clipboard
          </Link>

          <Link
            href="/shoppingbudget"
            className="block p-4 bg-orange-100 border border-orange-200 rounded-lg text-center text-orange-700 font-medium hover:bg-orange-200 transition duration-300"
          >
            Shopping budget
          </Link>
        </div>
      </div>
    </div>
  );
}
