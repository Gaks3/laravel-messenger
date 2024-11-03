import BadgeNotification from "@/Components/Chats/BadgeNotification";
import Dropdown from "@/Components/Dropdown";
import { useAppContext } from "@/Contexts/app.context";
import { useModalContext } from "@/Contexts/modal.context";
import { Link } from "@inertiajs/react";
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
  const { auth } = useAppContext();
  const { openModal } = useModalContext();

  const openPreferences = () => {
    openModal({ view: "PREFERENCES", size: "lg" });
  };

  return (
    <div
      className={clsx(
        "order-2 mt-auto flex-row justify-between bg-background sm:order-1 sm:mt-0 sm:flex-col sm:items-center sm:justify-center sm:p-2",
        route().current("chats.show") ? "hidden" : "flex",
      )}
    >
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

      <div className="flex flex-1 cursor-pointer items-center justify-center rounded-lg px-3 transition-all hover:bg-secondary sm:mt-auto sm:flex-initial sm:bg-transparent sm:px-0">
        <Dropdown>
          <Dropdown.Trigger>
            <img
              src={auth.avatar}
              alt="Profile Image"
              className="size-8 rounded-full border border-secondary sm:size-10"
            />
          </Dropdown.Trigger>
          <Dropdown.Content align="top-left" contentClasses="mb-12 sm:mb-10">
            <Dropdown.Button onClick={openPreferences}>
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
