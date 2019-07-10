import { updateElement } from "./vdom/updateElement"
import { vnode } from "./vdom/createElement"


let count = 0;
const vdom = ()=>{ return (// 如果不包装在函数内，就会一开始就打包成vnode就已经渲染到页面
    <div id="_Q5" style="border: 1px solid red;">
        <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
            <img src="https://imgsrc.baidu.com/baike/pic/item/95eef01f3a292df50b2907f0b2315c6035a87369.jpg" height="56" style="border: none; margin: 8px 0px;" onClick={addCount}></img>
            hello ym {count}
        </div>
    </div>)}


let content = document.querySelector("#content")
let olddom = vdom();// 运行时，此时才会变成虚拟dom，
updateElement(content, olddom);//然后才执行createElement渲染dom

function addCount(){
    count++;
    updateElement(content, vdom(), olddom);
}



