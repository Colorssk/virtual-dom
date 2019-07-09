import { updateElement } from "./vdom/updateElement"
import { vnode } from "./vdom/createElement"


let count = 0;
const vdom = ()=>{ return (
    <div id="_Q5" style="border: 1px solid red;">
        <div style="text-align: center; margin: 36px auto 18px; width: 160px; line-height: 0;">
            <img src="https://imgsrc.baidu.com/baike/pic/item/95eef01f3a292df50b2907f0b2315c6035a87369.jpg" height="56" style="border: none; margin: 8px 0px;" onClick={addCount}></img>
            hello ym {count}
        </div>
    </div>)}


let content = document.querySelector("#content")
let olddom = vdom();
updateElement(content, olddom);

function addCount(){
    count++;
    updateElement(content, vdom(), olddom);
}



