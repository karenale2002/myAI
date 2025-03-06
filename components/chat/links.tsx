import { Button } from "@/components/ui/button";
import { NetworkIcon, LinkedinIcon, MailIcon, SearchIcon, UsersIcon } from "lucide-react";

export default function MentorSidebar() {
  return (
    <div className="fixed left-0 top-16 h-full w-48 bg-gray-100 p-4 shadow-md flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Find a Mentor</h2>
      
        <Button
          asChild
          className="flex items-center gap-2 text-left justify-start bg-pink-500 text-white hover:bg-blue-600"
        >
          <a href="https://www.linkedin.com/search/results/people/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn Search
          </a>
        </Button>
  
        <Button
          asChild
          className="flex items-center gap-2 text-left justify-start bg-pink-500 text-white hover:bg-green-600"
        >
          <a href="https://alumni.unc.edu/resources/online-services/online-alumni-directory/" target="_blank" rel="noopener noreferrer">
            <UsersIcon className="w-5 h-5" />
            Alumni Directory
          </a>
        </Button>
  
        <Button
          asChild
          className="flex items-center gap-2 text-left justify-start bg-pink-500 text-white hover:bg-yellow-600"
        >
          <a href="https://https://skrapp.io/directory/" target="_blank" rel="noopener noreferrer">
            <MailIcon className="w-5 h-5" />
            Email Lookup
          </a>
        </Button>
  
        <Button
          asChild
          className="flex items-center gap-2 text-left justify-start bg-pink-500 text-white hover:bg-red-600"
        >
          <a href="https://www.adplist.org/" target="_blank" rel="noopener noreferrer">
            <NetworkIcon className="w-5 h-5" />
            ADPList Mentors
          </a>
        </Button>
  
    </div>
  );
}
