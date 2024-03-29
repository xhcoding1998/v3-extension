import { useConfigStore } from "@/stores/config";

(async () => {
  const cookies = await chrome.cookies.getAll({ url: 'https://flow.aliyun.com' })
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
      if (name === 'XSRF-TOKEN' && item.domain !== 'flow.aliyun.com') return
      cookieObj[name] = item.value
    }
  })
  changeCookies(cookieObj)
})()