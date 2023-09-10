'use strict';

module.exports = (hexo) => {
  if (hexo.theme.has_hello) {
    return;
  }

  if (hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1) {
    hexo.log.info(`
            感谢使用 Fluid 主题 !
    文档: https://hexo.fluid-dev.com/docs/
               由 Yurik 魔改
`);
  } else {
    hexo.log.info(`
        Thank you for using Fluid theme !
    Docs: https://hexo.fluid-dev.com/docs/en/  
              Modify By Yurik
`);
  }

  hexo.theme.has_hello = true;
};
