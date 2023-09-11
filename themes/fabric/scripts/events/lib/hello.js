'use strict';

module.exports = (hexo) => {
  if (hexo.theme.has_hello) {
    return;
  }

  if (hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1) {
    hexo.log.info(`
------------------------------------------------
|                                              |
|        _____     _          _                |
|        |  ___|_ _| |__  _ __(_) ___          |
|        | |_ / _| | |_ \| |__| |/ __|          |
|        |  _| (_| | |_) | |  | | (__          |
|        |_|  \__,_|_.__/|_|  |_|\___|           |
|                                              |
|                                              |
|             感谢使用 Fabric 主题 !           |
|    文档: https://hexo.fluid-dev.com/docs/    |
|                                              |
------------------------------------------------
`);
  } else {
    hexo.log.info(`
------------------------------------------------
|                                              |
|        _____     _          _                |
|        |  ___|_ _| |__  _ __(_) ___          |
|        | |_ / _| | |_ \| |__| |/ __|          |
|        |  _| (_| | |_) | |  | | (__          |
|        |_|  \__,_|_.__/|_|  |_|\___|           |
|                                              |
|       Thank you for using Fabric theme !     |
|   Docs: https://hexo.fluid-dev.com/docs/en/  |
|                                              |
------------------------------------------------
`);
  }

  hexo.theme.has_hello = true;
};
