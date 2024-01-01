
            // const heading= React.createElement('h1', {id:'header'} ,"Hello React from javascript");
            
            // <div id ='parent'>
            //     <div id ='child'>
            //         <h1>I am a h1 tag</h1>
            //     </div>
            // </div>
 const parent =React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},'I am a hi tag'),React.createElement('h1',{},'I am a hi tag')])
 )
            console.log(parent);// It is a normal js object 
            const root= ReactDOM.createRoot(document.getElementById("root"));
            root.render(parent);
    