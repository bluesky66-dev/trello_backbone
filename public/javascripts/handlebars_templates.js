this["JST"] = this["JST"] || {};

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"fa fa-eye\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Labels</p>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"add-new-label\">+</span>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<p>Due Date</p><span class="
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.complete : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "><span class=\"fa fa-square-o complete\"><span class=\"fa fa-check\" style="
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.complete : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></span>&nbsp;&nbsp;<span class=\"complete-date\">"
    + ((stack1 = (helpers.dateString || (depth0 && depth0.dateString) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"dateString","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " at "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_time : stack1), depth0))
    + "</span></span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "\"green\"";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.checkDate || (depth0 && depth0.checkDate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"checkDate","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "\"pink\"";
},"12":function(container,depth0,helpers,partials,data) {
    return "\"yellow\"";
},"14":function(container,depth0,helpers,partials,data) {
    return "\"display:inline-block\"";
},"16":function(container,depth0,helpers,partials,data) {
    return "";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"desc-title\">Description</p><a class=\"desc-title\" href=\"#\">Edit</a><p class=\"desc-text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>";
},"20":function(container,depth0,helpers,partials,data) {
    return "<p class=\"edit-desc-link\"><span class=\"fa fa-bars\"></span>&nbsp;&nbsp;<a href=\"#\">Edit the description...</a></p>";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0));
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"comment-details\"><span class=\"fa fa-user-o card-modal-icon\"></span><h3>User</h3><p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p><div class=\"comment-actions\"><span>"
    + ((stack1 = (helpers.dateString || (depth0 && depth0.dateString) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"dateString","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " at "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "</span><span>&nbsp;-&nbsp;</span><a class=\"edit-comment\" href=\"#\">Edit</a><span>&nbsp;-&nbsp;</span><a data-url=\"/lists/"
    + alias4(alias5((depths[1] != null ? depths[1].list_id : depths[1]), depth0))
    + "/cards/"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].card : depths[1])) != null ? stack1.id : stack1), depth0))
    + "/comments/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"delete-comment\" href=\"#\">Delete</a></div><form method=\"put\" action=\"/lists/"
    + alias4(alias5((depths[1] != null ? depths[1].list_id : depths[1]), depth0))
    + "/cards/"
    + alias4(alias5(((stack1 = (depths[1] != null ? depths[1].card : depths[1])) != null ? stack1.id : stack1), depth0))
    + "/comments/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><textarea name=\"text\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"add-options\"><input type=\"submit\" value=\"Save\" /><span class=\"close\">+</span></div></form></div>";
},"26":function(container,depth0,helpers,partials,data) {
    return "\"fa fa-check-square\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"overlay\"></div><div class=\"card_modal\"><span class=\"close close-modal\">+</span><div class=\"main-content\"><div class=\"card-modal-header\"><span class=\"fa fa-square-o card-modal-icon\"></span><input type=\"text\" name=\"title\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" /><p>in list <a href=\"#\">"
    + alias2(((helper = (helper = helpers.list_title || (depth0 != null ? depth0.list_title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"list_title","hash":{},"data":data}) : helper)))
    + "</a>&nbsp;"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p></div><div class=\"labels-due-date\"><div class=\"labels\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"due-date\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_date : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"description-edit\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<form class=\"description-edit-form\" method=\"put\" action=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><textarea name=\"description\" placeholder=\"Add a more detailed description...\">"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</textarea><div class=\"add-options\"><input type=\"submit\" value=\"Save\"/><span class=\"close\">+</span></div></form></div><div class=\"add-comment\"><span class=\"fa fa-comment-o card-modal-icon\"></span><span class=\"fa fa-user-o card-modal-icon\"></span><h2>Add comment</h2><form method=\"post\" action=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "/comments\"><textarea name=\"text\" placeholder=\"Write a comment...\"></textarea><div class=\"add-options\"><input class=\"disabled\" type=\"submit\" value=\"Save\"/></div></form></div><div class=\"activity\"><span class=\"fa fa-list-ul card-modal-icon\"></span><h2>Activity</h2></div>"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"each","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"sidebar\"><h2>Add</h2><a href=\"#\" class=\"action-labels\"><span class=\"fa fa-tag\"></span>&nbsp;<h3>Labels</h3></a><a href=\"#\" class=\"action-duedate\"><span class=\"fa fa-clock-o\"></span>&nbsp;<h3>Due Date</h3></a><h2 class=\"actions\">Actions</h2><a href=\"#\" class=\"action-move\"><span class=\"fa fa-arrow-right\"></span>&nbsp;<h3>Move</h3></a><a href=\"#\" class=\"action-copy\"><span class=\"fa fa-clone\"></span>&nbsp;<h3>Copy</h3></a><a href=\"#\" class=\"action-subscribe\" data-url=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><span class=\"fa fa-eye\"></span>&nbsp;<h3>Subscribe</h3>&nbsp;&nbsp;&nbsp;<span class="
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></a><a href=\"#\" class=\"action-delete\" data-url=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><span class=\"fa fa-trash\"></span>&nbsp;<h3>Delete</h3></a></div></div>";
},"useData":true,"useDepths":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"card-label\" style=\"background:"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + "\"></span>&nbsp;";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subscribed\"><span class=\"fa fa-eye\"></span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class="
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "><span class=\"fa fa-clock-o\"></span>&nbsp;"
    + ((stack1 = (helpers.dateString || (depth0 && depth0.dateString) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"dateString","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "\"date green\"";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.checkDate || (depth0 && depth0.checkDate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.due_date : depth0),{"name":"checkDate","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "\"date pink\"";
},"11":function(container,depth0,helpers,partials,data) {
    return "\"date yellow\"";
},"13":function(container,depth0,helpers,partials,data) {
    return "";
},"15":function(container,depth0,helpers,partials,data) {
    return "<div class=\"desc\"><span class=\"fa fa-bars\"></span></div>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"comm\"><span class=\"fa fa-comment-o\"></span>&nbsp;"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<span class=\"fa fa-pencil open-quick-edit\"></span><div class=\"list-card-details\"><div class=\"list-card-labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"list-card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"useData":true});

this["JST"]["change_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>Change Label</p><hr><a class=\"close\">+</a><span class=\"fa fa-arrow-left\"></span><form class=\"edit-label\"><h4>Name</h4><input type=\"text\" name=\"title\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /><h4>Select a color</h4><span data-color=\"#61bd4f\" style=\"background:#61bd4f\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#f2d600\" style=\"background:#f2d600\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#ffab4a\" style=\"background:#ffab4a\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#eb5a46\" style=\"background:#eb5a46\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#c377e0\" style=\"background:#c377e0\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#0098b7\" style=\"background:#0098b7\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#00c2e0\" style=\"background:#00c2e0\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#51e898\" style=\"background:#51e898\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#ff80ce\" style=\"background:#ff80ce\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#4d4d4d\" style=\"background:#4d4d4d\" class=\"label\"><span class=\"fa fa-check\"></span></span><div class=\"add-options\"><input type=\"submit\" value=\"Save\"/><a class=\"remove-label\" href=\"#\">Delete</a></div></form>";
},"useData":true});

