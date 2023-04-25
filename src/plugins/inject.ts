import { useConfigStore } from "@/stores/config";

(async () => {
  const cookies = await chrome.cookies.getAll({ domain: '.aliyun.com' })
  // 获取配置文件
  const { config, changeCookies } = useConfigStore()

  type keyType = keyof (typeof config.cookies)
  type keyed = {
    [key in keyType]?: string | number
  }
  // 覆盖默认值
  const cookieObj: keyed = {}
  cookies.forEach(item => {
    const name = item.name as keyType
    if (config.cookies.hasOwnProperty(name)) {
      cookieObj[name] = item.value
    }
  })
  changeCookies(cookieObj)
})()