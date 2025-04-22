import Header from "../components/user/Header";
import SearchBox from "../components/user/SearchBox";
import UserCard from "../components/user/UserCard";

const Role = () => {
  return (
    <main id="user-role" className="w-full">
      {/* Header */}
      <Header />
      {/* Search Box */}
      <SearchBox />
      {/* Role tables */}
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Name</p>
          <p className="text-sm font-[300] font-inter ml-28">Email</p>
          <p className="text-sm font-[300] font-inter ml-52">Role</p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <UserCard />
        </div>
      </div>
    </main>
  );
};

export default Role;
