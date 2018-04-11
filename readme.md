# Double-Click-Blocking-Util

## Caution

in use es6

## Start

```
  npm install double-click-blocking-util --save
```

### react example

```
  import DoubleClickBlocking from 'double-click-blocking-util'

  class Container extends React.Component {
    DoubleClickBlocking = new DoubleClickBlocking();
    
    requestAPI=(e)=>{
      let delay = 5000;
      // Stop for 5 seconds
      if(this.DoubleClickBlocking.isBlocking(delay) === true){
	      return ;
      }
      // 1 call for 5 seconds
      ...
    }

    responseAPI=()=>{
      // blocking stop
      this.DoubleClickBlocking.stop()
    }

    render(){
      return(
        <div onClick={this.requestAPI}> 
          requestAPI
        </div>
      )
    }
  }
```