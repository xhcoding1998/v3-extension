import { useConfigStore } from "@/stores/counter";

(async () => {
  const cookies = await chrome.cookies.getAll({ domain: '.aliyun.com' })
  // 获取配置文件
  const { config, changeCookies } = useConfigStore()

  type key = keyof (typeof config.cookies)
  // 覆盖默认值
  const cookieObj = {}
  cookies.forEach(item => {
    const name: key = item.name as key
    if (config.cookies.hasOwnProperty(name)) {
      cookieObj[name] = item.value
    }
  })
  changeCookies(cookieObj)
})()