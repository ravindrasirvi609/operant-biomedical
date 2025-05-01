import Link from "next/link";
import Image from "next/image";

const Error = () => {
  return (
    <>
      <div className="h-24 md:h-16"></div>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/images/error/404.png"
              alt="404 Error"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-8 md:h-0"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h3>
          <div className="h-4"></div>
          <p className="text-white/80 text-lg mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="h-12 md:h-12"></div>
          <div className="flex justify-center">
            <Link href="/" className="btn-primary group">
              Back to Home
              <svg
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-24 md:h-16"></div>
    </>
  );
};

export default Error;
