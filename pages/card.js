import "../styles/Home.module.css";
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function Card(){
//     const styles = {
//         shadow = {
//   boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

//         },
//     };
    return(

    <div className="lg:flex gap-16">
    
    <div style={{ 
    boxShadow: '1px 2px 9px #d6d6e8',}} 
    className=" text-center dark:shadow-slate-400 transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div>  
        <DesignServicesIcon fontSize="large"/>
       <h3 className=" text-lg font-medium pt-8 pb-2">Exquisite UI Designs</h3>
       <p className="py-2">Creating beautiful UI designs to satisfy your needs and the needs of your clients</p>
        <h4 className="text-teal-500 py-4">Design tools I use:</h4>
        <div className='flex  m-1 items-center space-x-6 justify-center'>
        <p className="text-grey-800 py-1"> Canva </p>
        <p className="text-grey-800 py-1"> Figma </p>
        </div>
        
        <p className="text-grey-800 py-1">Paint 3D</p>
    </div>
    </div>


<div style={{ 
    boxShadow: '1px 2px 9px #d6d6e8',}}  
className=" text-center dark:shadow-slate-400 shadow-md transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div >

       <CodeIcon fontSize="large"/>
       <h3 className=" text-lg font-medium pt-8 pb-2">Elegant Code</h3>
       <p className="py-2">You have an idea for your next web project? I can make it a reality </p>
        <h4 className="text-teal-500 py-4">Coding tools I use:</h4>
       <p className="text-grey-800 py-1">HTML,CSS, React Js</p>
        <p className="text-grey-800 py-1"> Wordpress, Bootstrap</p>
    </div>
    </div>

    <div style={{ 
    boxShadow: '1px 2px 9px #d6d6e8',}} 
    className=" text-center ?dark:shadow-lg transition-shadow p-10 rounded-xl my-10  dark:text-white">
        <div >
            <DescriptionIcon fontSize="large"/>
       <h3 className=" text-lg font-medium pt-8 pb-2">Professional Documentation</h3>
       <p className="py-2">I can help with your next big project, collaborating and helping you with your documentation</p>
        <h4 className="text-teal-500 py-4">Documents I handle:</h4>
       <p className="text-grey-800 py-1">Requirement Document</p>
        <p className="text-grey-800 py-1">Terms and condition</p>
        <p className="text-grey-800 py-1">Proposal document</p>
    </div>
    </div>
    
    </div>
       
    );
}
export default Card;