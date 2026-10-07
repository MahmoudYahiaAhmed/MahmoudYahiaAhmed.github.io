'use strict';

const projects = [
  {id:'aihi', title:'Donation Transparency Agent', client:'AIHI / Human Appeal', category:'agents', kind:'Humanitarian AI', tags:['Agentic workflows','Human review','Donor updates'], desc:'Connecting donation changes, human review, and timely donor updates in one transparent workflow.', problem:'Donors need to understand what happens to their contributions. Review teams need a way to follow changes and communicate them clearly.', build:'Built a transparency agent that allows Human Appeal reviewers to review and track donation changes, then inform the donor after a short period.', points:['Track changes to donor contributions','Support human review of updates','Keep donors informed through follow-up notifications'], flow:'Donation → Change tracking → Human review → Donor update', note:'Project-based consultancy · 2 months. The graphic is illustrative; client systems and donor data are not displayed.', visual:`<div class="ui-panel"><div class="panel-head"><b>Donation transparency</b><span><i class="tiny-dot"></i>TRACKING</span></div><div class="timeline-ui"><div class="timeline-row"><i>✓</i>Contribution received<span>RECORDED</span></div><div class="timeline-row"><i>✓</i>Allocation updated<span>TRACKED</span></div><div class="timeline-row"><i>◎</i>Human review<span>IN REVIEW</span></div></div><div class="notification"><b>A clearer picture of your impact.</b>Donor update prepared for review. ↗</div></div>`},
  {id:'we', title:'Freeform to Structured Intelligence',client:'WE',category:'intelligence',kind:'Document intelligence',tags:['Contract classification','Information extraction','NLP'],desc:'A classification pipeline that turns freeform contract text into structured, usable information.',problem:'Contract IDs and important information can be buried in unstructured text, making consistent classification and extraction difficult.',build:'Built a pipeline to classify contract IDs and extract information from freeform text during a 1.5-month engagement at WE.',points:['Classify contract identifiers','Extract information from freeform content','Transform unstructured input into structured output'],flow:'Freeform text → Contract ID classification → Field extraction → Structured information',note:'WE engagement · 1.5 months. The graphic illustrates the extraction workflow; client data and proprietary infrastructure are not displayed.',visual:`<div class="contract-sheet"><h4>Contract / freeform input</h4><div class="sheet-line"></div><div class="sheet-line short"></div><div class="sheet-highlight">ID: WE-2026-0142</div><div class="sheet-line"></div><div class="sheet-line short"></div></div><div class="extract-float">{<br>&nbsp;<span>"contract_id"</span>: "WE-2026-0142",<br>&nbsp;<span>"status"</span>: "extracted"<br>}<br><span>↳ Structured. Searchable. Useful.</span></div>`},
  {id:'legal',title:'AI Contract Intelligence',client:'Enterprise legal automation',category:'intelligence',kind:'Enterprise platform',tags:['AWS Bedrock','OpenSearch','Terraform','Node.js'],desc:'An AI-powered platform for contract obligations, risks, renewal clauses, and grounded semantic search.',problem:'Legal and procurement teams need to find important obligations and risks across large volumes of enterprise contracts.',build:'Built backend services using Node.js and Express, integrated Bedrock and OpenSearch RAG, and provisioned AWS infrastructure using Terraform. Added a self-hosted inference layer for sensitive documents.',points:['Document ingestion and AI orchestration','ECS, S3, IAM, ALB, and CloudWatch infrastructure','JWT authentication and role-based access','Private inference on EC2'],flow:'Contract upload → Ingestion → Vector retrieval → Clause analysis → Review',note:'Based on the supplied resume. Client documents and production interfaces are not displayed.',visual:`<div class="ui-panel"><div class="panel-head"><b>Contract intelligence</b><span>ANALYSIS</span></div><div class="clause">Renewal clause<span>IDENTIFIED</span></div><div class="clause">Payment obligations<span>EXTRACTED</span></div><div class="clause">Termination exposure<span class="risk">REVIEW</span></div><div class="notification"><b>Ask a question. Find the source.</b>Grounded answers from contract knowledge.</div></div>`},
  {id:'rag',title:'RAG, with a Reality Check',client:'Retrieval & evaluation',category:'agents',kind:'LLM reliability',tags:['Hybrid search','Cohere Rerank','RAGAS','HyDE'],desc:'Hybrid retrieval, reranking, and evaluation designed to keep answers grounded in evidence.',problem:'A fluent answer is not enough. Enterprise assistants need relevant context, grounded responses, and a way to measure quality.',build:'Combined BM25 and OpenSearch kNN retrieval with Cohere reranking. Added HyDE query expansion, self-RAG context checks, and RAGAS evaluation for faithfulness and retrieval quality.',points:['Sparse and dense retrieval with reranking','Context quality checks and confidence-based fallback','Faithfulness, relevancy, recall, and precision evaluation','Citation-grounding prompts and iterative chunking experiments'],flow:'Question → Hybrid search → Rerank → Context check → Cited answer',note:'Based on the supplied resume. The illustration shows a conceptual retrieval flow with sample content.',visual:`<div class="rag-diagram"><div class="rag-query">How do we ground an answer?<span>↗</span></div><div class="rag-nodes"><div class="rag-node">BM25 SEARCH</div><div class="rag-node">VECTOR SEARCH</div><div class="rag-node">RERANK</div></div><div class="rag-answer">Relevant context. Evaluated answers.<span>[1] SOURCE-GROUNDED · QUALITY CHECKED</span></div></div>`},
  {id:'private',title:'Enterprise AI, Inside the Boundary',client:'Private LLM platform',category:'agents',kind:'Private AI infrastructure',tags:['Self-hosted LLMs','RAG','EC2','Guardrails'],desc:'A private assistant platform for organizations whose knowledge needs to stay inside their environment.',problem:'Data privacy and security requirements can restrict an organization’s use of external model APIs.',build:'Designed and deployed a private LLM environment with RAG-based knowledge interaction, prompt strategies, retrieval workflows, and guardrails. Optimized model serving, inference latency, and infrastructure cost.',points:['Private model hosting and inference','Natural-language access to internal knowledge','Retrieval and response guardrails','Production-oriented serving optimization'],flow:'Internal knowledge → Private retrieval → Hosted LLM → Guarded response',note:'Based on the supplied resume. Infrastructure shown here is illustrative.',visual:`<div class="private-art"><div class="server"><div><i></i><i></i><span></span></div><div><i></i><i></i><span></span></div><div><i></i><i></i><span></span></div><div><i></i><i></i><span></span></div></div><div class="private-line"></div><div class="shield">◇</div></div>`},
  {id:'arabic',title:'Language That Feels Local',client:'Egyptian Arabic LLMs',category:'agents',kind:'Fine-tuning & alignment',tags:['QLoRA','DPO','Mistral','Llama','Weights & Biases'],desc:'Dialect-aware language models, fine-tuned efficiently and aligned with human response preferences.',problem:'Local language experiences need more than generic Arabic fluency: responses should reflect dialect, context, and human preferences.',build:'Fine-tuned Mistral-7B and Llama-3-8B with QLoRA on a custom Egyptian Arabic dataset. Ran adapter-rank experiments and used DPO to align responses with human preferences.',points:['4-bit quantization and LoRA adapters','Adapter experiments at ranks 8, 16, and 32','ROUGE and BERTScore tracking','Preference alignment for dialect-specific responses'],flow:'Dialect dataset → QLoRA fine-tuning → Evaluation → DPO alignment',note:'Based on the supplied resume. The Arabic text is an illustrative visual, not generated by a connected model.',visual:`<div class="arabic-art"><div class="arabic-text" lang="ar" dir="rtl">ذكاء يفهمك.</div><div class="model-chips"><span>EGYPTIAN ARABIC</span><span>QLoRA</span><span>DPO</span></div><div class="waveform">${Array.from({length:28},(_,i)=>`<i style="height:${8+(i*13%24)}px;animation-delay:${i*.07}s"></i>`).join('')}</div></div>`},
  {id:'vision',title:'A Better First Check',client:'Passport & ID image validation',category:'vision',kind:'Computer vision',tags:['OpenCV','MediaPipe','AWS EC2'],desc:'Automated image quality checks for passport and government ID workflows.',problem:'Identity workflows need consistent image quality validation before submission and review.',build:'Built a computer vision system to validate passport and ID images against ICAO criteria, checking alignment, backgrounds, shadows, sharpness, and pixelation. Deployed on AWS EC2 with MediaPipe and OpenCV.',points:['Face alignment and image quality checks','Background and shadow validation','Sharpness and pixelation checks','Cloud deployment for high-volume requests'],flow:'Image → Face analysis → Quality checks → Validation result',note:'Based on the supplied resume. The scanning graphic is decorative and does not perform identity validation.',visual:`<div class="face-scan"><svg viewBox="0 0 100 140" aria-hidden="true"><ellipse cx="50" cy="48" rx="26" ry="35"/><path d="M15 130Q13 87 50 89Q87 87 85 130M37 43h6m14 0h6M50 47v14h5M40 72q10 6 20 0"/><circle cx="38" cy="43" r="3"/><circle cx="62" cy="43" r="3"/></svg><div class="scan-line"></div></div><div class="vision-checks"><span>✓ FACE ALIGNMENT</span><span>✓ BACKGROUND</span><span>✓ IMAGE QUALITY</span><span>✓ SHARPNESS</span></div>`}
];

