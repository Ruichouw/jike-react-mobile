import { fetchChannelAPI } from "@/apis/list";
const Home = () => {
  fetchChannelAPI().then((res) => {
    console.log(res.data.data);
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
