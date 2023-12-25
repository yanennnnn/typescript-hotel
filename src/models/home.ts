import request from "@/plugins/axios";

export function apiGetNews() {
  return request({
    url: "/api/v1/home/news/",
    method: "get",
  });
}