projects.push(
 {id:'ner',title:'Arabic, Beyond the Keywords',client:'Microsoft · Applied NLP',category:'intelligence',kind:'Dialect-aware NLP',tags:['Named entity recognition','Hugging Face','spaCy'],desc:'Entity recognition for Egyptian Arabic, built to work with the messiness of real transcriptions.',problem:'Dialect variation and noisy transcriptions make it difficult to identify people, organizations, and places consistently.',build:'Developed an Egyptian Arabic NER system during the Applied NLP role documented in my resume. Built labeling, augmentation, and training pipelines, with phonetic similarity and post-processing heuristics.',points:['Data labeling and augmentation','Transformer-based entity recognition','Phonetic similarity for noisy text','Post-processing for extracted entities'],flow:'Transcription → Text processing → Entity recognition → Structured entities',note:'Project from the supplied resume. Highlighted names below are illustrative, not live model predictions.',visual:`<div class="ner-ui"><div class="panel-head"><b>Entity lens</b><span>EGYPTIAN ARABIC</span></div><p lang="ar" dir="rtl">قابلت <mark class="person">أحمد<span>PERSON</span></mark> في <mark class="place">القاهرة<span>LOCATION</span></mark> واتكلمنا عن المشروع.</p><div class="entity-record"><span>أحمد</span><b>PERSON</b></div><div class="entity-record"><span>القاهرة</span><b>LOCATION</b></div></div>`},

);

