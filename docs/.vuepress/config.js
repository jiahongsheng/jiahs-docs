// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
    base: '/jiahs-docs/', /* 基础虚拟路径 */
    dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '自定义工具函数库(系列一)', // 标题
    description: '前端研究院', // 标题下的描述
    
    themeConfig: { // 主题配置
      logo: '/logo.png',
      nav: [ // 头部导航
        { text: '官网', link: 'http://www.atguigu.com' },
        { text: '学院', link: 'http://www.gulixueyuan.com/' },
        { 
          text: '学习路线', 
          items: [
            { text: '前端', link: 'http://www.atguigu.com/web/' },
            { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
            { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
          ] 
        },
      ],
      sidebar: [ // 左侧导航
        {
          title: '打包自定义工具库', // 标题
          collapsable: false, // 下级列表不可折叠
          children: [ // 下级列表
            'chapter1',

          ]
        }
      ],
      // sidebarDepth: 3 // 左侧导航的深度默认是2级
    },
  
    head: [ // 指定网页head图标
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ]
  }