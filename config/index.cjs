/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2db15cf62b5f2948',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e3dcf0666c584e3371251cc996df9f33',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '闹闹',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4uVg6dC5yR9sQ4k-kuZqAgHM0bU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 's36p1g0bRxrniaeoNM__d09WPmvxEjR2A_M1ubu21Jk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '闹闹', year: '2001', date: '09-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2001', date: '07-17',
        },
        {
          type: '节日', name: '纪念日', year: '2019', date: '05-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-05-11' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FOp-pxJtr_03Za9FuSuEAYOXHVQdjHLeq_Lmim7C-wU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4uVg6dC5yR9sQ4k-kuZqAgHM0bU',
    }
  ],

}

module.exports = USER_CONFIG

