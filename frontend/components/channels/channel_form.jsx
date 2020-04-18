import React from 'react'
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.channel;

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

		this.props.createChannel(this.state)
			.then(() => this.closeModal());
  }

  // handleSubmit(e) {
  //   e.preventDefault();

  //   this.props.createChannel(this.state).then(() => {
  //     this.closeModal();
  //     this.props.history.push("/channels");
  //   });
  // }

  openModal(e) {
    e.stopPropagation();
    const modal = document.getElementById("channelModal");
    modal.style.display = "block";
  }

  closeModal(e) {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById("channelModal");
    modal.style.display = "none";
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <>
        <div id="channelModal" className="channel-modal">
          <div className="ch-modal-content">
            <form className="channelModalForm" onSubmit={this.handleSubmit}>
              <h4 className="channelHeader">CREATE TEXT CHANNEL</h4>
              <label className="channelName theme-dark">
                CHANNEL NAME
                <input
                  type="text"
                  className="channelInput"
                  value={this.state.channel_name}
                  onChange={this.update("channel_name")}
                />
              </label>
              <div className="chFormFooter">
                <div className="chFormBtns">
                  <span className="chCloseBtn" onClick={this.closeModal}>
                    Cancel
                  </span>
                  <button type="submit" className="channelSubmitBtn">
                    Create Channel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ChannelForm);