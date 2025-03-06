export default function MentorSidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-gray-100 p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Find a Mentor</h2>
      
      <ul className="space-y-3">
        <li>
          <a
            href="https://www.linkedin.com/search/results/people/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition"
          >
            LinkedIn People Search
          </a>
        </li>
        <li>
          <a
            href="https://alumni.yourschool.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-green-500 text-white rounded-md text-center hover:bg-green-600 transition"
          >
            University Alumni Directory
          </a>
        </li>
        <li>
          <a
            href="https://www.lusha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-yellow-500 text-white rounded-md text-center hover:bg-yellow-600 transition"
          >
            Email Lookup (Lusha)
          </a>
        </li>
        <li>
          <a
            href="https://www.adplist.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 bg-red-500 text-white rounded-md text-center hover:bg-red-600 transition"
          >
            ADPList (Free Mentorship)
          </a>
        </li>
        <li>
          <a
            href="/ai-outreach-message"
            className="block px-3 py-2 bg-purple-500 text-white rounded-md text-center hover:bg-purple-600 transition"
          >
            AI Outreach Message Helper
          </a>
        </li>
      </ul>
    </div>
  );
}
