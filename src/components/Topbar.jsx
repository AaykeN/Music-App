import Searchbar from "./Searchbar";

const Topbar = () => {
  return (
    <>
      <div className="py-7 px-9 h-[65px] sticky top-0 z-20 bg-[#1d2123] hover:border-gray-100 scroll">
        <Searchbar />
      </div>
    </>
  );
};

export default Topbar;
