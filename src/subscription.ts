import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 412,
  name: 'gkd_rules',
  version: 0,
  author: 'xchawai',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/xchawai/gkd_rules/issues/new/choose',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
