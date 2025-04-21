import { useEffect, useState } from "react";
import { ChannelItem } from "@/apis/list";
import { fetchChannelAPI } from "@/apis/list";

export const useTabs = () => {
  const [channelList, setChannelList] = useState<ChannelItem[]>([]);

  useEffect(() => {
    const getChannelList = async () => {
      const res = await fetchChannelAPI();
      setChannelList(res.data.data.channels);
    };
    getChannelList();
  }, []);
  return { channelList };
};