this["JST"]["copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isCurrentList || (depth0 && depth0.isCurrentList) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].list_id : depths[1]),(depth0 != null ? depth0.id : depth0),{"name":"isCurrentList","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isCurrentPosition || (depth0 && depth0.isCurrentPosition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].card : depths[1]),depth0,{"name":"isCurrentPosition","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" selected>"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<form method=\"post\" action=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "/copy\"><a href=\"#\">+</a><p class=\"copy-header\">Copy Card</p><hr><h4>Title</h4><textarea name=\"title\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea><h4>Keep...</h4><div><input type=\"checkbox\" id=\"keepLabels\" name=\"labels\" value=\"keep\" checked/>&nbsp;&nbsp;<label for=\"keepLabels\">Labels ("
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1)) != null ? stack1.length : stack1), depth0))
    + ")</label></div><div><input type=\"checkbox\" id=\"keepComments\" name=\"comments\" value=\"keep\" checked/>&nbsp;&nbsp;<label for=\"keepComments\">Comments ("
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + ")</label></div><h4>Copy to...</h4><div class=\"selects\"><div class=\"select first\"><span class=\"select-label\">List</span><select name=\"new_list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"select second\"><span class=\"select-label\">Position</span><select name=\"new_position\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.card_positions : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div></div><input type=\"submit\" value=\"Create card\" /></form>";
},"useData":true,"useDepths":true});

