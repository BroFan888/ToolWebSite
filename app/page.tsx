import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            GitTrace
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A beautiful Git client with elegant interface and zero network access. 
            Your code stays completely private, right where it belongs.
          </p>
          <div className="mt-10">
            <a
              href="#" 
              className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Coming Soon to Mac App Store
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video Section */}
        <div className="mb-32">
          <video
            className="w-full rounded-2xl shadow-2xl"
            controls
            poster="/v1_screens/v1_home_screen.png"
          >
            <source src="/v1_screens/v1_show.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Mode Introduction */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Light & Dark, Your Choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Seamlessly switch between light and dark modes. 
            Every detail is carefully crafted for both appearances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/v1_screens/v1_main_screen.png"
              alt="Light Mode"
              width={1400}
              height={900}
              className="rounded-2xl shadow-xl w-full"
            />
            <Image
              src="/v1_screens/v1_main_screen_dark.png"
              alt="Dark Mode"
              width={1400}
              height={900}
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-32">
          {/* Feature 1 - Changed Files View */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Changed Files View
            </h2>
            <div className="space-y-8">
              <Image
                src="/v1_screens/v1_changed_files_screen.png"
                alt="Changed Files View - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
                priority
              />
              <Image
                src="/v1_screens/v1_changed_files_screen_dark.png"
                alt="Changed Files View - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Clearly displays file changes and helps you quickly understand the content of each commit. 
              Supports multiple view modes for enhanced visualization.
            </p>
          </div>

          {/* Feature 2 - Commit History */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Commit History Browser
            </h2>
            <div className="space-y-8">
              <Image
                src="/v1_screens/v1_search_screen.png"
                alt="Commit History - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/v1_screens/v1_search_screen_dark.png"
                alt="Commit History - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Visualize commit history and easily track project evolution. 
              Powerful search functionality helps you quickly locate key commits.
            </p>
          </div>

          {/* Feature 3 - Code Diff */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Code Diff View
            </h2>
            <div className="space-y-8">
              <Image
                src="/v1_screens/v1_diff_screen.png"
                alt="Code Diff - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/v1_screens/v1_diff_screen_dark.png"
                alt="Code Diff - Dark"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Intelligent code comparison functionality with multiple diff modes, 
              helping you precisely locate every code change.
            </p>
          </div>

          {/* Feature 4 - Privacy */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Privacy Protection
            </h2>
            <div className="space-y-8">
              <Image
                src="/v1_screens/v1_privacy_screen.png"
                alt="Privacy Protection - Light"
                width={1400}
                height={900}
                className="rounded-2xl shadow-xl w-full"
              />
              <Image
                src="/v1_screens/v1_privacy_screen_dark.png"
                alt="Privacy Protection - Dark"
                width="1400"
                height="900"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Your code security is paramount. GitTrace ensures all operations are performed locally, 
              with no code ever being uploaded to the cloud.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-600">
          <p>© 2024 GitTrace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
