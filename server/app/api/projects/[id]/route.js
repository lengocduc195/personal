(()=>{var e={};e.id=514,e.ids=[514],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6487:()=>{},6838:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>v,routeModule:()=>j,serverHooks:()=>m,workAsyncStorage:()=>f,workUnitAsyncStorage:()=>h});var s={};t.r(s),t.d(s,{GET:()=>x});var o=t(6559),n=t(8088),i=t(7719),a=t(2190),p=t(9748),u=t.n(p),c=t(3873),d=t.n(c);async function l(){let e=d().join(process.cwd(),"public/assets/data/projects.json");return JSON.parse(await u().readFile(e,"utf8"))}async function x(e,{params:r}){try{let e=r.id,t=parseInt(e,10),s=(await l()).find(r=>"number"==typeof r.id?r.id===t:r.id===e);if(!s)return console.log(`Project not found for ID: ${e}, Numeric ID: ${t}`),a.NextResponse.json({error:"Project not found"},{status:404});return a.NextResponse.json(s)}catch(e){return console.error("Error fetching project:",e),a.NextResponse.json({error:"Failed to fetch project"},{status:500})}}let j=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/projects/[id]/route",pathname:"/api/projects/[id]",filename:"route",bundlePath:"app/api/projects/[id]/route"},resolvedPagePath:"D:\\Research\\personal\\personal\\src\\app\\api\\projects\\[id]\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:f,workUnitAsyncStorage:h,serverHooks:m}=j;function v(){return(0,i.patchFetch)({workAsyncStorage:f,workUnitAsyncStorage:h})}},8335:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9748:e=>{"use strict";e.exports=require("fs/promises")}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[447,580],()=>t(6838));module.exports=s})();