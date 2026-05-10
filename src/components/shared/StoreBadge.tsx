import Link from "next/link";
import { BadgeProps } from "@/types/FallBack/badge";
import { GooglePlayIcon } from "@/components/shared/icons/GooglePlayIcon";
import { AppStoreIcon } from "@/components/shared/icons/AppStoreIcon";

export const StoreBadge = ({ href, store, variant }: BadgeProps) => {
  const isMobile = variant === "mobile";

  const containerClasses = isMobile
    ? "flex h-[42px] w-[130px] items-center justify-center gap-1.5 rounded-lg bg-black text-white transition-opacity hover:opacity-80"
    : "flex h-[54px] items-center gap-2.5 rounded-xl border border-white bg-black px-4 text-white transition-opacity hover:opacity-80";

  const iconClasses = isMobile
    ? store === "google"
      ? "h-[20px] w-[20px]"
      : "mb-[2px] h-[22px] w-[22px]"
    : store === "google"
      ? "h-[26px] w-[26px]"
      : "h-8 w-8";

  const subtitleClasses = isMobile
    ? "text-[8px] font-medium uppercase leading-none text-white"
    : "text-[11px] uppercase leading-[1.1] text-gray-300";

  const titleClasses = isMobile
    ? "font-sans text-[14px] font-medium leading-tight text-white"
    : "text-[17px] font-semibold leading-[1.1]";

  const subtitleText =
    store === "google" ? (isMobile ? "GET IT ON" : "Get it on") : "Laden im";
  const titleText = store === "google" ? "Google Play" : "App Store";

  return (
    <Link href={href} className={containerClasses}>
      {store === "google" ? (
        <GooglePlayIcon className={iconClasses} />
      ) : (
        <AppStoreIcon className={iconClasses} />
      )}
      <div
        className={`flex flex-col text-left ${isMobile ? "items-start justify-center" : ""}`}
      >
        <span className={subtitleClasses}>{subtitleText}</span>
        <span className={titleClasses}>{titleText}</span>
      </div>
    </Link>
  );
};
