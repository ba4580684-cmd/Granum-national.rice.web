const {chromium}=require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs=require('fs');
(async()=>{
const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
for(const width of [320,375,430,768,1024]){
const page=await browser.newPage({viewport:{width,height:850},reducedMotion:'reduce'});let errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const route of ['/home','/about-us','/products','/blogs','/recipes','/qualities','/contact-us','/terms']){
errors=[];const response=await page.goto('http://localhost:3000'+route,{waitUntil:'networkidle'});
await page.evaluate(async()=>{document.documentElement.style.scrollBehavior='auto';for(let y=0;y<document.body.scrollHeight;y+=800){scrollTo(0,y);await new Promise(r=>setTimeout(r,35));}scrollTo(0,0)});
const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),logoBounds:[...document.querySelectorAll('.brand-logo')].map(e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right,width:r.width}}),offenders:[...document.querySelectorAll('main *,header *,footer *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left< -2||r.right>innerWidth+2)&&getComputedStyle(e).position!=='absolute'}).slice(0,6).map(e=>e.tagName+'.'+e.className)}));
let menu=true;const toggle=page.locator('.mobile-menu');if(await toggle.isVisible()){await toggle.click();menu=await toggle.getAttribute('aria-expanded')==='true'&&await page.locator('#primary-navigation').isVisible();await page.locator('#primary-navigation a').first().click();menu=menu&&(await toggle.getAttribute('aria-expanded')==='false');}
const record={width,route,status:response.status(),...data,menu,errors:[...errors]};results.push(record);
if(route==='/about-us'&&[320,375,768].includes(width)){await page.goto('http://localhost:3000/about-us',{waitUntil:'networkidle'});await page.screenshot({path:'../mobile-audit-'+width+'.png',fullPage:true});}
}
await page.close();console.log('Completed width',width);
}
fs.writeFileSync('../mobile-logo-responsive-audit.json',JSON.stringify(results,null,2));const issues=results.filter(r=>r.overflow||r.broken.length||!r.menu||r.errors.length||r.status!==200||r.logoBounds.some(b=>b.left<0||b.right>r.width));console.log(JSON.stringify({checks:results.length,issues},null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
