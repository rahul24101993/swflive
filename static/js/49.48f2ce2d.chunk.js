(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[49],{2981:function(e,t,n){"use strict";n.r(t),n.d(t,"handleSelectionChange",(function(){return d})),n.d(t,"reset",(function(){return p})),n.d(t,"handleSelectEvent",(function(){return S})),n.d(t,"handleMultiSelectEvent",(function(){return h})),n.d(t,"getContext",(function(){return f}));var r=n(7),a=n(12),l=n(1),c=n.n(l),s=n(39),o=n.n(s),i=n(80);const u=new o.a("selection"),d=(e,t,n)=>{c.a.isEmpty(e)||(t&&t.update({...e,source:"primary"}),((e,t)=>{let{selected:n,dataProvider:l}=e;a.default.registerCtx("pwaSelectionInfo",{currentSelectedCount:t.getCurrentSelectedCount()}),r.a.publish("primaryWorkArea.selectionChangeEvent",{selectionModel:t,dataProvider:l,selectedObjects:c.a.cloneDeep(n)})})(e,n),u("AwPrimaryWorkarea selectionData: ",e))},p=e=>{const t=e.getDpListener();t&&t.resetDataProvider()},S=(e,t)=>{const n=t.getDpListener();n&&(e.selectAll?n.selectAll():n.selectNone())},h=(e,t)=>{const n=t.getDpListener();return!!n&&(n.selectionModel.setMultiSelectionEnabled(e.multiSelect),e.multiSelect||n.selectNone(),e.multiSelect)},f=(e,t)=>[new i.a({ctxParameters:[],additionalParameters:[t.subPanelContext,t.searchState],compute:()=>({provider:t.subPanelContext,searchState:t.searchState})})]}}]);