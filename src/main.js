let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
    /*你好，我叫lanycsq，是一名前端小白。
    接下来展示我的前端功底
    首先准备一个div
    */
    #gossip{
        width:200px;
        height:200px;
        border:1px solid red;
    }
    /*接下来，我把div变成一个八卦图，
    首先把div画成一个圆
    */
    #gossip{
        border-radius:50%;
        box-shadow:0 0 3px rgba(0,0,0,0.5);
        border:none;
    }
    /*八卦是阴阳形成的，
    一半黑一般白
    */
    #gossip{
       background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0% , rgba(255, 255, 255, 1) 50% , rgba(0, 0, 0, 0.9976365546218487) 50% , rgba(0, 0, 0, 1) 100% );
    }
   /*
   加上两个神秘的小球
   */
    #gossip::before{
        width:100px;
        height:100px;
        border-radius: 50% ;
        top: 0;
        left: 50% ;
        transform: translateX(-50% );
        background - color: #000;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0% , rgba(255, 255, 255, 1) 25% , rgba(0, 0, 0, 1) 25% , rgba(0, 0, 0, 1) 100% );
        
    }
    #gossip::after {
        width:100px;
        height:100px;
         border-radius: 50% ;
         bottom: 0;
         left:50% ;
        transform: translateX(-50% );
        background-color: #fff;
        background: radial-gradient(circle, rgba(0, 0, 0, 1) 0% , rgba(0, 0, 0, 1) 0% , rgba(0, 0, 0, 1) 25% , rgba(255, 255, 255, 1) 25% );
       
    }

`;
let n = 0;
let string2 = ''

console.log(string.length);
let step = () => {
    setTimeout(() => {
        console.log(string[n]);
        if (string[n] === "\n") {
            string2 += '</br>'
        } else if (string[n] === " ") {
            string2 += "&nbsp;"
        } else {
            string2 += string[n]
        }
        demo.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        demo.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1
            step();
        }
    }, 10)
}
step();