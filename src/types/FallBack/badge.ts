export type StoreType = "apple" | "google";
export type BadgeVariant = "mobile" | "desktop";

export type BadgeProps = {
  href: string;
  store: StoreType;
  variant: BadgeVariant;
};
