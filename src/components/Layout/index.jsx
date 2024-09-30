import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import { navDetails } from "../../util";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { title } =
    navDetails.find((pt) => pt.path.indexOf(pathname) !== -1) || {};
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
