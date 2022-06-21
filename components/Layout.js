import Sidebar from "./Sidebar";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