const grid = document.querySelector('#projects');
const renderCards = items => items.map((p,i)=>`<article class="project-card reveal" data-category="${p.category}"><button class="project-visual ${p.id}-visual" data-project="${p.id}" aria-label="Explore ${p.title}"><span class="visual-index">${p.kind.toUpperCase()}</span><span class="visual-arrow" aria-hidden="true">↗</span>${p.visual}<span class="visual-foot">${p.client.toUpperCase()}</span></button><div class="project-info"><div class="project-meta"><span>${p.client}</span><span>${p.kind}</span></div><h3><button class="card-title" data-project="${p.id}">${p.title}</button></h3><p>${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div></article>`).join('');
const caseStudies=projects.filter(p=>p.category!=='labs');
grid.innerHTML=renderCards(caseStudies);



const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});
if(!reducedMotion.matches) document.documentElement.classList.add('js-motion');
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

let activeFilter='all', expandedProjects=false;
const moreButton=document.querySelector('#show-more-projects');
function updateProjects(){
 const cards=Array.from(grid.querySelectorAll('.project-card'));
 const matches=cards.filter(card=>activeFilter==='all'||card.dataset.category===activeFilter);
 let count=0;
 cards.forEach(card=>{const matchesFilter=matches.includes(card);const visible=matchesFilter&&(activeFilter!=='all'||expandedProjects||matches.indexOf(card)<4);card.hidden=!visible;if(visible){count++;card.classList.add('visible');}});
 document.querySelector('#project-count').textContent=`${count} OF ${matches.length} CASE ${matches.length===1?'STUDY':'STUDIES'}`;
 moreButton.hidden=activeFilter!=='all';
 moreButton.setAttribute('aria-expanded',String(expandedProjects));
 moreButton.innerHTML=expandedProjects?'Show featured projects <span>↑</span>':'Explore 4 more case studies <span>↓</span>';
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 activeFilter=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 updateProjects();
}));
moreButton.addEventListener('click',()=>{expandedProjects=!expandedProjects;updateProjects();if(!expandedProjects)document.querySelector('#work').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});});
updateProjects();

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-expertise-filter]').forEach(button=>button.addEventListener('click',()=>{
 const target='#work';
 if(target==='#work')document.querySelector(`[data-filter="${button.dataset.expertiseFilter}"]`).click();
 document.querySelector(target).scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});
}));

