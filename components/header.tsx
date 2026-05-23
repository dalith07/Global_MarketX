import { Car, Handshake, House, Menu, MessagesSquare, ShoppingCart, X } from "lucide-react";
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import clsx from "clsx";
import { useState } from "react";

const header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <header
            className={clsx(
                "fixed w-full z-40 pb-safe transition-all duration-300 border-b backdrop-blur-md",
                isScrolled
                    ? "bg-white/5 dark:bg-black/70 border-black/5 dark:border-white/10"
                    : "bg-white dark:bg-black/30 border-black/5 dark:border-white/10"
            )}
        >
            <nav className="container mx-auto sm:px-2 px-4 py-3 flex items-center justify-between">
                {/* Logo or Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-foreground dark:text-white hover:cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                <div className="hidden md:block">
                    <Link href={"/"} className="text-foreground dark:text-white text-sm md:text-[1rem] font-bold">
                        Global MarketX
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className={clsx(
                                "inline-flex text-sm items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3",
                                pathname === "/" ? "text-blue-500" : "hover:text-blue-500 duration-500"
                            )}
                        >
                            <House className="me-1" size={20} />
                            {t("navbarHome")}
                        </Link>

                        <Link
                            href="/hotels"
                            className={clsx(
                                "inline-flex text-sm items-center justify-center whitespace-nowrap font-medium transition-colors h-8 rounded-md px-3",
                                pathname === "/Hotels"
                                    ? "text-fuchsia-500"
                                    : "hover:text-fuchsia-500 duration-500"
                            )}
                        >
                            <MdOutlineBedroomParent className="me-1" size={20} />
                            {t("navbarHotels")}
                        </Link>

                        <Link
                            href="/service"
                            className={clsx(
                                "inline-flex text-sm items-center justify-center whitespace-nowrap font-medium transition-colors h-8 rounded-md px-3",
                                pathname === "/service"
                                    ? "text-green-500"
                                    : "hover:text-green-500 duration-500"
                            )}
                        >
                            <Handshake className="me-1" size={20} />
                            {t("navbarService")}
                        </Link>
                        <div className="h-8 w-px bg-border dark:bg-zinc-200 hidden sm:block"></div>

                        <Link
                            href="/booking"
                            className={clsx(
                                "inline-flex text-sm items-center justify-center whitespace-nowrap font-medium transition-colors h-8 rounded-md px-3 relative",
                                pathname === "/booking"
                                    ? "text-yellow-500"
                                    : "hover:text-yellow-500 duration-500"
                            )}
                        >
                            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {orderCount ? orderCount : 0}
                            </span>

                            <MdOutlineBedroomParent className="me-1" size={20} />
                            {t("navbarBooking")}
                        </Link>

                    </div>
                </div>

                {/* BUTTONS RIGHT */}
                <div className="hidden md:flex items-center gap-4">
                    {/* BUTTON CART  */}
                    <Link href="/cart" >
                        <button className="flex items-center justify-center relative text-primary w-11 h-11 rounded-full border hover:cursor-pointer border-blue-500/20 bg-blue-500/20 duration-500 hover:bg-blue-500/10">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-1 bg-primary text-white rounded-full text-[14px] w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </Link>

                    {/* BUTTON NOTIFICATION*/}
                    {/* {user?.role === "USER" &&
                        <div className="relative">
                            <button
                                onClick={() => setOpenNotifications((prev) => !prev)}
                                className="flex items-center justify-center relative hover:cursor-pointer w-11 h-11 rounded-full border text-primary border-blue-500/20 bg-blue-500/20 duration-500 hover:bg-blue-500/10"
                            >
                                <Bell size={22} />
                            </button>

                            <span className="absolute animate-pulse -top-2 -right-1 bg-primary text-white rounded-full text-[14px] w-5 h-5 flex items-center justify-center">
                                {notificationsCount}
                            </span>

                            {openNotifications && <NotificationsCard />}
                        </div>
                    } */}

                    {/* BUTTON CHAT COMPANYUSER WITH ADMIN */}
                    {/* {user?.role === "HOTEL_OWNER" &&
                        <button
                            onClick={() => setOpenChat(true)}
                            className="flex items-center justify-center relative text-primary w-11 h-11 rounded-full border hover:cursor-pointer border-yellow-500/20 bg-yellow-500/20 duration-500 hover:bg-yellow-500/10">
                            <MessagesSquare size={22} />
                            <span className="absolute -top-2 -right-1 bg-yellow-500 text-white rounded-full text-[13px] w-5 h-5 flex items-center justify-center">
                                {/* {totalItems > 0 ? <>{totalItems}</> : <>0</>} */}0
                </span>
            </button>
                    } */}

            {/* ===== CHAT DIALOG ===== */}
            {/* <Dialog open={openChat} onOpenChange={setOpenChat}>
                        <DialogContent
                            className="max-w-6xl h-[90vh] p-0 flex flex-col border border-white/20 rounded-lg"
                        >
                          

                            <UserChatPage />
                        </DialogContent>
                    </Dialog> */}

            {/* BUTTON LANGUAGE SWITCH */}
            {/* <LanguageSwitcher /> */}

            {/* BUTTON LIGHT & DAR MODE  */}
            {/* <ThemeButton /> */}

            {/* BUTTON USER  */}
            {/* <AuthToggle /> */}
        </div>

                {/* Mobile Top Bar */ }
    <div className="flex md:hidden items-center gap-3 justify-end">
        <Link href="/cart" >
            <button className="relative text-blue-500 p-3 rounded-full border hover:cursor-pointer border-blue-500/20 bg-blue-500/20 duration-500 hover:bg-blue-500/10">
                <ShoppingCart size={18} />
                <span className="absolute -top-2 -right-1 bg-blue-500 text-white rounded-full text-[14px] w-6 h-6 flex items-center justify-center">
                    0
                </span>
            </button>
        </Link>

        {/* {user?.role === "USER" &&
                        <div className="relative">
                            <button
                                onClick={() => setOpenNotifications((prev) => !prev)}
                                className="relative hover:cursor-pointer p-3 rounded-full border text-primary border-blue-500/20 bg-blue-500/20 duration-500 hover:bg-blue-500/10"
                            >
                                <Bell size={18} />
                            </button>

                            <span className="absolute -top-2 -right-1 bg-primary text-white rounded-full text-[14px] w-6 h-6 flex items-center justify-center">
                                {notificationsCount}
                            </span>

                            {openNotifications && <NotificationsCard />}
                        </div>
                    } */}

        {/* {user?.role === "HOTEL_OWNER" &&
                        <Link href="/chat" >
                            <button
                                onClick={() => setOpenChat(true)}
                                className="relative text-primary p-3 rounded-full border hover:cursor-pointer border-yellow-500/20 bg-yellow-500/20 duration-500 hover:bg-yellow-500/10">
                                <MessagesSquare size={18} />
                                <span className="absolute -top-2 -right-1 bg-yellow-500 text-white rounded-full text-[14px] w-6 h-6 flex items-center justify-center">
                                    0
                                </span>
                            </button>
                        </Link>
                    } */}

        {/* <LanguageSwitcher /> */}

        {/* <ThemeButton /> */}

        {/* <AuthToggle /> */}
    </div>
            </nav >

    { isMenuOpen && (
        <div
            ref={menuRef}
            className="md:hidden text-foreground dark:text-accent-foreground
                border-t backdrop-blur-md p-4 flex flex-col gap-4 dark:bg-black/10
                border-black/5 dark:border-white/10 z-999">

            <Link
                href="/"
                className={clsx(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs",
                    pathname === "/" ? "text-blue-500" : "hover:text-blue-500 duration-500"
                )}
            >
                <House className="m-1 w-5 h-5" />
                {t("navbarHome")}
            </Link>

            <Link
                href="/hotels"
                className={clsx(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs",
                    pathname === "/hotels" ? "text-fuchsia-500" : "hover:text-fuchsia-500"
                )}
            >
                <Car className="m-1 w-5 h-5" />
                {t("navbarHotels")}
            </Link>

            <Link
                href="/service"
                className={clsx(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs",
                    pathname === "/service" ? "text-green-500" : "hover:text-green-500"
                )}
            >
                <Handshake className="m-1 w-5 h-5" />
                {t("navbarService")}
            </Link>

            <div className="h-px w-full dark:bg-slate-200/20 bg-gray-200" />

            <Link
                href="/booking"
                className={clsx(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-8 rounded-md px-3 text-xs relative",
                    pathname === "/booking" ? "text-yellow-500" : "hover:text-yellow-500"
                )}
            >
                <span className="absolute -top-1 right-1/4 bg-yellow-500 text-white rounded-full text-xs w-5 h-4 flex items-center justify-center">
                    {orderCount ? orderCount : 0}
                </span>
                <ShoppingCart className="m-1 w-5 h-5" />
                navbarBooking
            </Link>


            <div className="flex sm:flex-row flex-col sm:justify-center items-center gap-3">
                <div className="text-sm font-medium text-accent-foreground">
                    Language :
                </div>

                <div className="flex items-center bg-slate-800/60 border border-white/10 rounded-xl p-1">
                    {langs.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={clsx(
                                "px-4 py-2 text-sm rounded-lg transition-all duration-300",
                                language === lang.code
                                    ? "bg-slate-700 text-white shadow"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* <div className="flex sm:flex-row flex-col sm:justify-center items-center gap-3"> */}
            <div className="flex items-center justify-center gap-3 m-3">
                <div className="text-sm font-medium">Social Media:</div>
                <div className="flex gap-4">
                    <Link
                        href="https://www.linkedin.com/in/mohamed-ali-theiri-274540311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <FaLinkedin size={24} />
                    </Link>
                    <Link
                        href="https://www.upwork.com/freelancers/~01e8d2f1bf7276b7cd?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800"
                    >
                        <FaSquareUpwork size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
            }
        </header >
    )
}

export default header
