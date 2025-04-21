import "./index.scss";
import { Tabs } from "antd-mobile";
import {useTabs} from "./useTabs";
const Home = () => {
  const { channelList } = useTabs();
  return (
    <div>
      <div className="tabs">
        <Tabs defaultActiveKey="0">
          {channelList.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {item.name}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
      <div className="list">
        <a href="">33333</a>
        <ul>
          <li>222</li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
