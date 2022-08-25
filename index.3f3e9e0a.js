const e=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}],n=document.querySelector("#root"),t=document.querySelector("#modal"),a=document.createElement("div");a.classList.add("fields__item"),a.classList.add("bank__list");const s=document.createElement("button");s.classList.add("button"),s.textContent="Create new bank",s.setAttribute("id","showModal");const l=document.createElement("ul");l.classList.add("banks");const o=document.createElement("h2");o.classList.add("subtitle"),o.textContent="Banks list",a.append(o,l,s);const i=document.createElement("h2");i.classList.add("subtitle"),i.textContent="Loan Information";const r=document.createElement("ul");r.classList.add("features");const m=document.createElement("div");function u(e){l.innerHTML="",l.insertAdjacentHTML("afterbegin",e.map(((e,n)=>`<li class="bank__item">\n        <p>${n+1}. <span>${e.name}</span></p>\n        <button type="button" class="button--edit"></button>\n        <button type="button" class="button--delete"></button>\n      </li>`)).join(""))}function c(n){n.preventDefault();const a={id:Date.now(),name:n.target.name.value,interestRate:n.target.interestRate.value,maxLoan:n.target.maxLoan.value,minPayment:n.target.minPayment.value,loanTerm:n.target.loanTerm.value};e.push(a),t.innerHTML="",u(e)}m.classList.add("fields__item"),m.classList.add("feature__list"),m.append(i,r),n.append(a,m),u(e),s.addEventListener("click",(function(){t.innerHTML='<div class="modal">\n        <div class="modal-content">\n          <h2>Fill in bank\'s info</h2>\n          <form class="form">\n            <label>\n              Bank name\n              <input type="text" name="name" required>\n            </label>\n            <label>\n              Interest rate, %\n              <input type="text" name="interestRate" required>\n            </label>\n            <label>\n              Max loan, $\n              <input type="text" name="maxLoan" required>\n            </label>\n            <label>\n              Min payment, $\n              <input type="text" name="minPayment" required>\n            </label>\n            <label>\n              Loan term\n              <input type="text" name="loanTerm" required>\n            </label>\n            <div class="modal-buttons">\n              <button type="submit" class="button" data-action="add">Add bank</button>\n              <button  class="button" id="reset-button">Reset</button>\n              <button class="button" id="cancel-button">Cancel</button>      \n            </div>\n            \n          </form>\n        </div>\n      </div> ';const e=document.querySelector(".form"),n=document.querySelector("#reset-button"),a=document.querySelector("#cancel-button");e.addEventListener("submit",c),n.addEventListener("click",(n=>{n.preventDefault(),e.reset()})),a.addEventListener("click",(e=>{e.preventDefault(),t.innerHTML=""}))}));function d(e){e.preventDefault(),t.innerHTML="",console.log("Bank was updated")}document.querySelector(".banks").addEventListener("click",(n=>{if("UL"===n.target.nodeName)return;const a=document.querySelector(".bank__item--active");a&&a.classList.remove("bank__item--active");const s=n.target.closest("li").firstElementChild.firstElementChild.textContent,l=e.find((e=>e.name===s));var o;(console.log(s),"BUTTON"!==n.target.nodeName)?(n.target.closest("li").classList.toggle("bank__item--active"),function({name:e,interestRate:n,maxLoan:t,minPayment:a,loanTerm:s}){const l=`\n          <li class="features__item">\n            <p class="features__name">Bank:</p>\n            <span class="features__value">${e}</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Mortgage size, $:</p>\n            <span class="features__value">${t}</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Minimum down payment, $:</p>\n            <span class="features__value">${a}</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Loan period, month:</p>\n            <span class="features__value">${s}</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Interest rate, %:</p>\n            <span class="features__value">${n}</span>\n          </li>`;r.innerHTML=l}(l)):"button--delete"===n.target.className?(o=s,console.log(`Bank ${o} deleted from the list`)):function({name:e,interestRate:n,maxLoan:a,minPayment:s,loanTerm:l}){const o='<div class="modal">\n        <div class="modal-content">\n          <h2>Update bank\'s info</h2>\n          <form class="form">\n            <label>\n              Bank name\n              <input type="text" name="name">\n            </label>\n            <label>\n              Interest rate, %\n              <input type="text" name="interestRate">\n            </label>\n            <label>\n              Max loan, $\n              <input type="text" name="maxLoan">\n            </label>\n            <label>\n              Min payment, $\n              <input type="text" name="minPayment">\n            </label>\n            <label>\n              Loan term\n              <input type="text" name="loanTerm">\n            </label>\n            <div class="modal-buttons">\n              <button type="submit" class="button" data-action="add">Update bank</button>\n              <button class="button" id="cancel-button">Cancel</button>      \n            </div>\n            \n          </form>\n        </div>\n      </div> ';t.innerHTML=o,document.querySelector('[name="name"]').value=e,document.querySelector('[name="interestRate"]').value=n,document.querySelector('[name="maxLoan"]').value=a,document.querySelector('[name="minPayment"]').value=s,document.querySelector('[name="loanTerm"]').value=l;const i=document.querySelector(".form"),r=document.querySelector("#cancel-button");i.addEventListener("submit",d),r.addEventListener("click",(e=>{e.preventDefault(),t.innerHTML=""}))}(l)}));
//# sourceMappingURL=index.3f3e9e0a.js.map