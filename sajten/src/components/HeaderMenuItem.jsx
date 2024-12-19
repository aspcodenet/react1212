import { Link, useLocation } from 'react-router-dom';


function HeaderMenuItem(props){
    return (
        <>
        <Link 
                to={props.link}>
                { props.text }
            </Link>
        {/* <a href={props.link}><li>{props.text}</li></a> */}
        </>
    )
};

export default HeaderMenuItem; 

// function HeaderMenuItem({link,text}){
//     return (
//         <>
//         <a href={link}><li>{text}</li></a>
//         </>
//     )
// };

// export default HeaderMenuItem; 