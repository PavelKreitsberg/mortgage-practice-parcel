const banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];

const root = document.querySelector('#root');
const modal = document.querySelector('#modal');

const banksList = document.createElement('div');
banksList.classList.add('fields__item');
banksList.classList.add('bank__list');

const bankBtn = document.createElement('button');
bankBtn.classList.add('button');
bankBtn.textContent = 'Create new bank';
bankBtn.setAttribute('id', 'showModal');

const bankListUl = document.createElement('ul');
bankListUl.classList.add('banks');

const bankHeader = document.createElement('h2');
bankHeader.classList.add('subtitle');
bankHeader.textContent = 'Banks list';

banksList.append(bankHeader, bankListUl, bankBtn);

const loanInfoHeader = document.createElement('h2');
loanInfoHeader.classList.add('subtitle');
loanInfoHeader.textContent = 'Loan Information';

const loanInformation = document.createElement('ul');
loanInformation.classList.add('features');

const banksInformation = document.createElement('div');
banksInformation.classList.add('fields__item');
banksInformation.classList.add('feature__list');

banksInformation.append(loanInfoHeader, loanInformation);

root.append(banksList, banksInformation);

function createBankList(banks) {
  bankListUl.innerHTML = '';
  bankListUl.insertAdjacentHTML(
    'afterbegin',
    banks
      .map((bank, index) => {
        return `<li class="bank__item">
        <p>${index + 1}. <span>${bank.name}</span></p>
        <button type="button" class="button--edit"></button>
        <button type="button" class="button--delete"></button>
      </li>`;
      })
      .join('')
  );
}

createBankList(banks);

bankBtn.addEventListener('click', openModal);

function openModal() {
  const modalMarkup = `<div class="modal">
        <div class="modal-content">
          <h2>Fill in bank's info</h2>
          <form class="form">
            <label>
              Bank name
              <input type="text" name="name">
            </label>
            <label>
              Interest rate, %
              <input type="text" name="interestRate">
            </label>
            <label>
              Max loan, $
              <input type="text" name="maxLoan">
            </label>
            <label>
              Min payment, $
              <input type="text" name="minPayment">
            </label>
            <label>
              Loan term
              <input type="text" name="loanTerm">
            </label>
            <div class="modal-buttons">
              <button type="submit" class="button" data-action="add">Add bank</button>
              <button  class="button" id="reset-button">Reset</button>
              <button class="button" id="cancel-button">Cancel</button>      
            </div>
            
          </form>
        </div>
      </div> `;
  modal.innerHTML = modalMarkup;

  const bankForm = document.querySelector('.form');

  const resetModalBtn = document.querySelector('#reset-button')

  const cancelModalBtn = document.querySelector('#cancel-button')


  bankForm.addEventListener('submit', addBank);

  resetModalBtn.addEventListener('click', (event) => {
    event.preventDefault()
    bankForm.reset();
  })

  cancelModalBtn.addEventListener('click', (event) => {
    event.preventDefault()
    modal.innerHTML = '';
  })

  
}

function addBank(evt) {
  evt.preventDefault();
  const bank = {
    id: Date.now(),
    name: evt.target.name.value,
    interestRate: evt.target.interestRate.value,
    maxLoan: evt.target.maxLoan.value,
    minPayment: evt.target.minPayment.value,
    loanTerm: evt.target.loanTerm.value,
  };
  banks.push(bank);
  modal.innerHTML = '';

  createBankList(banks);
}

function renderInfMarkup({
  name,
  interestRate,
  maxLoan,
  minPayment,
  loanTerm,
}) {
  const loanInfoMarkup = `
          <li class="features__item">
            <p class="features__name">Bank:</p>
            <span class="features__value">${name}</span>
          </li>
          <li class="features__item">
            <p class="features__name">Mortgage size, $:</p>
            <span class="features__value">${maxLoan}</span>
          </li>
          <li class="features__item">
            <p class="features__name">Minimum down payment, $:</p>
            <span class="features__value">${minPayment}</span>
          </li>
          <li class="features__item">
            <p class="features__name">Loan period, month:</p>
            <span class="features__value">${loanTerm}</span>
          </li>
          <li class="features__item">
            <p class="features__name">Interest rate, %:</p>
            <span class="features__value">${interestRate}</span>
          </li>`;

  loanInformation.innerHTML = loanInfoMarkup;
}

// Делегирование

const bankList = document.querySelector('.banks')

bankList.addEventListener('click', (event) => {
    
  if (event.target.nodeName === 'UL') {
    return;
  }

    const currentActiveBank = document.querySelector('.bank__item--active');
  console.log(currentActiveBank)

  if (currentActiveBank) {
    currentActiveBank.classList.remove('bank__item--active');
  };

  const activeBankName = event.target.closest('li').firstElementChild.firstElementChild.textContent

  if (event.target.nodeName === 'BUTTON') {

    event.target.className === 'button--delete' ? removeBankFromList(activeBankName) : editBankInfo(activeBankName);

    return;

  }    

  event.target.closest('li').classList.toggle('bank__item--active')

  const currentBank = banks.find(bank => bank.name === activeBankName);

  renderInfMarkup(currentBank);

})


// To do


function removeBankFromList(bank) {

  console.log(`Bank ${bank} deleted from the list`);

}

function editBankInfo(bank) {

  console.log(`Let's update bank ${bank} info`);

}
