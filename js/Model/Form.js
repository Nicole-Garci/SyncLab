export default class Form {
    constructor(form) {
        this.id = form.id;
        this.fields = form.fields;
        this.onSubmit = form.onSubmit;
        this._init();
    }

    _init() {
        console.log("AQUI!");
        for(let i in this.fields) {
            console.log(i);
            this.buildField(i);
        }    
    
    }

    buildField(index) {

        let input = document.getElementById(this.fields[index].id);
        this.fields[index].errors = {};
        let formGroup = input.parentElement;

        formGroup.append(this._buildErrorDiv(index));
        input.addEventListener("input", e => {
            let validators = this.fields[index].validators;
            for(let i in validators) {
                if(!validators[i].validate(input.value)) {
                    console.log(validators[i]);
                    this.fields[index].errors[i] = validators[i].message;
                } else {
                    this.fields[index].errors[i] = null
                }
            }

            console.log(this.fields[index].errors)

            this._buildErrors("error-div-"+index, this.fields[index].errors);

        });

    }

    _buildErrorDiv(index) {
        let div = document.createElement('div');
        div.className = "error-div";
        div.id = "error-div-";
        div.id += index;

        return div;
    }

    _buildErrors(div, errors) {
        let d = document.getElementById(div);
        d.innerHTML = "";
        for (let e in errors) {
            let p = document.createElement('p');
            p.className = 'error-message';
            p.innerText = errors[e];
            d.append(p);
        }
    }


    onSubmit(e) {



        if(this.onSubmit) {
            this.onSubmit(e);
        }
    }

}