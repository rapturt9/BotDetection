import {useState, useEffect} from 'react';

const ClickDetector = (props) => {
    //props: frame, clicks, header

    const [click,addClick] = useState([]);
    const [bot,isBot] = useState(false);

    useEffect(() => {
        let current=Date.now();
        let frame=props.frame || 1000;
        let clicks=props.clicks || 5;
        for(let i=0;i<click.length;i++){
            let clickTime=click[i];
            if(current-clickTime<frame){
                let newClick=click;
                if(i>0){
                    let newClick=click.slice(i);
                    addClick(newClick);
                }

                i=newClick.length;
                if(i>clicks){
                    isBot(true);
                }
            }
        }
      });
    return (
      <div onClick={()=>addClick([...click,Date.now()])}>{bot?props.header||<h1>The site has detected that you are a bot. If you are not, then reload the page</h1>:props.children}</div>
    );
    }

  export default ClickDetector;
  
