import Link from 'next/link';

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Recipe Not Found!
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg text-center">
        Oops! It looks like the recipe you're looking for is missing from our
        cookbook.
      </p>
      <div className="text-5xl mb-6">🍲 🥕 🍋 🍞</div>
      <Link href="/" className="px-6 py-3 text-lg font-medium text-white bg-red-500 rounded-full hover:bg-red-600">
          Return to the Kitchen
      </Link>
    </div>
  );
}

export default NotFound;
