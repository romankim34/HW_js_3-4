var test = new Object()

    test.addContainer = function(){
        element = document.createElement('div');
        element.classList.add('container');
        
        var wraper = document.querySelector('body');
        wraper.appendChild(element);
    }
    
    test.addHeadLine = function(){
        var headLine = document.createElement('h1');
        headLine.innerHTML = 'Тест по рограммированию';
        
        var container = document.querySelector('.container');
        container.appendChild(headLine);
    }
    
    test.addForm = function(){
        form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', '#');
        element.appendChild(form);
    }
    
    test.addUl = function(){
        ul = document.createElement('ul');
        ul.classList.add('test_list');
        form.appendChild(ul);
    }
    
    test.addList = function(){
        li = document.createElement('li');
        li.innerHTML = '1.Вопрос № 1';
        ul.appendChild(li);
        li_1 = li.cloneNode(true);
        li_1.innerHTML = '2.Вопрос № 2';
        li.parentNode.insertBefore(li_1, li.nextSibling);
        li_2 = li_1.cloneNode(true);
        li_2.innerHTML = '3.Вопрос № 3';
        li_1.parentNode.insertBefore(li_2, li_1.nextSibling);
    }
    
    test.addSubMenu = function(){
        firstUl = document.createElement('ul');
        firstUl.classList.add('first');
        li.appendChild(firstUl);
        
        secondUl = document.createElement('ul');
        secondUl.classList.add('second');
        li_1.appendChild(secondUl);
        
        thirdUl = document.createElement('ul');
        thirdUl.classList.add('third');
        li_2.appendChild(thirdUl);
    }
    
    test.addLiSubMenu1 = function(){
        //---  Вопрос № 1---------------------------------------------------        
        var liSubMenu = document.createElement('li');
        firstUl.insertBefore(liSubMenu, null);
//------------------------------------------------------               
        var input = document.createElement('input');
        liSubMenu.insertBefore(input, liSubMenu.firstChild);
        input.id = 'radio1';
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'answer');
        input.setAttribute('value', 'a1');
        
        var label = document.createElement('label');
        label.innerHTML = 'Вариант ответа № 1';
        liSubMenu.appendChild(label);
        label.setAttribute('for', 'radio1');
        
        
        var liSubMenu_1 = document.createElement('li');
        firstUl.insertBefore(liSubMenu_1, null);
//------------------------------------------------------------
        var input_1 = document.createElement('input');
        liSubMenu_1.appendChild(input_1);
        input_1.id = 'radio2';
       input_1.setAttribute('type', 'radio');
        input_1.setAttribute('name', 'answer');
        input_1.setAttribute('value', 'a2');
        
        var label_1 = document.createElement('label');
        label_1.innerHTML = 'Вариант ответа № 2';
        liSubMenu_1.appendChild(label_1);
        label_1.setAttribute('for', 'radio2');
//------------------------------------------------------------------------------
        var liSubMenu_2 = document.createElement('li');
        firstUl.insertBefore(liSubMenu_2, null);
