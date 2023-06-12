
alert(`1)Веселий
2)Сумний
3)Обурений`)
let menuItem = Math.floor(prompt('Вкажіть емоцію'))
                    
    switch (menuItem) {
        case 1: 
            res = '😅'
            break;
        case 2: 
            res ='😞'
            break;
        case 3: 
            res ='😡'
            break;
    } 

    alert(res)