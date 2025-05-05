import { Navbar, Product } from "../components";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Navbar />

      {/* WRAP SIDEBAR + CONTENT IN SAME FLEX CONTAINER */}
      <div className="flex min-h-screen">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Page content on the right */}
        <div className="flex-1 p-6">
          <Product />
        </div>
      </div>
    </>
  );
}

export default Home;