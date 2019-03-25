

let newValue = 0;

class Calculator {
    getNumberInput(number) {
        const inputField = document.getElementById('cal_value');
        inputField.value += number;
    }

    getFuntionCall(button) {
        const inputField = document.getElementById('cal_value');
        if (inputField.value !== "" || button.getAttribute('id') === 'sq_root' || button.getAttribute('id') === 'reset' || button.getAttribute('id') === 'history') {

            var opartors = button.getAttribute('id');
            switch (opartors) {
                case 'plus':
                    inputField.value += '+';
                    break;
                case 'minus':
                    inputField.value += '-';
                    break;
                case 'divide':
                    inputField.value += '/';
                    break;
                case 'multiply':
                    inputField.value += 'x';
                    break;
                case 'equal':
                    this.store(inputField.value);
                    inputField.value = Math = eval(inputField.value);
                    this.store(inputField.value);
                    break;
                case 'clear':
                    inputField.value = inputField.value.substring(0, inputField.value.length - 1);
                    break;
                case 'memory':
                    this.store(inputField.value);
                    break;
                case 'history':
                    if(document.getElementById('history-list').classList.contains('show')){
                       document.getElementById('history-list').innerHTML = " ";
                       document.getElementById('history-list').classList.remove('show');
                    }
                    else{
                    this.displayHistory();
                }
                    break;
                case 'reset':
                    inputField.value = '';
                    break;


            }
        }
        else {
            alert('please insert value');
        }


    };


    getHistory() {
        let calHis;
        if (localStorage.getItem('calHis') === null) {
            calHis = [];
        } else {
            calHis = JSON.parse(localStorage.getItem('calHis'));
        }
        return calHis;
    }


    store(val) {
        const inputField = document.getElementById('cal_value');
        const calHis = this.getHistory();
        if (inputField.value !== "") {
            calHis.push(val);
            localStorage.setItem('calHis', JSON.stringify(calHis));
        }
    }

    displayHistory() {
        const calHistory = this.getHistory();
        calHistory.forEach((history) => {
            const ui = new UI;
            ui.showHistory(history);

        });
    }


}
