import "./style.css";
import React from "react";

const profileImg = require("../../assets/test_img/profile_png.png").default;

// COMPONENTS
class InfoHolderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      isEdited: this.props.isEdited ?? true,
      name: this.props.name,
      value: this.props.value || "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log(
      "A a field was submitted: " + this.state.name,
      this.state.value
    ); // test...
    this.setState({ editOpen: false });
  }

  openEdit() {
    this.setState({ editOpen: true });
  }

  render() {
    console.log(this.state.isEdited)

    return (
      <div className="info-holder">
        <label htmlFor="basic-url" className="form-label fw-bolder">
          {this.props.label || "No Label"}
        </label>
        <div className="input-group mb-3">
          <input
            onChange={this.handleChange}
            readOnly={!this.state.editOpen}
            value={this.state.value}
            type={this.props.type || "text"}
            className="form-control"
            aria-describedby="basic-addon3"
          />
          
          {this.state.isEdited &&
          <span
            className="input-group-text"
            id="basic-addon3"
            onClick={() => {
              this.state.editOpen ? this.handleSubmit() : this.openEdit();
            }}
          >
            {this.state.editOpen ? "Submit" : "Edit"}
          </span>}

        </div>
      </div>
    );
  }
}

const PropertyView = (props) => {
  return (
    <div className="mb-2 p-3">
      <div style={{ height: 400, textAlign: "center" }} className="mb-2 border">
        The test Component
      </div>

      <div className="d-grid gap-2 col-4 mx-auto">
        <button className="btn btn-danger" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

// UTILITY FUNCTIONS
// Will be used to get and submit user data

// PROFILE VIEW
const Profile = (props) => {
  return (
    <div className="container ">
      {/* PROFILE PHOTO */}
      <div className="photo_holder">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-4 col-sm-9 col-md-6">
            <img src={profileImg} alt="profile image" className="photo" />
            <p className="text-center fs-3 fw-bolder mt-1">
              User Complete Name
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* PERSONAL INFO*/}
      <div
        className="personal-info-container row row-cols-1 row-cols-md-2 
        row-cols-xl-3 g-1 g-lg-2"
      >
        <InfoHolderView
          value="Agent"
          label="Type"
          name="type"
          isEdited={false}
        />
        <InfoHolderView value="agent@mail.com" label="Email" name="email" />
        <InfoHolderView
          value="somePassword"
          label="Password"
          name="password"
          type="password"
        />
      </div>
      <hr />

      {/* PROPERTIES POSTED*/}
      <div className="properties-container">
        {/* This part is only applicable to owner and agents types */}
        <PropertyView />
        <PropertyView />
        <PropertyView />
        <PropertyView />
      </div>
    </div>
  );
};

export default Profile;

