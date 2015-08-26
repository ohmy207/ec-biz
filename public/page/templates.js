define(["angular"], function() { return function($templateCache){  'use strict';

  $templateCache.put('public/page/app.html',
    "<header class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "\t<div class=\"container-fluid\">\n" +
    "\t\t<div class=\"navbar-header\">\n" +
    "\t\t\t<a class=\"navbar-brand\" ui-sref=\"app.home\">\n" +
    "\t\t\t\t<span>广告投放平台</span>\n" +
    "\t\t\t</a>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"navbar-collapse collapse\">\n" +
    "\t\t\t<div ng-include src=\"'public/page/common/nav.html'\"></div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</header>\n" +
    "<section class=\"cl-wrapper\" ng-class=\"{'sb-collapsed':isCollapsed}\">\n" +
    "\t<div class=\"cl-sidebar\">\n" +
    "\t\t<div class=\"menu-space\">\n" +
    "\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t<ul class=\"cl-vnavigation\">\n" +
    "\t\t\t\t\t<div ng-include src=\"'public/page/common/side.html'\"></div>\n" +
    "\t\t\t\t</ul>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div style=\"position: fixed; z-index: 9999; top: 299px; left: 63px; display: none\" class=\"sub-menu-nav\">\n" +
    "\t\t\t\t<ul class=\"sub-menu\">\n" +
    "\t\t\t\t\t<li class=\"dropdown-header\"><i class=\"fa fa-envelope nav-icon\"></i><span>我的消息</span></li>\n" +
    "\t\t\t\t\t<li><a href=\"email-inbox.html\">收件夹</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"email-read.html\">消息中心</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"email-compose.html\">新建...<span class=\"label label-primary pull-right\">New</span></a></li>\n" +
    "\t\t\t\t</ul>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"text-right collapse-button\" style=\"padding:7px 9px\">\n" +
    "\t\t\t<input class=\"form-control search\" placeholder=\"请输入关键词...\">\n" +
    "\t\t\t<button id=\"sidebar-collapse\" class=\"btn btn-default\" style=\"\">\n" +
    "\t\t\t\t<i style=\"color:#FFF\" class=\"fa fa-angle-left\"></i>\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"cl-container container-fluid\" ui-view=\"screen\"></div>\n" +
    "</section>"
  );


  $templateCache.put('public/page/app/about.html',
    "<ul repeater=\"1\">\r" +
    "\n" +
    "  <li>哈哈哈哈</li>\r" +
    "\n" +
    "</ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"alert alert-success alert-white rounded\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "    <div class=\"icon\"><i class=\"fa fa-check\"></i></div>\r" +
    "\n" +
    "    <strong>Success!</strong> Changes has been saved successfully!\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\r" +
    "\n" +
    "  Launch demo modal\r" +
    "\n" +
    "</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r" +
    "\n" +
    "  <div class=\"modal-dialog\" role=\"document\">\r" +
    "\n" +
    "    <div class=\"modal-content\">\r" +
    "\n" +
    "      <div class=\"modal-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r" +
    "\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"modal-body\">\r" +
    "\n" +
    "        <hello-world></hello-world>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<nav>\r" +
    "\n" +
    "  <ul class=\"pagination\">\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "      <a href=\"#\" aria-label=\"Previous\">\r" +
    "\n" +
    "        <span aria-hidden=\"true\">&laquo;</span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li><a>1</a></li>\r" +
    "\n" +
    "    <li><a>2</a></li>\r" +
    "\n" +
    "    <li><a>3</a></li>\r" +
    "\n" +
    "    <li><a>4</a></li>\r" +
    "\n" +
    "    <li><a>5</a></li>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "      <a aria-label=\"Next\">\r" +
    "\n" +
    "        <span aria-hidden=\"true\">&raquo;</span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"btn-group\">\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Left'\">Left</label>\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Middle'\">Middle</label>\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Right'\">Right</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"btn-group\">\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Left'\" uncheckable>Left</label>\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Middle'\" uncheckable>Middle</label>\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Right'\" uncheckable>Right</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "  .full button span {\r" +
    "\n" +
    "    background-color: limegreen;\r" +
    "\n" +
    "    border-radius: 32px;\r" +
    "\n" +
    "    color: black;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "  .partially button span {\r" +
    "\n" +
    "    background-color: orange;\r" +
    "\n" +
    "    border-radius: 32px;\r" +
    "\n" +
    "    color: black;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <pre>Selected date is: <em>{{dt | date:'fullDate' }}</em></pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>Inline</h4>\r" +
    "\n" +
    "    <div style=\"display:inline-block; min-height:290px\">\r" +
    "\n" +
    "      <datepicker ng-model=\"dt\" min-date=\"minDate\" show-weeks=\"true\" class=\"well well-sm\" custom-class=\"getDayClass(date, mode)\"></datepicker>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>Popup</h4>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <p class=\"input-group\">\r" +
    "\n" +
    "              <input class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"'2020-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\">\r" +
    "\n" +
    "              <span class=\"input-group-btn\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <p class=\"input-group\">\r" +
    "\n" +
    "              <input type=\"date\" class=\"form-control\" datepicker-popup ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"'2020-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\">\r" +
    "\n" +
    "              <span class=\"input-group-btn\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <label>Format:</label> <select class=\"form-control\" ng-model=\"format\" ng-options=\"f for f in formats\"><option></option></select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"today()\">Today</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"dt = '2009-08-24'\">2009-08-24</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"clear()\">Clear</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <span dropdown on-toggle=\"toggled(open)\">\r" +
    "\n" +
    "      <a href id=\"simple-dropdown\" dropdown-toggle>\r" +
    "\n" +
    "        Click me for a dropdown, yo!\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown\">\r" +
    "\n" +
    "        <li ng-repeat=\"choice in items\">\r" +
    "\n" +
    "          <a href>{{choice}}</a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown is-open=\"status.isopen\">\r" +
    "\n" +
    "      <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle ng-disabled=\"disabled\">\r" +
    "\n" +
    "        Button dropdown <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown>\r" +
    "\n" +
    "      <button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-danger\" dropdown-toggle>\r" +
    "\n" +
    "        <span class=\"caret\"></span>\r" +
    "\n" +
    "        <span class=\"sr-only\">Split button!</span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"split-button\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown dropdown-append-to-body>\r" +
    "\n" +
    "      <button id=\"btn-append-to-body\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle>\r" +
    "\n" +
    "        Dropdown on Body <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btn-append-to-body\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown>\r" +
    "\n" +
    "      <button id=\"button-template-url\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle ng-disabled=\"disabled\">\r" +
    "\n" +
    "        Dropdown using template <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" template-url=\"dropdown.html\" aria-labelledby=\"button-template-url\">\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleDropdown($event)\">Toggle button dropdown</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"disabled = !disabled\">Enable/Disable</button>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown keyboard-nav>\r" +
    "\n" +
    "        <button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle>\r" +
    "\n" +
    "            Dropdown with keyboard navigation <span class=\"caret\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"simple-btn-keyboard-nav\">\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"dropdown.html\">\r" +
    "\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-template-url\">\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Action in Template</a></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Another action in Template</a></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "          <li class=\"divider\"></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Separated link in Template</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title\">I'm a modal!</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"item in items\">\r" +
    "\n" +
    "                    <a href=\"#\" ng-click=\"$event.preventDefault(); selected.item = item\">{{ item }}</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            Selected: <b>{{ selected.item }}</b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r" +
    "\n" +
    "            <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open()\">Open me!</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open('lg')\">Large modal</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open('sm')\">Small modal</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"toggleAnimation()\">Toggle Animation ({{ animationsEnabled }})</button>\r" +
    "\n" +
    "    <div ng-show=\"selected\">Selection from a modal: {{ selected }}</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h4>Default</h4>\r" +
    "\n" +
    "    <pagination total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\r" +
    "\n" +
    "    <pagination boundary-links=\"true\" total-items=\"totalItems\" ng-model=\"currentPage\" class=\"pagination-sm\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\r" +
    "\n" +
    "    <pagination direction-links=\"false\" boundary-links=\"true\" total-items=\"totalItems\" ng-model=\"currentPage\"></pagination>\r" +
    "\n" +
    "    <pagination direction-links=\"false\" total-items=\"totalItems\" ng-model=\"currentPage\" num-pages=\"smallnumPages\"></pagination>\r" +
    "\n" +
    "    <pre>The selected page no: {{currentPage}}</pre>\r" +
    "\n" +
    "    <button class=\"btn btn-info\" ng-click=\"setPage(3)\">Set current page to: 3</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Pager</h4>\r" +
    "\n" +
    "    <pager total-items=\"totalItems\" ng-model=\"currentPage\"></pager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Limit the maximum visible buttons</h4>\r" +
    "\n" +
    "    <pagination total-items=\"bigTotalItems\" ng-model=\"bigCurrentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\"></pagination>\r" +
    "\n" +
    "    <pagination total-items=\"bigTotalItems\" ng-model=\"bigCurrentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\"></pagination>\r" +
    "\n" +
    "    <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h4>Dynamic</h4>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Text:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.content\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Title:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.title\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Template:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.templateUrl\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <button popover=\"{{dynamicPopover.content}}\" popover-title=\"{{dynamicPopover.title}}\" class=\"btn btn-default\">Dynamic Popover</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button popover-template=\"dynamicPopover.templateUrl\" popover-title=\"{{dynamicPopover.title}}\" class=\"btn btn-default\">Popover With Template</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"myPopoverTemplate.html\">\r" +
    "\n" +
    "        <div>{{dynamicPopover.content}}</div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label>Popup Title:</label>\r" +
    "\n" +
    "          <input type=\"text\" ng-model=\"dynamicPopover.title\" class=\"form-control\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Positional</h4>\r" +
    "\n" +
    "    <button popover-placement=\"top\" popover=\"On the Top!\" class=\"btn btn-default\">Top</button>\r" +
    "\n" +
    "    <button popover-placement=\"left\" popover=\"On the Left!\" class=\"btn btn-default\">Left</button>\r" +
    "\n" +
    "    <button popover-placement=\"right\" popover=\"On the Right!\" class=\"btn btn-default\">Right</button>\r" +
    "\n" +
    "    <button popover-placement=\"bottom\" popover=\"On the Bottom!\" class=\"btn btn-default\">Bottom</button>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Triggers</h4>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "      <button popover=\"I appeared on mouse enter!\" popover-trigger=\"mouseenter\" class=\"btn btn-default\">Mouseenter</button>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <input value=\"Click me!\" popover=\"I appeared on focus! Click away and I'll vanish...\" popover-trigger=\"focus\" class=\"form-control\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Other</h4>\r" +
    "\n" +
    "    <button popover-animation=\"true\" popover=\"I fade in and out!\" class=\"btn btn-default\">fading</button>\r" +
    "\n" +
    "    <button popover=\"I have a title!\" popover-title=\"The title.\" class=\"btn btn-default\">title</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3>Static</h3>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar value=\"55\"></progressbar></div>\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar class=\"progress-striped\" value=\"22\" type=\"warning\">22%</progressbar></div>\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar class=\"progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progressbar></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h3>Dynamic <button class=\"btn btn-sm btn-primary\" type=\"button\" ng-click=\"random()\">Randomize</button></h3>\r" +
    "\n" +
    "    <progressbar max=\"max\" value=\"dynamic\"><span style=\"color:white; white-space:nowrap\">{{dynamic}} / {{max}}</span></progressbar>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <small><em>No animation</em></small>\r" +
    "\n" +
    "    <progressbar animate=\"false\" value=\"dynamic\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <small><em>Object (changes type based on value)</em></small>\r" +
    "\n" +
    "    <progressbar class=\"progress-striped active\" value=\"dynamic\" type=\"{{type}}\">{{type}} <i ng-show=\"showWarning\">!!! Watch out !!!</i></progressbar>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h3>Stacked <button class=\"btn btn-sm btn-primary\" type=\"button\" ng-click=\"randomStacked()\">Randomize</button></h3>\r" +
    "\n" +
    "    <progress><bar ng-repeat=\"bar in stacked track by $index\" value=\"bar.value\" type=\"{{bar.type}}\"><span ng-hide=\"bar.value < 5\">{{bar.value}}%</span></bar></progress>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <timepicker ng-model=\"mytime\" ng-change=\"changed()\" hour-step=\"hstep\" minute-step=\"mstep\" show-meridian=\"ismeridian\"></timepicker>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <pre class=\"alert alert-info\">Time is: {{mytime | date:'shortTime' }}</pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\"> \r" +
    "\n" +
    "    <div class=\"col-xs-6\">\r" +
    "\n" +
    "        Hours step is:\r" +
    "\n" +
    "      <select class=\"form-control\" ng-model=\"hstep\" ng-options=\"opt for opt in options.hstep\"></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-xs-6\">\r" +
    "\n" +
    "        Minutes step is:\r" +
    "\n" +
    "      <select class=\"form-control\" ng-model=\"mstep\" ng-options=\"opt for opt in options.mstep\"></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <button class=\"btn btn-info\" ng-click=\"toggleMode()\">12H / 24H</button>\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"update()\">Set to 14:00</button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"clear()\">Clear</button>"
  );


  $templateCache.put('public/page/app/external.html',
    "\n" +
    "<iframe style=\"position: absolute; width: 100%; height: 100%; left: 0; border: none\" ng-src=\"{{url}}\"></iframe>"
  );


  $templateCache.put('public/page/app/home.html',
    "<div class=\"cl-screen\">\n" +
    "\t\n" +
    "  \t<div class=\"row\">\n" +
    "  \t\t<div class=\"col-md-6 col-sm-6\">\n" +
    "  \t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Modal Alerts</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Examples</h4>\n" +
    "\t\t\t\t\t<p>This is just an example of tooltip in a paragrhap content writen by <a data-toggle=\"tooltip\" href=\"#\" data-original-title=\"Default tooltip\">Jeff Hanneman</a>, as you can see it is a clean design with many <a data-toggle=\"tooltip\" href=\"#\" data-original-title=\"I am a Tooltip\">Tooltip</a> options.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer2 text-center\">\n" +
    "\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\".biz-info\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Success</button>\n" +
    "\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\".biz-info\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-info-circle\"></i> Information</button>\n" +
    "\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\".biz-info\" type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-warning\"></i> Warning</button>\n" +
    "\t\t\t\t\t\t<button data-toggle=\"modal\" data-target=\".biz-info\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i> Error</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<div class=\"modal fade biz-info\" tabindex=\"-1\" role=\"dialog\">\n" +
    "\t\t\t\t\t\t<div class=\"modal-dialog\">\n" +
    "\t\t\t\t\t\t  \t<div class=\"modal-content\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"i-circle primary\"><i class=\"fa fa-check\"></i></div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<h4>Awesome!</h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t<p>Changes has been saved successfully!</p>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t\t\t\t\t  \t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n" +
    "\t\t\t\t\t\t\t\t  \t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Proceed</button>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t  \t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "  \t\t</div>\n" +
    "  \t</div>\n" +
    "\n" +
    "\t<div class=\"row dash-cols\">\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\n" +
    "\t\t\t\t\t<div class=\"pull-right actions\">\n" +
    "\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Theme Alerts</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t \n" +
    "\t\t\t\t\t <div class=\"alert alert-success alert-white rounded\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<div class=\"icon\"><i class=\"fa fa-check\"></i></div>\n" +
    "\t\t\t\t\t\t<strong>Success!</strong> Changes has been saved successfully!\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t \n" +
    "\t\t\t\t\t <div class=\"alert alert-info alert-white rounded\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<div class=\"icon\"><i class=\"fa fa-info-circle\"></i></div>\n" +
    "\t\t\t\t\t\t<strong>Info!</strong> You have 3 new messages in your inbox.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t \n" +
    "\t\t\t\t\t <div class=\"alert alert-warning alert-white rounded\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<div class=\"icon\"><i class=\"fa fa-warning\"></i></div>\n" +
    "\t\t\t\t\t\t<strong>Alert!</strong> Don't forget to save your data.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t \n" +
    "\t\t\t\t\t <div class=\"alert alert-danger alert-white rounded\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<div class=\"icon\"><i class=\"fa fa-times-circle\"></i></div>\n" +
    "\t\t\t\t\t\t<strong>Error!</strong> The server is not responding, try again later.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t \n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\t\n" +
    "\t\t\t\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\t\t\t\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\n" +
    "\t\t\t\t\t<h3>Bootstrap Alerts</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t <div class=\"alert alert-success\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<i class=\"fa fa-check sign\"></i><strong>Success!</strong> Changes has been saved successfully!\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t <div class=\"alert alert-info\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<i class=\"fa fa-info-circle sign\"></i><strong>Info!</strong> You have 3 new messages in your inbox.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t <div class=\"alert alert-warning\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<i class=\"fa fa-warning sign\"></i><strong>Alert!</strong> Don't forget to save your data.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t\t <div class=\"alert alert-danger\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t\t\t<i class=\"fa fa-times-circle sign\"></i><strong>Error!</strong> The server is not responding, try again later.\n" +
    "\t\t\t\t\t </div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\n" +
    "\t\t\t\t\t<h3>Labels and Badges</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<table class=\"\">\n" +
    "\t\t\t\t\t\t<thead class=\"no-border\">\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<th>Type</th>\n" +
    "\t\t\t\t\t\t\t\t<th class=\"text-center\">Label</th>\n" +
    "\t\t\t\t\t\t\t\t<th class=\"text-center\">Icon</th>\n" +
    "\t\t\t\t\t\t\t\t<th class=\"text-center\">Badge</th>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t\t<tbody class=\"\">\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td style=\"width:30%\">Default</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-default\">Default</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-default\" href=\"#\"><i class=\"fa fa-pencil\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge\">25</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td>Primary</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-primary\">Primary</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-primary\" href=\"#\"><i class=\"fa fa-pencil\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge badge-primary\">6</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td>Success</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-success\">Success</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-success\" href=\"#\"><i class=\"fa fa-pencil\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge badge-success\">8</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td>Info</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-info\">Info</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-info\" href=\"#\"><i class=\"fa fa-info-circle\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge badge-info\">3</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td>Warning</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-warning\">Warning</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-warning\" href=\"#\"><i class=\"fa fa-warning\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge badge-warning\">5</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t<td>Danger</td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"label label-danger\">Danger</span></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><a class=\"label label-danger\" href=\"#\"><i class=\"fa fa-pencil\"></i></a></td>\n" +
    "\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"badge badge-danger\">54</span></td>\n" +
    "\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t\t</table>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Pagination</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\n" +
    "\t\t\t\t\t<pagination class=\"pagination-lg\" direction-links=\"false\" boundary-links=\"true\" total-items=\"totalItems\" ng-model=\"currentPage\"></pagination>\n" +
    "\t\t\t\t\t<div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<ul class=\"pagination\">\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<ul class=\"pagination pagination-sm\">\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Tooltips</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t\t<h4>Examples</h4>\n" +
    "\t\t\t\t\t\t<p>This is just an example of tooltip in a paragrhap content writen by <a data-toggle=\"tooltip\" href=\"#\" data-original-title=\"Default tooltip\">Author</a>, as you can see it is a clean design with many <a data-toggle=\"tooltip\" href=\"#\" data-original-title=\"I am a Tooltip\">Tooltip</a> options.</p>\n" +
    "\t\t\t\t\t\t<div class=\"spacer2 text-center\">\n" +
    "\t\t\t\t\t\t\t<button data-placement=\"left\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on left\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-chevron-circle-left\"></i> On Left</button>\n" +
    "\t\t\t\t\t\t\t<button data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on top\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-chevron-circle-up\"></i> On Top</button>\n" +
    "\t\t\t\t\t\t\t<button data-placement=\"bottom\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on bottom\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-chevron-circle-down\"></i> On Bottom</button>\n" +
    "\t\t\t\t\t\t\t<button data-placement=\"right\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on right\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-chevron-circle-right\"></i> On Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Popovers</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Examples</h4>\n" +
    "\t\t\t\t\t<p>This is just an example of popover use in a paragrhap content without a title writen by <a href=\"javascript:;\" data-popover=\"popover\" data-content=\"This is a popover without a title!\" data-placement=\"top\" data-original-title=\"\" title=\"\">Author</a>, and there is another example with a title <a href=\"javascript:;\" data-popover=\"popover\" data-original-title=\"Popover Title\" data-content=\"This is a popover with a title!\" data-placement=\"top\">Tooltip</a> options.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer2 text-center\">\n" +
    "\t\t\t\t\t\t<button data-popover=\"popover\" type=\"button\" class=\"btn btn-primary\" data-original-title=\"Popover in top\" data-content=\"This is the popover content space, put your ideas here!\" data-placement=\"top\" data-trigger=\"hover\"><i class=\"fa fa-chevron-circle-up\"></i> On Top</button>\n" +
    "\t\t\t\t\t\t<button data-popover=\"popover\" type=\"button\" class=\"btn btn-primary\" data-original-title=\"Popover in left\" data-content=\"This is the popover content space, put your ideas here!\" data-placement=\"left\" data-trigger=\"hover\"><i class=\"fa fa-chevron-circle-left\"></i> On Left</button>\n" +
    "\t\t\t\t\t\t<button data-popover=\"popover\" type=\"button\" class=\"btn btn-primary\" data-original-title=\"Popover in right\" data-content=\"This is the popover content space, put your ideas here!\" data-placement=\"right\" data-trigger=\"hover\"><i class=\"fa fa-chevron-circle-right\"></i> On Right</button>\n" +
    "\t\t\t\t\t\t<button data-popover=\"popover\" type=\"button\" class=\"btn btn-primary\" data-original-title=\"Popover in bottom\" data-content=\"This is the popover content space, put your ideas here!\" data-placement=\"bottom\" data-trigger=\"hover\"><i class=\"fa fa-chevron-circle-down\"></i> On Bottom</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n" +
    "\t\t<div class=\"container-fluid\">\n" +
    "\t\t  \n" +
    "\t\t  \n" +
    "\t\t  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "\t\t    <ul class=\"nav navbar-nav\">\n" +
    "\t\t      <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "\t\t      <li><a href=\"#\">Link</a></li>\n" +
    "\t\t      <li class=\"dropdown\">\n" +
    "\t\t        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "\t\t        <ul class=\"dropdown-menu\">\n" +
    "\t\t          <li><a href=\"#\">Action</a></li>\n" +
    "\t\t          <li><a href=\"#\">Another action</a></li>\n" +
    "\t\t          <li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t          <li class=\"divider\"></li>\n" +
    "\t\t          <li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t          <li class=\"divider\"></li>\n" +
    "\t\t          <li><a href=\"#\">One more separated link</a></li>\n" +
    "\t\t        </ul>\n" +
    "\t\t      </li>\n" +
    "\t\t    </ul>\n" +
    "\t\t    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "\t\t      <li><a href=\"#\">Link</a></li>\n" +
    "\t\t      <li class=\"dropdown\">\n" +
    "\t\t        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "\t\t        <ul class=\"dropdown-menu\">\n" +
    "\t\t          <li><a href=\"#\">Action</a></li>\n" +
    "\t\t          <li><a href=\"#\">Another action</a></li>\n" +
    "\t\t          <li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t          <li class=\"divider\"></li>\n" +
    "\t\t          <li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t        </ul>\n" +
    "\t\t      </li>\n" +
    "\t\t    </ul>\n" +
    "\t\t  </div>\n" +
    "\t\t</div>\n" +
    "\t</nav>\n" +
    "  \t<div class=\"block-flat\">\n" +
    "\t    <div class=\"content no-padding\">\n" +
    "\t      <h4 class=\"title\">Ticket Style list</h4>\n" +
    "\t      <div class=\"list-group tickets\">\n" +
    "\t\t\t  <li href=\"#\" class=\"list-group-item\">Unread <span class=\"badge badge-primary\">20</span></li>\n" +
    "\t\t\t  <li href=\"#\" class=\"list-group-item\">Open Tickets <span class=\"badge badge-success\">35</span></li>\n" +
    "\t\t\t  <li href=\"#\" class=\"list-group-item\">Closed Tickets <span class=\"badge\">45</span></li>\n" +
    "\t\t\t</div>\t            \n" +
    "\t    </div>\n" +
    "\t  </div>\n" +
    "  \n" +
    "\t\t</div>\n" +
    "\t\t\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Basic List Group</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<ul class=\"list-group\">\n" +
    "\t\t\t\t\t  <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "\t\t\t\t\t  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "\t\t\t\t\t  <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "\t\t\t\t\t  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "\t\t\t\t\t  <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Linked Items</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<div class=\"list-group\">\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item active\">Cras justo odio <span class=\"badge\">25</span></a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in <span class=\"badge\">25</span></a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">Morbi leo risus <span class=\"badge\">25</span></a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac <span class=\"badge\">25</span></a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">Vestibulum at eros <span class=\"badge\">25</span></a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Custom Content</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<div class=\"list-group\">\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item active\">\n" +
    "\t\t\t\t\t\t<h5 class=\"list-group-item-heading\">John Doe</h5>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-mobile-phone\"></i> 457 760 3244</div>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-envelope\"></i> johndoe@emailserver.com</div>\n" +
    "\t\t\t\t\t  </a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">\n" +
    "\t\t\t\t\t\t<h5 class=\"list-group-item-heading\">Mark Anonymous Person</h5>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-mobile-phone\"></i> 547 457 7484</div>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-envelope\"></i> markanonymous@emailserver.com</div>\n" +
    "\t\t\t\t\t  </a>\n" +
    "\t\t\t\t\t  <a href=\"#\" class=\"list-group-item\">\n" +
    "\t\t\t\t\t\t<h5 class=\"list-group-item-heading\">Jessica Smith Norway</h5>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-mobile-phone\"></i> 595 541 9578</div>\n" +
    "\t\t\t\t\t\t<div><i class=\"fa fa-envelope\"></i> jessysmith@emailserver.com</div>\n" +
    "\t\t\t\t\t  </a>\n" +
    "\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\n" +
    "\t\t\t\t\t<h3>Progress Bars</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Simple</h4>\n" +
    "\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 40%\">40%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 20%\">20%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\">60%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\">80%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4 class=\"spacer2\">Striped</h4>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 20%\">20%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 40%\">40%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\">60%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\">80%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4 class=\"spacer2\">Animated</h4>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 20%\">20%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 40%\">40%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\">60%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\">80%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4 class=\"spacer2\">Stacked</h4>\n" +
    "\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 20%\">20%</div>\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 20%\">20%</div>\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 30%\">30%</div>\n" +
    "\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">10%</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\n" +
    "\t\t\t\n" +
    "\t\t</div>\t\t\t\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Basic Buttons</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Examples</h4>\n" +
    "\t\t\t\t\t<p>This is the basic set of buttons.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Rounded corners</h4>\n" +
    "\t\t\t\t\t<p>Just add <code>\".btn-rad\"</code> class to the button.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-rad\">Default</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-rad\">Primary</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-rad\">Success</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-rad\">Info</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-rad\">Warning</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-rad\">Danger</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Buttons Size</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Sizes</h4>\n" +
    "\t\t\t\t\t<p>There are 4 kinds of button size: <code>.btn-xs</code>, <code>.btn-sm</code>, <code>.btn</code>, <code>.btn-lg</code>.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-xs\">Extra Small</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm\">Small</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">Normal</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-lg\">Extra Large</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Icon buttons</h4>\n" +
    "\t\t\t\t\t<p>Font awesome icons in bootstrap buttons.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-xs\"><i class=\"fa fa-file\"></i></button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-file\"></i></button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-file\"></i></button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-file\"></i></button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Button groups</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\t\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Vertical groups</h4>\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-group-vertical\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group-vertical\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group-vertical\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-success\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-success\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-success\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group-vertical\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-warning\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-warning\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-warning\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group-vertical\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-danger\">Left</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-danger\">Middle</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-danger\">Right</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Social Buttons</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-facebook\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-twitter\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-google-plus\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-dribbble\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-flickr\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-linkedin\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-youtube-play\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-pinterest\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-github\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-tumblr\"></i></button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-facebook\"><i class=\"fa fa-facebook\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-twitter\"><i class=\"fa fa-twitter\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-google-plus\"><i class=\"fa fa-google-plus\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-dribbble\"><i class=\"fa fa-dribbble\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-flickr\"><i class=\"fa fa-flickr\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-linkedin\"><i class=\"fa fa-linkedin\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-youtube\"><i class=\"fa fa-youtube-play\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-pinterest\"><i class=\"fa fa-pinterest\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-github\"><i class=\"fa fa-github\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-tumblr\"><i class=\"fa fa-tumblr\"></i></button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-facebook bg\"><i class=\"fa fa-facebook\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-twitter bg\"><i class=\"fa fa-twitter\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-google-plus bg\"><i class=\"fa fa-google-plus\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-dribbble bg\"><i class=\"fa fa-dribbble\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-flickr bg\"><i class=\"fa fa-flickr\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-linkedin bg\"><i class=\"fa fa-linkedin\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-youtube bg\"><i class=\"fa fa-youtube-play\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-pinterest bg\"><i class=\"fa fa-pinterest\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-github bg\"><i class=\"fa fa-github\"></i></button>\n" +
    "\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default btn-tumblr bg\"><i class=\"fa fa-tumblr\"></i></button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default btn-facebook bg\"><i class=\"fa fa-facebook\"></i></button>\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">Give Like</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default btn-twitter bg\"><i class=\"fa fa-twitter\"></i></button>\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">Follow Me</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default btn-google-plus bg\"><i class=\"fa fa-google-plus\"></i></button>\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">Plus One</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default btn-github bg\"><i class=\"fa fa-github\"></i></button>\n" +
    "\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">Fork</button>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-sm-6 col-md-6\">\n" +
    "\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Advanced buttons</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Text with icon buttons</h4>\n" +
    "\t\t\t\t\t<p>Font awesome icons in bootstrap buttons.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-cloud-download\"></i> Download</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-cloud-download\"></i> Download</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-cloud-download\"></i> Download</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-lg\"><i class=\"fa fa-cloud-download\"></i> Download</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Flat buttons</h4>\n" +
    "\t\t\t\t\t<p>Just add <code>\".btn-flat\"</code> class to the button.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-flat\">Default</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-flat\">Primary</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-flat\">Success</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-flat\">Info</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-flat\">Warning</button>\n" +
    "\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-flat\">Danger</button>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Dropdown Buttons</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Buttons with dropdown</h4>\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\tBasic Dropdown <span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Split Dropdown</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Split Dropdown</button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<p>Split state dropdown toggle</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Primary</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Success</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Warning</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\">Danger</button>\n" +
    "\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t<span class=\"caret\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "\t\t\t\t\t\t  </button>\n" +
    "\t\t\t\t\t\t  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\n" +
    "\t\t\t\t\t\t  </ul>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"block-flat\">\n" +
    "\t\t\t\t<div class=\"header\">\t\t\t\t\t\t\t\n" +
    "\t\t\t\t\t<h3>Toolbars</h3>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"content\">\n" +
    "\t\t\t\t\t<h4>Basic toolbar</h4>\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-toolbar\">\n" +
    "\t\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-left\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-center\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-right\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-align-justify\"></i></button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-font\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-bold\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-italic\"></i></button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-list\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-th-large\"></i></button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Semi-transparent buttons</h4>\n" +
    "\t\t\t\t\t<p>Examples of buttons with dropdown menu.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer spacer-bottom\">\n" +
    "\t\t\t\t\t\t<div class=\"btn-toolbar\">\n" +
    "\t\t\t\t\t\t\t<div class=\"btn-group btn-blurbg\">\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-location-arrow\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-camera\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-microphone\"></i></button>\n" +
    "\t\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-cloud\"></i></button>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\n" +
    "\t\t\t\t\t<h4>Video player buttons</h4>\n" +
    "\t\t\t\t\t<p>Examples of buttons transparency over HTML5 video.</p>\n" +
    "\t\t\t\t\t<div class=\"spacer\">\n" +
    "\t\t\t\t\t\t<div class=\"video-player\">\n" +
    "\t\t\t\t\t\t\t<video id=\"video1\">\n" +
    "\t\t\t\t\t\t\t\t<source type=\"video/ogg\" src=\"images/mov_bbb.mp4\">\n" +
    "\t\t\t\t\t\t\t\t</source><source type=\"video/ogg\" src=\"images/mov_bbb.ogg\">\n" +
    "\t\t\t\t\t\t\t\tYour browser does not support HTML5 video.\n" +
    "\t\t\t\t\t\t\t</source></video>\n" +
    "\t\t\t\t\t\t\t<div class=\"btn-toolbar btn-controls\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n" +
    "\t\t\t\t\t\t\t\t  <button id=\"play_video\" type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-play\"></i></button>\n" +
    "\t\t\t\t\t\t\t\t  <button id=\"pause_video\" type=\"button\" class=\"btn btn-transparent\"><i class=\"fa fa-pause\"></i></button>\n" +
    "\t\t\t\t\t\t\t\t  <button id=\"time_video\" type=\"button\" class=\"btn btn-transparent\">00:00</button>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\t\t\t\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Basic Form</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "\n" +
    "          <form role=\"form\"> \n" +
    "            <div class=\"form-group\">\n" +
    "              <label>Email address</label> <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\"> \n" +
    "              <label>Password</label> <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n" +
    "            </div> \n" +
    "            <div class=\"checkbox\">\n" +
    "              <label> <input type=\"checkbox\" class=\"icheck\"> Remember me </label> </div> \n" +
    "              <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n" +
    "              <button class=\"btn btn-default\">Cancel</button>\n" +
    "            </form>\n" +
    "          \n" +
    "          </div>\n" +
    "        </div>\t\t\t\t\n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"col-sm-6 col-md-6\">\n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Horizontal Form</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "            <form class=\"form-horizontal\" role=\"form\">\n" +
    "              <div class=\"form-group\">\n" +
    "              <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "              <div class=\"col-sm-10\">\n" +
    "                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "              </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "              <div class=\"col-sm-10\">\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n" +
    "              </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                <label>\n" +
    "                  <input type=\"checkbox\" class=\"icheck\"> Remember me\n" +
    "                </label>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "              <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\">Registrer</button>\n" +
    "                <button class=\"btn btn-default\">Cancel</button>\n" +
    "              </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\t\t\t\t\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "      \n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Basic Elements</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "             <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Input Text</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"form-control\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Input Password</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input type=\"password\" class=\"form-control\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Placeholder Input</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"form-control\" placeholder=\"Placeholder text\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Disabled Input</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input disabled class=\"form-control\" placeholder=\"Disabled input text\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Readonly Input</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input readonly class=\"form-control\" value=\"Readonly input text\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Textarea</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <textarea class=\"form-control\"></textarea>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Select & Option Elements</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "              <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Basic Select</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <select class=\"form-control\">\n" +
    "                    <option>1</option>\n" +
    "                    <option>2</option>\n" +
    "                    <option>3</option>\n" +
    "                    <option>4</option>\n" +
    "                    <option>5</option>\n" +
    "                  </select>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Multiple Select</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <select multiple class=\"form-control\">\n" +
    "                    <option>1</option>\n" +
    "                    <option>2</option>\n" +
    "                    <option>3</option>\n" +
    "                    <option>4</option>\n" +
    "                    <option>5</option>\n" +
    "                  </select>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Radio</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"radio\" checked name=\"rad1\" class=\"icheck\"> Option 1</label> \n" +
    "                  </div>\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"radio\" name=\"rad1\" class=\"icheck\"> Option 2</label> \n" +
    "                  </div>\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"radio\" name=\"rad1\" class=\"icheck\"> Option 3</label> \n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Inline Radio</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <label class=\"radio-inline\"> <input type=\"radio\" checked name=\"rad1\" class=\"icheck\"> Option 1</label> \n" +
    "                  <label class=\"radio-inline\"> <input type=\"radio\" name=\"rad1\" class=\"icheck\"> Option 2</label> \n" +
    "                  <label class=\"radio-inline\"> <input type=\"radio\" name=\"rad1\" class=\"icheck\"> Option 3</label> \n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Checkbox</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"checkbox\" checked name=\"check1\" class=\"icheck\"> Option 1</label> \n" +
    "                  </div>\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"checkbox\" name=\"check2\" class=\"icheck\"> Option 2</label> \n" +
    "                  </div>\n" +
    "                  <div class=\"radio\"> \n" +
    "                    <label> <input type=\"checkbox\" name=\"check3\" class=\"icheck\"> Option 3</label> \n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Inline Checkbox</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <label class=\"checkbox-inline\"> <input type=\"checkbox\" checked name=\"rad1\" class=\"icheck\"> Option 1</label> \n" +
    "                  <label class=\"checkbox-inline\"> <input type=\"checkbox\" name=\"rad1\" class=\"icheck\"> Option 2</label> \n" +
    "                  <label class=\"checkbox-inline\"> <input type=\"checkbox\" name=\"rad1\" class=\"icheck\"> Option 3</label> \n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Input Groups</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "              <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Input Text</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">@</span>\n" +
    "                    <input class=\"form-control\" placeholder=\"Username\">\n" +
    "                  </div>\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <input class=\"form-control\">\n" +
    "                    <span class=\"input-group-addon\">.00</span>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">$</span>\n" +
    "                    <input class=\"form-control\">\n" +
    "                    <span class=\"input-group-addon\">.00</span>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Input Sizing</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group input-group-lg\">\n" +
    "                    <span class=\"input-group-addon\">@</span>\n" +
    "                    <input class=\"form-control\" placeholder=\"Username\">\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">@</span>\n" +
    "                    <input class=\"form-control\" placeholder=\"Username\">\n" +
    "                  </div>\n" +
    "\n" +
    "                  <div class=\"input-group input-group-sm\">\n" +
    "                    <span class=\"input-group-addon\">@</span>\n" +
    "                    <input class=\"form-control\" placeholder=\"Username\">\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Checkbox & Radio</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">\n" +
    "                    <input type=\"checkbox\">\n" +
    "                    </span>\n" +
    "                    <input class=\"form-control\">\n" +
    "                  </div>\t\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <span class=\"input-group-addon\">\n" +
    "                    <input type=\"radio\">\n" +
    "                    </span>\n" +
    "                    <input class=\"form-control\">\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Button Addons</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <input class=\"form-control\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                    <button class=\"btn btn-primary\" type=\"button\">Go!</button>\n" +
    "                    </span>\n" +
    "                  </div>\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <input class=\"form-control\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n" +
    "                    <ul class=\"dropdown-menu pull-right\">\n" +
    "                      <li><a href=\"#\">Action</a></li>\n" +
    "                      <li><a href=\"#\">Another action</a></li>\n" +
    "                      <li><a href=\"#\">Something else here</a></li>\n" +
    "                      <li class=\"divider\"></li>\n" +
    "                      <li><a href=\"#\">Separated link</a></li>\n" +
    "                    </ul>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"input-group\">\n" +
    "                    <input class=\"form-control\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                      <button tabindex=\"-1\" class=\"btn btn-default\" type=\"button\">Action</button>\n" +
    "                      <button tabindex=\"-1\" data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle\" type=\"button\">\n" +
    "                      <span class=\"caret\"></span>\n" +
    "                      <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "                      </button>\n" +
    "                      <ul role=\"menu\" class=\"dropdown-menu pull-right\">\n" +
    "                      <li><a href=\"#\">Action</a></li>\n" +
    "                      <li><a href=\"#\">Another action</a></li>\n" +
    "                      <li><a href=\"#\">Something else here</a></li>\n" +
    "                      <li class=\"divider\"></li>\n" +
    "                      <li><a href=\"#\">Separated link</a></li>\n" +
    "                      </ul>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Readonly Input</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input readonly class=\"form-control\" value=\"Readonly input text\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Textarea</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <textarea class=\"form-control\"></textarea>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Switch</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "              <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Sizes</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                \n" +
    "                  \n" +
    "                    <input class=\"switch\" type=\"checkbox\" checked data-size=\"mini\">\n" +
    "               \n" +
    "                  \n" +
    "\n" +
    "                    <input class=\"switch\" data-size=\"small\" type=\"checkbox\" checked>\n" +
    "\t\t\t\t\t\t\t\n" +
    "                  \n" +
    "\n" +
    "                    <input class=\"switch\" type=\"checkbox\" checked>\n" +
    "\n" +
    "                  \n" +
    "\n" +
    "                    <input class=\"switch\" data-size=\"large\" type=\"checkbox\" checked>\n" +
    "\n" +
    "                  \n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Info</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"switch\" type=\"checkbox\" checked data-on-color=\"info\" data-off-color=\"primary\">\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Success</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"switch\" type=\"checkbox\" checked data-on-color=\"success\" data-off-color=\"primary\">\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Warning</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"switch\" type=\"checkbox\" checked data-on-color=\"warning\">\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Danger</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"switch\" data-label-text=\"TV\" type=\"checkbox\" checked data-on-color=\"danger\">\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>DateTime Picker</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "              <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Default</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <input class=\"form-control datetime\" size=\"16\" value=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Read Only</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\" readonly>\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\"> Only Date </label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-min-view=\"2\" data-date-format=\"yyyy-mm-dd\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\" readonly>\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Decade View</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-start-view=\"4\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Year View</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-start-view=\"3\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Month View</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-start-view=\"2\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Day View</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-start-view=\"1\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Hour View</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-start-view=\"0\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Day View Meridian</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-show-meridian=\"true\" data-start-view=\"1\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Hour View Meridian</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <div class=\"input-group date datetime col-md-5 col-xs-7\" data-show-meridian=\"true\" data-start-view=\"0\" data-date=\"1979-09-16T05:25:07Z\" data-date-format=\"yyyy-mm-dd - HH:ii\" data-link-field=\"dtp_input1\">\n" +
    "                    <input class=\"form-control\" size=\"16\" value=\"\">\n" +
    "                    <span class=\"input-group-addon btn btn-primary\"><span class=\"glyphicon glyphicon-th\"></span></span>\n" +
    "                  </div>\t\t\t\t\t\t\t\t\t\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"block-flat\">\n" +
    "          <div class=\"header\">\t\t\t\t\t\t\t\n" +
    "            <h3>Date Range Picker</h3>\n" +
    "          </div>\n" +
    "          <div class=\"content\">\n" +
    "            <form class=\"form-horizontal group-border-dashed\" action=\"#\" style=\"border-radius: 0px\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Reservation Dates</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                 <fieldset>\n" +
    "                  <div class=\"control-group\">\n" +
    "                    <div class=\"controls\">\n" +
    "                     <div class=\"input-prepend input-group\">\n" +
    "                       <span class=\"add-on input-group-addon primary\"><span class=\"glyphicon glyphicon-th\"></span></span><input style=\"width: 200px\" name=\"reservation\" id=\"reservation\" class=\"form-control\" value=\"03/18/2014 - 03/23/2014\"> \n" +
    "                     </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                 </fieldset>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Date & Time Picker</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                  <fieldset>\n" +
    "                    <div class=\"control-group\">\n" +
    "                      <div class=\"controls\">\n" +
    "                        <div class=\"input-prepend input-group\">\n" +
    "                          <span class=\"add-on input-group-addon primary\"><i class=\"glyphicon glyphicon-th\"></i></span>\n" +
    "                          <input style=\"width: 300px\" name=\"reservation\" id=\"reservationtime\" class=\"form-control\" value=\"02/01/2014 1:00 PM - 02/05/2014 2:30 PM\" class=\"span4\">\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </fieldset>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Date & Time Picker</label>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                  <div id=\"reportrange\" class=\"pull-left\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc\">\n" +
    "                     <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i> \n" +
    "                     <span></span> <b class=\"caret\"></b>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "</div></div></div>"
  );


  $templateCache.put('public/page/app/logout.html',
    "\r" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\r" +
    "\n" +
    "  Launch demo modal\r" +
    "\n" +
    "</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r" +
    "\n" +
    "  <div class=\"modal-dialog\" role=\"document\">\r" +
    "\n" +
    "    <div class=\"modal-content\">\r" +
    "\n" +
    "      <div class=\"modal-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r" +
    "\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"modal-body\">\r" +
    "\n" +
    "        ...\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<nav>\r" +
    "\n" +
    "  <ul class=\"pagination\">\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "      <a href=\"#\" aria-label=\"Previous\">\r" +
    "\n" +
    "        <span aria-hidden=\"true\">&laquo;</span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li><a>1</a></li>\r" +
    "\n" +
    "    <li><a>2</a></li>\r" +
    "\n" +
    "    <li><a>3</a></li>\r" +
    "\n" +
    "    <li><a>4</a></li>\r" +
    "\n" +
    "    <li><a>5</a></li>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "      <a aria-label=\"Next\">\r" +
    "\n" +
    "        <span aria-hidden=\"true\">&raquo;</span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"btn-group\">\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Left'\">Left</label>\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Middle'\">Middle</label>\r" +
    "\n" +
    "        <label class=\"btn btn-primary\" ng-model=\"radioModel\" btn-radio=\"'Right'\">Right</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"btn-group\">\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Left'\" uncheckable>Left</label>\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Middle'\" uncheckable>Middle</label>\r" +
    "\n" +
    "        <label class=\"btn btn-success\" ng-model=\"radioModel\" btn-radio=\"'Right'\" uncheckable>Right</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<style>\r" +
    "\n" +
    "  .full button span {\r" +
    "\n" +
    "    background-color: limegreen;\r" +
    "\n" +
    "    border-radius: 32px;\r" +
    "\n" +
    "    color: black;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "  .partially button span {\r" +
    "\n" +
    "    background-color: orange;\r" +
    "\n" +
    "    border-radius: 32px;\r" +
    "\n" +
    "    color: black;\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "</style>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <pre>Selected date is: <em>{{dt | date:'fullDate' }}</em></pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>Inline</h4>\r" +
    "\n" +
    "    <div style=\"display:inline-block; min-height:290px\">\r" +
    "\n" +
    "      <datepicker ng-model=\"dt\" min-date=\"minDate\" show-weeks=\"true\" class=\"well well-sm\" custom-class=\"getDayClass(date, mode)\"></datepicker>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h4>Popup</h4>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <p class=\"input-group\">\r" +
    "\n" +
    "              <input class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"'2020-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\">\r" +
    "\n" +
    "              <span class=\"input-group-btn\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <p class=\"input-group\">\r" +
    "\n" +
    "              <input type=\"date\" class=\"form-control\" datepicker-popup ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"'2020-06-22'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\">\r" +
    "\n" +
    "              <span class=\"input-group-btn\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "              </span>\r" +
    "\n" +
    "            </p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\">\r" +
    "\n" +
    "            <label>Format:</label> <select class=\"form-control\" ng-model=\"format\" ng-options=\"f for f in formats\"><option></option></select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"today()\">Today</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"dt = '2009-08-24'\">2009-08-24</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"clear()\">Clear</button>\r" +
    "\n" +
    "    <button type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"toggleMin()\" tooltip=\"After today restriction\">Min date</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <span dropdown on-toggle=\"toggled(open)\">\r" +
    "\n" +
    "      <a href id=\"simple-dropdown\" dropdown-toggle>\r" +
    "\n" +
    "        Click me for a dropdown, yo!\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown\">\r" +
    "\n" +
    "        <li ng-repeat=\"choice in items\">\r" +
    "\n" +
    "          <a href>{{choice}}</a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown is-open=\"status.isopen\">\r" +
    "\n" +
    "      <button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle ng-disabled=\"disabled\">\r" +
    "\n" +
    "        Button dropdown <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown>\r" +
    "\n" +
    "      <button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-danger\" dropdown-toggle>\r" +
    "\n" +
    "        <span class=\"caret\"></span>\r" +
    "\n" +
    "        <span class=\"sr-only\">Split button!</span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"split-button\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown dropdown-append-to-body>\r" +
    "\n" +
    "      <button id=\"btn-append-to-body\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle>\r" +
    "\n" +
    "        Dropdown on Body <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btn-append-to-body\">\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "        <li class=\"divider\"></li>\r" +
    "\n" +
    "        <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown>\r" +
    "\n" +
    "      <button id=\"button-template-url\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle ng-disabled=\"disabled\">\r" +
    "\n" +
    "        Dropdown using template <span class=\"caret\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <ul class=\"dropdown-menu\" template-url=\"dropdown.html\" aria-labelledby=\"button-template-url\">\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleDropdown($event)\">Toggle button dropdown</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-warning btn-sm\" ng-click=\"disabled = !disabled\">Enable/Disable</button>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"btn-group\" dropdown keyboard-nav>\r" +
    "\n" +
    "        <button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn btn-primary\" dropdown-toggle>\r" +
    "\n" +
    "            Dropdown with keyboard navigation <span class=\"caret\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"simple-btn-keyboard-nav\">\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Action</a></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Another action</a></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "            <li class=\"divider\"></li>\r" +
    "\n" +
    "            <li role=\"menuitem\"><a href=\"#\">Separated link</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"dropdown.html\">\r" +
    "\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-template-url\">\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Action in Template</a></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Another action in Template</a></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Something else here</a></li>\r" +
    "\n" +
    "          <li class=\"divider\"></li>\r" +
    "\n" +
    "          <li role=\"menuitem\"><a href=\"#\">Separated link in Template</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "        <div class=\"modal-header\">\r" +
    "\n" +
    "            <h3 class=\"modal-title\">I'm a modal!</h3>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-body\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"item in items\">\r" +
    "\n" +
    "                    <a href=\"#\" ng-click=\"$event.preventDefault(); selected.item = item\">{{ item }}</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            Selected: <b>{{ selected.item }}</b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"modal-footer\">\r" +
    "\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r" +
    "\n" +
    "            <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open()\">Open me!</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open('lg')\">Large modal</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"open('sm')\">Small modal</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" ng-click=\"toggleAnimation()\">Toggle Animation ({{ animationsEnabled }})</button>\r" +
    "\n" +
    "    <div ng-show=\"selected\">Selection from a modal: {{ selected }}</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h4>Default</h4>\r" +
    "\n" +
    "    <pagination total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\r" +
    "\n" +
    "    <pagination boundary-links=\"true\" total-items=\"totalItems\" ng-model=\"currentPage\" class=\"pagination-sm\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\r" +
    "\n" +
    "    <pagination direction-links=\"false\" boundary-links=\"true\" total-items=\"totalItems\" ng-model=\"currentPage\"></pagination>\r" +
    "\n" +
    "    <pagination direction-links=\"false\" total-items=\"totalItems\" ng-model=\"currentPage\" num-pages=\"smallnumPages\"></pagination>\r" +
    "\n" +
    "    <pre>The selected page no: {{currentPage}}</pre>\r" +
    "\n" +
    "    <button class=\"btn btn-info\" ng-click=\"setPage(3)\">Set current page to: 3</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Pager</h4>\r" +
    "\n" +
    "    <pager total-items=\"totalItems\" ng-model=\"currentPage\"></pager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Limit the maximum visible buttons</h4>\r" +
    "\n" +
    "    <pagination total-items=\"bigTotalItems\" ng-model=\"bigCurrentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\"></pagination>\r" +
    "\n" +
    "    <pagination total-items=\"bigTotalItems\" ng-model=\"bigCurrentPage\" max-size=\"maxSize\" class=\"pagination-sm\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\"></pagination>\r" +
    "\n" +
    "    <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<h4>Dynamic</h4>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Text:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.content\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Title:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.title\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <label>Popup Template:</label>\r" +
    "\n" +
    "      <input ng-model=\"dynamicPopover.templateUrl\" class=\"form-control\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <button popover=\"{{dynamicPopover.content}}\" popover-title=\"{{dynamicPopover.title}}\" class=\"btn btn-default\">Dynamic Popover</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button popover-template=\"dynamicPopover.templateUrl\" popover-title=\"{{dynamicPopover.title}}\" class=\"btn btn-default\">Popover With Template</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"myPopoverTemplate.html\">\r" +
    "\n" +
    "        <div>{{dynamicPopover.content}}</div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label>Popup Title:</label>\r" +
    "\n" +
    "          <input type=\"text\" ng-model=\"dynamicPopover.title\" class=\"form-control\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </script>\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Positional</h4>\r" +
    "\n" +
    "    <button popover-placement=\"top\" popover=\"On the Top!\" class=\"btn btn-default\">Top</button>\r" +
    "\n" +
    "    <button popover-placement=\"left\" popover=\"On the Left!\" class=\"btn btn-default\">Left</button>\r" +
    "\n" +
    "    <button popover-placement=\"right\" popover=\"On the Right!\" class=\"btn btn-default\">Right</button>\r" +
    "\n" +
    "    <button popover-placement=\"bottom\" popover=\"On the Bottom!\" class=\"btn btn-default\">Bottom</button>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Triggers</h4>\r" +
    "\n" +
    "    <p>\r" +
    "\n" +
    "      <button popover=\"I appeared on mouse enter!\" popover-trigger=\"mouseenter\" class=\"btn btn-default\">Mouseenter</button>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <input value=\"Click me!\" popover=\"I appeared on focus! Click away and I'll vanish...\" popover-trigger=\"focus\" class=\"form-control\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h4>Other</h4>\r" +
    "\n" +
    "    <button popover-animation=\"true\" popover=\"I fade in and out!\" class=\"btn btn-default\">fading</button>\r" +
    "\n" +
    "    <button popover=\"I have a title!\" popover-title=\"The title.\" class=\"btn btn-default\">title</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h3>Static</h3>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar value=\"55\"></progressbar></div>\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar class=\"progress-striped\" value=\"22\" type=\"warning\">22%</progressbar></div>\r" +
    "\n" +
    "        <div class=\"col-sm-4\"><progressbar class=\"progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progressbar></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h3>Dynamic <button class=\"btn btn-sm btn-primary\" type=\"button\" ng-click=\"random()\">Randomize</button></h3>\r" +
    "\n" +
    "    <progressbar max=\"max\" value=\"dynamic\"><span style=\"color:white; white-space:nowrap\">{{dynamic}} / {{max}}</span></progressbar>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <small><em>No animation</em></small>\r" +
    "\n" +
    "    <progressbar animate=\"false\" value=\"dynamic\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <small><em>Object (changes type based on value)</em></small>\r" +
    "\n" +
    "    <progressbar class=\"progress-striped active\" value=\"dynamic\" type=\"{{type}}\">{{type}} <i ng-show=\"showWarning\">!!! Watch out !!!</i></progressbar>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <hr>\r" +
    "\n" +
    "    <h3>Stacked <button class=\"btn btn-sm btn-primary\" type=\"button\" ng-click=\"randomStacked()\">Randomize</button></h3>\r" +
    "\n" +
    "    <progress><bar ng-repeat=\"bar in stacked track by $index\" value=\"bar.value\" type=\"{{bar.type}}\"><span ng-hide=\"bar.value < 5\">{{bar.value}}%</span></bar></progress>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <timepicker ng-model=\"mytime\" ng-change=\"changed()\" hour-step=\"hstep\" minute-step=\"mstep\" show-meridian=\"ismeridian\"></timepicker>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <pre class=\"alert alert-info\">Time is: {{mytime | date:'shortTime' }}</pre>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\"> \r" +
    "\n" +
    "    <div class=\"col-xs-6\">\r" +
    "\n" +
    "        Hours step is:\r" +
    "\n" +
    "      <select class=\"form-control\" ng-model=\"hstep\" ng-options=\"opt for opt in options.hstep\"></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-xs-6\">\r" +
    "\n" +
    "        Minutes step is:\r" +
    "\n" +
    "      <select class=\"form-control\" ng-model=\"mstep\" ng-options=\"opt for opt in options.mstep\"></select>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <button class=\"btn btn-info\" ng-click=\"toggleMode()\">12H / 24H</button>\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"update()\">Set to 14:00</button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"clear()\">Clear</button>"
  );


  $templateCache.put('public/page/common/nav.html',
    "\n" +
    "<ul class=\"nav navbar-nav\">\n" +
    "    <li class=\"active\"><a ui-sref=\"app.home\">首页</a></li>\n" +
    "    <li><a ui-sref=\"app.external({url: 'http://cxt.1688.com/contrast-b.html'})\">诚信通首页</a></li>\n" +
    "\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            客服中心<b class=\"caret\"></b>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li><a ui-sref=\"app.external({url: 'http://gys.1688.com/skill.html'})\" title=\"交易技巧\">交易技巧</a></li>\n" +
    "            <li><a ui-sref=\"app.external({url: 'http://gys.1688.com/story.html'})\" title=\"成功经验\">成功经验</a></li>\n" +
    "            <li><a ui-sref=\"app.external({url: 'http://gys.1688.com/pro.html'})\" title=\"热门活动\">热门活动</a></li>\n" +
    "            <li class=\"dropdown-submenu\">\n" +
    "                <a>我的收藏夹</a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://purchase.1688.com/favorites/favorite_offer.htm'})\" title=\"收藏的货品\">收藏的货品</a></li>\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://purchase.1688.com/favorites/favorite_shop.htm'})\" title=\"收藏的供应商\">收藏的供应商</a></li>\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://purchase.1688.com/favorites/trade_shop.htm'})\" title=\"交易过的供应商\">交易过的供应商</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">我的阿里<b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu col-menu-2\">\n" +
    "            <li class=\"col-sm-6 no-padding\">\n" +
    "                <ul>\n" +
    "                    <li class=\"dropdown-header\"><i class=\"fa fa-group\"></i>Users</li>\n" +
    "                    <li><a href=\"#\">Action</a></li>\n" +
    "                    <li><a href=\"#\">Another action</a></li>\n" +
    "                    <li><a href=\"#\">Something else here</a></li>\n" +
    "                    <li class=\"dropdown-header\"><i class=\"fa fa-gear\"></i>Config</li>\n" +
    "                    <li><a href=\"#\">Action</a></li>\n" +
    "                    <li><a href=\"#\">Another action</a></li>\n" +
    "                    <li><a href=\"#\">Something else here</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <li class=\"col-sm-6 no-padding\">\n" +
    "                <ul>\n" +
    "                    <li class=\"dropdown-header\"><i class=\"fa fa-legal\"></i>开发中选项</li>\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://fontawesome.dashgame.com/'})\">Font Awesome</a></li>\n" +
    "                    <li><a href=\"http://angular-ui.github.io/bootstrap/\">Bootstrap</a></li>\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://www.requirejs.cn/'})\">RequireJS</a></li>\n" +
    "                    <li><a ui-sref=\"app.external({url: 'http://www.apjs.net/'})\">AngularJS</a></li>\n" +
    "                    <li><a href=\"https://github.com/mycoin/ec-biz\">GitHub.com</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "    <li><a ui-sref=\"app.about\">关于我们</a></li>\n" +
    "</ul> \n" +
    "\n" +
    "\n" +
    "<ul class=\"nav navbar-nav navbar-right\">\n" +
    "    <li class=\"button dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-comments\"></i></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "                <div class=\"content\" tabindex=\"0\" style=\"right: -15px\">\n" +
    "                    <ul>\n" +
    "                        <li><a href=\"#\"><span class=\"date pull-right\">20 Oct.</span><span class=\"name\">Adam</span>is now following you</a></li>\n" +
    "                        <li><a href=\"#\"><span class=\"date pull-right\">2 Nov.</span><span class=\"name\">Michael</span>is now following you</a></li>\n" +
    "                        <li><a href=\"#\"><span class=\"date pull-right\">2 Nov.</span><span class=\"name\">Lucy</span>is now following you</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <ul class=\"foot\">\n" +
    "                    <li><a href=\"#\">View all messages</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "    <li class=\"button dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-globe\"></i>\n" +
    "            <span class=\"bubble\">10</span>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "                <div class=\"content\" tabindex=\"0\" style=\"right: -15px\">\n" +
    "                    <ul>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-cloud-upload info\"></i><b>Daniel</b>is now following you<span class=\"date\">2 minutes ago.</span></a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-male success\"></i><b>Michael</b>is now following you<span class=\"date\">15 minutes ago.</span></a></li>\n" +
    "                        <li><a href=\"#\"><i class=\"fa fa-bug warning\"></i><b>Mia</b>commented on post<span class=\"date\">30 minutes ago.</span></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"pane\" style=\"display: none\">\n" +
    "                    <div class=\"slider\" style=\"height: 20px; top: 0px\"></div>\n" +
    "                </div>\n" +
    "                <ul class=\"foot\">\n" +
    "                    <li><a href=\"#\">View all activity</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "    <li class=\"button\">\n" +
    "        <a class=\"speech-button\">\n" +
    "            <i class=\"fa fa-microphone\"></i>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a href=\"https://work.alibaba-inc.com/work/home\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            ronghan.lrh\n" +
    "            <b class=\"caret\"></b>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li><a ui-sref=\"app.external({url: 'https://work.alibaba-inc.com/'})\">内网首页</a></li>\n" +
    "            <li><a href=\"#\">我的阿里</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"https://login.alibaba-inc.com/ssoLogout.htm\">退出登录</a></li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('public/page/common/side.html',
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-home\"></i>\n" +
    "        <span>Dashboard</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"index-2.html\">Version 1</a></li>\n" +
    "        <li><a href=\"dashboard2.html\"><span class=\"label label-primary pull-right\">New</span>Version 2</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group active\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-smile-o\"></i>\n" +
    "        <span>UI Elements</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"ui-elements.html\">General</a></li>\n" +
    "        <li><a href=\"ui-buttons.html\">Buttons</a></li>\n" +
    "        <li><a href=\"ui-modals.html\"><span class=\"label label-primary pull-right\">New</span>Modals</a></li>\n" +
    "        <li><a href=\"ui-notifications.html\"><span class=\"label label-primary pull-right\">New</span>Notifications</a></li>\n" +
    "        <li><a href=\"ui-icons.html\">Icons</a></li>\n" +
    "        <li><a href=\"ui-grid.html\">Grid</a></li>\n" +
    "        <li><a href=\"ui-tabs-accordions.html\">Tabs & Acordions</a></li>\n" +
    "        <li><a href=\"ui-nestable-lists.html\">Nestable Lists</a></li>\n" +
    "        <li><a href=\"ui-treeview.html\">Tree View</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-list-alt\"></i>\n" +
    "        <span>Forms</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"form-elements.html\">Components</a></li>\n" +
    "        <li><a href=\"form-validation.html\">Validation</a></li>\n" +
    "        <li><a href=\"form-wizard.html\">Wizard</a></li>\n" +
    "        <li><a href=\"form-masks.html\">Input Masks</a></li>\n" +
    "        <li><a href=\"form-multiselect.html\"><span class=\"label label-primary pull-right\">New</span>Multi Select</a></li>\n" +
    "        <li><a href=\"form-wysiwyg.html\"><span class=\"label label-primary pull-right\">New</span>WYSIWYG Editor</a></li>\n" +
    "        <li><a href=\"form-upload.html\"><span class=\"label label-primary pull-right\">New</span>Multi Upload</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-table\"></i>\n" +
    "        <span>Tables</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"tables-general.html\">General</a></li>\n" +
    "        <li><a href=\"tables-datatables.html\"><span class=\"label label-primary pull-right\">New</span>Data Tables</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-map-marker nav-icon\"></i>\n" +
    "        <span>Maps</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"maps.html\">Google Maps</a></li>\n" +
    "        <li><a href=\"vector-maps.html\"><span class=\"label label-primary pull-right\">New</span>Vector Maps</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-envelope nav-icon\"></i>\n" +
    "        <span>Email</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"email-inbox.html\">Inbox</a></li>\n" +
    "        <li><a href=\"email-read.html\">Email Detail</a></li>\n" +
    "        <li><a href=\"email-compose.html\"><span class=\"label label-primary pull-right\">New</span>Email Compose</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"typography.html\">\n" +
    "        <i class=\"fa fa-text-height\"></i>\n" +
    "        <span>Typography</span>\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"charts.html\">\n" +
    "        <i class=\"fa fa-bar-chart-o\"></i>\n" +
    "        <span>Charts</span>\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li class=\"side-group\">\n" +
    "    <a href=\"#\">\n" +
    "        <i class=\"fa fa-file\"></i>\n" +
    "        <span>Pages</span>\n" +
    "    </a>\n" +
    "    <ul class=\"sub-menu\">\n" +
    "        <li><a href=\"pages-blank.html\">Blank Page</a></li>\n" +
    "        <li><a href=\"pages-blank-header.html\">Blank Page Header</a></li>\n" +
    "        <li><a href=\"pages-blank-aside.html\">Blank Page Aside</a></li>\n" +
    "        <li><a href=\"pages-login.html\">Login</a></li>\n" +
    "        <li><a href=\"pages-404.html\">404 Page</a></li>\n" +
    "        <li><a href=\"pages-500.html\">500 Page</a></li>\n" +
    "        <li><a href=\"pages-sign-up.html\"><span class=\"label label-primary pull-right\">New</span>Sign Up</a></li>\n" +
    "        <li><a href=\"pages-forgot-password.html\"><span class=\"label label-primary pull-right\">New</span>Forgot Password</a></li>\n" +
    "        <li><a href=\"pages-profile.html\"><span class=\"label label-primary pull-right\">New</span>Profile</a></li>\n" +
    "        <li><a href=\"pages-search.html\"><span class=\"label label-primary pull-right\">New</span>Search</a></li>\n" +
    "        <li><a href=\"pages-calendar.html\"><span class=\"label label-primary pull-right\">New</span>Calendar</a></li>\n" +
    "        <li><a href=\"pages-code-editor.html\"><span class=\"label label-primary pull-right\">New</span>Code Editor</a></li>\n" +
    "        <li><a href=\"pages-gallery.html\">Gallery</a></li>\n" +
    "        <li><a href=\"pages-timeline.html\">Timeline</a></li>\n" +
    "    </ul>\n" +
    "</li>"
  );
 }; });