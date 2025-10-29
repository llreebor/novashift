import { ROUTES } from "./routes.config"

export type SubmenuItem = {
	label: string
	href: string
}
export type MenuItem = {
	label: string
	href: string
	submenu?: SubmenuItem[]
}

export const SERVICES_SUBMENU_ITEMS: SubmenuItem[] = [
	{
		label: "AI Strategy & Consulting",
		href: ROUTES.AI_STRATEGY,
	},
	{
		label: "Dedicated Development Team",
		href: ROUTES.TEAM,
	},
	{
		label: "Workflow Automations",
		href: ROUTES.AUTOMATION,
	},
]

export const MENU_LINKS: MenuItem[] = [
	{
		label: "Home",
		href: ROUTES.HOME,
	},
	{
		label: "Services",
		href: "#",
		submenu: SERVICES_SUBMENU_ITEMS,
	},
	{
		label: "Case Studies",
		href: ROUTES.CASES,
	},
	{
		label: "AI",
		href: ROUTES.AI,
	},
	{
		label: "About Us",
		href: ROUTES.ABOUT_US,
	},
	{
		label: "Contact Us",
		href: ROUTES.CONTACT_US,
	},
]

export const FOOTER_COMPANY_MENU_LINKS: MenuItem[] = [
	{
		label: "About Us",
		href: ROUTES.ABOUT_US,
	},
	{
		label: "Case Studies",
		href: ROUTES.CASES,
	},
	{
		label: "Contact Us",
		href: ROUTES.CONTACT_US,
	},
]
