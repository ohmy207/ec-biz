/* 内置过滤器
 *
 *　1. currency (货币处理)
 *       {{num|currency: '￥'}}
 *
 *　2. date (日期格式化)
 *       {{date|date: 'yyyy-MM-dd hh:mm:ss EEEE'}}
 *
 *　3. filter(匹配子串)
 *       {{childrenArray|filter: 4}}
 *       {{childrenArray|filter: {name: 'i'}}}
 *
 *　4. json(格式化json对象)
 *       {{jsonTest|json}}
 *
 *　5. limitTo(限制数组长度或字符串长度)
 *       {{childrenArray|limitTo: 2}}
 *
 *　6. lowercase(小写)
 *
 *　7. uppercase(大写)
 *
 *　8. number(格式化数字)
 *       {{num|number:2}}
 *
 *　9. orderBy(排序)
 *       {{childrenArray|orderBy: 'age'}}
 *       {{childrenArray|orderBy: orderFunc}}
 *       {{childrenArray|orderBy: ['age', 'name']}}
 */

define([], function() {

    var filters = {};



    return filters;
});