function MainItem(props){
    let imgItem = props.img

    return(
        <div className="main-container-element">
            <img src={imgItem} alt="imagen item" className="main-greet-img" />
            <h2>{props.children}</h2>
            <button className="main-greet-btn">Ver más</button>
        </div>
    )
}

export default MainItem