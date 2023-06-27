window.onload = function () 
{
    currentIndex = 0;
    MaxIndex =0;

    const slider = document.querySelector('.slide_zone');
    copynode(slider);
    setInterval(() => move(slider), 5000); //반복해서 사용
}

function copynode(parentNode)
{
    let slideItems = parentNode.querySelectorAll(".slide_item");
    MaxIndex =slideItems.length;

    const cloneFrist =slideItems[0].cloneNode(true);
    parentNode.appendChild(cloneFrist);
} 

function move(parentNode)
{
    currentIndex =currentIndex+1;
    offset= currentIndex*(-100);
    
    parentNode.style.transform = 'translateX('+offset+'vw)' 
    //parentNode.style.left = '100vw'; => 위랑 같은거
    MaxIndexCheck(offset);
}

function MaxIndexCheck(offset) //최대 인덱스 체크
{
    if(currentIndex==MaxIndex)
    {
        currentIndex=0;
        offset=0;

        parentNode.style.transform = 'translateX('+offset+'vw)' 
    }
}