(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[1798],{3192:function(t,a,e){"use strict";e.r(a),e.d(a,"intializeCommonLocation",(function(){return l}));var n=e(3082),o=e(12),i=e(505),c=e(3010),u=e(2939);const l=async()=>{const t=n.default.normalizeStateName(),a=o.default.getCtx("locationContext");o.default.updateCtx("locationContext",{"ActiveWorkspace:Location":t,"ActiveWorkspace:SubLocation":a&&a["ActiveWorkspace:SubLocation"]}),i.default.registerSubLocationContext(),c.a.registerKeyDownEvent();const e=await u.default.getTitles();o.default.updateCtx("location.titles",e);const l=await i.default.getAvailableSubpages(null),s=await u.default.constructTabsAndGetActiveTab(l);return{subLocationTabCond:n.default.updateTabs(null),...e,...s}};a.default={intializeCommonLocation:l}}}]);