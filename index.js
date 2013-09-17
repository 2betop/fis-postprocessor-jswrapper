/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';
module.exports = function(content, file, conf){
    if(file.isMod || conf.wrapAll){
        //wrap
        if(conf.type === 'amd'){
            if(!/^\s*define\s*\(/.test(content)){
                content = 'define(\'' + file.getId() + '\', function(require, exports, module){\n\n' + content + '\n\n});';
            }
        } else if(conf.template) {
            content = String(conf.template).split('${content}').join(content);
        } else {
            if(!/^\s*(?:[!(]\s*|void\s+)function\(/.test(content)){
                content = '!function(){try{\n\n' + content + '\n\n}catch(e){}}();';
            }
        }
    }
    return content;
};