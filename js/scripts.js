window.addEventListener('load', function(){
   
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let btn = document.querySelector('.go');
    let resBox = document.querySelector('.res');
    
    btn.addEventListener('click', function(){
    	let num1 = parseFloat(inp1.value);
    	let num2 = parseFloat(inp2.value);

    	resBox.innerHTML = Math.round((num1 + num2) * 10) / 10;
    });

    function removeNotNumbers(){
        this.value = this.value.replace(/[^0-9.-]/g, '')
    }

    inp1.addEventListener('input', removeNotNumbers);
    inp2.addEventListener('input', removeNotNumbers);

});

