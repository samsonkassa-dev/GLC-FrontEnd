import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { acc } from '../../utils/api';

export default function Final() {
  // const { isLoading, data, error } = useMutation(acc);
  const router = useRouter();
  const handleRedirect = (e) => {
    e.preventDefault();
    router.push('/');
  };
  // if (isLoading) return <div className="flex justify-center">Loading...</div>;
  return (
    <div className="container mt-10 md:mt-10">
      {/* {error ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-red-500">{error.response?.data?.message}</p>
          <button
            onClick={handleRedirect}
            className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          >
            Go Home
          </button>
        </div> */}
      {/* ) : ( */}
        <div className="flex flex-col items-center h-fit">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>

          <div className="text-lg text-center font-semibold text-gray-500">
            You have successfully submitted your application.
          </div>
          <a className="mt-10">
            <button
              onClick={handleRedirect}
              className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
            >
              Close
            </button>
          </a>
        </div>
      {/* )} */}
    </div>
  );
}
