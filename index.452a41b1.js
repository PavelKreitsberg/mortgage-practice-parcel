!function(){var e=[{id:"435tr34wrt",name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:"asdfw342rew5",name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}],n=document.querySelector("#root"),t=document.querySelector("#modal"),a=document.createElement("div");a.classList.add("fields__item"),a.classList.add("bank__list");var l=document.createElement("button");l.classList.add("button"),l.textContent="Create new bank",l.setAttribute("id","showModal");var s=document.createElement("ul");s.classList.add("banks");var o=document.createElement("h2");o.classList.add("subtitle"),o.textContent="Banks list",a.append(o,s,l);var i=document.createElement("h2");i.classList.add("subtitle"),i.textContent="Loan Information";var r=document.createElement("ul");r.classList.add("features");var u=document.createElement("div");function c(e){s.innerHTML="",s.insertAdjacentHTML("afterbegin",e.map((function(e,n){return'<li class="bank__item">\n        <p>'.concat(n+1,". <span>").concat(e.name,'</span></p>\n        <button type="button" class="button--edit"></button>\n        <button type="button" class="button--delete"></button>\n      </li>')})).join(""))}function m(n){n.preventDefault();var a={id:Date.now(),name:n.target.name.value,interestRate:n.target.interestRate.value,maxLoan:n.target.maxLoan.value,minPayment:n.target.minPayment.value,loanTerm:n.target.loanTerm.value};e.push(a),t.innerHTML="",c(e)}function d(e){e.preventDefault(),t.innerHTML="",console.log("Bank was updated")}u.classList.add("fields__item"),u.classList.add("feature__list"),u.append(i,r),n.append(a,u),c(e),l.addEventListener("click",(function(){t.innerHTML='<div class="modal">\n        <div class="modal-content">\n          <h2>Fill in bank\'s info</h2>\n          <form class="form">\n            <label>\n              Bank name\n              <input type="text" name="name" required>\n            </label>\n            <label>\n              Interest rate, %\n              <input type="text" name="interestRate" required>\n            </label>\n            <label>\n              Max loan, $\n              <input type="text" name="maxLoan" required>\n            </label>\n            <label>\n              Min payment, $\n              <input type="text" name="minPayment" required>\n            </label>\n            <label>\n              Loan term\n              <input type="text" name="loanTerm" required>\n            </label>\n            <div class="modal-buttons">\n              <button type="submit" class="button" data-action="add">Add bank</button>\n              <button  class="button" id="reset-button">Reset</button>\n              <button class="button" id="cancel-button">Cancel</button>      \n            </div>\n            \n          </form>\n        </div>\n      </div> ';var e=document.querySelector(".form"),n=document.querySelector("#reset-button"),a=document.querySelector("#cancel-button");e.addEventListener("submit",m),n.addEventListener("click",(function(n){n.preventDefault(),e.reset()})),a.addEventListener("click",(function(e){e.preventDefault(),t.innerHTML=""}))})),document.querySelector(".banks").addEventListener("click",(function(n){if("UL"!==n.target.nodeName){var a=document.querySelector(".bank__item--active");a&&a.classList.remove("bank__item--active");var l,s,o,i,u,c,m,b,p=n.target.closest("li").firstElementChild.firstElementChild.textContent,v=e.find((function(e){return e.name===p}));if(console.log(p),"BUTTON"!==n.target.nodeName)n.target.closest("li").classList.toggle("bank__item--active"),o=(s=v).name,i=s.interestRate,u=s.maxLoan,c=s.minPayment,m=s.loanTerm,b='\n          <li class="features__item">\n            <p class="features__name">Bank:</p>\n            <span class="features__value">'.concat(o,'</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Mortgage size, $:</p>\n            <span class="features__value">').concat(u,'</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Minimum down payment, $:</p>\n            <span class="features__value">').concat(c,'</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Loan period, month:</p>\n            <span class="features__value">').concat(m,'</span>\n          </li>\n          <li class="features__item">\n            <p class="features__name">Interest rate, %:</p>\n            <span class="features__value">').concat(i,"</span>\n          </li>"),r.innerHTML=b;else"button--delete"===n.target.className?(l=p,console.log("Bank ".concat(l," deleted from the list"))):function(e){var n=e.name,a=e.interestRate,l=e.maxLoan,s=e.minPayment,o=e.loanTerm,i='<div class="modal">\n        <div class="modal-content">\n          <h2>Update bank\'s info</h2>\n          <form class="form">\n            <label>\n              Bank name\n              <input type="text" name="name">\n            </label>\n            <label>\n              Interest rate, %\n              <input type="text" name="interestRate">\n            </label>\n            <label>\n              Max loan, $\n              <input type="text" name="maxLoan">\n            </label>\n            <label>\n              Min payment, $\n              <input type="text" name="minPayment">\n            </label>\n            <label>\n              Loan term\n              <input type="text" name="loanTerm">\n            </label>\n            <div class="modal-buttons">\n              <button type="submit" class="button" data-action="add">Update bank</button>\n              <button class="button" id="cancel-button">Cancel</button>      \n            </div>\n            \n          </form>\n        </div>\n      </div> ';t.innerHTML=i,document.querySelector('[name="name"]').value=n,document.querySelector('[name="interestRate"]').value=a,document.querySelector('[name="maxLoan"]').value=l,document.querySelector('[name="minPayment"]').value=s,document.querySelector('[name="loanTerm"]').value=o;var r=document.querySelector(".form"),u=document.querySelector("#cancel-button");r.addEventListener("submit",d),u.addEventListener("click",(function(e){e.preventDefault(),t.innerHTML=""}))}(v)}}))}();
//# sourceMappingURL=index.452a41b1.js.map
