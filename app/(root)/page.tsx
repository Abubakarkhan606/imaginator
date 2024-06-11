import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton showName afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
