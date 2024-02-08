'use strict';

module.exports = (hexo) => {
  if (hexo.theme.has_hello) {
    return;
  }

  if (hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1) {
    hexo.log.info(`

    感谢使用 Newsroom 新闻中心主题
`);
  } else {
    hexo.log.info(`
    
    Thanks For Using Newsroom Theme
`);
  }

  hexo.theme.has_hello = true;
};
