<script type="text/javascript">
  //  function getCookie (cname) {
  //    if (document.cookie.length > 0) {
  //      let cstart = document.cookie.indexOf(cname + '=')
  //      if (cstart !== -1) {
  //        cstart = cstart + cname.length + 1
  //        let cend = document.cookie.indexOf(';', cstart)
  //        if (cend === -1) cend = document.cookie.length
  //        return unescape(document.cookie.substring(cstart, cend)).replace(/"/g, '')
  //      }
  //    }
  //    return ''
  //  }

  //  正式环境
  //  const webConfig = 'http://service.cccgaming.com:8080/stargo/'
  //  const commomUrl = 'http://service.cccgaming.com:8080/'
  //  const loginUrl = 'http://service.cccgaming.com:8080/uaa/oauth/token'
  //  const smsUrl = 'http://service.cccgaming.com:8080/sms/code'
  //  const lkUrl = 'http://service.cccgaming.com:8080/stargo/'
  //  const websocketUrl = 'http://service.cccgaming.com:9000'
  //  const hearder = {
  //    Authorization: localStorage.getItem('access_token')
  //  }
  //  const urlConfig = 'http://www.cccgaming.com/'

  //  开发环境
  //  const webConfig = 'http://192.168.10.154:8080/stargo/'
  //  const commomUrl = 'http://192.168.10.154:8080/'
  //  const loginUrl = 'http://192.168.10.154:8080/uaa/oauth/token'
  //  const smsUrl = 'http://192.168.10.154:8080/sms/code'
  //  const lkUrl = 'http://192.168.10.154:8080/stargo/'
  //  const websocketUrl = 'http://192.168.10.154:9000'
  //  const hearder = {
  //    Authorization: (localStorage.getItem('access_token') || getCookie('token'))
  //  }
  //  const urlConfig = 'http://192.168.10.144:8080/CCCGame-WEB/'

  //  测试环境
  const webConfig = 'http://192.168.10.151:8080/stargo/'
  const commomUrl = 'http://192.168.10.151:8080/'
  const loginUrl = 'http://192.168.10.151:8080/uaa/oauth/token'
  const smsUrl = 'http://192.168.10.151:8080/sms/code'
  const lkUrl = 'http://192.168.10.151:8080/stargo/'
  const websocketUrl = 'http://192.168.10.151:9000'
  const hearder = {
    Authorization: localStorage.getItem('access_token')
  }
  const urlConfig = 'http://192.168.10.144:8080/CCCGame-WEB/'
  export default {
    webConfig,
    smsUrl,
    loginUrl,
    commomUrl,
    websocketUrl,
    lkUrl,
    hearder,
    urlConfig
  }
</script>