this["JST"]["create_label"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Create Label</p><hr><a class=\"close\">+</a><span class=\"fa fa-arrow-left\"></span><form class=\"create-label\"><h4>Name</h4><input type=\"text\" name=\"title\"><h4>Select a color</h4><span data-color=\"#61bd4f\" style=\"background:#61bd4f\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#f2d600\" style=\"background:#f2d600\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#ffab4a\" style=\"background:#ffab4a\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#eb5a46\" style=\"background:#eb5a46\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#c377e0\" style=\"background:#c377e0\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#0079bf\" style=\"background:#0079bf\" class=\"label selected\"><span class=\"fa fa-check\" style=\"display:block\"></span></span><span data-color=\"#00c2e0\" style=\"background:#00c2e0\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#51e898\" style=\"background:#51e898\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#ff80ce\" style=\"background:#ff80ce\" class=\"label\"><span class=\"fa fa-check\"></span></span><span data-color=\"#4d4d4d\" style=\"background:#4d4d4d\" class=\"label\"><span class=\"fa fa-check\"></span></span><div class=\"add-options\"><input type=\"submit\" value=\"Create\"/></div></form>";
},"useData":true});

this["JST"]["date_picker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_time : stack1), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<form method=\"put\" action=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><a href=\"#\" class=\"close-date-picker\">+</a><p class=\"date-header\">Change Due Date</p><hr><div class=\"date-time\"><h3>Date</h3><input type=\"text\" name=\"due_date\"/></div><div class=\"date-time\"><h3>Time</h3><input type=\"text\" name=\"due_time\" value="
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due_time : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></div><div class=\"calendar\"></div><div class=\"add-options\"><input type=\"submit\" value=\"Save\" /><a class=\"remove-date\" href=\"#\">Remove</a></div></form>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"user-label all-boards\" href=\"#\"><span class=\"fa fa-square icon\"></span><span class=\"text\">Boards</span></a><div class=\"search\"><input type=\"text\" name=\"search\"/><!----><span class=\"fa fa-search icon-search icon-square\"></span></div><a class=\"header-logo\" href=\"#\"><span class=\"header-logo-icon\"></span></a><div class=\"header-user\"><span class=\"fa fa-plus icon-square\"></span><a class=\"user-label\" href=\"#\"><span class=\"fa fa-user-o icon\"></span><span class=\"text\">User</span></a><span class=\"fa fa-info-circle icon-square\"></span><span class=\"fa fa-bell-o icon-square\"></span></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<a class=\"board-header-star starred\" href=\"#\"><span class=\"fa fa-star-o starred\"></span></a>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a class=\"board-header-star\" href=\"#\"><span class=\"fa fa-star-o\"></span></a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"board-header\"><a class=\"board-name\" href=\"#\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a><div class=\"board-header-btns\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starred : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<a class=\"board-header-privacy\" href=\"#\"><span class=\"fa fa-lock\"></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"privacy\">Private</span></a></div></div><div class=\"list-wrapper add-list\"><form action=\"/lists/new\" method=\"post\"><span class=\"add-list-bar\">Add a list...</span><input type=\"text\" name=\"title\" placeholder=\"Add a list...\" maxlength=\"512\"/><div class=\"add-options\"><input class=\"board-add\" type=\"submit\" value=\"Save\"/><span class=\"fa fa-times icon-square close-add-list\"></span></div></form></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><span class=\"label\" style=\"background:"
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-color=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"fa fa-check\" style="
    + ((stack1 = (helpers.hasLabel || (depth0 && depth0.hasLabel) || alias2).call(alias1,(depths[1] != null ? depths[1].label_ids : depths[1]),(depth0 != null ? depth0.id : depth0),{"name":"hasLabel","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></span><span class=\"fa fa-pencil\"></span></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "\"display:block\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<p>Labels</p><hr><a class=\"close\">+</a><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a class=\"new-label\">Create a new label</a>";
},"useData":true,"useDepths":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-list-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"list-header\"><input type=\"text\" class=\"edit-title\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /><span class=\"fa fa-trash-o icon-sm delete\"></span></div><div class=\"list-cards\" data-list-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"create-card\"><form action=\"/lists/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/cards/new\" method=\"post\"><!-- <input type=\"hidden\" name=\"list_id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/> --><textarea name=\"title\" class=\"card-input\"></textarea><div class=\"add-options\"><input type=\"submit\" value=\"Add\"/><span class=\"fa fa-times icon-square close\"></span></div></form></div></div><span class=\"add-card\">Add a card...</span></div>";
},"useData":true});

this["JST"]["move_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isCurrentList || (depth0 && depth0.isCurrentList) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].list_id : depths[1]),(depth0 != null ? depth0.id : depth0),{"name":"isCurrentList","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isCurrentPosition || (depth0 && depth0.isCurrentPosition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].card : depths[1]),depth0,{"name":"isCurrentPosition","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" selected>"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<form method=\"put\" action=\"/lists/"
    + alias2(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "/position\"> <a href=\"#\">+</a> <p class=\"move-header\">Move Card</p> <hr> <div class=\"selects\"><div class=\"select first\"><span class=\"select-label\">List</span><select name=\"new_list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"select second\"><span class=\"select-label\">Position</span><select name=\"new_position\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.card_positions : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div> </div> <input type=\"submit\" value=\"Move\" /></form>";
},"useData":true,"useDepths":true});

