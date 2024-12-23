import { Users, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Nexus Mindscape</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Pioneering AI solutions for tomorrow's challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
              <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Expert Team</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Led by industry veterans with decades of combined experience in AI and machine learning
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
              <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Recognition</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Award-winning solutions recognized by leading technology institutions
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
              <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Global Impact</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Serving clients across 30+ countries with tailored AI solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}