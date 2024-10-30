import BadgeNotification from "@/Components/Chats/BadgeNotification";
import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import {
  BsArchive,
  BsBoxArrowRight,
  BsChat,
  BsGear,
  BsPeople,
  BsPersonCircle,
} from "react-icons/bs";

export default function SidebarMini() {
  const { avatar } = usePage().props.auth;

  return (
    <div className="flex flex-row justify-between order-2 mt-auto bg-background sm:order-1 sm:mt-0 sm:flex-col sm:items-center sm:justify-center sm:p-2">
      <Link
        href={route("chats.index")}
        className={clsx(
          "relative flex flex-1 items-center justify-center rounded-lg p-3 transition-all hover:bg-secondary sm:flex-initial",
          route().current("chats.*") && "bg-secondary",
        )}
      >
        <BsChat className="size-6" />
        <BadgeNotification />
      </Link>
      <Link
        href={route("contacts.index")}
        className={clsx(
          "flex flex-1 items-center justify-center rounded-lg p-3 transition-all hover:bg-secondary sm:flex-initial",
          route().current("contacts.*") && "bg-secondary",
        )}
      >
        <BsPeople className="size-6" />
      </Link>
      <Link
        href={route("archived_chats.index")}
        className={clsx(
          "flex flex-1 items-center justify-center rounded-lg p-3 transition-all hover:bg-secondary sm:flex-initial",
          route().current("archived_chats.*") && "bg-secondary",
        )}
      >
        <BsArchive className="size-6" />
      </Link>

      <div className="flex items-center justify-center flex-1 px-3 transition-all rounded-lg cursor-pointer hover:bg-secondary sm:mt-auto sm:flex-initial sm:bg-transparent sm:px-0">
        <Dropdown>
          <Dropdown.Trigger>
            <img
              src={avatar ?? "/images/avatar.png"}
              alt="Profile Image"
              className="border rounded-full size-8 border-secondary sm:size-10"
            />
          </Dropdown.Trigger>
          <Dropdown.Content align="top-left" contentClasses="mb-12 sm:mb-10">
            <Dropdown.Button>
              <div className="flex items-center gap-2">
                <BsGear />
                References
              </div>
            </Dropdown.Button>
            <Dropdown.Link href={route("profile.edit")}>
              <div className="flex items-center gap-2">
                <BsPersonCircle />
                Profile
              </div>
            </Dropdown.Link>
            <Dropdown.Link href={route("logout")} method="post" as="button">
              <div className="flex items-center gap-2">
                <BsBoxArrowRight />
                Log out
              </div>
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
}
