import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: {
        matches: '[vid="count_down"]',
      },
      snapshotUrls: ['https://i.gkd.li/i/26672239'],
    },
  ],
});