let lastTrigger;
function openProject(id,trigger){
  const p=projects.find(p=>p.id===id);if(!p)return;
  lastTrigger=trigger;
  document.querySelector('#dialog-content').innerHTML=`<span class="dialog-tag">${p.client.toUpperCase()} / ${p.kind.toUpperCase()}</span><h2 class="dialog-title" id="dialog-title">${p.title}</h2><p class="dialog-intro">${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="dialog-sections"><div><h3>THE PROBLEM</h3><p>${p.problem}</p><h3>MY CONTRIBUTION</h3><p>${p.build}</p></div><div><h3>INSIDE THE BUILD</h3><ul>${p.points.map(t=>`<li>${t}</li>`).join('')}</ul></div></div><div class="dialog-flow">${p.flow}</div><p class="dialog-note">${p.note}</p>`;
  dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');

}
document.addEventListener('click',e=>{const t=e.target.closest('[data-project],[data-open-project]');if(t){e.preventDefault();openProject(t.dataset.project||t.dataset.openProject,t);}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastTrigger?.focus({preventScroll:true});});

document.querySelector('#copy-email').addEventListener('click',async()=>{const email='maboe017@uottawa.com';try{await navigator.clipboard.writeText(email);document.querySelector('#copy-status').textContent='Email copied. Let’s build something great.';}catch{document.querySelector('#copy-status').textContent=`Copy this email: ${email}`;}});
document.querySelector('#year').textContent=new Date().getFullYear();

const cvDialog=document.querySelector('#cv-dialog');
let cvZoom=100,cvTrigger;
function setCVZoom(value){cvZoom=Math.max(100,Math.min(200,value));document.querySelector('#cv-page').style.width=`${cvZoom}%`;document.querySelector('#cv-zoom-value').textContent=`${cvZoom}%`;document.querySelector('#cv-zoom-out').disabled=cvZoom===100;document.querySelector('#cv-zoom-in').disabled=cvZoom===200;}
function setCVTextView(active){document.querySelector('#cv-readable-text').hidden=!active;document.querySelector('#cv-page').hidden=active;document.querySelector('#cv-text-toggle').textContent=active?'Document view':'Readable text';document.querySelector('#cv-text-toggle').setAttribute('aria-pressed',String(active));document.querySelectorAll('#cv-zoom-in,#cv-zoom-out,#cv-fit,#cv-zoom-value').forEach(e=>e.hidden=active);document.querySelector('.cv-document').scrollTo(0,0);}
document.querySelectorAll('[data-cv-preview]').forEach(trigger=>trigger.addEventListener('click',e=>{e.preventDefault();cvTrigger=trigger;setCVZoom(100);setCVTextView(window.innerWidth<=700);cvDialog.showModal();document.body.classList.add('dialog-open');document.querySelector('.cv-document').scrollTo(0,0);}));
document.querySelector('#cv-text-toggle').addEventListener('click',()=>setCVTextView(document.querySelector('#cv-readable-text').hidden));
document.querySelector('#cv-zoom-in').addEventListener('click',()=>setCVZoom(cvZoom+25));
document.querySelector('#cv-zoom-out').addEventListener('click',()=>setCVZoom(cvZoom-25));
document.querySelector('#cv-fit').addEventListener('click',()=>{setCVZoom(100);document.querySelector('.cv-document').scrollLeft=0;});
document.querySelector('#cv-close').addEventListener('click',()=>cvDialog.close());
cvDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');cvTrigger?.focus({preventScroll:true});});
cvDialog.addEventListener('click',e=>{if(e.target===cvDialog){const r=cvDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)cvDialog.close();}});

