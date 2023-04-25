import { reactive} from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const config = reactive({
    cookies: {
      //  浏览器cookie中的XSRF-TOKEN
      'XSRF-TOKEN': '',
      //  浏览器cookie中的login_aliyunid_csrf
      'login_aliyunid_csrf': '',
      //  浏览器cookie中的login_aliyunid_ticket
      'login_aliyunid_ticket': ''
    },
  })

  const changeCookies = (cookies: any) => {
    config.cookies = reactive(cookies)
  }

  return { config, changeCookies }
})
