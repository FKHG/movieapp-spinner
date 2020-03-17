import React, { Component } from "react";
import Modal from "react-modal";
import "./MovieApp.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

export default class AppModal extends Component {
  state = {
    isOpen: false,
    title: "",
    year: 0,
    image: "",
    rating: 0
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handeltitle = e => this.setState({ title: e.target.value });
  handelyear = e => this.setState({ year: e.target.value });
  handelimage = e => this.setState({ image: e.target.value });
  handelrating = e => this.setState({ rating: e.target.value });
 /* submit function handelAdd */
  handleAdd = e => {
     e.preventDefault();
    this.props.addMovie({
      title: this.state.title,
      year: this.state.year,
      image: this.state.image,
      rating: this.state.rating
    });
    this.setState({ title: "", year: 0, image: "", rating: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="new-movie-card">
          +
        </button>
        <Modal
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          style={customStyles}
        >
          <form className="form" onSubmit={this.handleAdd}>
            Title:
            <input
              name="title"
              value={this.state.title} onChange={this.handeltitle}
              className="input-modal"
              type="text"
              placeholder="Movie title..."
            />
            Year:
            <input
              name="year"
              value={this.state.year} onChange={this.handelyear}
              className="input-modal"
              type="text"
              placeholder="Movie year..."
            />
            Rating:
            <input
              name="rating"
              value={this.state.rating} onChange={this.handelrating}
              className="input-modal"
              type="text"
              placeholder="Rating..."
            />
            Link of the image:
            <input
              name="image"
              value={this.state.image}  onChange={this.handelimage}
              className="input-modal"
              type="text"
              placeholder="Link here..."
            />
            <input className="submit" type="submit" value="Create new Movie" />
          </form>
        </Modal>
      </div>
    );
  }
}
