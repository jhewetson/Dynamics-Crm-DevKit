'use strict';
var Hsbc;
(function (Hsbc) {
	'use strict';
        var devKit = (function () {
            'use strict';
            var EMPTY_STRING = '';
            var EMPTY_GUID = '{00000000-0000-0000-0000-000000000000}';
            var U = undefined;
            var N = null;
            function loadForm(formContext) {
                var form = {};
                var contextData = (function () {
                    if (formContext && formContext.data) {
                        return formContext.data;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data) {
                        return Xrm.Page.data;
                    }
                    return N;
                })();
                var contextDataEntity = (function () {
                    if (formContext && formContext.data && formContext.data.entity) {
                        return formContext.data.entity;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.entity) {
                        return Xrm.Page.data.entity;
                    }
                    return N;
                })();
                var contextUi = (function () {
                    if (formContext && formContext.ui) {
                        return formContext.ui;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui) {
                        return Xrm.Page.ui;
                    }
                    return N;
                })();
                var contextUiFormSelector = (function () {
                    if (formContext && formContext.ui && formContext.ui.formSelector) {
                        return formContext.ui.formSelector;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.formSelector) {
                        return Xrm.Page.ui.formSelector;
                    }
                    return N;
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/addonload
                form.AddOnLoad = function (callback) {
                    if (contextData !== N && contextData.addOnLoad !== U) {
                        contextData.addOnLoad(callback);
                    }
                    else { throw new Error('loadForm.AddOnLoad'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
                Object.defineProperty(form, 'IsDirty', {
                    get: function () {
                        if (contextData !== N && contextData.getIsDirty !== U) {
                            return contextData.getIsDirty();
                        }
                        else { throw new Error('loadForm.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
                Object.defineProperty(form, 'IsValid', {
                    get: function () {
                        if (contextData !== N && contextData.isValid !== U) {
                            return contextData.isValid();
                        }
                        else { throw new Error('loadForm.IsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
                form.Refresh = function (save, successCallback, errorCallback) {
                    if (contextData !== N && contextData.refresh !== U) {
                        contextData.refresh(save).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/removeonload
                form.RemoveOnLoad = function (callback) {
                    if (contextData !== N && contextData.removeOnLoad !== U) {
                        contextData.removeOnLoad(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnLoad'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
                form.Save = function (saveOptions, successCallback, errorCallback) {
                    if (contextData !== N && contextData.save !== U) {
                        contextData.save(saveOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Save'); }
                };
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
                form.AddOnSave = function (callback) {
                    if (contextDataEntity !== N && contextDataEntity.addOnSave !== U) {
                        contextDataEntity.addOnSave(callback);
                    }
                    else { throw new Error('loadForm.AddOnSave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
                Object.defineProperty(form, 'DataXml', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getDataXml !== U) {
                            return contextDataEntity.getDataXml();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
                Object.defineProperty(form, 'EntityName', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getEntityName !== U) {
                            return contextDataEntity.getEntityName();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
                Object.defineProperty(form, 'EntityReference', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getEntityReference !== U) {
                            return contextDataEntity.getEntityReference();
                        }
                        else { throw new Error('loadForm.EntityReference'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
                Object.defineProperty(form, 'EntityId', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getId !== U) {
                            return contextDataEntity.getId();
                        }
                        else { throw new Error('loadForm.EntityId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
                Object.defineProperty(form, 'EntityIsDirty', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getIsDirty !== U) {
                            return contextDataEntity.getIsDirty();
                        }
                        else { throw new Error('loadForm.EntityIsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
                Object.defineProperty(form, 'PrimaryAttributeValue', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getPrimaryAttributeValue !== U) {
                            return contextDataEntity.getPrimaryAttributeValue();
                        }
                        else { throw new Error('loadForm.PrimaryAttributeValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
                Object.defineProperty(form, 'EntityIsValid', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.isValid !== U) {
                            return contextDataEntity.isValid();
                        }
                        else { throw new Error('loadForm.EntityIsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
                form.RemoveOnSave = function (callback) {
                    if (contextDataEntity !== N && contextDataEntity.removeOnSave !== U) {
                        contextDataEntity.removeOnSave(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnSave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/save
                form.EntitySave = function (saveOption) {
                    if (contextDataEntity !== N && contextDataEntity.save !== U) {
                        contextDataEntity.save(saveOption);
                    }
                    else { throw new Error('loadForm.EntitySave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                Object.defineProperty(form, 'Attributes', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.attributes) {
                            return contextDataEntity.attributes;
                        }
                        else { throw new Error('loadForm.Attributes'); }
                    }
                });
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/clearformnotification
                form.ClearFormNotification = function (uniqueId) {
                    if (contextUi !== N && contextUi.clearFormNotification !== U) {
                        contextUi.clearFormNotification(uniqueId);
                    }
                    else { throw new Error('loadForm.ClearFormNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
                form.Close = function () {
                    if (contextUi !== N && contextUi.close !== U) {
                        contextUi.close();
                    }
                    else { throw new Error('loadForm.Close'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
                Object.defineProperty(form, 'FormType', {
                    get: function () {
                        if (contextUi !== N && contextUi.getFormType !== U) {
                            return contextUi.getFormType();
                        }
                        else { throw new Error('loadForm.FormType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
                Object.defineProperty(form, 'ViewPortHeight', {
                    get: function () {
                        if (contextUi !== N && contextUi.getViewPortHeight !== U) {
                            return contextUi.getViewPortHeight();
                        }
                        else { throw new Error('loadForm.ViewPortHeight'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
                Object.defineProperty(form, 'ViewPortWidth', {
                    get: function () {
                        if (contextUi !== N && contextUi.getViewPortWidth !== U) {
                            return contextUi.getViewPortWidth();
                        }
                        else { throw new Error('loadForm.ViewPortWidth'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
                form.RefreshRibbon = function (refreshAll) {
                    if (contextUi !== N && contextUi.refreshRibbon !== U) {
                        contextUi.refreshRibbon(refreshAll);
                    }
                    else { throw new Error('loadForm.RefreshRibbon'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
                form.SetFormNotification = function (message, level, uniqueId) {
                    if (contextUi !== N && contextUi.setFormNotification !== U) {
                        return contextUi.setFormNotification(message, level, uniqueId);
                    }
                    else { throw new Error('loadForm.SetFormNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                Object.defineProperty(form, 'Controls', {
                    get: function () {
                        if (contextUi !== N && contextUi.controls !== U) {
                            return contextUi.controls;
                        }
                        else { throw new Error('loadForm.Controls'); }
                    }
                });
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getid
                Object.defineProperty(form, 'FormId', {
                    get: function () {
                        if (contextUiFormSelector !== N && contextUiFormSelector.getCurrentItem !== N && contextUiFormSelector.getCurrentItem().getId !== U) {
                            return contextUiFormSelector.getCurrentItem().getId();
                        }
                        else { throw new Error('loadForm.FormId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
                Object.defineProperty(form, 'FormLabel', {
                    get: function () {
                        if (contextUiFormSelector !== N && contextUiFormSelector.getCurrentItem !== N && contextUiFormSelector.getCurrentItem().getLabel !== U) {
                            return contextUiFormSelector.getCurrentItem().getLabel();
                        }
                        else { throw new Error('loadForm.FormLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
                form.FormNavigate = function (formId) {
                    if (contextUiFormSelector !== N && contextUiFormSelector.items !== N && contextUiFormSelector.items.get !== U) {
                        var formItem = contextUiFormSelector.items.get(formId);
                        if (formItem !== N) {
                            formItem.navigate();
                        }
                    }
                    else { throw new Error('loadForm.FormNavigate'); }
                };
                return form;
            }
            function loadProcess(formContext) {
                var process = {};
                var getProcess = (function () {
                    if (formContext && formContext.data && formContext.data.process) {
                        return formContext.data.process;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.process) {
                        return Xrm.Page.data.process;
                    }
                    return N;
                })();
                var getProcessUi = (function () {
                    if (formContext && formContext.ui && formContext.ui.process) {
                        return formContext.ui.process;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.process) {
                        return Xrm.Page.ui.process;
                    }
                    return N;
                })();
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getdisplaystate
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/setdisplaystate
                Object.defineProperty(process, 'DisplayState', {
                    get: function () {
                        if (getProcessUi !== N && getProcessUi.getDisplayState !== U) {
                            return getProcessUi.getDisplayState();
                        }
                        else { throw new Error('loadProcess.GetDisplayState'); }
                    },
                    set: function (value) {
                        if (getProcessUi !== N && getProcessUi.setDisplayState !== U) {
                            getProcessUi.setDisplayState(value);
                        }
                        else { throw new Error('loadProcess.SetDisplayState'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getvisible
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/setvisible
                Object.defineProperty(process, 'Visible', {
                    get: function () {
                        if (getProcessUi !== N && getProcessUi.getVisible !== U) {
                            return getProcessUi.getVisible();
                        }
                        else { throw new Error('loadProcess.GetVisible'); }
                    },
                    set: function (value) {
                        if (getProcessUi !== N && getProcessUi.setVisible !== U) {
                            getProcessUi.setVisible(value);
                        }
                        else { throw new Error('loadProcess.SetVisible'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getinstanceid
                Object.defineProperty(process, 'InstanceId', {
                    get: function () {
                        if (getProcess !== N && getProcess.getInstanceId !== U) {
                            return getProcess.getInstanceId();
                        }
                        else { throw new Error('loadProcess.InstanceId'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getinstancename
                Object.defineProperty(process, 'InstanceName', {
                    get: function () {
                        if (getProcess !== N && getProcess.getInstanceName !== U) {
                            return getProcess.getInstanceName();
                        }
                        else { throw new Error('loadProcess.InstanceName'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/setstatus
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getstatus
                Object.defineProperty(process, 'Status', {
                    get: function () {
                        if (getProcess !== N && getProcess.getStatus !== U) {
                            return getProcess.getStatus();
                        }
                        else { throw new Error('loadProcess.Status'); }
                    },
                    set: function (value) {
                        if (getProcess !== N && getProcess.setStatus !== U) {
                            getProcess.setStatus(value, N);
                        }
                        else { throw new Error('loadField.Status'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activepath/getactivepath
                Object.defineProperty(process, 'ActivePath', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActivePath !== U) {
                            return getProcess.getActivePath();
                        }
                        else { throw new Error('loadProcess.ActivePath'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
                Object.defineProperty(process, 'ActiveProcess', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActiveProcess !== U) {
                            var data = { Id: EMPTY_GUID, Name: EMPTY_STRING, IsRendered: false, Stages: N };
                            var activeProcess = getProcess.getActiveProcess();
                            if (activeProcess.getId) {
                                data.Id = activeProcess.getId();
                            }
                            if (activeProcess.getName) {
                                data.Name = activeProcess.getName();
                            }
                            if (activeProcess.isRendered) {
                                data.IsRendered = activeProcess.isRendered();
                            }
                            if (activeProcess.getStages) {
                                data.Stages = activeProcess.getStages();
                            }
                            return data;
                        }
                        else { throw new Error('loadProcess.ActiveProcess'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/getactivestage
                Object.defineProperty(process, 'ActiveStage', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActiveStage !== U) {
                            var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                            var activeStage = getProcess.getActiveStage();
                            if (activeStage.getCategory) {
                                if (activeStage.getCategory().getValue) {
                                    data.Category = activeStage.getCategory().getValue();
                                }
                            }
                            if (activeStage.getEntityName) {
                                data.EntityName = activeStage.getEntityName();
                            }
                            if (activeStage.getId) {
                                data.Id = activeStage.getId();
                            }
                            if (activeStage.getName) {
                                data.Name = activeStage.getName();
                            }
                            if (activeStage.getStatus) {
                                data.Status = activeStage.getStatus();
                            }
                            if (activeStage.getSteps) {
                                data.Steps = activeStage.getSteps();
                            }
                            return data;
                        }
                        else { throw new Error('loadProcess.ActiveStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
                process.AddOnProcessStatusChange = function (callback) {
                    if (getProcess !== N && getProcess.addOnProcessStatusChange !== U) {
                        getProcess.addOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnProcessStatusChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
                process.AddOnStageChange = function (callback) {
                    if (getProcess !== N && getProcess.addOnStageChange !== U) {
                        getProcess.addOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
                process.AddOnStageSelected = function (callback) {
                    if (getProcess !== N && getProcess.addOnStageSelected !== U) {
                        getProcess.addOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageSelected'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getenabledprocesses
                process.EnabledProcesses = function (callback) {
                    if (getProcess !== N && getProcess.getEnabledProcesses !== U) {
                        getProcess.getEnabledProcesses(callback);
                    }
                    else { throw new Error('loadProcess.EnabledProcesses'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/movenext
                process.MoveNext = function (callback) {
                    if (getProcess !== N && getProcess.moveNext !== U) {
                        getProcess.moveNext(callback);
                    }
                    else { throw new Error('loadProcess.MoveNext'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/moveprevious
                process.MovePrevious = function (callback) {
                    if (getProcess !== N && getProcess.movePrevious !== U) {
                        getProcess.movePrevious(callback);
                    }
                    else { throw new Error('loadProcess.MovePrevious'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getprocessinstances
                process.ProcessInstances = function (callback) {
                    if (getProcess !== N && getProcess.getProcessInstances !== U) {
                        getProcess.getProcessInstances(callback);
                    }
                    else { throw new Error('loadProcess.ProcessInstances'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
                process.RemoveOnProcessStatusChange = function (callback) {
                    if (getProcess !== N && getProcess.removeOnProcessStatusChange !== U) {
                        getProcess.removeOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnProcessStatusChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
                process.RemoveOnStageChange = function (callback) {
                    if (getProcess !== N && getProcess.removeOnStageChange !== U) {
                        getProcess.removeOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
                process.RemoveOnStageSelected = function (callback) {
                    if (getProcess !== N && getProcess.removeOnStageSelected !== U) {
                        getProcess.removeOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageSelected'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getselectedstage
                Object.defineProperty(process, 'SelectedStage', {
                    get: function () {
                        if (getProcess !== N && getProcess.getSelectedStage !== U) {
                            var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                            var selectedStage = getProcess.getSelectedStage();
                            if (selectedStage.getCategory) {
                                if (selectedStage.getCategory().getValue) {
                                    data.Category = selectedStage.getCategory().getValue();
                                }
                            }
                            if (selectedStage.getEntityName) {
                                data.EntityName = selectedStage.getEntityName();
                            }
                            if (selectedStage.getId) {
                                data.Id = selectedStage.getId();
                            }
                            if (selectedStage.getName) {
                                data.Name = selectedStage.getName();
                            }
                            if (selectedStage.getStatus) {
                                data.Status = selectedStage.getStatus();
                            }
                            if (selectedStage.getSteps) {
                                data.Steps = selectedStage.getSteps();
                            }
                            return data;
                        }
                        else { throw new Error('loadProcess.SelectedStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
                process.SetActiveProcess = function (processId, callback) {
                    if (getProcess !== N && getProcess.setActiveProcess !== U) {
                        getProcess.setActiveProcess(processId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcess'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/setactiveprocessinstance
                process.SetActiveProcessInstance = function (processInstanceId, callback) {
                    if (getProcess !== N && getProcess.setActiveProcessInstance !== U) {
                        getProcess.setActiveProcessInstance(processInstanceId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcessInstance'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/setactivestage
                process.SetActiveStage = function (stageId, callback) {
                    if (getProcess !== N && getProcess.setActiveStage !== U) {
                        getProcess.setActiveStage(stageId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveStage'); }
                };
                return process;
            }
            function loadField(formContext, body, field, type) {
                var logicalName = (function () {
                    if (type === U) return field.toLowerCase();
                    return (type + field).toLowerCase();
                })();
                var control = (function () {
                    if (formContext && formContext.getControl) {
                        return formContext.getControl(logicalName);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.getControl) {
                        return Xrm.Page.getControl(logicalName);
                    }
                    return N;
                })();
                var attribute = (function () {
                    if (formContext) {
                        if (type !== U) {
                            if (control === N) {
                                if (formContext.getAttribute) {
                                    return formContext.getAttribute(logicalName);
                                }
                                return N;
                            }
                            if (control.getAttribute === U) {
                                return N;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                        }
                        if (formContext.getAttribute) {
                            return formContext.getAttribute(logicalName);
                        }
                        return N;
                    }
                    else {
                        if (type !== U) {
                            if (control === N) {
                                if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                                    return Xrm.Page.getAttribute(logicalName);
                                }
                                return N;
                            }
                            if (control.getAttribute === U) {
                                return N;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                            return N;
                        }
                        if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                            return Xrm.Page.getAttribute(logicalName);
                        }
                        return N;
                    }
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/addonchange
                body[field].AddOnChange = function (callback) {
                    if (attribute !== N && attribute.addOnChange !== U) {
                        attribute.addOnChange(callback);
                    }
                    else { throw new Error('loadField.AddOnChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/fireonchange
                body[field].FireOnChange = function () {
                    if (attribute !== N && attribute.fireOnChange !== U) {
                        attribute.fireOnChange();
                    }
                    else { throw new Error('loadField.FireOnChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getattributetype
                Object.defineProperty(body[field], 'AttributeType', {
                    get: function () {
                        if (attribute !== N && attribute.getAttributeType !== U) {
                            return attribute.getAttributeType();
                        }
                        else { throw new Error('loadField.AttributeType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getformat
                Object.defineProperty(body[field], 'Format', {
                    get: function () {
                        if (attribute !== N && attribute.getFormat !== U) {
                            return attribute.getFormat();
                        }
                        else { throw new Error('loadField.Format'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getinitialvalue
                Object.defineProperty(body[field], 'InitialValue', {
                    get: function () {
                        if (attribute !== N && attribute.getInitialValue !== U) {
                            return attribute.getInitialValue();
                        }
                        else { throw new Error('loadField.InitialValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getisdirty
                Object.defineProperty(body[field], 'IsDirty', {
                    get: function () {
                        if (attribute !== N && attribute.getIsDirty !== U) {
                            return attribute.getIsDirty();
                        }
                        else { throw new Error('loadField.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getispartylist
                Object.defineProperty(body[field], 'IsPartyList', {
                    get: function () {
                        if (attribute !== N && attribute.getIsPartyList !== U) {
                            return attribute.getIsPartyList();
                        }
                        else { throw new Error('loadField.IsPartyList'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmax
                Object.defineProperty(body[field], 'Max', {
                    get: function () {
                        if (attribute !== N && attribute.getMax !== U) {
                            return attribute.getMax();
                        }
                        else { throw new Error('loadField.Max'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmaxlength
                Object.defineProperty(body[field], 'MaxLength', {
                    get: function () {
                        if (attribute !== N && attribute.getMaxLength !== U) {
                            return attribute.getMaxLength();
                        }
                        else { throw new Error('loadField.MaxLength'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmin
                Object.defineProperty(body[field], 'Min', {
                    get: function () {
                        if (attribute !== N && attribute.getMin !== U) {
                            return attribute.getMin();
                        }
                        else { throw new Error('loadField.Min'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getname
                Object.defineProperty(body[field], 'Name', {
                    get: function () {
                        if (attribute !== N && attribute.getName !== U) {
                            return attribute.getName();
                        }
                        else { throw new Error('loadField.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
                body[field].Option = function (value) {
                    if (attribute !== N && attribute.getOption !== U) {
                        return attribute.getOption(value);
                    }
                    else { throw new Error('loadField.Option'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoptions
                Object.defineProperty(body[field], 'Options', {
                    get: function () {
                        if (attribute !== N && attribute.getOptions !== U) {
                            return attribute.getOptions();
                        }
                        else { throw new Error('loadField.Options'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getparent
                Object.defineProperty(body[field], 'AttributeParent', {
                    get: function () {
                        if (attribute !== N && attribute.getParent !== U) {
                            return attribute.getParent();
                        }
                        else { throw new Error('loadField.AttributeParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getprecision
                Object.defineProperty(body[field], 'Precision', {
                    get: function () {
                        if (attribute !== N && attribute.getPrecision !== U) {
                            return attribute.getPrecision();
                        }
                        else { throw new Error('loadField.GetPrecision'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setPrecision !== U) {
                            attribute.setPrecision(value);
                        }
                        else { throw new Error('loadField.SetPrecision'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getrequiredlevel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setrequiredlevel
                Object.defineProperty(body[field], 'RequiredLevel', {
                    get: function () {
                        if (attribute !== N && attribute.getRequiredLevel !== U) {
                            return attribute.getRequiredLevel();
                        }
                        else { throw new Error('loadField.GetRequiredLevel'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setRequiredLevel !== U) {
                            attribute.setRequiredLevel(value);
                        }
                        else { throw new Error('loadField.SetRequiredLevel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
                Object.defineProperty(body[field], 'SelectedOption', {
                    get: function () {
                        if (attribute !== N && attribute.getSelectedOption !== U) {
                            return attribute.getSelectedOption();
                        }
                        else { throw new Error('loadField.SelectedOption'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getsubmitmode
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setsubmitmode
                Object.defineProperty(body[field], 'SubmitMode', {
                    get: function () {
                        if (attribute !== N && attribute.getSubmitMode !== U) {
                            return attribute.getSubmitMode();
                        }
                        else { throw new Error('loadField.GetSubmitMode'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setSubmitMode !== U) {
                            attribute.setSubmitMode(value);
                        }
                        else { throw new Error('loadField.SetSubmitMode'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
                Object.defineProperty(body[field], 'Text', {
                    get: function () {
                        if (attribute !== N && attribute.getText !== U) {
                            return attribute.getText();
                        }
                        else { throw new Error('loadField.Text'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getuserprivilege
                Object.defineProperty(body[field], 'UserPrivilege', {
                    get: function () {
                        if (attribute !== N && attribute.getUserPrivilege !== U) {
                            return attribute.getUserPrivilege();
                        }
                        else { throw new Error('loadField.UserPrivilege'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                Object.defineProperty(body[field], 'Value', {
                    get: function () {
                        if (attribute !== N && attribute.getValue !== U) {
                            return attribute.getValue();
                        }
                        else { throw new Error('loadField.GetValue'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setValue !== U) {
                            attribute.setValue(value);
                        }
                        else { throw new Error('loadField.SetValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/isvalid
                Object.defineProperty(body[field], 'Valid', {
                    get: function () {
                        if (attribute !== N && attribute.isValid !== U) {
                            return attribute.isValid();
                        }
                        else { throw new Error('loadField.Valid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/removeonchange
                body[field].RemoveOnChange = function (callback) {
                    if (attribute !== N && attribute.removeOnChange !== U) {
                        attribute.removeOnChange(callback);
                    }
                    else { throw new Error('loadField.RemoveOnChange'); }
                };
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomfilter
                body[field].AddCustomFilter = function (filter, entityLogicaName) {
                    if (control !== N && control.addCustomFilter !== U) {
                        control.addCustomFilter(filter, entityLogicaName);
                    }
                    else { throw new Error('loadField.AddCustomFilter'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomview
                body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
                    if (control !== N && control.addCustomView !== U) {
                        control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
                    }
                    else { throw new Error('loadField.AddCustomView'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addnotification
                body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
                    if (control !== N && control.addNotification !== U) {
                        var actions = { message: message, actions: [callback] };
                        var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
                        return control.addNotification(notification);
                    }
                    else { throw new Error('loadField.AddNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonpostsearch
                body[field].AddOnPostSearch = function (callback) {
                    if (control !== N && control.addOnPostSearch !== U) {
                        control.addOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.AddOnPostSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonresultopened
                body[field].AddOnResultOpened = function (callback) {
                    if (control !== N && control.addOnResultOpened !== U) {
                        control.addOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.AddOnResultOpened'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonselection
                body[field].AddOnSelection = function (callback) {
                    if (control !== N && control.addOnSelection !== U) {
                        control.addOnSelection(callback);
                    }
                    else { throw new Error('loadField.AddOnSelection'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addpresearch
                body[field].AddPreSearch = function (callback) {
                    if (control !== N && control.addPreSearch !== U) {
                        control.addPreSearch(callback);
                    }
                    else { throw new Error('loadField.AddPreSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearnotification
                body[field].ClearNotification = function (uniqueId) {
                    if (control !== N && control.clearNotification !== U) {
                        return control.clearNotification(uniqueId);
                    }
                    else { throw new Error('loadField.ClearNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearoptions
                body[field].ClearOptions = function () {
                    if (control !== N && control.clearOptions !== U) {
                        return control.clearOptions();
                    }
                    else { throw new Error('loadField.ClearOptions'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getcontroltype
                Object.defineProperty(body[field], 'ControlType', {
                    get: function () {
                        if (control !== N && control.getControlType !== U) {
                            return control.getControlType();
                        }
                        else { throw new Error('loadField.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdata
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdata
                Object.defineProperty(body[field], 'Data', {
                    get: function () {
                        if (control !== N && control.getData !== U) {
                            return control.getData();
                        }
                        else { throw new Error('loadField.GetData'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setData !== U) {
                            control.setData(value);
                        }
                        else { throw new Error('loadField.SetData'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdefaultview
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdefaultview
                Object.defineProperty(body[field], 'DefaultView', {
                    get: function () {
                        if (control !== N && control.getDefaultView !== U) {
                            return control.getDefaultView();
                        }
                        else { throw new Error('loadField.GetDefaultView'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setDefaultView !== U) {
                            control.setDefaultView(value);
                        }
                        else { throw new Error('loadField.SetDefaultView'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdisabled
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdisabled
                Object.defineProperty(body[field], 'Disabled', {
                    get: function () {
                        if (control !== N && control.getDisabled !== U) {
                            return control.getDisabled();
                        }
                        else { throw new Error('loadField.GetDisabled'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setDisabled !== U) {
                            control.setDisabled(value);
                        }
                        else { throw new Error('loadField.SetDisabled'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setentitytypes
                Object.defineProperty(body[field], 'EntityTypes', {
                    get: function () {
                        if (control !== N && control.getEntityTypes !== U) {
                            return control.getEntityTypes();
                        }
                        else { throw new Error('loadField.GetEntityTypes'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setEntityTypes !== U) {
                            control.setEntityTypes(value);
                        }
                        else { throw new Error('loadField.SetEntityTypes'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getinitialurl
                Object.defineProperty(body[field], 'InitialUrl', {
                    get: function () {
                        if (control !== N && control.getInitialUrl !== U) {
                            return control.getInitialUrl();
                        }
                        else { throw new Error('loadField.InitialUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setlabel
                Object.defineProperty(body[field], 'Label', {
                    get: function () {
                        if (control !== N && control.getLabel !== U) {
                            return control.getLabel();
                        }
                        else { throw new Error('loadField.GetLabel'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setLabel !== U) {
                            control.setLabel(value);
                        }
                        else { throw new Error('loadField.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getname
                Object.defineProperty(body[field], 'Name2', {
                    get: function () {
                        if (control !== N && control.getName !== U) {
                            return control.getName();
                        }
                        else { throw new Error('loadField.Name2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
                Object.defineProperty(body[field], 'Object', {
                    get: function () {
                        if (control !== N && control.getObject !== U) {
                            return control.getObject();
                        }
                        else { throw new Error('loadField.Object'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getparent
                Object.defineProperty(body[field], 'ControlParent', {
                    get: function () {
                        if (control !== N && control.getParent !== U) {
                            return control.getParent();
                        }
                        else { throw new Error('loadField.ControlParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsearchquery
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsearchquery
                Object.defineProperty(body[field], 'SearchQuery', {
                    get: function () {
                        if (control !== N && control.getSearchQuery !== U) {
                            return control.getSearchQuery();
                        }
                        else { throw new Error('loadField.GetSearchQuery'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setSearchQuery !== U) {
                            control.setSearchQuery(value);
                        }
                        else { throw new Error('loadField.SetSearchQuery'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getselectedresults

                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getshowtime
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setshowtime
                Object.defineProperty(body[field], 'ShowTime', {
                    get: function () {
                        if (control !== N && control.getShowTime !== U) {
                            return control.getShowTime();
                        }
                        else { throw new Error('loadField.GetShowTime'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setShowTime !== U) {
                            control.setShowTime(value);
                        }
                        else { throw new Error('loadField.SetShowTime'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
                Object.defineProperty(body[field], 'Src', {
                    get: function () {
                        if (control !== N && control.getSrc !== U) {
                            return control.getSrc();
                        }
                        else { throw new Error('loadField.GetSrc'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setSrc !== U) {
                            control.setSrc(value);
                        }
                        else { throw new Error('loadField.SetSrc'); }
                    }

                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getstate
                Object.defineProperty(body[field], 'State', {
                    get: function () {
                        if (control !== N && control.getState !== U) {
                            return control.getState();
                        }
                        else { throw new Error('loadField.State'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/gettotalresultcount
                Object.defineProperty(body[field], 'TotalResultCount', {
                    get: function () {
                        if (control !== N && control.getTotalResultCount !== U) {
                            return control.getTotalResultCount();
                        }
                        else { throw new Error('loadField.TotalResultCount'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                Object.defineProperty(body[field], 'Value2', {
                    get: function () {
                        if (control !== N && control.getValue !== U) {
                            return control.getValue();
                        }
                        else { throw new Error('loadField.Value2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setvisible
                Object.defineProperty(body[field], 'Visible', {
                    get: function () {
                        if (control !== N && control.getVisible !== U) {
                            return control.getVisible();
                        }
                        else { throw new Error('loadField.GetVisible'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setVisible !== U) {
                            control.setVisible(value);
                        }
                        else { throw new Error('loadField.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/opensearchresult
                body[field].OpenSearchResult = function (resultNumber, mode) {
                    if (control !== N && control.openSearchResult !== U) {
                        return control.openSearchResult(resultNumber, mode);
                    }
                    else { throw new Error('loadField.OpenSearchResult'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
                body[field].Refresh = function () {
                    if (control !== N && control.refresh !== U) {
                        control.refresh();
                    }
                    else { throw new Error('loadField.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonpostsearch
                body[field].RemoveOnPostSearch = function (callback) {
                    if (control !== N && control.removeOnPostSearch !== U) {
                        control.removeOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.RemoveOnPostSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonresultopened
                body[field].RemoveOnResultOpened = function (callback) {
                    if (control !== N && control.removeOnResultOpened !== U) {
                        control.removeOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.RemoveOnResultOpened'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonselection
                body[field].RemoveOnSelection = function (callback) {
                    if (control !== N && control.removeOnSelection !== U) {
                        control.removeOnSelection(callback);
                    }
                    else { throw new Error('loadField.RemoveOnSelection'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeoption
                body[field].RemoveOption = function (value) {
                    if (control !== N && control.removeOption !== U) {
                        control.removeOption(value);
                    }
                    else { throw new Error('loadField.RemoveOption'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removepresearch
                body[field].RemovePreSearch = function (callback) {
                    if (control !== N && control.removePreSearch !== U) {
                        control.removePreSearch(callback);
                    }
                    else { throw new Error('loadField.RemovePreSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setfocus
                body[field].Focus = function () {
                    if (control !== N && control.setFocus !== U) {
                        control.setFocus();
                    }
                    else { throw new Error('loadField.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setnotification
                body[field].SetNotification = function (message, uniqueId) {
                    if (control !== N && control.setNotification !== U) {
                        return control.setNotification(message, uniqueId);
                    }
                    else { throw new Error('loadField.SetNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addoption
                body[field].AddOption = function (text, value, index) {
                    if (control !== N && control.addOption !== U) {
                        var option = { text: text, value: value };
                        control.addOption(option, index);
                    }
                    else { throw new Error('loadField.AddOption'); }
                };
            }
            function loadFields(formContext, body, type) {
                for (var field in body) {
                    loadField(formContext, body, field, type);
                }
                return body;
            }
            function loadSection(formContext, tab, sections, section) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return N;
                })();
                var sectionObject = (function () {
                    if (tabObject !== N && tabObject.sections && tabObject.sections.get) {
                        return tabObject.sections.get(section);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setlabel
                Object.defineProperty(sections[section], 'Label', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getLabel !== U) {
                            return sectionObject.getLabel();
                        }
                        else { throw new Error('loadSection.GetLabel'); }
                    },
                    set: function (value) {
                        if (sectionObject !== N && sectionObject.setLabel !== U) {
                            sectionObject.setLabel(value);
                        }
                        else { throw new Error('loadSection.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getname
                Object.defineProperty(sections[section], 'Name', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getName !== U) {
                            return sectionObject.getName();
                        }
                        else { throw new Error('loadSection.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getparent
                Object.defineProperty(sections[section], 'Parent', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getParent !== U) {
                            return sectionObject.getParent();
                        }
                        else { throw new Error('loadSection.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setvisible
                Object.defineProperty(sections[section], 'Visible', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getVisible !== U) {
                            return sectionObject.getVisible();
                        }
                        else { throw new Error('loadSection.GetVisible'); }
                    },
                    set: function (value) {
                        if (sectionObject !== N && sectionObject.setVisible !== U) {
                            sectionObject.setVisible(value);
                        }
                        else { throw new Error('loadSection.SetVisible'); }
                    }
                });
            }
            function loadTab(formContext, tabs, tab) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/addtabstatechange
                tabs[tab].AddTabStateChange = function (callback) {
                    if (tabObject !== N && tabObject.addTabStateChange !== U) {
                        tabObject.addTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.AddTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getdisplaystate
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setdisplaystate
                Object.defineProperty(tabs[tab], 'DisplayState', {
                    get: function () {
                        if (tabObject !== N && tabObject.getDisplayState !== U) {
                            return tabObject.getDisplayState();
                        }
                        else { throw new Error('loadTab.GetDisplayState'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setDisplayState !== U) {
                            tabObject.setDisplayState(value);
                        }
                        else { throw new Error('loadTab.SetDisplayState'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setfocus
                tabs[tab].Focus = function () {
                    if (tabObject !== N && tabObject.setFocus !== U) {
                        tabObject.setFocus();
                    }
                    else { throw new Error('loadTab.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setlabel
                Object.defineProperty(tabs[tab], 'Label', {
                    get: function () {
                        if (tabObject !== N && tabObject.getLabel !== U) {
                            return tabObject.getLabel();
                        }
                        else { throw new Error('loadTab.GetLabel'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setLabel !== U) {
                            tabObject.setLabel(value);
                        }
                        else { throw new Error('loadTab.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getname
                Object.defineProperty(tabs[tab], 'Name', {
                    get: function () {
                        if (tabObject !== N && tabObject.getName !== U) {
                            return tabObject.getName();
                        }
                        else { throw new Error('loadTab.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getparent
                Object.defineProperty(tabs[tab], 'Parent', {
                    get: function () {
                        if (tabObject !== N && tabObject.getParent !== U) {
                            return tabObject.getParent();
                        }
                        else { throw new Error('loadTab.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/removetabstatechange
                tabs[tab].RemoveTabStateChange = function (callback) {
                    if (tabObject !== N && tabObject.removeTabStateChange !== U) {
                        tabObject.removeTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.RemoveTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setvisible
                Object.defineProperty(tabs[tab], 'Visible', {
                    get: function () {
                        if (tabObject !== N && tabObject.getVisible !== U) {
                            return tabObject.getVisible();
                        }
                        else { throw new Error('loadTab.GetVisible'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setVisible !== U) {
                            tabObject.setVisible(value);
                        }
                        else { throw new Error('loadTab.SetVisible'); }
                    }
                });
                for (var section in tabs[tab].Section) {
                    loadSection(formContext, tab, tabs[tab].Section, section);
                }
            }
            function loadTabs(formContext, tabs) {
                for (var tab in tabs) {
                    loadTab(formContext, tabs, tab);
                }
            }
            function loadNavigation(formContext, navigations, navigation) {
                var navigationItem = (function () {
                    if (formContext && formContext.ui && formContext.ui.navigation && formContext.ui.navigation.items && formContext.ui.navigation.items.get) {
                        return formContext.ui.navigation.items.get(navigation);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.navigation && Xrm.Page.ui.navigation.items && Xrm.Page.ui.navigation.items.get) {
                        return Xrm.Page.ui.navigation.items.get(navigation);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setfocus
                navigations[navigation].Focus = function () {
                    if (navigationItem !== N && navigationItem.setFocus !== U) {
                        navigationItem.setFocus();
                    }
                    else { throw new Error('loadNavigation.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setlabel
                Object.defineProperty(navigations[navigation], 'Label', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getLabel !== U) {
                            return navigationItem.getLabel();
                        }
                        else { throw new Error('loadNavigation.GetLabel'); }
                    },
                    set: function (value) {
                        if (navigationItem !== N && navigationItem.setLabel !== U) {
                            navigationItem.setLabel(value);
                        }
                        else { throw new Error('loadNavigation.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setvisible
                Object.defineProperty(navigations[navigation], 'Visible', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getVisible !== U) {
                            return navigationItem.getVisible();
                        }
                        else { throw new Error('loadNavigation.GetVisible'); }
                    },
                    set: function (value) {
                        if (navigationItem !== N && navigationItem.setVisible !== U) {
                            navigationItem.setVisible(value);
                        }
                        else { throw new Error('loadNavigation.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getid
                Object.defineProperty(navigations[navigation], 'Id', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getId !== U) {
                            return navigationItem.getId();
                        }
                        else { throw new Error('loadNavigation.Id'); }
                    }
                });
            }
            function loadNavigations(formContext, navigations) {
                for (var navigation in navigations) {
                    loadNavigation(formContext, navigations, navigation);
                }
            }
            function loadQuickForm(formContext, quickForms, quickForm) {
                var quickViewControl = (function () {
                    if (formContext && formContext.ui && formContext.ui.quickForms && formContext.ui.quickForms.get) {
                        return formContext.ui.quickForms.get(quickForm);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.quickForms && Xrm.Page.ui.quickForms.get) {
                        return Xrm.Page.ui.quickForms.get(quickForm);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getcontroltype
                Object.defineProperty(quickForms[quickForm], 'ControlType', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getControlType !== U) {
                            return quickViewControl.getControlType();
                        }
                        else { throw new Error('loadQuickForm.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setfocus
                quickForms[quickForm].Focus = function () {
                    if (quickViewControl !== N && quickViewControl.setFocus !== U) {
                        quickViewControl.setFocus();
                    }
                    else { throw new Error('loadQuickForm.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setlabel
                Object.defineProperty(quickForms[quickForm], 'Label', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getLabel !== U) {
                            return quickViewControl.getLabel();
                        }
                        else { throw new Error('loadQuickForm.GetLabel'); }
                    },
                    set: function (value) {
                        if (quickViewControl !== N && quickViewControl.setLabel !== U) {
                            quickViewControl.setLabel(value);
                        }
                        else { throw new Error('loadQuickForm.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/isloaded
                quickForms[quickForm].IsLoaded = function () {
                    if (quickViewControl !== N && quickViewControl.isLoaded !== U) {
                        return quickViewControl.isLoaded();
                    }
                    else { throw new Error('loadQuickForm.IsLoaded'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getname
                Object.defineProperty(quickForms[quickForm], 'Name', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getName !== U) {
                            return quickViewControl.getName();
                        }
                        else { throw new Error('loadQuickForm.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getparent
                Object.defineProperty(quickForms[quickForm], 'Parent', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getParent !== U) {
                            return quickViewControl.getParent();
                        }
                        else { throw new Error('loadQuickForm.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/refresh
                quickForms[quickForm].Refresh = function () {
                    if (quickViewControl !== N && quickViewControl.refresh !== U) {
                        quickViewControl.refresh();
                    }
                    else { throw new Error('loadQuickForm.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getvisible
                Object.defineProperty(quickForms[quickForm], 'Visible', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getVisible !== U) {
                            return quickViewControl.getVisible();
                        }
                        else { throw new Error('loadQuickForm.Visible'); }
                    }
                });
            }
            function loadQuickForms(formContext, quickForms) {
                for (var quickForm in quickForms) {
                    loadQuickForm(formContext, quickForms, quickForm);
                }
            }
            function loadUtility(defaultWebResourceName) {
                var utility = {};
                var getUtility = (function () {
                    if (Xrm && Xrm.Utility) {
                        return Xrm.Utility;
                    }
                    return N;
                })();
                var getGlobalContext = (function () {
                    if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
                        return Xrm.Utility.getGlobalContext();
                    }
                    return N;
                })();
                var getNavigation = (function () {
                    if (Xrm && Xrm.Navigation) {
                        return Xrm.Navigation;
                    }
                    return N;
                })();
                var getPanel = (function () {
                    if (Xrm && Xrm.Panel) {
                        return Xrm.Panel;
                    }
                    return N;
                })();
                var getEncoding = (function () {
                    if (Xrm && Xrm.Encoding) {
                        return Xrm.Encoding;
                    }
                    return N;
                })();
                var getDevice = (function () {
                    if (Xrm && Xrm.Device) {
                        return Xrm.Device;
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
                utility.CloseProgressIndicator = function () {
                    if (getUtility !== N && getUtility.closeProgressIndicator !== U) {
                        getUtility.closeProgressIndicator();
                    }
                    else { throw new Error('loadUtility.CloseProgressIndicator'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
                utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.getAllowedStatusTransitions !== U) {
                        getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.AllowedStatusTransitions'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
                utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.getEntityMetadata !== U) {
                        getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.EntityMetadata'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getlearningpathattributename
                Object.defineProperty(utility, 'LearningPathAttributeName', {
                    get: function () {
                        if (getUtility !== N && getUtility.getLearningPathAttributeName !== U) {
                            return getUtility.getLearningPathAttributeName();
                        }
                        else { throw new Error('loadUtility.LearningPathAttributeName'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
                utility.ResourceString = function (webResourceName, key) {
                    if (getUtility !== N && getUtility.getResourceString !== U) {
                        return getUtility.getResourceString(webResourceName, key);
                    }
                    else { throw new Error('loadUtility.ResourceString'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
                utility.Resource = function (key) {
                    if (getUtility !== N && getUtility.getResourceString !== U) {
                        if (defaultWebResourceName !== U) {
                            return getUtility.getResourceString(defaultWebResourceName, key);
                        }
                        else { throw new Error('loadUtility.Resource - defaultWebResourceName null'); }
                    }
                    else { throw new Error('loadUtility.Resource'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction
                utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.invokeProcessAction !== U) {
                        getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.InvokeProcessAction'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/lookupobjects
                utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.lookupObjects !== U) {
                        getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.LookupObjects'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/refreshparentgrid
                utility.RefreshParentGrid = function (lookupOptions) {
                    if (getUtility !== N && getUtility.refreshParentGrid !== U) {
                        getUtility.refreshParentGrid(lookupOptions);
                    }
                    else { throw new Error('loadUtility.RefreshParentGrid'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/showprogressindicator
                utility.ShowProgressIndicator = function (message) {
                    if (getUtility !== N && getUtility.showProgressIndicator !== U) {
                        getUtility.showProgressIndicator(message);
                    }
                    else { throw new Error('loadUtility.ShowProgressIndicator'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
                utility.AdvancedConfigSetting = function (setting) {
                    if (getGlobalContext !== N && getGlobalContext.getAdvancedConfigSetting !== U) {
                        return getGlobalContext.getAdvancedConfigSetting(setting);
                    }
                    else { throw new Error('loadUtility.AdvancedConfigSetting'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
                Object.defineProperty(utility, 'ClientUrl', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getClientUrl !== U) {
                            return getGlobalContext.getClientUrl();
                        }
                        else { throw new Error('loadUtility.ClientUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
                utility.CurrentAppName = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.getCurrentAppName !== U) {
                        getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppName'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
                utility.CurrentAppProperties = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.getCurrentAppProperties !== U) {
                        getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppProperties'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
                Object.defineProperty(utility, 'CurrentAppUrl', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getCurrentAppUrl !== U) {
                            return getGlobalContext.getCurrentAppUrl();
                        }
                        else { throw new Error('loadUtility.CurrentAppUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getversion
                Object.defineProperty(utility, 'Version', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getVersion !== U) {
                            return getGlobalContext.getVersion();
                        }
                        else { throw new Error('loadUtility.Version'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
                utility.IsOnPremises = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.isOnPremises !== U) {
                        return getGlobalContext.isOnPremises();
                    }
                    else { throw new Error('loadUtility.IsOnPremises'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
                utility.PrependOrgName = function (sPath) {
                    if (getGlobalContext !== N && getGlobalContext.prependOrgName !== U) {
                        return getGlobalContext.prependOrgName(sPath);
                    }
                    else { throw new Error('loadUtility.PrependOrgName'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openalertdialog
                utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openAlertDialog !== U) {
                        getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenAlertDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openconfirmdialog
                utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openConfirmDialog !== U) {
                        getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenConfirmDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openerrordialog
                utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openErrorDialog !== U) {
                        getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenErrorDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openfile
                utility.OpenFile = function (file, openFileOptions) {
                    if (getNavigation !== N && getNavigation.openFile !== U) {
                        getNavigation.openFile(file, openFileOptions);
                    }
                    else { throw new Error('loadUtility.OpenFile'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
                utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openForm !== U) {
                        getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenForm'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openurl
                utility.OpenUrl = function (url, openUrlOptions) {
                    if (getNavigation !== N && getNavigation.openUrl !== U) {
                        getNavigation.openUrl(url, openUrlOptions);
                    }
                    else { throw new Error('loadUtility.OpenUrl'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openwebresource
                utility.OpenWebResource = function (webResourceName, windowOptions, data) {
                    if (getNavigation !== N && getNavigation.openWebResource !== U) {
                        getNavigation.openWebResource(webResourceName, windowOptions, data);
                    }
                    else { throw new Error('loadUtility.OpenWebResource'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel
                utility.LoadPanel = function (url, title) {
                    if (getPanel !== N && getPanel.loadPanel !== U) {
                        getPanel.loadPanel(url, title);
                    }
                    else { throw new Error('loadUtility.LoadPanel'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlattributeencode
                utility.XmlAttributeEncode = function (arg) {
                    if (getEncoding !== N && getEncoding.xmlAttributeEncode !== U) {
                        return getEncoding.xmlAttributeEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlAttributeEncode'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlencode
                utility.XmlEncode = function (arg) {
                    if (getEncoding !== N && getEncoding.xmlEncode !== U) {
                        return getEncoding.xmlEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlEncode'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureaudio
                utility.CaptureAudio = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureAudio !== U) {
                        getDevice.captureAudio().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureAudio'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureimage
                utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureImage !== U) {
                        getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureImage'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/capturevideo
                utility.CaptureVideo = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureVideo !== U) {
                        getDevice.captureVideo().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureVideo'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getbarcodevalue
                utility.BarcodeValue = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.getBarcodeValue !== U) {
                        getDevice.getBarcodeValue().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.BarcodeValue'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getcurrentposition
                utility.CurrentPosition = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.getCurrentPosition !== U) {
                        getDevice.getCurrentPosition().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentPosition'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/pickfile
                utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.pickFile !== U) {
                        getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.PickFile'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client
                Object.defineProperty(utility, 'Client', {
                    get: function () {
                        var client = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().client) {
                                return Xrm.Utility.getGlobalContext().client;
                            }
                            return N;
                        })();
                        var Client = {};
                        Object.defineProperty(Client, 'ClientName', {
                            get: function () {
                                if (client !== N && client.getClient !== U) {
                                    return client.getClient();
                                }
                                else { throw new Error('loadUtility.ClientName'); }
                            }
                        });
                        Object.defineProperty(Client, 'ClientState', {
                            get: function () {
                                if (client !== N && client.getClientState !== U) {
                                    return client.getClientState();
                                }
                                else { throw new Error('loadUtility.ClientState'); }
                            }
                        });
                        Object.defineProperty(Client, 'FormFactor', {
                            get: function () {
                                if (client !== N && client.getFormFactor !== U) {
                                    return client.getFormFactor();
                                }
                                else { throw new Error('loadUtility.FormFactor'); }
                            }
                        });
                        Client.IsOffline = function () {
                            if (client !== N && client.isOffline !== U) {
                                return client.isOffline();
                            }
                            else { throw new Error('loadUtility.IsOffline'); }
                        };
                        return Client;
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
                Object.defineProperty(utility, 'OrganizationSettings', {
                    get: function () {
                        var organizationSettings = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().organizationSettings) {
                                return Xrm.Utility.getGlobalContext().organizationSettings;
                            }
                            return N;
                        })();
                        var OrganizationSettings = {};
                        Object.defineProperty(OrganizationSettings, 'Attributes', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.attributes !== U) {
                                    return organizationSettings.attributes;
                                }
                                else { throw new Error('loadUtility.Attributes'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'BaseCurrencyId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.baseCurrencyId !== U) {
                                    return organizationSettings.baseCurrencyId;
                                }
                                else { throw new Error('loadUtility.BaseCurrencyId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'DefaultCountryCode', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.defaultCountryCode !== U) {
                                    return organizationSettings.defaultCountryCode;
                                }
                                else { throw new Error('loadUtility.DefaultCountryCode'); }
                            }
                        });
                        OrganizationSettings.IsAutoSaveEnabled = function () {
                            if (organizationSettings !== N && organizationSettings.isAutoSaveEnabled !== U) {
                                return organizationSettings.isAutoSaveEnabled;
                            }
                            else { throw new Error('loadUtility.IsAutoSaveEnabled'); }
                        };
                        Object.defineProperty(OrganizationSettings, 'LanguageId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.languageId !== U) {
                                    return organizationSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'OrganizationId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.organizationId !== U) {
                                    return organizationSettings.organizationId;
                                }
                                else { throw new Error('loadUtility.OrganizationId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UniqueName', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.uniqueName !== U) {
                                    return organizationSettings.uniqueName;
                                }
                                else { throw new Error('loadUtility.UniqueName'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UseSkypeProtocol', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.useSkypeProtocol !== U) {
                                    return organizationSettings.useSkypeProtocol;
                                }
                                else { throw new Error('loadUtility.UseSkypeProtocol'); }
                            }
                        });
                        return OrganizationSettings;
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings
                Object.defineProperty(utility, 'UserSettings', {
                    get: function () {
                        var userSettings = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().userSettings) {
                                return Xrm.Utility.getGlobalContext().userSettings;
                            }
                            return N;
                        })();
                        var UserSettings = {};
                        Object.defineProperty(UserSettings, 'DateFormattingInfo', {
                            get: function () {
                                if (userSettings !== N && userSettings.dateFormattingInfo !== U) {
                                    return userSettings.dateFormattingInfo;
                                }
                                else { throw new Error('loadUtility.DateFormattingInfo'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'DefaultDashboardId', {
                            get: function () {
                                if (userSettings !== N && userSettings.defaultDashboardId !== U) {
                                    return userSettings.defaultDashboardId;
                                }
                                else { throw new Error('loadUtility.DefaultDashboardId'); }
                            }
                        });
                        UserSettings.IsGuidedHelpEnabled = function () {
                            if (userSettings !== N && userSettings.isGuidedHelpEnabled !== U) {
                                return userSettings.isGuidedHelpEnabled;
                            }
                            else { throw new Error('loadUtility.IsGuidedHelpEnabled'); }
                        };
                        UserSettings.IsHighContrastEnabled = function () {
                            if (userSettings !== N && userSettings.isHighContrastEnabled !== U) {
                                return userSettings.isHighContrastEnabled;
                            }
                            else { throw new Error('loadUtility.IsHighContrastEnabled'); }
                        };
                        UserSettings.IsRTL = function () {
                            if (userSettings !== N && userSettings.isRTL !== U) {
                                return userSettings.isRTL;
                            }
                            else { throw new Error('loadUtility.IsRTL'); }
                        };
                        Object.defineProperty(UserSettings, 'LanguageId', {
                            get: function () {
                                if (userSettings !== N && userSettings.languageId !== U) {
                                    return userSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRolePrivileges', {
                            get: function () {
                                if (userSettings !== N && userSettings.securityRolePrivileges !== U) {
                                    return userSettings.securityRolePrivileges;
                                }
                                else { throw new Error('loadUtility.SecurityRolePrivileges'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRoles', {
                            get: function () {
                                if (userSettings !== N && userSettings.securityRoles !== U) {
                                    return userSettings.securityRoles;
                                }
                                else { throw new Error('loadUtility.SecurityRoles'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'TransactionCurrencyId', {
                            get: function () {
                                if (userSettings !== N && userSettings.transactionCurrencyId !== U) {
                                    return userSettings.transactionCurrencyId;
                                }
                                else { throw new Error('loadUtility.TransactionCurrencyId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserId', {
                            get: function () {
                                if (userSettings !== N && userSettings.userId !== U) {
                                    return userSettings.userId;
                                }
                                else { throw new Error('loadUtility.UserId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserName', {
                            get: function () {
                                if (userSettings !== N && userSettings.userName !== U) {
                                    return userSettings.userName;
                                }
                                else { throw new Error('loadUtility.UserName'); }
                            }
                        });
                        UserSettings.TimeZoneOffsetMinutes = function () {
                            if (userSettings !== N && userSettings.getTimeZoneOffsetMinutes !== U) {
                                return userSettings.getTimeZoneOffsetMinutes();
                            }
                            else { throw new Error('loadUtility.TimeZoneOffsetMinutes'); }
                        };
                        return UserSettings;
                    }
                });
                return utility;
            }
            return {
                LoadForm: loadForm,
                LoadProcess: loadProcess,
                LoadFields: loadFields,
                LoadTabs: loadTabs,
                LoadNavigations: loadNavigations,
                LoadQuickForms: loadQuickForms,
                LoadUtility: loadUtility
            };
        })();
	Hsbc.FormInformation = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			Description: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			: {
				Section: {
					general: {},
					description: {},
					other: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		var optionSet = {
			ComponentState : {
				Published: 0,
				Unpublished: 1,
				Deleted: 2,
				Deleted_Unpublished: 3
			},
			EntitiesPerFile : {
				Single_Entity_Per_File: 1,
				Multiple_Entities_Per_File: 2
			},
			ImportMapType : {
				Standard: 1,
				Out_of_Box: 2,
				In_Process: 3
			},
			SourceType : {
				Map_For_SalesForcecom_Full_Data_Export: 1,
				Map_For_SalesForcecom_Report_Export: 2,
				Map_For_SalesForcecom_Contact_and_Account_Report_Export: 3,
				Microsoft_Office_Outlook_2010_with_Business_Contact_Manager: 4,
				Generic_Map_for_Contact_and_Account: 5
			},
			StateCode : {
				Active: 0,
				Inactive: 1
			},
			StatusCode : {
				Active: 1,
				Inactive: 2
			},
			TargetEntity : {
				Quarterly_Fiscal_Calendar: 2002,
				Queue: 2020,
				Queue_Item: 2029,
				Product_Relationship: 1028,
				Publisher: 7101,
				Publisher_Address: 7102,
				QueueItemCount: 2023,
				Quote_Product: 1085,
				Rating_Model: 1144,
				Rating_Value: 1142,
				QueueMemberCount: 2024,
				Quote: 1084,
				Quote_Close: 4211,
				ProductSalesLiterature: 21,
				Field_Sharing: 44,
				Principal_Sync_Attribute_Map: 1404,
				Privilege: 1023,
				Post_Regarding: 8002,
				Post_Role: 8001,
				Price_List: 1022,
				Privilege_Object_Type_Code: 31,
				Product: 1024,
				Product_Association: 1025,
				Price_List_Item: 1026,
				Process_Session: 4710,
				Process_Stage: 4724,
				Process_Trigger: 4712,
				Document_Suggestions: 1189,
				Application_Ribbons: 1120,
				Ribbon_Difference: 1130,
				Ribbon_Rule: 1117,
				Ribbon_Client_Metadata: 4579,
				Ribbon_Command: 1116,
				Ribbon_Context_Group: 1115,
				Ribbon_Tab_To_Command_Mapping: 1113,
				Rollup_Job: 9511,
				Rollup_Properties: 9510,
				Routing_Rule_Set: 8181,
				Security_Role: 1036,
				Role_Template: 1037,
				Rollup_Field: 9604,
				Resource_Specification: 4006,
				Relationship_Role_Map: 4501,
				Replication_Backlog: 1140,
				Report: 9100,
				Recurrence_Rule: 4250,
				Recurring_Appointment: 4251,
				Relationship_Role: 4500,
				Report_Related_Category: 9102,
				Resource: 4002,
				Scheduling_Group: 4005,
				Resource_Expansion: 4010,
				Report_Related_Entity: 9101,
				Report_Link: 9104,
				Report_Visibility: 9103,
				Like: 8006,
				Survey: 10040,
				Survey_invite: 10041,
				Survey_response: 10042,
				Survey_email_template: 10037,
				Survey_question: 10038,
				Survey_question_response: 10039,
				Unsubscribed_recipient: 10043,
				New_Process: 950,
				Notification: 4110,
				Office_Document: 4490,
				MultiEntitySearch: 9910,
				Multi_Select_Option_Value: 9912,
				Navigation_Setting: 9900,
				Filter: 10036,
				Solution_Component_Data_Source: 10002,
				Solution_Component_Summary: 10001,
				Solution_History: 10003,
				msdyn_relationshipinsightsunifiedconfig: 10022,
				salesinsightssettings: 10028,
				siconfig: 10023,
				Solution_History_Data_Source: 10004,
				Upgrade_Step: 10009,
				Upgrade_Version: 10010,
				Wall_View: 10035,
				Microsoft_Teams_Collaboration_entity: 10044,
				UntrackedAppointment: 10029,
				Upgrade_Run: 10008,
				Office_Graph_Document: 9950,
				Phone_To_Case_Process: 952,
				List_Value_Mapping: 4418,
				Plug_in_Assembly: 4605,
				Partner_Application: 1095,
				Personal_Document_Template: 9941,
				Phone_Call: 4210,
				Plug_in_Trace_Log: 4619,
				Post: 8000,
				Comment: 8005,
				Follow: 8003,
				Plug_in_Type: 4602,
				Plug_in_Type_Statistic: 4603,
				Position: 50,
				Owner_Mapping: 4420,
				OpportunityCompetitors: 25,
				Opportunity_Product: 1083,
				Opportunity_Sales_Process: 953,
				Offline_Command_Definition: 9870,
				Opportunity: 3,
				Opportunity_Close: 4208,
				Order_Close: 4209,
				Organization_Insights_Metric: 9699,
				Organization_Insights_Notification: 9690,
				Owner: 7,
				Organization: 1019,
				Organization_Statistic: 4708,
				Organization_UI: 1021,
				Time_Stamp_Date_Mapping: 9932,
				Time_Zone_Definition: 4810,
				Time_Zone_Localized_Name: 4812,
				Territory: 2013,
				Text_Analytics_Entity_Mapping: 9945,
				Theme: 2015,
				Time_Zone_Rule: 4811,
				Topic_Model_Configuration: 9942,
				Topic_Model_Execution_History: 9943,
				Trace_Association: 8051,
				Text_Analytics_Topic: 9948,
				Topic_History: 9946,
				Topic_Model: 9944,
				Email_Template: 2010,
				System_Form: 1030,
				User: 8,
				SystemUser_BusinessUnit_Entity_Map: 42,
				Sync_Attribute_Mapping_Profile: 1400,
				Sync_Error: 9869,
				System_Application_Metadata: 7000,
				System_User_Manager_Map: 51,
				Team_Profiles: 1203,
				Team_Sync_Attribute_Mapping_Profiles: 1403,
				Team_template: 92,
				System_User_Principal: 14,
				Task: 4212,
				Team: 9,
				Trace: 8050,
				User_Search_Facet: 52,
				User_Settings: 150,
				Web_Resource: 9333,
				User_Mapping: 2016,
				Saved_View: 4230,
				User_Chart: 1112,
				Web_Wizard: 4800,
				Process_Dependency: 4704,
				Process_Log: 4706,
				Workflow_Wait_Subscription: 4702,
				Web_Wizard_Access_Privilege: 4803,
				Wizard_Page: 4802,
				Process: 4703,
				User_Dashboard: 1031,
				Transformation_Parameter_Mapping: 4427,
				Translation_Process: 951,
				Unresolved_Address: 2012,
				Trace_Regarding: 8052,
				Currency: 9105,
				Transformation_Mapping: 4426,
				UntrackedEmail: 4220,
				User_Entity_Instance_Data: 2501,
				User_Entity_UI_Settings: 2500,
				User_Fiscal_Calendar: 1086,
				Unit: 1055,
				Unit_Group: 1056,
				User_Application_Metadata: 7001,
				Sync_Attribute_Mapping: 1401,
				Sdk_Message_Request_Field: 4614,
				Sdk_Message_Response: 4610,
				Sdk_Message_Response_Field: 4611,
				Sdk_Message_Processing_Step_Image: 4615,
				Sdk_Message_Processing_Step_Secure_Configuration: 4616,
				Sdk_Message_Request: 4609,
				Semiannual_Fiscal_Calendar: 2001,
				Service_Endpoint: 4618,
				SharePoint_Data: 9509,
				Sharepoint_Document: 9507,
				Service: 4001,
				Service_Activity: 4214,
				Service_Contract_Contact: 20,
				Sdk_Message_Processing_Step: 4608,
				Sales_Attachment: 1070,
				Order: 1088,
				Order_Product: 1089,
				Rule_Item: 8199,
				RuntimeDependency: 7200,
				Sales_Literature: 1038,
				Sales_Process_Instance: 32,
				Sdk_Message: 4606,
				Sdk_Message_Filter: 4607,
				Sdk_Message_Pair: 4613,
				Saved_Organization_Insights_Configuration: 1309,
				View: 1039,
				System_Chart: 1111,
				Document_Location: 9508,
				Subscription: 29,
				Subscription_Clients: 1072,
				Subscription_Manually_Tracked_Object: 37,
				Status_Map: 1075,
				String_Map: 1043,
				Subject: 129,
				Subscription_Statistic_Offline: 45,
				Subscription_Synchronization_Information: 33,
				Tracking_information_for_deleted_entities: 35,
				SuggestionCardTemplate: 1190,
				Subscription_Statistic_Outlook: 46,
				Subscription_Sync_Entry_Offline: 47,
				Subscription_Sync_Entry_Outlook: 48,
				SolutionHistoryData: 9890,
				Site_Map: 4709,
				SLA: 9750,
				SLA_Item: 9751,
				SharePoint_Site: 9502,
				Similarity_Rule: 9951,
				Site: 4009,
				SLA_KPI_Instance: 9752,
				Solution: 7100,
				Solution_Component: 7103,
				Solution_Component_Definition: 7104,
				Social_Activity: 4216,
				SocialInsightsConfiguration: 1300,
				Social_Profile: 99,
				Process_Configuration: 9650,
				Connection: 3234,
				Connection_Role: 3231,
				Competitor_Address: 1004,
				Competitor_Product: 1006,
				CompetitorSalesLiterature: 26,
				Connection_Role_Object_Type_Code: 3233,
				ContactLeads: 22,
				ContactOrders: 19,
				ContactQuotes: 18,
				Resource_Group: 4007,
				Contact: 2,
				ContactInvoices: 17,
				Competitor: 123,
				Channel_Access_Profile: 3005,
				Channel_Access_Profile_Rule: 9400,
				Channel_Access_Profile_Rule_Item: 9401,
				Canvas_App: 300,
				Action_Card_Type: 9983,
				Category: 9959,
				Channel_Property: 1236,
				Client_update: 36,
				Column_Mapping: 4417,
				Commitment: 4215,
				Channel_Property_Group: 1234,
				Characteristic: 1141,
				Child_Incident_Count: 113,
				Contract: 1010,
				Display_String: 4102,
				Display_String_Map: 4101,
				Indexed_Article: 126,
				Dependency_Node: 7106,
				Discount: 1013,
				Discount_List: 1080,
				Document_Template: 9940,
				Property: 1048,
				Property_Association: 1235,
				Property_Instance: 1333,
				Duplicate_Record: 4415,
				Duplicate_Detection_Rule: 4414,
				Duplicate_Rule_Condition: 4416,
				Dependency_Feature: 7108,
				Record_Creation_and_Update_Rule_Item: 9301,
				Custom_Control: 9753,
				Custom_Control_Default_Config: 9755,
				Contract_Line: 1011,
				Contract_Template: 2011,
				Record_Creation_and_Update_Rule: 9300,
				Custom_Control_Resource: 9754,
				Data_Performance_Dashboard: 4450,
				DelveActionHub: 9961,
				Dependency: 7105,
				Address: 1071,
				Opportunity_Relationship: 4503,
				Customer_Relationship: 4502,
				Campaign_Response: 4401,
				Model_driven_App: 9006,
				App_Module_Component: 9007,
				AppModule_Metadata: 8700,
				App_Configuration_Instance: 9013,
				App_Config_Master: 9011,
				Application_File: 4707,
				AppModule_Metadata_Dependency: 8701,
				System_Job: 4700,
				Attachment: 1002,1001,
				Attribute_Map: 4601,
				AppModule_Metadata_Async_Operation: 8702,
				App_Module_Roles: 9009,
				Appointment: 4201,
				App_Configuration: 9012,
				Action_Card: 9962,
				Action_Card_User_Settings: 9973,
				ActionCardUserState: 9968,
				Account: 1,
				AccountLeads: 16,
				ACIViewMapper: 8040,
				Advanced_Similarity_Rule: 9949,
				Note: 5,
				Annual_Fiscal_Calendar: 2000,
				Activity_Party: 135,
				Activity: 4200,
				admin_settings_entity: 10018,
				Auditing: 4567,
				Business_Unit: 10,
				Business_Unit_Map: 6,
				Announcement: 132,
				Bulk_Operation_Log: 4405,
				Business_Data_Localized_Label: 4232,
				Business_Process_Flow_Instance: 4725,
				Calendar: 4003,
				Campaign_Activity: 4402,
				Campaign_Activity_Item: 4404,
				Campaign_Item: 4403,
				Calendar_Rule: 4004,
				Callback_Registration: 301,
				Campaign: 4400,
				Quick_Campaign: 4406,
				Bookable_Resource_Booking: 1145,
				Bookable_Resource_Booking_to_Exchange_Id_Mapping: 4421,
				Bookable_Resource_Booking_Header: 1146,
				Authorization_Server: 1094,
				Azure_Service_Connection: 9936,
				Bookable_Resource: 1150,
				Bookable_Resource_Category: 1147,
				Booking_Status: 1152,
				Bulk_Delete_Failure: 4425,
				Bulk_Delete_Operation: 4424,
				Bookable_Resource_Category_Assn: 1149,
				Bookable_Resource_Characteristic: 1148,
				Bookable_Resource_Group: 1151,
				Marketing_List: 4300,
				Marketing_List_Member: 4301,
				LocalConfigStore: 9201,
				Lead_To_Opportunity_Sales_Process: 954,
				Letter: 4207,
				License: 2027,
				Lookup_Mapping: 4419,
				Mailbox_Auto_Tracking_Folder: 9608,
				Mail_Merge_Template: 9106,
				Metadata_Difference: 4231,
				Mailbox: 9606,
				Mailbox_Statistics: 9607,
				Mailbox_Tracking_Category: 9609,
				LeadProduct: 27,
				Knowledge_Article_Incident: 9954,
				Knowledge_Article_Category: 9960,
				Knowledge_Article_Views: 9955,
				Article_Comment: 1082,
				Article_Template: 1016,
				Knowledge_Article: 9953,
				Knowledge_Base_Record: 9930,
				Lead: 4,
				Lead_Address: 1017,
				LeadCompetitors: 24,
				Knowledge_Search_Model: 9947,
				Language: 9957,
				Language_Provisioning_State: 9875,
				Goal_Metric: 9603,
				Notes_analysis_Config: 10030,
				OData_v4_Data_Source: 10000,
				Playbook_activity: 10012,
				Forecast: 10020,
				Forecast_recurrence: 10021,
				icebreakersconfig: 10031,
				Playbook_activity_attribute: 10013,
				Profile_Album: 10032,
				Post_Configuration: 10033,
				Post_Rule_Configuration: 10034,
				Playbook_category: 10014,
				Playbook: 10015,
				Playbook_template: 10016,
				Forecast_definition: 10019,
				Monthly_Fiscal_Calendar: 2003,
				actioncardregarding: 10024,
				Action_Card_Role_Setting: 10025,
				Mobile_Offline_Profile: 9866,
				Mobile_Offline_Profile_Item: 9867,
				Mobile_Offline_Profile_Item_Association: 9868,
				Playbook_Callable_Context: 10011,
				Database_Version: 10007,
				EntityRankingRule: 10026,
				flowcardtype: 10027,
				Component_Layer: 10005,
				Component_Layer_Data_Source: 10006,
				Connector: 371,
				Article: 127,
				FacilityEquipment: 4000,
				Exchange_Sync_Id_Mapping: 4120,
				Expander_Event: 4711,
				Virtual_Entity_Data_Provider: 78,
				Virtual_Entity_Data_Source: 85,
				Entity_Map: 4600,
				Expired_Process: 955,
				Feedback: 9958,
				Field_Permission: 1201,
				Field_Security_Profile: 1200,
				External_Party: 3008,
				External_Party_Item: 9987,
				Fax: 4204,
				Entitlement_Template_Product: 4545,
				Email_Search: 4299,
				Email_Server_Profile: 9605,
				Email_Signature: 9997,
				Property_Option_Set_Item: 1049,
				Email: 4202,
				Email_Hash: 4023,
				Entitlement: 9700,
				Entitlement_Product: 6363,
				Entitlement_Template: 9702,
				Entitlement_Template_Channel: 9703,
				Entitlement_Channel: 9701,
				Entitlement_Contact: 7272,
				Entitlement_Entity_Allocation_Type_Mapping: 9704,
				FileAttachment: 55,
				Incident_KnowledgeBaseRecord: 9931,
				Case_Resolution: 4206,
				Integration_Status: 3000,
				Import_Log: 4423,
				Data_Map: 4411,
				Case: 112,
				Interaction_for_Email: 9986,
				Invoice: 1090,
				Invoice_Product: 1091,
				ISV_Config: 4705,
				Internal_Address: 1003,
				Inter_Process_Lock: 4011,
				Invalid_Dependency: 7107,
				Import_Job: 9107,
				Goal: 9600,
				Rollup_Query: 9602,
				Hierarchy_Rule: 8840,
				Filter_Template: 30,
				Fixed_Monthly_Fiscal_Calendar: 2004,
				Global_Search_Configuration: 54,
				Hierarchy_Security_Configuration: 9919,
				Import_Data: 4413,
				Import_Entity_Mapping: 4428,
				Import_Source_File: 4412,
				HolidayWrapper: 9996,
				Image_Descriptor: 1007,
				Data_Import: 4410
			}
		};
		form.OptionSet = optionSet;
		return form;
	};
})(Hsbc || (Hsbc = {}));
var OptionSet = {
    FormType: {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    },
    SaveOption: {
        SaveAndClose: 'saveandclose',
        SaveAndNew: 'saveandnew'
    },
    SaveMode: {
        Save: 1,
        SaveAndClose: 2,
        Deactivate: 5,
        Reactivate: 6,
        Email: 7,
        Disqualify: 15,
        Qualify: 16,
        Assign: 47,
        SaveAsCompleted: 58,
        SaveAndNew: 59,
        AutoSave: 70
    },
    FormNotificationLevel: {
        Error: 'ERROR',
        Warning: 'WARNING',
        Info: 'INFO'
    },
    TabDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
    },
    ProcessDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed',
        Floating: 'floating'
    },
    ProcessStatus: {
        Active: 'active',
        Aborted: 'aborted',
        Finished: 'finished'
    },
    FieldAttributeType: {
        Boolean: 'boolean',
        DateTime: 'datetime',
        Decimal: 'decimal',
        Double: 'double',
        Integer: 'integer',
        Lookup: 'lookup',
        Memo: 'memo',
        Money: 'money',
        MultiOptionSet: 'multioptionset',
        OptionSet: 'optionset',
        String: 'string'
    },
    FieldFormat: {
        Date: 'date',
        DateTime: 'datetime',
        Duration: 'duration',
        Email: 'email',
        Language: 'language',
        None: 'none',
        TextArea: 'textarea',
        Text: 'text',
        TickerSymbol: 'tickersymbol',
        Phone: 'phone',
        TimeZone: 'timezone',
        Url: 'url'
    },
    FieldRequiredLevel: {
        None: 'none',
        Required: 'required',
        Recommended: 'recommended'
    },
    FieldSubmitMode: {
        Always: 'always',
        Never: 'never',
        Dirty: 'dirty'
    },
    FieldControlType: {
        Standard: 'standard',
        Iframe: 'iframe',
        KbSearch: 'kbsearch',
        Lookup: 'lookup',
        MultiSelectOptionset: 'multiselectoptionset',
        Notes: 'notes',
        OptionSet: 'optionset',
        QuickForm: 'quickform',
        SubGrid: 'subgrid',
        TimerControl: 'TimerControl',
        TimelineWall: 'timelinewall',
        WebResource: 'webresource'
    },
    FieldNotificationLevel: {
        Error: 'ERROR',
        Recommendation: 'RECOMMENDATION'
    },
    ProcessCategory: {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
    },
    TimerState: {
        NotSet: 1,
        InProgress: 2,
        Warning: 3,
        Violated: 4,
        Success: 5,
        Expired: 6,
        Canceled: 7,
        Paused: 8
    },
    ClientName: {
        Web: 'Web',
        Outlook: 'Outlook',
        Mobile: 'Mobile'
    },
    ClientState: {
        Online: 'Online',
        Offline: 'Offline'
    },
    FormFactor: {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
    },
    AdvancedConfigSetting: {
        MaxChildIncidentNumber: 'MaxChildIncidentNumber',
        MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
    },
    OpenFileOption: {
        Open: 1,
        Save: 2
    }
};