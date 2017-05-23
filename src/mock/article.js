import Mock from 'mockjs';


const List = [];
const count = 20;


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@id',
    title: '@ctitle(10, 20)',
    'status|1': ['published', 'draft'],
    author: '@cname',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }));
}

export default {
  getList: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, {
        data: List
      }]);
    }, 100);
  }),
  getArticle: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, {
        data: {
          id: 120000000001,
          author: { key: 'mockPan' },
          source_name: '原创作者',
          category_item: [{ key: 'global', name: '全球' }],
          comment_disabled: false,
          content: '<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://i0.wp.com/www.finiyang.com/wp-content/uploads/2016/01/JSON-CALLBACK3.png" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
          content_short: '我是测试数据',
          display_time: +new Date(),
          image_uri: 'https://i0.wp.com/www.finiyang.com/wp-content/uploads/2016/01/JSON-CALLBACK3.png',
          platforms: ['a-platform'],
          source_uri: 'https://github.com/finiking/Falcon',
          status: 'published',
          tags: [],
          title: ''
        }
      }]);
    }, 100);
  })
};
