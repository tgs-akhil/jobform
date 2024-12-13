import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useToast } from "@/components/ui/use-toast";

export default function Dropdown({ name, salary }) {
  const { toast } = useToast();
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (!text) {
          toast({
            title: "Nothing to copy",
          });
          return;
        }
        // alert(`Copied: ${text}`);
        toast({
          title: "Copied",
          description: text,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Copy
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => copyToClipboard(name)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Copy Name
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyToClipboard(salary)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Copy Salary
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