this["JST"]["notifications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.activities : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><a class=\"reset\" href=\"#\">Reset</a>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<li><span class=\"user\">User</span><span> "
    + ((stack1 = ((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"msg","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </span><span class=\"datetime\">"
    + ((stack1 = (helpers.dateString || (depth0 && depth0.dateString) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"dateString","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " at "
    + container.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "</span><span class=\"fa fa-user\"></span></li>";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    return "<p class=\"none\">No notifications</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"title\">Notifications</p><hr><a class=\"close\" href=\"#\">+</a>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.activities : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["quick_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<div class=\"overlay\"></div><form action=\"/lists/"
    + alias1(((helper = (helper = helpers.list_id || (depth0 != null ? depth0.list_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"list_id","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" method=\"put\"><textarea name=\"title\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea><input type=\"submit\" value=\"Save\" /></form>";
},"useData":true});

this["JST"]["rename_board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form action=\"/board\" method=\"put\"> <a href=\"#\">+</a> <p class=\"rename-header\">Rename Board</p> <hr> <h4>Name</h4> <input type=\"text\" name=\"title\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /> <input type=\"submit\" value=\"Rename\" /></form>";
},"useData":true});

this["JST"]["search_results"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h1>Cards</h1><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<li><a data-list-id=\""
    + alias2(helpers.lookup.call(alias1,(depths[1] != null ? depths[1].list_ids : depths[1]),(data && data.index),{"name":"lookup","hash":{},"data":data}))
    + "\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><p>in&nbsp;<span>"
    + alias2(helpers.lookup.call(alias1,(depths[1] != null ? depths[1].list_titles : depths[1]),(data && data.index),{"name":"lookup","hash":{},"data":data}))
    + "</span>&nbsp;on&nbsp;<span>"
    + alias2(container.lambda((depths[1] != null ? depths[1].board_title : depths[1]), depth0))
    + "</span>&nbsp;<span class=\"fa fa-lock\"></span></p></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p class=\"no-match\">We couldn't find any cards that matched your search.</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"overlay-transparent\"></div><div class=\"results\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.cards : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});