import {http} from "@/utils";
import type {ResType} from '@/apis/shared'
// 定义具体接口类型
type ChannelData = {
  /**
   * 响应频道数组
   */
  channels: ChannelItem[];
  [property: string]: any;
};
export type ChannelItem = {
  /**
   * 频道id
   */
  id: number;
  /**
   * 频道名字
   */
  name: string;
  [property: string]: any;
};

export const fetchChannelAPI = () =>
  http.request<ResType<ChannelData>>({
    url: "channels",
    method: "GET",
  });
