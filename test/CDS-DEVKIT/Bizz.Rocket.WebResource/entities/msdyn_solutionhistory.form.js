﻿'use strict';
/** @namespace Rocket */
var Rocket;(function(n){'use strict';var t=function(){function u(i){var u={},e=function(){return i&&i.data?i.data:Xrm&&Xrm.Page&&Xrm.Page.data?Xrm.Page.data:n}(),r=function(){return i&&i.data&&i.data.entity?i.data.entity:Xrm&&Xrm.Page&&Xrm.Page.data&&Xrm.Page.data.entity?Xrm.Page.data.entity:n}(),f=function(){return i&&i.ui?i.ui:Xrm&&Xrm.Page&&Xrm.Page.ui?Xrm.Page.ui:n}(),o=function(){return i&&i.ui&&i.ui.formSelector?i.ui.formSelector:Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.formSelector?Xrm.Page.ui.formSelector:n}();return u.AddOnLoad=function(i){e!==n&&e.addOnLoad!==t&&e.addOnLoad(i)},Object.defineProperty(u,'IsDirty',{get:function(){if(e!==n&&e.getIsDirty!==t)return e.getIsDirty()}}),Object.defineProperty(u,'IsValid',{get:function(){if(e!==n&&e.isValid!==t)return e.isValid()}}),u.Refresh=function(i,r,u){e!==n&&e.refresh!==t&&e.refresh(i).then(r,u)},u.RemoveOnLoad=function(i){e!==n&&e.removeOnLoad!==t&&e.removeOnLoad(i)},u.Save=function(i,r,u){e!==n&&e.save!==t&&e.save(i).then(r,u)},u.AddOnSave=function(i){r!==n&&r.addOnSave!==t&&r.addOnSave(i)},Object.defineProperty(u,'DataXml',{get:function(){if(r!==n&&r.getDataXml!==t)return r.getDataXml()}}),Object.defineProperty(u,'EntityName',{get:function(){if(r!==n&&r.getEntityName!==t)return r.getEntityName()}}),Object.defineProperty(u,'EntityReference',{get:function(){if(r!==n&&r.getEntityReference!==t)return r.getEntityReference()}}),Object.defineProperty(u,'EntityId',{get:function(){if(r!==n&&r.getId!==t)return r.getId()}}),Object.defineProperty(u,'EntityIsDirty',{get:function(){if(r!==n&&r.getIsDirty!==t)return r.getIsDirty()}}),Object.defineProperty(u,'PrimaryAttributeValue',{get:function(){if(r!==n&&r.getPrimaryAttributeValue!==t)return r.getPrimaryAttributeValue()}}),Object.defineProperty(u,'EntityIsValid',{get:function(){if(r!==n&&r.isValid!==t)return r.isValid()}}),u.RemoveOnSave=function(i){r!==n&&r.removeOnSave!==t&&r.removeOnSave(i)},u.EntitySave=function(i){r!==n&&r.save!==t&&r.save(i)},Object.defineProperty(u,'Attributes',{get:function(){if(r!==n&&r.attributes)return r.attributes}}),u.ClearFormNotification=function(i){f!==n&&f.clearFormNotification!==t&&f.clearFormNotification(i)},u.Close=function(){f!==n&&f.close!==t&&f.close()},Object.defineProperty(u,'FormType',{get:function(){if(f!==n&&f.getFormType!==t)return f.getFormType()}}),Object.defineProperty(u,'ViewPortHeight',{get:function(){if(f!==n&&f.getViewPortHeight!==t)return f.getViewPortHeight()}}),Object.defineProperty(u,'ViewPortWidth',{get:function(){if(f!==n&&f.getViewPortWidth!==t)return f.getViewPortWidth()}}),u.RefreshRibbon=function(i){f!==n&&f.refreshRibbon!==t&&f.refreshRibbon(i)},u.SetFormNotification=function(i,r,u){if(f!==n&&f.setFormNotification!==t)return f.setFormNotification(i,r,u)},Object.defineProperty(u,'Controls',{get:function(){if(f!==n&&f.controls!==t)return f.controls}}),Object.defineProperty(u,'FormId',{get:function(){if(o!==n&&o.getCurrentItem!==n&&o.getCurrentItem().getId!==t)return o.getCurrentItem().getId()}}),Object.defineProperty(u,'FormLabel',{get:function(){if(o!==n&&o.getCurrentItem!==n&&o.getCurrentItem().getLabel!==t)return o.getCurrentItem().getLabel()}}),u.FormNavigate=function(i){if(o!==n&&o.items!==n&&o.items.get!==t){var r=o.items.get(i);r!==n&&r.navigate()}},u}function f(u){var e={},f=function(){return u&&u.data&&u.data.process?u.data.process:Xrm&&Xrm.Page&&Xrm.Page.data&&Xrm.Page.data.process?Xrm.Page.data.process:n}(),o=function(){return u&&u.ui&&u.ui.process?u.ui.process:Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.process?Xrm.Page.ui.process:n}();return Object.defineProperty(e,'DisplayState',{get:function(){if(o!==n&&o.getDisplayState!==t)return o.getDisplayState()},set:function(i){o!==n&&o.setDisplayState!==t&&o.setDisplayState(i)}}),Object.defineProperty(e,'Visible',{get:function(){if(o!==n&&o.getVisible!==t)return o.getVisible()},set:function(i){o!==n&&o.setVisible!==t&&o.setVisible(i)}}),Object.defineProperty(e,'InstanceId',{get:function(){if(f!==n&&f.getInstanceId!==t)return f.getInstanceId()}}),Object.defineProperty(e,'InstanceName',{get:function(){if(f!==n&&f.getInstanceName!==t)return f.getInstanceName()}}),Object.defineProperty(e,'Status',{get:function(){if(f!==n&&f.getStatus!==t)return f.getStatus()},set:function(i){f!==n&&f.setStatus!==t&&f.setStatus(i,n)}}),Object.defineProperty(e,'ActivePath',{get:function(){if(f!==n&&f.getActivePath!==t)return f.getActivePath()}}),Object.defineProperty(e,'ActiveProcess',{get:function(){if(f!==n&&f.getActiveProcess!==t){var e={Id:r,Name:i,IsRendered:!1,Stages:n},u=f.getActiveProcess();return u.getId&&(e.Id=u.getId()),u.getName&&(e.Name=u.getName()),u.isRendered&&(e.IsRendered=u.isRendered()),u.getStages&&(e.Stages=u.getStages()),e}}}),Object.defineProperty(e,'ActiveStage',{get:function(){if(f!==n&&f.getActiveStage!==t){var e={Category:n,EntityName:i,Id:r,Name:i,Status:i,Steps:n},u=f.getActiveStage();return u.getCategory&&u.getCategory().getValue&&(e.Category=u.getCategory().getValue()),u.getEntityName&&(e.EntityName=u.getEntityName()),u.getId&&(e.Id=u.getId()),u.getName&&(e.Name=u.getName()),u.getStatus&&(e.Status=u.getStatus()),u.getSteps&&(e.Steps=u.getSteps()),e}}}),e.AddOnProcessStatusChange=function(i){f!==n&&f.addOnProcessStatusChange!==t&&f.addOnProcessStatusChange(i)},e.AddOnStageChange=function(i){f!==n&&f.addOnStageChange!==t&&f.addOnStageChange(i)},e.AddOnStageSelected=function(i){f!==n&&f.addOnStageSelected!==t&&f.addOnStageSelected(i)},e.EnabledProcesses=function(i){f!==n&&f.getEnabledProcesses!==t&&f.getEnabledProcesses(i)},e.MoveNext=function(i){f!==n&&f.moveNext!==t&&f.moveNext(i)},e.MovePrevious=function(i){f!==n&&f.movePrevious!==t&&f.movePrevious(i)},e.ProcessInstances=function(i){f!==n&&f.getProcessInstances!==t&&f.getProcessInstances(i)},e.RemoveOnProcessStatusChange=function(i){f!==n&&f.removeOnProcessStatusChange!==t&&f.removeOnProcessStatusChange(i)},e.RemoveOnStageChange=function(i){f!==n&&f.removeOnStageChange!==t&&f.removeOnStageChange(i)},e.RemoveOnStageSelected=function(i){f!==n&&f.removeOnStageSelected!==t&&f.removeOnStageSelected(i)},Object.defineProperty(e,'SelectedStage',{get:function(){if(f!==n&&f.getSelectedStage!==t){var e={Category:n,EntityName:i,Id:r,Name:i,Status:i,Steps:n},u=f.getSelectedStage();return u.getCategory&&u.getCategory().getValue&&(e.Category=u.getCategory().getValue()),u.getEntityName&&(e.EntityName=u.getEntityName()),u.getId&&(e.Id=u.getId()),u.getName&&(e.Name=u.getName()),u.getStatus&&(e.Status=u.getStatus()),u.getSteps&&(e.Steps=u.getSteps()),e}}}),e.SetActiveProcess=function(i,r){f!==n&&f.setActiveProcess!==t&&f.setActiveProcess(i,r)},e.SetActiveProcessInstance=function(i,r){f!==n&&f.setActiveProcessInstance!==t&&f.setActiveProcessInstance(i,r)},e.SetActiveStage=function(i,r){f!==n&&f.setActiveStage!==t&&f.setActiveStage(i,r)},e}function e(i,r,u,f){var s=function(){return f===t?u.toLowerCase():(f+u).toLowerCase()}(),e=function(){return i&&i.getControl?i.getControl(s):Xrm&&Xrm.Page&&Xrm.Page.getControl?Xrm.Page.getControl(s):n}(),o=function(){if(i){if(f!==t){if(e===n)return i.getAttribute?i.getAttribute(s):n;if(e.getAttribute===t)return n;if(e.getAttribute)return e.getAttribute()}return i.getAttribute?i.getAttribute(s):n}return f!==t?e===n?Xrm&&Xrm.Page&&Xrm.Page.getAttribute?Xrm.Page.getAttribute(s):n:e.getAttribute===t?n:e.getAttribute?e.getAttribute():n:Xrm&&Xrm.Page&&Xrm.Page.getAttribute?Xrm.Page.getAttribute(s):n}();r[u].AddOnChange=function(i){o!==n&&o.addOnChange!==t&&o.addOnChange(i)};r[u].FireOnChange=function(){o!==n&&o.fireOnChange!==t&&o.fireOnChange()};Object.defineProperty(r[u],'AttributeType',{get:function(){if(o!==n&&o.getAttributeType!==t)return o.getAttributeType()}});Object.defineProperty(r[u],'Format',{get:function(){if(o!==n&&o.getFormat!==t)return o.getFormat()}});Object.defineProperty(r[u],'InitialValue',{get:function(){if(o!==n&&o.getInitialValue!==t)return o.getInitialValue()}});Object.defineProperty(r[u],'IsDirty',{get:function(){if(o!==n&&o.getIsDirty!==t)return o.getIsDirty()}});Object.defineProperty(r[u],'IsPartyList',{get:function(){if(o!==n&&o.getIsPartyList!==t)return o.getIsPartyList()}});Object.defineProperty(r[u],'Max',{get:function(){if(o!==n&&o.getMax!==t)return o.getMax()}});Object.defineProperty(r[u],'MaxLength',{get:function(){if(o!==n&&o.getMaxLength!==t)return o.getMaxLength()}});Object.defineProperty(r[u],'Min',{get:function(){if(o!==n&&o.getMin!==t)return o.getMin()}});Object.defineProperty(r[u],'Name',{get:function(){if(o!==n&&o.getName!==t)return o.getName()}});r[u].Option=function(i){if(o!==n&&o.getOption!==t)return o.getOption(i)};Object.defineProperty(r[u],'Options',{get:function(){if(o!==n&&o.getOptions!==t)return o.getOptions()}});Object.defineProperty(r[u],'AttributeParent',{get:function(){if(o!==n&&o.getParent!==t)return o.getParent()}});Object.defineProperty(r[u],'Precision',{get:function(){if(o!==n&&o.getPrecision!==t)return o.getPrecision()},set:function(i){o!==n&&o.setPrecision!==t&&o.setPrecision(i)}});Object.defineProperty(r[u],'RequiredLevel',{get:function(){if(o!==n&&o.getRequiredLevel!==t)return o.getRequiredLevel()},set:function(i){o!==n&&o.setRequiredLevel!==t&&o.setRequiredLevel(i)}});Object.defineProperty(r[u],'SelectedOption',{get:function(){if(o!==n&&o.getSelectedOption!==t)return o.getSelectedOption()}});Object.defineProperty(r[u],'SubmitMode',{get:function(){if(o!==n&&o.getSubmitMode!==t)return o.getSubmitMode()},set:function(i){o!==n&&o.setSubmitMode!==t&&o.setSubmitMode(i)}});Object.defineProperty(r[u],'Text',{get:function(){if(o!==n&&o.getText!==t)return o.getText()}});Object.defineProperty(r[u],'UserPrivilege',{get:function(){if(o!==n&&o.getUserPrivilege!==t)return o.getUserPrivilege()}});Object.defineProperty(r[u],'Value',{get:function(){if(o!==n&&o.getValue!==t)return o.getValue()},set:function(i){o!==n&&o.setValue!==t&&o.setValue(i)}});Object.defineProperty(r[u],'Valid',{get:function(){if(o!==n&&o.isValid!==t)return o.isValid()}});r[u].RemoveOnChange=function(i){o!==n&&o.removeOnChange!==t&&o.removeOnChange(i)};r[u].AddCustomFilter=function(i,r){e!==n&&e.addCustomFilter!==t&&e.addCustomFilter(i,r)};r[u].AddCustomView=function(i,r,u,f,o,s){e!==n&&e.addCustomView!==t&&e.addCustomView(i,r,u,f,o,s)};r[u].AddNotification=function(i,r,u,f,o){if(e!==n&&e.addNotification!==t){var s={message:r,actions:[o]},h={messages:[i],notificationLevel:u,uniqueId:f,actions:[s]};return e.addNotification(h)}};r[u].AddOnPostSearch=function(i){e!==n&&e.addOnPostSearch!==t&&e.addOnPostSearch(i)};r[u].AddOnResultOpened=function(i){e!==n&&e.addOnResultOpened!==t&&e.addOnResultOpened(i)};r[u].AddOnSelection=function(i){e!==n&&e.addOnSelection!==t&&e.addOnSelection(i)};r[u].AddPreSearch=function(i){e!==n&&e.addPreSearch!==t&&e.addPreSearch(i)};r[u].ClearNotification=function(i){if(e!==n&&e.clearNotification!==t)return e.clearNotification(i)};r[u].ClearOptions=function(){if(e!==n&&e.clearOptions!==t)return e.clearOptions()};Object.defineProperty(r[u],'ControlType',{get:function(){if(e!==n&&e.getControlType!==t)return e.getControlType()}});Object.defineProperty(r[u],'Data',{get:function(){if(e!==n&&e.getData!==t)return e.getData()},set:function(i){e!==n&&e.setData!==t&&e.setData(i)}});Object.defineProperty(r[u],'DefaultView',{get:function(){if(e!==n&&e.getDefaultView!==t)return e.getDefaultView()},set:function(i){e!==n&&e.setDefaultView!==t&&e.setDefaultView(i)}});Object.defineProperty(r[u],'Disabled',{get:function(){if(e!==n&&e.getDisabled!==t)return e.getDisabled()},set:function(i){e!==n&&e.setDisabled!==t&&e.setDisabled(i)}});Object.defineProperty(r[u],'EntityTypes',{get:function(){if(e!==n&&e.getEntityTypes!==t)return e.getEntityTypes()},set:function(i){e!==n&&e.setEntityTypes!==t&&e.setEntityTypes(i)}});Object.defineProperty(r[u],'InitialUrl',{get:function(){if(e!==n&&e.getInitialUrl!==t)return e.getInitialUrl()}});Object.defineProperty(r[u],'Label',{get:function(){if(e!==n&&e.getLabel!==t)return e.getLabel()},set:function(i){e!==n&&e.setLabel!==t&&e.setLabel(i)}});Object.defineProperty(r[u],'Name2',{get:function(){if(e!==n&&e.getName!==t)return e.getName()}});Object.defineProperty(r[u],'Object',{get:function(){if(e!==n&&e.getObject!==t)return e.getObject()}});Object.defineProperty(r[u],'ControlParent',{get:function(){if(e!==n&&e.getParent!==t)return e.getParent()}});Object.defineProperty(r[u],'SearchQuery',{get:function(){if(e!==n&&e.getSearchQuery!==t)return e.getSearchQuery()},set:function(i){e!==n&&e.setSearchQuery!==t&&e.setSearchQuery(i)}});Object.defineProperty(r[u],'ShowTime',{get:function(){if(e!==n&&e.getShowTime!==t)return e.getShowTime()},set:function(i){e!==n&&e.setShowTime!==t&&e.setShowTime(i)}});Object.defineProperty(r[u],'Src',{get:function(){if(e!==n&&e.getSrc!==t)return e.getSrc()},set:function(i){e!==n&&e.setSrc!==t&&e.setSrc(i)}});Object.defineProperty(r[u],'State',{get:function(){if(e!==n&&e.getState!==t)return e.getState()}});Object.defineProperty(r[u],'TotalResultCount',{get:function(){if(e!==n&&e.getTotalResultCount!==t)return e.getTotalResultCount()}});Object.defineProperty(r[u],'Value2',{get:function(){if(e!==n&&e.getValue!==t)return e.getValue()}});Object.defineProperty(r[u],'Visible',{get:function(){if(e!==n&&e.getVisible!==t)return e.getVisible()},set:function(i){e!==n&&e.setVisible!==t&&e.setVisible(i)}});r[u].OpenSearchResult=function(i,r){if(e!==n&&e.openSearchResult!==t)return e.openSearchResult(i,r)};r[u].Refresh=function(){e!==n&&e.refresh!==t&&e.refresh()};r[u].RemoveOnPostSearch=function(i){e!==n&&e.removeOnPostSearch!==t&&e.removeOnPostSearch(i)};r[u].RemoveOnResultOpened=function(i){e!==n&&e.removeOnResultOpened!==t&&e.removeOnResultOpened(i)};r[u].RemoveOnSelection=function(i){e!==n&&e.removeOnSelection!==t&&e.removeOnSelection(i)};r[u].RemoveOption=function(i){e!==n&&e.removeOption!==t&&e.removeOption(i)};r[u].RemovePreSearch=function(i){e!==n&&e.removePreSearch!==t&&e.removePreSearch(i)};r[u].Focus=function(){e!==n&&e.setFocus!==t&&e.setFocus()};r[u].SetNotification=function(i,r){if(e!==n&&e.setNotification!==t)return e.setNotification(i,r)};r[u].AddOption=function(i,r,u){if(e!==n&&e.addOption!==t){var f={text:i,value:r};e.addOption(f,u)}}}function o(n,t,i){for(var r in t)e(n,t,r,i);return t}function s(i,r,u,f){var o=function(){return i&&i.ui&&i.ui.tabs&&i.ui.tabs.get?i.ui.tabs.get(r):Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.tabs&&Xrm.Page.ui.tabs.get?Xrm.Page.ui.tabs.get(r):n}(),e=function(){return o!==n&&o.sections&&o.sections.get?o.sections.get(f):n}();Object.defineProperty(u[f],'Label',{get:function(){if(e!==n&&e.getLabel!==t)return e.getLabel()},set:function(i){e!==n&&e.setLabel!==t&&e.setLabel(i)}});Object.defineProperty(u[f],'Name',{get:function(){if(e!==n&&e.getName!==t)return e.getName()}});Object.defineProperty(u[f],'Parent',{get:function(){if(e!==n&&e.getParent!==t)return e.getParent()}});Object.defineProperty(u[f],'Visible',{get:function(){if(e!==n&&e.getVisible!==t)return e.getVisible()},set:function(i){e!==n&&e.setVisible!==t&&e.setVisible(i)}})}function h(i,r,u){var f=function(){return i&&i.ui&&i.ui.tabs&&i.ui.tabs.get?i.ui.tabs.get(u):Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.tabs&&Xrm.Page.ui.tabs.get?Xrm.Page.ui.tabs.get(u):n}(),e;r[u].AddTabStateChange=function(i){f!==n&&f.addTabStateChange!==t&&f.addTabStateChange(i)};Object.defineProperty(r[u],'DisplayState',{get:function(){if(f!==n&&f.getDisplayState!==t)return f.getDisplayState()},set:function(i){f!==n&&f.setDisplayState!==t&&f.setDisplayState(i)}});r[u].Focus=function(){f!==n&&f.setFocus!==t&&f.setFocus()};Object.defineProperty(r[u],'Label',{get:function(){if(f!==n&&f.getLabel!==t)return f.getLabel()},set:function(i){f!==n&&f.setLabel!==t&&f.setLabel(i)}});Object.defineProperty(r[u],'Name',{get:function(){if(f!==n&&f.getName!==t)return f.getName()}});Object.defineProperty(r[u],'Parent',{get:function(){if(f!==n&&f.getParent!==t)return f.getParent()}});r[u].RemoveTabStateChange=function(i){f!==n&&f.removeTabStateChange!==t&&f.removeTabStateChange(i)};Object.defineProperty(r[u],'Visible',{get:function(){if(f!==n&&f.getVisible!==t)return f.getVisible()},set:function(i){f!==n&&f.setVisible!==t&&f.setVisible(i)}});for(e in r[u].Section)s(i,u,r[u].Section,e)}function c(n,t){for(var i in t)h(n,t,i)}function l(i,r,u){var f=function(){return i&&i.ui&&i.ui.navigation&&i.ui.navigation.items&&i.ui.navigation.items.get?i.ui.navigation.items.get(u):Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.navigation&&Xrm.Page.ui.navigation.items&&Xrm.Page.ui.navigation.items.get?Xrm.Page.ui.navigation.items.get(u):n}();r[u].Focus=function(){f!==n&&f.setFocus!==t&&f.setFocus()};Object.defineProperty(r[u],'Label',{get:function(){if(f!==n&&f.getLabel!==t)return f.getLabel()},set:function(i){f!==n&&f.setLabel!==t&&f.setLabel(i)}});Object.defineProperty(r[u],'Visible',{get:function(){if(f!==n&&f.getVisible!==t)return f.getVisible()},set:function(i){f!==n&&f.setVisible!==t&&f.setVisible(i)}});Object.defineProperty(r[u],'Id',{get:function(){if(f!==n&&f.getId!==t)return f.getId()}})}function a(n,t){for(var i in t)l(n,t,i)}function v(i,r,u){var f=function(){return i&&i.ui&&i.ui.quickForms&&i.ui.quickForms.get?i.ui.quickForms.get(u):Xrm&&Xrm.Page&&Xrm.Page.ui&&Xrm.Page.ui.quickForms&&Xrm.Page.ui.quickForms.get?Xrm.Page.ui.quickForms.get(u):n}();Object.defineProperty(r[u],'ControlType',{get:function(){if(f!==n&&f.getControlType!==t)return f.getControlType()}});r[u].Focus=function(){f!==n&&f.setFocus!==t&&f.setFocus()};Object.defineProperty(r[u],'Label',{get:function(){if(f!==n&&f.getLabel!==t)return f.getLabel()},set:function(i){f!==n&&f.setLabel!==t&&f.setLabel(i)}});r[u].IsLoaded=function(){if(f!==n&&f.isLoaded!==t)return f.isLoaded()};Object.defineProperty(r[u],'Name',{get:function(){if(f!==n&&f.getName!==t)return f.getName()}});Object.defineProperty(r[u],'Parent',{get:function(){if(f!==n&&f.getParent!==t)return f.getParent()}});r[u].Refresh=function(){f!==n&&f.refresh!==t&&f.refresh()};Object.defineProperty(r[u],'Visible',{get:function(){if(f!==n&&f.getVisible!==t)return f.getVisible()}})}function y(n,t){for(var i in t)v(n,t,i)}function p(i){var r={},u=function(){return Xrm&&Xrm.Utility?Xrm.Utility:n}(),f=function(){return Xrm&&Xrm.Utility&&Xrm.Utility.getGlobalContext?Xrm.Utility.getGlobalContext():n}(),e=function(){return Xrm&&Xrm.Navigation?Xrm.Navigation:n}(),h=function(){return Xrm&&Xrm.Panel?Xrm.Panel:n}(),s=function(){return Xrm&&Xrm.Encoding?Xrm.Encoding:n}(),o=function(){return Xrm&&Xrm.Device?Xrm.Device:n}();return r.CloseProgressIndicator=function(){u!==n&&u.closeProgressIndicator!==t&&u.closeProgressIndicator()},r.AllowedStatusTransitions=function(i,r,f,e){u!==n&&u.getAllowedStatusTransitions!==t&&u.getAllowedStatusTransitions(i,r).then(f,e)},r.EntityMetadata=function(i,r,f,e){u!==n&&u.getEntityMetadata!==t&&u.getEntityMetadata(i,r).then(f,e)},Object.defineProperty(r,'LearningPathAttributeName',{get:function(){if(u!==n&&u.getLearningPathAttributeName!==t)return u.getLearningPathAttributeName()}}),r.ResourceString=function(i,r){if(u!==n&&u.getResourceString!==t)return u.getResourceString(i,r)},r.Resource=function(r){if(u!==n&&u.getResourceString!==t&&i!==t)return u.getResourceString(i,r)},r.InvokeProcessAction=function(i,r,f,e){u!==n&&u.invokeProcessAction!==t&&u.invokeProcessAction(i,r).then(f,e)},r.LookupObjects=function(i,r,f){u!==n&&u.lookupObjects!==t&&u.lookupObjects(i).then(r,f)},r.RefreshParentGrid=function(i){u!==n&&u.refreshParentGrid!==t&&u.refreshParentGrid(i)},r.ShowProgressIndicator=function(i){u!==n&&u.showProgressIndicator!==t&&u.showProgressIndicator(i)},r.AdvancedConfigSetting=function(i){if(f!==n&&f.getAdvancedConfigSetting!==t)return f.getAdvancedConfigSetting(i)},Object.defineProperty(r,'ClientUrl',{get:function(){if(f!==n&&f.getClientUrl!==t)return f.getClientUrl()}}),r.CurrentAppName=function(i,r){f!==n&&f.getCurrentAppName!==t&&f.getCurrentAppName().then(i,r)},r.CurrentAppProperties=function(i,r){f!==n&&f.getCurrentAppProperties!==t&&f.getCurrentAppProperties().then(i,r)},Object.defineProperty(r,'CurrentAppUrl',{get:function(){if(f!==n&&f.getCurrentAppUrl!==t)return f.getCurrentAppUrl()}}),Object.defineProperty(r,'Version',{get:function(){if(f!==n&&f.getVersion!==t)return f.getVersion()}}),r.IsOnPremises=function(){if(f!==n&&f.isOnPremises!==t)return f.isOnPremises()},r.PrependOrgName=function(i){if(f!==n&&f.prependOrgName!==t)return f.prependOrgName(i)},r.OpenAlertDialog=function(i,r,u,f){e!==n&&e.openAlertDialog!==t&&e.openAlertDialog(i,r).then(u,f)},r.OpenConfirmDialog=function(i,r,u,f){e!==n&&e.openConfirmDialog!==t&&e.openConfirmDialog(i,r).then(u,f)},r.OpenErrorDialog=function(i,r,u){e!==n&&e.openErrorDialog!==t&&e.openErrorDialog(i).then(r,u)},r.OpenFile=function(i,r){e!==n&&e.openFile!==t&&e.openFile(i,r)},r.OpenForm=function(i,r,u,f){e!==n&&e.openForm!==t&&e.openForm(i,r).then(u,f)},r.OpenUrl=function(i,r){e!==n&&e.openUrl!==t&&e.openUrl(i,r)},r.OpenWebResource=function(i,r,u){e!==n&&e.openWebResource!==t&&e.openWebResource(i,r,u)},r.LoadPanel=function(i,r){h!==n&&h.loadPanel!==t&&h.loadPanel(i,r)},r.XmlAttributeEncode=function(i){if(s!==n&&s.xmlAttributeEncode!==t)return s.xmlAttributeEncode(i)},r.XmlEncode=function(i){if(s!==n&&s.xmlEncode!==t)return s.xmlEncode(i)},r.CaptureAudio=function(i,r){o!==n&&o.captureAudio!==t&&o.captureAudio().then(i,r)},r.CaptureImage=function(i,r,u){o!==n&&o.captureImage!==t&&o.captureImage(i).then(r,u)},r.CaptureVideo=function(i,r){o!==n&&o.captureVideo!==t&&o.captureVideo().then(i,r)},r.BarcodeValue=function(i,r){o!==n&&o.getBarcodeValue!==t&&o.getBarcodeValue().then(i,r)},r.CurrentPosition=function(i,r){o!==n&&o.getCurrentPosition!==t&&o.getCurrentPosition().then(i,r)},r.PickFile=function(i,r,u){o!==n&&o.pickFile!==t&&o.pickFile(i).then(r,u)},Object.defineProperty(r,'Client',{get:function(){var i=function(){return Xrm&&Xrm.Utility&&Xrm.Utility.getGlobalContext&&Xrm.Utility.getGlobalContext().client?Xrm.Utility.getGlobalContext().client:n}(),r={};return Object.defineProperty(r,'ClientName',{get:function(){if(i!==n&&i.getClient!==t)return i.getClient()}}),Object.defineProperty(r,'ClientState',{get:function(){if(i!==n&&i.getClientState!==t)return i.getClientState()}}),Object.defineProperty(r,'FormFactor',{get:function(){if(i!==n&&i.getFormFactor!==t)return i.getFormFactor()}}),r.IsOffline=function(){if(i!==n&&i.isOffline!==t)return i.isOffline()},r}}),Object.defineProperty(r,'OrganizationSettings',{get:function(){var i=function(){return Xrm&&Xrm.Utility&&Xrm.Utility.getGlobalContext&&Xrm.Utility.getGlobalContext().organizationSettings?Xrm.Utility.getGlobalContext().organizationSettings:n}(),r={};return Object.defineProperty(r,'Attributes',{get:function(){if(i!==n&&i.attributes!==t)return i.attributes}}),Object.defineProperty(r,'BaseCurrencyId',{get:function(){if(i!==n&&i.baseCurrencyId!==t)return i.baseCurrencyId}}),Object.defineProperty(r,'DefaultCountryCode',{get:function(){if(i!==n&&i.defaultCountryCode!==t)return i.defaultCountryCode}}),r.IsAutoSaveEnabled=function(){if(i!==n&&i.isAutoSaveEnabled!==t)return i.isAutoSaveEnabled},Object.defineProperty(r,'LanguageId',{get:function(){if(i!==n&&i.languageId!==t)return i.languageId}}),Object.defineProperty(r,'OrganizationId',{get:function(){if(i!==n&&i.organizationId!==t)return i.organizationId}}),Object.defineProperty(r,'UniqueName',{get:function(){if(i!==n&&i.uniqueName!==t)return i.uniqueName}}),Object.defineProperty(r,'UseSkypeProtocol',{get:function(){if(i!==n&&i.useSkypeProtocol!==t)return i.useSkypeProtocol}}),r}}),Object.defineProperty(r,'UserSettings',{get:function(){var i=function(){return Xrm&&Xrm.Utility&&Xrm.Utility.getGlobalContext&&Xrm.Utility.getGlobalContext().userSettings?Xrm.Utility.getGlobalContext().userSettings:n}(),r={};return Object.defineProperty(r,'DateFormattingInfo',{get:function(){if(i!==n&&i.dateFormattingInfo!==t)return i.dateFormattingInfo}}),Object.defineProperty(r,'DefaultDashboardId',{get:function(){if(i!==n&&i.defaultDashboardId!==t)return i.defaultDashboardId}}),r.IsGuidedHelpEnabled=function(){if(i!==n&&i.isGuidedHelpEnabled!==t)return i.isGuidedHelpEnabled},r.IsHighContrastEnabled=function(){if(i!==n&&i.isHighContrastEnabled!==t)return i.isHighContrastEnabled},r.IsRTL=function(){if(i!==n&&i.isRTL!==t)return i.isRTL},Object.defineProperty(r,'LanguageId',{get:function(){if(i!==n&&i.languageId!==t)return i.languageId}}),Object.defineProperty(r,'SecurityRolePrivileges',{get:function(){if(i!==n&&i.securityRolePrivileges!==t)return i.securityRolePrivileges}}),Object.defineProperty(r,'SecurityRoles',{get:function(){if(i!==n&&i.securityRoles!==t)return i.securityRoles}}),Object.defineProperty(r,'TransactionCurrencyId',{get:function(){if(i!==n&&i.transactionCurrencyId!==t)return i.transactionCurrencyId}}),Object.defineProperty(r,'UserId',{get:function(){if(i!==n&&i.userId!==t)return i.userId}}),Object.defineProperty(r,'UserName',{get:function(){if(i!==n&&i.userName!==t)return i.userName}}),r.TimeZoneOffsetMinutes=function(){if(i!==n&&i.getTimeZoneOffsetMinutes!==t)return i.getTimeZoneOffsetMinutes()},r}}),r}var i='',r='{00000000-0000-0000-0000-000000000000}',t=undefined,n=null;return{LoadForm:u,LoadProcess:f,LoadFields:o,LoadTabs:c,LoadNavigations:a,LoadQuickForms:y,LoadUtility:p}}(),i,r,u,f,e;return n.FormInformation=function(n){var i=null,u,r,f;n!==undefined&&(i=n.getFormContext===undefined?n:n.getFormContext());u=t.LoadForm(i);r={msdyn_errorcode:{},msdyn_exceptionmessage:{},msdyn_ismanaged:{},msdyn_isoverwritecustomizations:{},msdyn_ispatch:{},msdyn_name:{},msdyn_operation:{},msdyn_publishername:{},msdyn_solutionversion:{},msdyn_suboperation:{}};t.LoadFields(i,r);f={};91449614-4ba7-ae4e-dc96312096e0;91449614-4ba7-ae4e-dc96312096e0},t.LoadTabs(formContext,tab),body.Tab=tab,form.Body=body,i={msdyn_endtime:{},msdyn_result:{},msdyn_starttime:{},msdyn_totaltime:{}},t.LoadFields(formContext,i,'header_'),form.Header=i,r={msdyn_activityid:{}},t.LoadFields(formContext,r,'footer_'),form.Footer=r,u={},t.LoadQuickForms(formContext,u),form.QuickForm=u,f={},t.LoadNavigations(formContext,f),form.Navigation=f,form.Utility=t.LoadUtility(defaultWebResourceName),e={msdyn_operation:{Import:0,Uninstall:1,Export:2},msdyn_status:{Started:0,Completed:1},msdyn_suboperation:{None:0,New:1,Upgrade:2,Update:3,Delete:4}},form.OptionSet=e,form});Rocket||(Rocket={})
/** @namespace OptionSet */
var OptionSet;(function(n){n.FormType={Undefined:0,Create:1,Update:2,ReadOnly:3,Disabled:4,BulkEdit:5};n.SaveOption={SaveAndClose:"saveandclose",SaveAndNew:"saveandnew"};n.SaveMode={Save:1,SaveAndClose:2,Deactivate:5,Reactivate:6,Email:7,Disqualify:15,Qualify:16,Assign:47,SaveAsCompleted:58,SaveAndNew:59,AutoSave:70};n.FormNotificationLevel={Error:"ERROR",Warning:"WARNING",Info:"INFO"};n.TabDisplayState={Expanded:"expanded",Collapsed:"collapsed"};n.ProcessDisplayState={Expanded:"expanded",Collapsed:"collapsed",Floating:"floating"};n.ProcessStatus={Active:"active",Aborted:"aborted",Finished:"finished"};n.FieldAttributeType={Boolean:"boolean",DateTime:"datetime",Decimal:"decimal",Double:"double",Integer:"integer",Lookup:"lookup",Memo:"memo",Money:"money",MultiOptionSet:"multioptionset",OptionSet:"optionset",String:"string"};n.FieldFormat={Date:"date",DateTime:"datetime",Duration:"duration",Email:"email",Language:"language",None:"none",TextArea:"textarea",Text:"text",TickerSymbol:"tickersymbol",Phone:"phone",TimeZone:"timezone",Url:"url"};n.FieldRequiredLevel={None:"none",Required:"required",Recommended:"recommended"};n.FieldSubmitMode={Always:"always",Never:"never",Dirty:"dirty"};n.FieldControlType={Standard:"standard",Iframe:"iframe",KbSearch:"kbsearch",Lookup:"lookup",MultiSelectOptionset:"multiselectoptionset",Notes:"notes",OptionSet:"optionset",QuickForm:"quickform",SubGrid:"subgrid",TimerControl:"TimerControl",TimelineWall:"timelinewall",WebResource:"webresource"};n.FieldNotificationLevel={Error:"ERROR",Recommendation:"RECOMMENDATION"};n.ProcessCategory={Qualify:0,Develop:1,Propose:2,Close:3,Identify:4,Research:5,Resolve:6};n.TimerState={NotSet:1,InProgress:2,Warning:3,Violated:4,Success:5,Expired:6,Canceled:7,Paused:8};n.ClientName={Web:"Web",Outlook:"Outlook",Mobile:"Mobile"};n.ClientState={Online:"Online",Offline:"Offline"};n.FormFactor={Unknown:0,Desktop:1,Tablet:2,Phone:3};n.AdvancedConfigSetting={MaxChildIncidentNumber:"MaxChildIncidentNumber",MaxIncidentMergeNumber:"MaxIncidentMergeNumber"};n.OpenFileOption={Open:1,Save:2};n.msdyn_solutionhistory={msdyn_operation:{Import:0,Uninstall:1,Export:2},msdyn_status:{Started:0,Completed:1},msdyn_suboperation:{None:0,New:1,Upgrade:2,Update:3,Delete:4}}})(OptionSet||(OptionSet={}))