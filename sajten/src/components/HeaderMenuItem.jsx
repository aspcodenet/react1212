function HeaderMenuItem(props){
    return (
        <>
        <a href={props.link}><li>{props.text}</li></a>
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