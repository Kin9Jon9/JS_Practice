const one = ele => document.querySelector(ele);
const all = ele => document.querySelectorAll(ele);

const create = (name, attr) =>{
    const ele = document.createElement(name)
    for (const k in attr){
        const v = attr[k]
        switch(k){
            case 'html' :
                ele.innerHTML = v;
                break
            case 'event' :
                for (const e in v) ele.addEventListener(e, v[e])
                break;
            default :
                ele.setAttribute(k, v)
                break;    
        }
    }
    return ele;
}

const folderAddBtn = one('.folder-add')
const folderInput = one('.folder-input')
const folderList = one('folder-list')
const taskList = one('.task-list')

let folderData = [
    {
        name : 'test1',
        child : [
            {
                name : 'test1-1',
                state : true
            },
            {
                name : 'test1-2',
                state : true
            }
        ]
    },
    {
        name : 'test2',
        child : [
            {
                name : 'test2-1',
                state : false
            },
            {
                name : 'test2-2',
                state : false
            }
        ]
    }
]

const foldderRender = () =>{
    folderList.innerHTML = ''
    const ul = create('ul')
    folderDate.forEach( v=>{
        
    })
}


