const LoggedInMenu = (props, logoutAction) => ({
	title: props.user.name,
	link: "/",
	subItems: [
		{ title: "My Account", link: "/my-account" },
		{
			title: "Logout",
			link: "",
			onClick: logoutAction
		}
	]
})
export default LoggedInMenu