//--------------------------------------------------------------------------------
        var input_2 = document.createElement('input');
        liSubMenu_2.appendChild(input_2);
        input_2.id = 'radio3';
        input_2.setAttribute('type', 'radio');
        input_2.setAttribute('name', 'answer');
        input_2.setAttribute('value', 'a3');
        
        var label_2 = document.createElement('label');
        label_2.innerHTML = 'Вариант ответа № 3';
        liSubMenu_2.appendChild(label_2);
        label_2.setAttribute('for', 'radio3');
    }
    
    test.addLiSubMenu2 = function(){
        //-----------------Вопрс № 2 -------------------------
        
        var liSubMenu_11 = document.createElement('li');
        secondUl.insertBefore(liSubMenu_11, null);
//------------------------------------------------------               
        var input_a1 = document.createElement('input');
        liSubMenu_11.insertBefore(input_a1, liSubMenu_11.firstChild);
        input_a1.id = 'radio11';
        input_a1.setAttribute('type', 'radio');
        input_a1.setAttribute('name', 'answer1');
        input_a1.setAttribute('value', 'a1');
        
        var label1 = document.createElement('label');
        label1.innerHTML = 'Вариант ответа № 1';
        liSubMenu_11.appendChild(label1);
        label1.setAttribute('for', 'radio11');
//-----------------------------------------------------------------
        var liSubMenu_12 = document.createElement('li');
        secondUl.insertBefore(liSubMenu_12, null);
//------------------------------------------------------------
        var input_a2 = document.createElement('input');
        liSubMenu_12.appendChild(input_a2);
        input_a2.id = 'radio22';
        input_a2.setAttribute('type', 'radio');
        input_a2.setAttribute('name', 'answer1');
        input_a2.setAttribute('value', 'a2');
        
        var label2 = document.createElement('label');
        label2.innerHTML = 'Вариант ответа № 2';
        liSubMenu_12.appendChild(label2);
        label2.setAttribute('for', 'radio22');
//------------------------------------------------------------------------------
        var liSubMenu_13 = document.createElement('li');
        secondUl.insertBefore(liSubMenu_13, null);
//--------------------------------------------------------------------------------
        var input_a3 = document.createElement('input');
        liSubMenu_13.appendChild(input_a3);
        input_a3.id = 'radio33';
        input_a3.setAttribute('type', 'radio');
        input_a3.setAttribute('name', 'answer1');
        input_a3.setAttribute('value', 'a3');
        
        var label3 = document.createElement('label');
        label3.innerHTML = 'Вариант ответа № 3';
        liSubMenu_13.appendChild(label3);
        label3.setAttribute('for', 'radio33');
    }
    
    test.addLiSubMenu3 = function(){
        //--------- Вопрос № 3 ---------------------------------------------
        
        var liSubMenu_111 = document.createElement('li');
        thirdUl.insertBefore(liSubMenu_111, null);
//------------------------------------------------------               
        var input_a11 = document.createElement('input');
        liSubMenu_111.insertBefore(input_a11, liSubMenu_111.firstChild);
        input_a11.id = 'radio111';
        input_a11.setAttribute('type', 'radio');
        input_a11.setAttribute('name', 'answer2');
        input_a11.setAttribute('value', 'a1');
        
        var label4 = document.createElement('label');
        label4.innerHTML = 'Вариант ответа № 1';
        liSubMenu_111.appendChild(label4);
        label4.setAttribute('for', 'radio111');
//-----------------------------------------------------------------
        var liSubMenu_122 = document.createElement('li');
        thirdUl.insertBefore(liSubMenu_122, null);
//------------------------------------------------------------
        var input_a22 = document.createElement('input');
        liSubMenu_122.appendChild(input_a22);
        input_a22.id = 'radio222';
        input_a22.setAttribute('type', 'radio');
        input_a22.setAttribute('name', 'answer2');
        input_a22.setAttribute('value', 'a2');
        
        var label5 = document.createElement('label');
        label5.innerHTML = 'Вариант ответа № 2';
        liSubMenu_122.appendChild(label5);
        label5.setAttribute('for', 'radio222');
//------------------------------------------------------------------------------
        var liSubMenu_133 = document.createElement('li');
        thirdUl.insertBefore(liSubMenu_133, null);
//--------------------------------------------------------------------------------
        var input_a33 = document.createElement('input');
        liSubMenu_133.appendChild(input_a33);
        input_a33.id = 'radio333';
        input_a33.setAttribute('type', 'radio');
        input_a33.setAttribute('name', 'answer2');
        input_a33.setAttribute('value', 'a3');
        
        var label6 = document.createElement('label');
        label6.innerHTML = 'Вариант ответа № 3';
        liSubMenu_133.appendChild(label6);
        label6.setAttribute('for', 'radio333');
    }
    
    test.addSubmitButton = function(){
        // ----- Кнопка отправить -----------------------------------------------
        
        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Проверить мои результаты');
        submit.classList.add('submit');
        form.appendChild(submit);
    }
    
    
test.addContainer();
test.addHeadLine();
test.addForm();
test.addUl();
test.addList();
test.addSubMenu();
test.addLiSubMenu1();
test.addLiSubMenu2();
test.addLiSubMenu3();
test.addSubmitButton();
   













