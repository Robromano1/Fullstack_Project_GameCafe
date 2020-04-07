import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import { withRouter } from 'react-router-dom';
import ServerShowContainer from './server_show_contianer';

class ServerIndex extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}


	handleLogout(e) {
		e.preventDefault()
		this.props.logout()
			.then(() => {
				this.props.history.push("/")
			})
	};

	goToServer() {
		<ServerShowContainer/>
	}

	render() {
		let { servers } = this.props;
		let userServers = [];
		// debugger
		servers.map(serv => {
			// debugger
			userServers.push(
			<li key={serv.id} id={serv.id}>
				<Link to={`/channels/${serv.id}/${serv.channel_ids[0]}`}>
					{`${serv.server_name[0]}`}
				</Link>
			</li>
			)
		})
		return (


			// <div id="app-mount" className="appMount">
				// {/* Side server scroll bar */}
				<>
					<div className="scrollWrap scrollTheme">
						<div className="scroll serverPad scroll2">
							<div className="listItem">
								<div className="pill-1 pillWrapper">
									<span className="item-2"></span>
								</div>
								<div className="listItemWrapper">
									<div className="logoWrapper">
										{/* Add logo image with link to home */}
									</div>
								</div>
							</div>
							<div className="listItem">
								<div className="serverSeperator"></div>
							</div>
							<div className="listItem">
								<div className="pill-2 pillWrapper">
									<span className="item-2b"></span>
								</div>
								<div className="iconContainer" draggable="true">
									<div className="iconWrapper">
										<ul className="userServers">
											{userServers}
										</ul>
									</div>
								</div>
							</div>

							<div className="listItem addServer">
								<div>+</div>
							</div>
							<button className="logoutButton" type="submit" onClick={this.handleLogout}>Logout</button>
						</div>
					</div>
				
					<ServerShowContainer/>
				</>
			// </div>




			// <div id="app-mount" className="appMount">
			// 	{/* Side server scroll bar */}
				
			// 		<div className="scrollWrap scrollTheme">
			// 			<div className="scroll serverPad scroll2">
			// 				<div className="listItem">
			// 					<div className="pill-1 pillWrapper">
			// 						<span className="item-2"></span>
			// 					</div>
			// 					<div className="listItemWrapper">
			// 						<div className="logoWrapper">
			// 							{/* Add logo image with link to home */}
			// 						</div>
			// 					</div>
			// 				</div>
			// 				<div className="listItem">
			// 					<div className="serverSeperator"></div>
			// 				</div>
			// 				<div className="listItem">
			// 					<div className="pill-2 pillWrapper">
			// 						<span className="item-2b"></span>
			// 					</div>
			// 					<div className="iconContainer" draggable="true">
			// 						<div className="iconWrapper">
			// 							<ul className="userServers">
			// 								{userServers}
			// 							</ul>
			// 						</div>
			// 					</div>
			// 				</div>
			// 				<div className="listItem addServer">
			// 					<div>+</div>
			// 				</div>
			// 				<button className="logoutButton" type="submit" onClick={this.handleLogout}>Logout</button>
			// 			</div>
			// 			<ServerShowContainer />
			// 		</div>		
			// </div>
		)
	}
}

export default withRouter(ServerIndex);
				{/* Base container  */}
				{/* <div className="base">
					<div className="content-1">
						<div className="sidebar">
							<div className="serverChannels">
								<div className="searchBar">
									<button type="button" className="searchButton">Find or start a conversation</button>
								</div>
								<div className="scrollWrap scrollTheme">

								</div>
							</div>
						</div>

						<div className="mainContent">
							<div className="chatRoom">
								<ChatRoomContainer />
							</div>
						</div>
					</div>
				</div>
			</div> */}