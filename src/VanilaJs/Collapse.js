

// import '../Components/Sidebar.css'
    function Collapse(){
       document.querySelector('.sidebar').classList.add('Collapse')
       document.querySelector('.body').classList.add('expand__body')
       
    }

function Expand(){
    document.querySelector('.sidebar').classList.remove('Collapse')
   
    
  
}
export default Collapse
export  {Expand}