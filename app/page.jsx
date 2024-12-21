import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to CodeAnt AI</h1>
        <div className="flex space-x-2 justify-center mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">SAAS</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Self Hosted</button>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            Sign in with GitHub
          </button>
          <button className="w-full bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            Sign in with Bitbucket
          </button>
          <button className="w-full bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            Sign in with Azure DevOps
          </button>
          <button className="w-full bg-gray-100 px-4 py-2 rounded-md text-gray-700">
            Sign in with GitLab
          </button>
        </div>
        <p className="text-sm text-center mt-4">
          By signing up you agree to the{" "}
          <Link href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
}
