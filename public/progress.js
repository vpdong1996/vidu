var BaiTap = React.createClass({
  render : function(){
      return(
        <div>
        <h1 > {this.props.vidu2} </h1>
        <Vidu />
        </div>
      );

  }
});
var Vidu = React.createClass({
  render : function(){
    return(
      <h2 className="mau2"> Em </h2>
    );
  }
});
ReactDOM.render (
  <div>
  <BaiTap vidu2="Example" />
  <hr/>
  <BaiTap vidu2="EXP"/>

  </div>
  , document.getElementById("root"));
