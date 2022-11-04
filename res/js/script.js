// Formulário
const formControl = document.getElementById("FormControl").children.item(0) || null;

// Botão entrar 
const btnSubmit = document.getElementById("Submit") || null;

/**
 * Quando clicar no botão, verifica se o texto nos inputs estão corretos
 * e aplica as classes adequadas.
 */

/*
btnSubmit.addEventListener("click",e => {
    const inputs = formControl.getElementsByTagName("input");

    for (x = 0; x < inputs.length; x++)
    {
        if(checkData(inputs.item(x)))
        {
            if(inputs.item(x).classList.contains("warning"))
                inputs.item(x).classList.remove("warning");
            
            inputs.item(x).classList.add("success");
        }
        else
        {
            if(inputs.item(x).classList.contains("success"))
                inputs.item(x).classList.remove("success");

            inputs.item(x).classList.add("warning");
        }
    }
});
*/

btnSubmit.addEventListener("click",e => {
    const inputs = formControl.getElementsByTagName("input");

    for (x = 0; x < inputs.length; x++)
    {
        if(checkData(inputs.item(x)))
            applyClass(inputs.item(x), "warning", "success");
        else
            applyClass(inputs.item(x), "success", "warning");
    }
});

/**
 * Adiciona uma determinada classe em um elemento
 */
function applyClass(element, classNameRemove, classNameAdd)
{
    // Verifica se o elemento possui uma determinda classe, se tiver remove
    if(element.classList.contains(classNameRemove))
        element.classList.remove(classNameRemove);

    element.classList.add(classNameAdd);
}

/**
 * Verifica se o texto dentro dos inputs são válidos.
 */
function checkData(input)
{
    let inputName = input.id;
    let data = input.value;

    switch(inputName)
    {
        case "email":
            // Caso o input seja um e-mail, verifica através do regex abaixo se o e-mail é válido.
            let newData = String(data).toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
            if(newData)
                return true;
            break;
        case "password":
            // Caso o input seja uma senha, verifica se ela possui mais de 4 digitos.
            if(data.length > 4)
                return true;
            break;
        
        default: break;
    }    

    return false;
};
