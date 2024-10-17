import React from "react";
import axios from "axios";
class Myprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dmmy locatio",
      },
    };
  }
  async componentDidMount() {
    this.timer=setInterval(()=>{
        console.log("Timer");
    },1000)
    
    const response = await axios.get("https://api.github.com/users/Priti-i");
    const json = response.data;
    this.setState({ userInfo: json });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("Update Mount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <>
        <h1>profile</h1>
        <img src={this.state.userInfo.avatar_url} />
        <p>Name:{this.state.userInfo.name}</p>
        <p>Location:{this.state.userInfo.location}</p>
      </>
    );
  }
}
export default Myprofile;