// A lightweight 3D sphere, drawn locally without a rendering library.
const canvas=document.querySelector('#network');
const ctx=canvas.getContext('2d');
if(ctx){
 let width=0,height=0,ratio=1,time=0,raf=0,visible=true;
 const points=Array.from({length:105},(_,i)=>{const y=1-(i/104)*2;const r=Math.sqrt(1-y*y);const a=Math.PI*(3-Math.sqrt(5))*i;return{x:Math.cos(a)*r,y,z:Math.sin(a)*r};});
 const links=[];points.forEach((a,i)=>points.forEach((b,j)=>{if(j>i&&Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z)<.39)links.push([i,j]);}));
 function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;ratio=Math.min(window.devicePixelRatio||1,2);canvas.width=width*ratio;canvas.height=height*ratio;ctx.setTransform(ratio,0,0,ratio,0,0);draw();}
 function draw(){ctx.clearRect(0,0,width,height);const radius=Math.min(width,height)*.36;const cx=width*.5,cy=height*.46;const angle=time*.00012;
   const transformed=points.map(p=>{const x=p.x*Math.cos(angle)+p.z*Math.sin(angle);const z=p.z*Math.cos(angle)-p.x*Math.sin(angle);const yy=p.y*Math.cos(.35)-z*Math.sin(.35);const zz=p.y*Math.sin(.35)+z*Math.cos(.35);const perspective=3/(3-zz*.3);return{x:cx+x*radius*perspective,y:cy+yy*radius*perspective,z:zz};});
   ctx.beginPath();ctx.ellipse(cx,cy,radius*1.2,radius*.42,-.45,0,Math.PI*2);ctx.strokeStyle='#a4b48a55';ctx.lineWidth=.7;ctx.stroke();
   ctx.beginPath();ctx.ellipse(cx,cy,radius*.53,radius*1.18,-.55,0,Math.PI*2);ctx.strokeStyle='#a4b48a44';ctx.stroke();
   links.forEach(([i,j])=>{const a=transformed[i],b=transformed[j];ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(103,126,70,${.1+(a.z+b.z+2)*.065})`;ctx.lineWidth=.6;ctx.stroke();});
   transformed.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,p.z>0?2:1.4,0,Math.PI*2);ctx.fillStyle=p.z>0?'#8ba662':'#b8c3a5';ctx.fill();if(i%17===0&&p.z>0){ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.strokeStyle='#8ba66270';ctx.stroke();}});
   const glow=ctx.createRadialGradient(cx,cy,15,cx,cy,65);glow.addColorStop(0,'#f5f4ee');glow.addColorStop(.5,'#f5f4eef0');glow.addColorStop(1,'#f5f4ee00');ctx.fillStyle=glow;ctx.fillRect(cx-65,cy-65,130,130);
 }
 function tick(ts){raf=0;time=ts;draw();if(visible&&!document.hidden&&!reducedMotion.matches)raf=requestAnimationFrame(tick);}
 function sync(){cancelAnimationFrame(raf);raf=0;if(visible&&!document.hidden&&!reducedMotion.matches)raf=requestAnimationFrame(tick);else draw();}
 new ResizeObserver(resize).observe(canvas);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(canvas);
 document.addEventListener('visibilitychange',sync);reducedMotion.addEventListener('change',sync);
}

// Visible wayfinding and motion that follows the reader through the page.
const navigationLinks=document.querySelectorAll('.header nav a,.page-guide a,.mobile-navigation a');
const sections=Array.from(document.querySelectorAll('main>section[id]'));
let scrollTicking=false;
function updateWayfinding(){scrollTicking=false;const total=document.documentElement.scrollHeight-innerHeight;const progress=total>0?Math.min(1,Math.max(0,scrollY/total)):0;document.querySelector('.reading-progress span').style.transform=`scaleX(${progress})`;let current='home';for(const section of sections){if(section.getBoundingClientRect().top<=180)current=section.id;}if(current==='capabilities')current='skills';navigationLinks.forEach(link=>{const active=link.getAttribute('href')==='#'+current;link.classList.toggle('current-section',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!scrollTicking){scrollTicking=true;requestAnimationFrame(updateWayfinding);}},{passive:true});updateWayfinding();

document.querySelectorAll('main h2').forEach(heading=>{
 let index=0;
 const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(node=>{const fragment=document.createDocumentFragment();for(const word of node.textContent.split(/(\s+)/)){if(!word)continue;if(/^\s+$/.test(word)){fragment.append(document.createTextNode(word));continue;}const span=document.createElement('span');span.className='heading-word';span.style.setProperty('--word-delay',`${Math.min(index++,8)*65}ms`);span.textContent=word;fragment.append(span);}node.replaceWith(fragment);});
});
document.querySelectorAll('.certification-card,.resume-copy,.resume-preview-card,.skills-grid>div,.education-card').forEach((element,index)=>{element.classList.add('reveal');element.style.transitionDelay=`${index%3*90}ms`;observer.observe(element);});
document.querySelectorAll('.project-card').forEach((card,index)=>card.style.setProperty('--card-delay',`${index%2*100}ms`));
