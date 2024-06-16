import React,{Component} from 'react'

export default class bookitem extends Component{
  render() {
    let {title,description} =this.props;
    return (
    <div >
      <div className="card" style={{width: "14rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-sm btn-primary">Add to Cart</a>
  </div>
</div>
    </div>
  )
}
}
