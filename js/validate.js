    var errors = {
        'name':true,
        'surName':true,
        'trade':true,
        'cuit':true,
        'phone':true,
        'mail':true

    };

    var form = document.getElementById('contact-form');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        if(errors.name || errors.surName || errors.trade || errors.cuit || errors.mail || errors.phone){
            setMyAlert("Error al enviar el Form", "Por favor revisa los campos del formulario", 'error');
        }else{
            setMyAlert("Formulario Enviado", "El formulario ha sido enviado con exito", 'success');
            form.reset();
            let inputs = document.querySelectorAll('#contact-form input');
            Array.from(inputs).forEach((element)=>{
                element.style.outline = 'none';
            });
            errors.name = true;
            errors.surName = true;
            errors.trade = true;
            errors.cuit = true;
            errors.mail = true;
            errors.phone = true;
        }
        return false;
    }, false);

    let name = document.getElementById('name');
    let nameError = document.querySelector('#name + .error');
    dataValidate = name.addEventListener('focusout', ()=>{
        let dataValidate = validateItext(name.value.trim());
        if(dataValidate.error){
            name.style.outline = '1px solid #f02525';
            nameError.textContent = dataValidate.errorMessage;
            nameError.style.display = 'block';
            errors.name = true;
        }else{
            name.style.outline = '1px solid #25f025';
            nameError.style.display = 'none';
            errors.name = false;
        }
    }, false);
    
    let surName = document.getElementById('surname');
    let surnameError = document.querySelector('#surname + .error');
    dataValidate = surName.addEventListener('focusout', ()=>{
        let dataValidate = validateItext(surName.value.trim());
        if(dataValidate.error){
            surName.style.outline = '1px solid #f02525';
            surnameError.textContent = dataValidate.errorMessage;
            surnameError.style.display = 'block';
            errors.surName = true;
        }else{
            surName.style.outline = '1px solid #25f025';
            surnameError.style.display = 'none';
            errors.surName = false;
        }
    }, false);

    let trade = document.getElementById('trade');
    let tradeError = document.querySelector('#trade + .error');
    dataValidate = trade.addEventListener('focusout', ()=>{
        let dataValidate = validateItext(trade.value.trim());
        if(dataValidate.error){
            trade.style.outline = '1px solid #f02525';
            tradeError.textContent = dataValidate.errorMessage;
            tradeError.style.display = 'block';
            errors.trade = true;
        }else{
            trade.style.outline = '1px solid #25f025';
            tradeError.style.display = 'none';
            errors.trade = false;
        }
    }, false);

    let cuit = document.getElementById('cuit');
    let cuitError = document.querySelector('#cuit + .error');
    dataValidate = cuit.addEventListener('focusout', ()=>{
        let dataValidate = validateCuit(cuit.value.trim());
        if(dataValidate.error){
            cuit.style.outline = '1px solid #f02525';
            cuitError.textContent = dataValidate.errorMessage;
            cuitError.style.display = 'block';
            errors.cuit = true;
        }else{
            cuit.style.outline = '1px solid #25f025';
            cuitError.style.display = 'none';
            errors.cuit = false;
        }
    }, false);

    let phone = document.getElementById('phone');
    let phoneError = document.querySelector('#phone + .error');
    dataValidate = phone.addEventListener('focusout', ()=>{
        let dataValidate = validatePhone(phone.value.trim());
        if(dataValidate.error){
            phone.style.outline = '1px solid #f02525';
            phoneError.textContent = dataValidate.errorMessage;
            phoneError.style.display = 'block';
            errors.phone = true;
        }else{
            phone.style.outline = '1px solid #25f025';
            phoneError.style.display = 'none';
            errors.phone = false;
        }
    }, false);

    let mail = document.getElementById('email');
    let mailError = document.querySelector('#email + .error');
    dataValidate = mail.addEventListener('focusout', ()=>{
        let dataValidate = validateEmail(mail.value.trim());
        if(dataValidate.error){
            mail.style.outline = '1px solid #f02525';
            mailError.textContent = dataValidate.errorMessage;
            mailError.style.display = 'block';
            errors.mail = true;
        }else{
            mail.style.outline = '1px solid #25f025';
            mailError.style.display = 'none';
            errors.mail = false;
        }
    }, false);
    
    function validateItext(inputVal){
        let result= {
            'error':true,
            'errorMessage':''
        };
        if(inputVal.length < 3 || inputVal.length > 50){
            result.error = true;
            result.errorMessage = "La longitud del campo es invalida";
        }else if(!/^[a-zA-ZñÑ ]*$/.test(inputVal)){
            result.error = true;
            result.errorMessage = "El Nombre no puede contener numeros o caracteres especiales"
        }
        else{
            result.error = false;
        }

        return result;
    }
    function validateCuit(inputVal){
        let result= {
            'error':true,
            'errorMessage':''
        };
        if(inputVal.length < 10 || inputVal.length > 11){
            result.error = true;
            result.errorMessage = "La longitud del campo es invalida";
        }else if(!/^[0-9]*$/.test(inputVal)){
            result.error = true;
            result.errorMessage = "El campo solo puede contener numeros"
        }
        else{
            result.error = false;
        }

        return result;
    }
    function validateEmail(inputVal){
        let result= {
            'error':true,
            'errorMessage':''
        };
        if(inputVal.length < 7 || inputVal.length > 50){
            result.error = true;
            result.errorMessage = "La longitud del campo es invalida";
        }else if(!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(inputVal)){
            result.error = true;
            result.errorMessage = "El campo debe contener un email valido"
        }
        else{
            result.error = false;
        }

        return result;
    }
    function validatePhone(inputVal){
        let result= {
            'error':true,
            'errorMessage':''
        };
        if(inputVal.length < 8 || inputVal.length > 15){
            result.error = true;
            result.errorMessage = "La longitud del campo es invalida";
        }else if(!/^[0-9 ]*$/.test(inputVal)){
            result.error = true;
            result.errorMessage = "El campo solo puede contener numeros telefonicos validos"
        }
        else{
            result.error = false;
        }

        return result;
    }