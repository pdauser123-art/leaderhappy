const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open));});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.tabs button').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('.tabs button').forEach(b => {b.classList.toggle('active', b === button);b.setAttribute('aria-pressed',String(b === button));});
 document.querySelectorAll('.work').forEach(work => {work.hidden = button.dataset.category !== 'all' && !work.dataset.type.split(' ').includes(button.dataset.category);});
}));
const custom = document.querySelector('#custom-dialog');
const contact = document.querySelector('#contact-dialog');
document.querySelector('#custom-open').addEventListener('click', () => custom.showModal());
document.querySelector('#contact-open').addEventListener('click', () => {document.querySelector('#contact-title').textContent='聯絡我們';contact.showModal();});
document.querySelectorAll('[data-contact]').forEach(b => b.addEventListener('click', () => {document.querySelector('#contact-title').textContent=b.dataset.contact;contact.showModal();}));
document.querySelector('#contact-custom').addEventListener('click', () => {contact.close();custom.showModal();});
document.querySelectorAll('dialog').forEach(d => {d.querySelector('.close').addEventListener('click', () => d.close());d.addEventListener('click', e => {if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
document.querySelector('#custom-form').addEventListener('submit', e => {e.preventDefault();const data=new FormData(e.target);const content=`幸福帶路雞｜客製心意單\n\n場合：${data.get('occasion')}\n配色與祝福：${data.get('wish')}\n\n此為個人需求草稿，尚未傳送給品牌或建立訂單。`;const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='幸福帶路雞-客製心意單.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
document.querySelector('#year').textContent=new Date().getFullYear();
