import Navbar from "../components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
};
export default HomeLayout;
