const CategoryCard = (props) => {
    const { item, className } = props
    return (
        <div className={`cate-items ${className}`}>
            <div className="cat-img">
                <img src={item?.img} alt="" />
                <span>{item?.title}</span>
            </div>
        </div>
    )
}


export default CategoryCard
